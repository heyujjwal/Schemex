import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatSuggestions from './ChatSuggestions';
import { getBotResponse, getSuggestions } from '../utils/chatbotData';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: "Hello! I'm here to help you find the right scheme. Type 'help' to see what you can ask about." }
  ]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (message: string) => {
    if (!message.trim()) return;

    const userMessage = { type: 'user' as const, content: message };
    const botMessage = { type: 'bot' as const, content: getBotResponse(message) };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
    setSuggestions([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setSuggestions(value ? getSuggestions(value) : []);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend(input);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl w-80">
      <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
      <Bot className="h-5 w-5" />
        <h3 className="font-semibold">Schemex - Scheme Assistant</h3>
        <button onClick={() => setIsOpen(false)}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-96 overflow-y-auto px-4 py-2">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            type={message.type}
            content={message.content}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatSuggestions
        suggestions={suggestions}
        onSelect={(suggestion) => handleSend(suggestion)}
      />

      <div className="p-4 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your question..."
          className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={() => handleSend(input)}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;