import React from 'react';
import ChatBotIcon from '../../../../assets/icons/ChatBotIcon';

const FloatingChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-[89px] right-[86px] w-[45px] h-[41px] bg-[#0d54ff] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0040d9] transition-colors"
      aria-label="Chat support"
    >
      <ChatBotIcon width={45} height={41} color="#ffffff" />
    </button>
  );
};

export default FloatingChatButton;