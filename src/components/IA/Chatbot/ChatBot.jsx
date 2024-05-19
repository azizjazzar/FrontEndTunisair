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
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [suggestedQuestions, setSuggestedQuestions] = useState([]);
    const [permatranscript, setPermatranscript] = useState("");
    const [error, setError] = useState(null);

    const allQuestions = [
        "Qu'est-ce que Tunisair ?",
        "Comment réserver un vol avec Tunisair ?",
        // Autres questions...
        "Comment puis-je obtenir un certificat de vol ?"
    ];

    useEffect(() => {
        fetchInitialMessage();
    }, []);

    const fetchInitialMessage = async () => {
        try {
            const response = await axios.get('https://colabhub.onrender.com/api/chatbot/initial');
            setBotResponses([{ type: 'bot', content: response.data.response }]);
        } catch (error) {
            console.error('Error fetching initial message:', error);
        }
    };
    const handleGenerateText = async (text) => {
        try {
            const requestBody = {
                contents: [
                    {
                        parts: [{ text: text }],
                    },
                ],
                generationConfig: {
                    temperature: 1,
                    topK: 0,
                    topP: 0.95,
                    maxOutputTokens: 8192,
                    stopSequences: [],
                },
                safetySettings: [
                    {
                        category: 'HARM_CATEGORY_HARASSMENT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                    },
                    {
                        category: 'HARM_CATEGORY_HATE_SPEECH',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                    },
                    {
                        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                    },
                    {
                        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                    },
                ],
            };

            const response = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=AIzaSyDgvnVb9fKln74JtqCgfkCvouLYlYK4gEc',
                requestBody
            );

            if (response.status === 200) {
                const generatedText = response.data.candidates[0].content.parts[0].text;
                return generatedText;
            } else {
                setError('An error occurred during the request to Google Gemini');
            }
        } catch (error) {
            setError('An error occurred during the request to Google Gemini');
            console.error('Error during request to Google Gemini:', error);
        }
    };

    const sendMessage = async () => {
        if (userMessage.trim() !== '') {
            try {
                const response = await handleGenerateText(
                    "Donc, je t'explique : vous êtes un assistant vocal pour Tunisair. Réponds-moi sans utiliser (*). Voici les dialogues précédents (si c'est vide, ignore) : " +
                    permatranscript + ". Voici le dialogue actuel : " + userMessage
                );
                setPermatranscript(permatranscript + " " + userMessage);
                setBotResponses(prevResponses => [
                    ...prevResponses,
                    { type: 'user', content: userMessage }
                ]);
                setBotResponses(prevResponses => [
                    ...prevResponses,
                    { type: 'bot', content: response }
                ]);
                setUserMessage('');
                setSuggestedQuestions([]);

                // Check for specific messages and apply redirection
                if (response.includes("je vais vous diriger vers la page consultation")) {
                    // Delayed redirection after 6 seconds
                    setTimeout(() => {
                        window.location.href = '/do-a-quick-consultation';
                    }, 6000);
                } else if (response.includes("je vais vous diriger vers la page blog")) {
                    // Delayed redirection after 6 seconds
                    setTimeout(() => {
                        window.location.href = '/blog';
                    }, 6000);
                } else if (response.includes("je vais vous diriger vers la page collaboration")) {
                    // Delayed redirection after 6 seconds
                    setTimeout(() => {
                        window.location.href = '/collaboration';
                    }, 6000);
                } else if (response.includes("je vais vous diriger vers la page service")) {
                    // Delayed redirection after 6 seconds
                    setTimeout(() => {
                        window.location.href = '/buyProject';
                    }, 6000);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
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
        <div>
            {!isChatbotOpen ? (
                <button onClick={toggleChatbot}>
                    <img className="chatbot-button" src="/img/chatbot.png" alt="Bot Icon" />
                </button>
            ) : (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="avatar">
                            <img className="bg-white" src="https://th.bing.com/th/id/R.2063815249cc5fd9c8de1ca8c88938c0?rik=YnKWCQ%2bRY%2bRJIw&pid=ImgRaw&r=0" alt="Bot Avatar" />
                        </div>
                        <div className="bot-info">
                            <div className="bot-name">Tunisair Bot</div>
                            <div className="bot-status">Online</div>
                        </div>
                        <button className="close-button" onClick={toggleChatbot}>X</button>
                    </div>
                    <div className="chat-messages">
                        {botResponses.slice().reverse().map((message, index) => (
                            <div key={index} className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}>
                                {message.type === 'bot' && (
                                    <div className="avatar">
                                        <img className="bg-white" src="https://th.bing.com/th/id/R.2063815249cc5fd9c8de1ca8c88938c0?rik=YnKWCQ%2bRY%2bRJIw&pid=ImgRaw&r=0" alt="Bot Avatar" />
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
