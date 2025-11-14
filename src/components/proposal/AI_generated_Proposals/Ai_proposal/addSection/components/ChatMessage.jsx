import React from 'react';
import BotAvatarIcon from '../../../../../../assets/icons/BotAvatarIcon';
import { User } from 'lucide-react';

const ChatMessage = ({ type, message }) => {
  return (
    <div className="flex gap-[8px] items-start">
      {type === 'bot' && (
        <>
          <div className="flex-shrink-0 w-[18px] h-[16px] mt-[4px]">
            <BotAvatarIcon width={18} height={16} color="#000000" />
          </div>
          <div className="flex-1">
            <p className="text-[#000000] font-['Inter',sans-serif] text-[20px] font-normal leading-[26px]">
              {message}
            </p>
          </div>
        </>
      )}

      {type === 'user' && (
        <>
          <div className="flex-shrink-0 w-[14px] h-[14px] mt-[4px]">
            <User width={14} height={14} color="#000000" />
          </div>
          <div className="flex-1">
            <p className="text-[#000000] font-['Inter',sans-serif] text-[20px] font-normal leading-[26px]">
              {message}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatMessage;