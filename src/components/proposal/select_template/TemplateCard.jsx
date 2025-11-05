import React from 'react';
import ExpandIcon from '../../../assets/icons/ExpandIcon';
import CheckmarkSelectedIcon from '../../../assets/icons/CheckmarkSelectedIcon';
import telstraLogo from '../../../assets/images/telstra-logo.png';
import { ChevronsUpDown } from 'lucide-react';

const TemplateCard = ({ template, onSelect, isSelected }) => {
  const { name, description, headerColor, opportunityDetails } = template;
  
  // Determine if text should be dark or light based on background color
  const isLightBackground = headerColor === '#b9e7ff' || headerColor === '#fff3d8';
  const textColor = isLightBackground ? '#050505' : '#ffffff';

  return (
    <div className="w-[393px] h-[320px] border border-[#c6c6c6] rounded-[9px] overflow-hidden flex flex-col gap-[21px] shadow-[0px_4px_13px_rgba(0,0,0,0.08)]">
      {/* Header Section with Opportunity Details */}
      <div 
        className="relative h-[149px] px-[25px] py-[32px] flex items-start justify-between"
        style={{ backgroundColor: headerColor }}
      >
        {/* Title */}
        <h3 
          className="font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]"
          style={{ color: textColor }}
        >
          {opportunityDetails.title}
        </h3>
        
        {/* Expand Icon with border */}
        <div 
          className="flex-shrink-0 w-[23px] h-[23px] rounded-[2px] border-[2.83px] border-white flex items-center justify-center shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15),0px_1px_2px_rgba(0,0,0,0.30)]"
        >
          <ExpandIcon width={15} height={15} color="#ffffff" />
        </div>
        
        {/* Telstra Logo - positioned at bottom right */}
        <img 
          src={telstraLogo} 
          alt="Telstra" 
          className="w-[21px] h-[24px] object-contain absolute bottom-[32px] right-[25px]"
        />
      </div>

      {/* Template Info and Button */}
      <div className="px-[20px] pb-[20px] flex flex-col gap-[21px] flex-1">
        {/* Template Name and Description */}
        <div className="flex flex-col gap-[2px]">
          <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
            {name}
          </h4>
          <p className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
            {description}
          </p>
        </div>

        {/* Selection Button or Status */}
        {isSelected ? (
          <div className="w-full flex items-center justify-center gap-[4px]">
            <CheckmarkSelectedIcon width={22} height={16} color="#0d54ff" />
            <span className="text-[#0d54ff] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
              Template Selected
            </span>
          </div>
        ) : (
          <button
            onClick={() => onSelect(template.id)}
            className="w-full flex items-center justify-center hover:opacity-80 transition-opacity"
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