// Chatbot.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';
const fetchResponseFromAPI = async (trans) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/IA`,
        { text: trans }
      );
      return res.data.answer;
    } catch (error) {
      console.error("Error fetching data from the OpenAI API:", error);
      return "Une erreur s'est produite lors de la récupération de la réponse.";
    }
  };
const Chatbot = () => {
    const [userMessage, setUserMessage] = useState('');
    const [botResponses, setBotResponses] = useState([]);
    const [currentOptions, setCurrentOptions] = useState([]);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [suggestedQuestions, setSuggestedQuestions] = useState([]);
    const allQuestions = [
        "Qu'est-ce que Tunisair ?",
        "Comment prendre une consultation ?",
        "Comment voir les services des freelancers ?",
        "Comment collaborer sur des projets ?",
        "Comment fonctionne le paiement sur la plateforme ?",
        "Comment contacter le support ?",
        "Comment devenir freelancer ?",
        "Comment fonctionne la notation des freelancers ?",
        "Je veux trouver un projet",
        "Je veux écrire un blog",
        "Je veux faire une consultation",
        "Je veux faire une "
    ];

    useEffect(() => {
        fetchInitialMessage();
    }, []);

    const fetchInitialMessage = async () => {
        try {
            const response = await axios.get('https://colabhub.onrender.com/api/chatbot/initial');
            setBotResponses([{ type: 'bot', content: response.data.response }]);
            setCurrentOptions(response.data.options ?? []);
        } catch (error) {
            console.error('Error fetching initial message:', error);
        }
    };

    const sendMessage = async () => {
        if (userMessage.trim() !== '') {
            try {
                const response = await fetchResponseFromAPI("Donc, je t'explique : vous êtes un assistant vocal pour Tunisair. Réponds-moi sans utiliser (*). Voici les dialogues précédents (si c'est vide, ignore) : "+userMessage);
                setBotResponses(prevResponses => [
                    ...prevResponses,
                    { type: 'user', content: userMessage }
                ]);
                setBotResponses(prevResponses => [
                    ...prevResponses,
                    { type: 'bot', content: response.data.response }
                ]);
                setUserMessage('');
                setSuggestedQuestions([]);
                if (response.data.options) {
                    setCurrentOptions(response.data.options);
                } else {
                    setCurrentOptions([]);
                }

                // Check for specific messages and apply redirection
                if (response.data.response.includes("je vais vous diriger vers la page consultation")) {
                    // Delayed redirection after 3 seconds
                    setTimeout(() => {
                        window.location.href = '/do-a-quick-consultation';
                    }, 6000);
                } else if (response.data.response.includes("je vais vous diriger vers la page blog")) {
                    // Delayed redirection after 3 seconds
                    setTimeout(() => {
                        window.location.href = '/blog';
                    }, 6000);
                } else if (response.data.response.includes("je vais vous diriger vers la page collaboration")) {
                    // Delayed redirection after 3 seconds
                    setTimeout(() => {
                        window.location.href = '/collaboration';
                    }, 6000);
                } else if (response.data.response.includes("je vais vous diriger vers la page service")) {
                    // Delayed redirection after 3 seconds
                    setTimeout(() => {
                        window.location.href = '/buyProject';
                    }, 6000);
                }
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    const handleOptionSelect = (option) => {
        sendMessage(option);
    };

    const toggleChatbot = () => {
        setIsChatbotOpen(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    const searchQuestions = (text) => {
        if (text.trim() === '') {
            setSuggestedQuestions([]);
        } else {
            const keywords = text.trim().toLowerCase().split(" ");
            const matchedQuestions = allQuestions.filter(question =>
                keywords.some(keyword =>
                    question.toLowerCase().includes(keyword)
                )
            );
            setSuggestedQuestions(matchedQuestions);
        }
    };

    return (
        <div className="chatbot-container">
            {!isChatbotOpen && (
                <button className="chatbot-button" onClick={toggleChatbot}>
                    <img src="/tunisiar.png" alt="Bot Icon" />
                </button>
            )}
            {isChatbotOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="avatar">
                            <img src="/img/chatbot.png" alt="Bot Avatar" />
                        </div>
                        <div className="bot-info">
                            <div className="bot-name">Collabhub Bot</div>
                            <div className="bot-status">Online</div>
                        </div>
                        <button className="close-button" onClick={() => setIsChatbotOpen(false)}>X</button>
                    </div>
                    <div className="chat-messages">
                        {botResponses.slice().reverse().map((message, index) => (
                            <div key={index} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
                                {message.type === 'bot' && (
                                    <div className="avatar">
                                        <img src="/img/chatbot.png" alt="Bot Avatar" />
                                    </div>
                                )}
                                <div className="message-content">
                                    {message.type === 'user' ? 'You: ' : ''}
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => {
                                setUserMessage(e.target.value);
                                searchQuestions(e.target.value);
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                    <div className="suggested-questions">
                        {suggestedQuestions.map((question, index) => (
                            <div key={index} className="suggested-question" onClick={() => setUserMessage(question)}>
                                <span className="suggested-question-text">{question}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
