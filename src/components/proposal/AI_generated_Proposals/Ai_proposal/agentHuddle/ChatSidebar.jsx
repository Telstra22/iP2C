import React, { useEffect, useRef, useState } from 'react';
import AssistantIcon from '../../../../../assets/icons/AssistantIcon';
import BotAvatarIcon from '../../../../../assets/icons/BotAvatarIcon';
import { chatMessages as defaultMessages } from './chatMessagesMockData'
import { User,Send } from 'lucide-react';

const ChatSidebar = () => {
  const [messages] = useState(defaultMessages);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const endRef = useRef(null);

  const [inputValue, setInputValue] = useState('');

  // Sequence: start empty, push a temporary typing message into the list, then replace with real message
  useEffect(() => {
    let cancelled = false;
    const timers = [];
    setVisibleMessages([]);
    const step = (i) => {
      if (cancelled || i >= messages.length) return;
      const m = messages[i];
      const typingId = `typing-${i}`;
      const typingType = m.type === 'user' ? 'typing-user' : 'typing-bot';
      // insert typing placeholder
      setVisibleMessages(prev => [...prev, { id: typingId, type: typingType }]);
      // typing duration per message
      timers.push(setTimeout(() => {
        if (cancelled) return;
        // replace typing with actual message
        setVisibleMessages(prev => prev.filter(x => x.id !== typingId).concat(m));
        // short pause before next typing starts
        timers.push(setTimeout(() => step(i + 1), 500));
      }, 1000));
    };
    if (messages.length) step(0);
    return () => { cancelled = true; timers.forEach(t => clearTimeout(t)); };
  }, [messages]);

  // Auto-scroll to latest
  useEffect(() => {
    try { endRef.current?.scrollIntoView({ behavior: 'smooth' }); } catch {}
  }, [visibleMessages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('Send message:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="w-[491px] h-[750px] shrink-0 flex flex-col border-l border-[#D9D9D9] bg-[#F0EDED] overflow-hidden">
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

      {/* Messages Area - Scrollable like WhatsApp/Instagram */}
      <div className="flex-1 overflow-y-auto px-[26px] pt-[28px] pb-[28px] min-h-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col gap-[28px]">
          {visibleMessages.map((message) => (
            <div
              key={message.id}
              className="flex gap-[8px] items-start"
            >
              {/* Bot message - avatar on left with gradient circular background */}
              {message.type === 'bot' && (
                <>
                  <div 
                    className={`${message.text ? '' : 'animate-pulse'} flex-shrink-0 w-[30.6px] h-[30.6px] rounded-[18.45px] flex items-center justify-center mt-[4px] p-[8.1px]`}
                    style={{
                      background: 'linear-gradient(102deg, #00FFE1 -1.03%, #0D54FF 36.82%, #9524C6 100.49%)'
                    }}
                  >
                    <BotAvatarIcon width={19.8} height={19.8} color='#FFFFFF' />
                  </div>
                  <div className={`${message.text ? '' : 'animate-pulse'} flex-1 bg-white rounded-[12px] px-[16px] py-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]`}>
                    {message.text ? (
                      <p className="text-[#000000] font-['Inter',sans-serif] text-[20px] font-normal leading-[26px]">{message.text}</p>
                    ) : (
                      <div className="flex items-center gap-[4px]">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#BDBDBD] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#BDBDBD] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#BDBDBD] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* User message - avatar on right with gradient circular background */}
              {message.type === 'user' && (
                <>
                  <div className={`${message.text ? '' : 'animate-pulse'} flex-1 bg-white rounded-[12px] px-[16px] py-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]`}>
                    {message.text ? (
                      <p className="text-[#000000] font-['Inter',sans-serif] text-[20px] font-normal leading-[26px]">{message.text}</p>
                    ) : (
                      <div className="flex items-center gap-[4px] justify-end">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#BDBDBD] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#BDBDBD] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#BDBDBD] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    )}
                  </div>
                  <div 
                    className={`${message.text ? '' : 'animate-pulse'} flex-shrink-0 w-[30.6px] h-[30.6px] rounded-[18.45px] flex items-center justify-center mt-[4px] p-[8.1px]`}
                    style={{
                      background: 'linear-gradient(102deg, #00FFE1 -1.03%, #0D54FF 36.82%, #9524C6 100.49%)'
                    }}
                  >
                    <User width={23.4} height={23.4} color='#FFFFFF' />
                  </div>
                </>
              )}
            </div>
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
            <Send width={24} height={24} color="#050505" fill="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
