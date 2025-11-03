import React from 'react'
import { Bot } from 'lucide-react'
import GradientBotIcon from '../../../assets/icons/GradientBotIcon'
import DashedArrowIcon from '../../../assets/icons/DashedArrowIcon'

function BotIcon({
  className = ''
}) {
  return (
    <div
      className={`rounded-b-[7px] border-[1.5px] border-white shadow-[0px_4px_6px_rgba(0,0,0,0.07)] px-[20px] py-[13px] ${className}`}
      style={{
        background: 'linear-gradient(82.57deg, rgba(0,255,225,0.07) 1.86%, rgba(13,84,255,0.07) 44.08%, rgba(149,36,198,0.07) 110.73%), #ffffff'
      }}
    >
      <div className="flex items-center gap-[8px]">
        {/* Opportunity Manager */}
        <div className="flex items-center gap-[9px]">
          <GradientBotIcon width={27} height={23} />
          <span
            className="font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] whitespace-nowrap"
            style={{
              background: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Opportunity Manager
          </span>
        </div>

        {/* Agents Row */}
        <div className="flex items-center gap-[8px] ml-[146px]">
          {/* Opportunity Validation Agent */}
          <div className="flex items-center gap-[9px] px-[20px] py-[13px] bg-white rounded-[7px] border-[1.5px] border-[#E5E5E5]">
            <Bot width={22} height={19} color="#0d54ff" />
            <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] whitespace-nowrap">
              Opportunity Validation Agent
            </span>
          </div>

          {/* Dashed Arrow */}
          <DashedArrowIcon width={30} height={2} />

          {/* Customer Context Agent */}
          <div className="flex items-center gap-[9px] px-[20px] py-[13px] bg-white rounded-[7px] border-[1.5px] border-[#E5E5E5]">
            <Bot width={22} height={19} color="#0d54ff" />
            <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] whitespace-nowrap">
              Customer Context Agent
            </span>
          </div>

          {/* Dashed Arrow */}
          <DashedArrowIcon width={30} height={2} />

          {/* Opportunity Validator */}
          <div className="flex items-center gap-[9px] px-[20px] py-[13px] bg-white rounded-[7px] border-[1.5px] border-[#E5E5E5]">
            <Bot width={22} height={19} color="#0d54ff" />
            <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] whitespace-nowrap">
              Opportunity Validator
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotIcon