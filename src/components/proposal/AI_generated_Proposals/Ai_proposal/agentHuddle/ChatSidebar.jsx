import React, { useState } from 'react';
import AssistantIcon from '../../../../../assets/icons/AssistantIcon';
import BotAvatarIcon from '../../../../../assets/icons/BotAvatarIcon';
import { chatMessages as defaultMessages } from './chatMessagesMockData'
import { User,Send } from 'lucide-react';

const ChatSidebar = () => {
  const [messages] = useState(defaultMessages);

  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('Send message:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="w-[491px] h-full flex flex-col border-l border-[#D9D9D9] bg-[#F0EDED]">
      {/* Header with gradient background */}
      <div 
        className="flex items-center gap-[10px] px-[20px] h-[77px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]"
        style={{
          background: 'linear-gradient(82.57deg, rgba(0,255,225,1) 3.76%, rgba(13,84,255,1) 44.08%, rgba(149,36,198,1) 110.73%)'
        }}
      >
        <div className="flex-shrink-0">
          <AssistantIcon width={35} height={32} color='#FFFFFF' />
        </div>
        <h2 className="text-[#FFFFFF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
          Proposal Builder Assistant
        </h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-[26px] pt-[28px] pb-[28px]">
        <div className="flex flex-col gap-[28px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex gap-[8px] items-start"
            >
              {/* Bot message - avatar on left with white background */}
              {message.type === 'bot' && (
                <>
                  <div className="flex-shrink-0 w-[18px] h-[16px] mt-[4px]">
                    <BotAvatarIcon width={18} height={16} color='#000000' />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#000000] font-['Inter',sans-serif] text-[20px] font-normal leading-[26px]">
                      {message.text}
                    </p>
                  </div>
                </>
              )}

              {/* User message - avatar on right with white background */}
              {message.type === 'user' && (
                <>
                  <div className="flex-shrink-0 w-[14px] h-[14px] mt-[4px]">
                    <User width={14} height={14} color='#000000' />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#000000] font-['Inter',sans-serif] text-[20px] font-normal leading-[26px]">
                      {message.text}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Input Area at bottom */}
      <div className="h-[89px] px-[28px] flex items-center bg-[#F9F9F9] border-t border-[#E5E5E5]">
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
            <Send width={24} height={24} color="#000000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
