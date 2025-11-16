import React from 'react';
import { ChevronDown } from 'lucide-react';

const SectionHeader = ({ title, isExpanded, onToggle }) => {
  return (
    <div 
      className="flex items-center justify-between px-[16px] py-[14px] bg-white cursor-pointer hover:bg-gray-50 rounded-t-[9px]"
      onClick={onToggle}
    >
      <h2 className="text-[#050505] font-['Inter',sans-serif] text-[21px] font-semibold leading-[28px]">
        {title}
      </h2>
      <ChevronDown 
        width={18} 
        height={10} 
        color="#050505"
        className={`transition-transform ${isExpanded ? '' : 'rotate-180'}`}
      />
    </div>
  );
};

export default SectionHeader;