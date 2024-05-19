import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);
  const [authData, setAuthData] = useState({
    user: null,
    accessToken: null,
    refreshToken: null,
  });
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  // Load authData from localStorage on mount
  useEffect(() => {
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      setAuthData(JSON.parse(storedAuthData));
    }
  }, []);

  // Update localStorage when authData changes
  useEffect(() => {
    localStorage.setItem("authData", JSON.stringify(authData));
  }, [authData]);

  const updateAuthData = (newAuthData) => {
    setAuthData(newAuthData);
  };

  const selectChat = (chat) => {
    setSelectedChat(chat);
  };

  const addOrUpdateChat = useCallback((newChat) => {
    setChats((prevChats) => {
      const existingChatIndex = prevChats.findIndex(chat => chat._id === newChat._id);
      if (existingChatIndex !== -1) {
        setSelectedChat(prevChats[existingChatIndex]);
        return prevChats;
      } else {
        setSelectedChat(newChat);
        return [newChat, ...prevChats];
      }
    });
  }, []);

  return (
    <ChatContext.Provider value={{
      selectedChat,
      setSelectedChat,
      authData,
      setAuthData,
      notification,
      setNotification,
      chats,
      setChats,
      addOrUpdateChat,
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatState = () => useContext(ChatContext);

export default ChatProvider;
