import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    // Initialize with some example messages or an empty array
  ]);

  const messagesRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages div when component mounts
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col justify-between flex-1 h-screen p-2 sm:p-6">
      <div className="flex justify-between py-3 border-b-2 border-gray-200 sm:items-center">
        {/* ... (profile information) ... */}
      </div>
      <div id="messages" ref={messagesRef} className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender === 'user' ? 'items-end justify-end' : 'items-start'}`}>
            <div className={`flex ${message.sender === 'user' ? 'flex-col order-1 items-end' : 'flex-col order-2 items-start'}`}>
              <div>
                <span className={`px-4 py-2 rounded-lg inline-block ${message.sender === 'user' ? 'rounded-br-none bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  {message.text}
                </span>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="order-1 w-6 h-6 rounded-full" />
          </div>
        ))}
      </div>
      <div className="px-4 pt-4 mb-2 border-t-2 border-gray-200 sm:mb-0">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Write your message!"
            value={inputMessage}
            onChange={handleInputChange}
            className="w-full py-3 pl-12 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400"
          />
          <div className="absolute inset-y-0 right-0 items-center hidden sm:flex">
            {/* ... (additional buttons) ... */}
            <button type="button" onClick={handleSendMessage} className="inline-flex items-center justify-center px-4 py-3 text-white transition duration-500 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none">
              <span className="font-bold">Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;