import React from 'react';
import { Check } from 'lucide-react';

const TemplateCard = ({ template, onSelect, isSelected }) => {
  const { name, description, headerColor, headerText, logoType } = template;

  return (
    <div className="w-[393px] h-[313px] border border-[#c6c6c6] rounded-[9px] overflow-hidden flex flex-col gap-[21px] shadow-[0px_4px_13px_rgba(0,0,0,0.08)]">
      {/* Header Section */}
      <div 
        className="relative h-[149px] px-[41px] py-[39px] flex items-start justify-between"
        style={{ backgroundColor: headerColor }}
      >
        {/* Header Text */}
        <p className="text-white font-['Inter',sans-serif] text-[19px] font-medium leading-[25.48px] max-w-[318px]">
          {headerText}
        </p>
      </div>

      {/* Template Info and Button */}
      <div className="flex flex-col flex-1 justify-between">
        {/* Template Name and Description */}
        <div className="flex flex-col gap-[5px] px-[20px]">
          <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
            {name}
          </h4>
          <p className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
            {description}
          </p>
        </div>

        {/* Selection Button or Status */}
        {isSelected ? (
          <div className="w-full flex items-center justify-center gap-[4px] pt-[21px] pb-[20px] border-t border-[#C6C6C6]">
            <Check width={32} height={32} color="#0D54FF" />
            <span className="text-[#0d54ff] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
              Template Selected
            </span>
          </div>
        ) : (
          <button
            onClick={() => onSelect(template.id)}
            className="w-full flex items-center justify-center hover:opacity-80 transition-opacity pt-[21px] pb-[20px] border-t border-[#C6C6C6]"
          >
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Select Template
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;