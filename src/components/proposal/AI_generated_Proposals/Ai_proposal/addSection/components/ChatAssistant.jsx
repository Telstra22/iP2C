import React, { useState } from 'react';
import AssistantIcon from '../../../../../../assets/icons/AssistantIcon';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';

const ChatAssistant = ({ messages = [] }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('Send message:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="w-[491px] h-screen shrink-0 flex flex-col border-l border-[#D9D9D9] bg-[#F0EDED] overflow-hidden">
      {/* Header with gradient background */}
      <div className="flex items-center gap-[10px] px-[20px] h-[77px] border-b border-[#DDDDDD] shadow-assistant-header gradient-ai-assistant">
        <div className="flex-shrink-0">
          <AssistantIcon width={35} height={32} color="#FFFFFF" />
        </div>
        <h2 className="text-[#FFFFFF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
          Proposal Builder Assistant
        </h2>
      </div>

      {/* Messages Area - Scrollable like WhatsApp/Instagram */}
      <div className="flex-1 overflow-y-auto px-[26px] pt-[28px] pb-[28px] min-h-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col gap-[28px]">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              type={message.type}
              message={message.message}
            />
          ))}
        </div>
      </div>

      {/* Input Area at bottom */}
      <div className="h-[89px] px-[28px] flex items-center bg-[#F9F9F9] border-t border-[#E5E5E5] shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me Anything"
            className="flex-1 bg-transparent outline-none text-[#737373] font-['Graphik',sans-serif] text-[20px] font-normal leading-[18px] placeholder:text-[#737373]"
          />
          <button
            onClick={handleSend}
            className="flex-shrink-0 p-0"
            aria-label="Send message"
          >
            <Send width={24} height={24} color="#050505" fill="#050505" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;