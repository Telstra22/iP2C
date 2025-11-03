import React from 'react';
import ExpandIcon from '../../../assets/icons/ExpandIcon';
import CheckmarkSelectedIcon from '../../../assets/icons/CheckmarkSelectedIcon';
import telstraLogo from '../../../assets/images/telstra-logo.png';

const TemplateCard = ({ template, onSelect, isSelected }) => {
  const { name, description, headerColor, opportunityDetails } = template;
  
  // Determine if text should be dark or light based on background color
  const isLightBackground = headerColor === '#b9e7ff' || headerColor === '#fff3d8';
  const textColor = isLightBackground ? '#050505' : '#ffffff';

  return (
    <div className="w-[393px] border border-[#c6c6c6] rounded-[9px] overflow-hidden flex flex-col gap-[40px]">
      {/* Header Section with Opportunity Details */}
      <div 
        className="relative h-[178px] px-[25px] py-[32px] flex flex-col justify-between"
        style={{ backgroundColor: headerColor }}
      >
        {/* Title and Expand Icon */}
        <div className="flex items-start justify-between">
          <h3 
            className="font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]"
            style={{ color: textColor }}
          >
            {opportunityDetails.title}
          </h3>
          <button 
            className="flex-shrink-0 p-1"
            aria-label="Expand"
          >
            <ExpandIcon width={23} height={23} color={textColor} />
          </button>
        </div>

        {/* Opportunity Details */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[7px]">
            <p 
              className="font-['Inter',sans-serif] text-[14px] font-light leading-[19px]"
              style={{ color: textColor }}
            >
              Client Name: {opportunityDetails.clientName}
            </p>
            <p 
              className="font-['Inter',sans-serif] text-[14px] font-light leading-[19px]"
              style={{ color: textColor }}
            >
              Market: {opportunityDetails.market}
            </p>
            <p 
              className="font-['Inter',sans-serif] text-[14px] font-light leading-[19px]"
              style={{ color: textColor }}
            >
              Location: {opportunityDetails.location}
            </p>
          </div>
          
          {/* Telstra Logo */}
          <img 
            src={telstraLogo} 
            alt="Telstra" 
            className="w-[21px] h-[24px] object-contain"
          />
        </div>
      </div>

      {/* Template Info and Button */}
      <div className="px-[20px] pb-[40px] flex flex-col gap-[12px]">
        {/* Template Name and Description */}
        <div className="flex flex-col gap-[5px]">
          <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
            {name}
          </h4>
          <p className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
            {description}
          </p>
        </div>

        {/* Selection Button or Status */}
        {isSelected ? (
          <button
            className="w-full h-[60px] bg-[#0d54ff] rounded-[6px] flex items-center justify-center gap-[9px]"
            disabled
          >
            <CheckmarkSelectedIcon width={22} height={16} color="#ffffff" />
            <span className="text-white font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
              Template Selected
            </span>
          </button>
        ) : (
          <button
            onClick={() => onSelect(template.id)}
            className="w-full h-[60px] bg-[#e7e7e7] rounded-[6px] flex items-center justify-center hover:bg-[#d0d0d0] transition-colors"
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