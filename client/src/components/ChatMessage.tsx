import React from 'react';

interface ChatMessageProps {
  type: 'user' | 'bot';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content }) => {
  const isBot = type === 'bot';
  
  return (
    <div className={`mb-4 ${isBot ? 'mr-12' : 'ml-12'}`}>
      <div className={`p-3 rounded-lg ${
        isBot ? 'bg-gray-100' : 'bg-blue-500 text-white'
      }`}>
        <p className="text-sm whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;