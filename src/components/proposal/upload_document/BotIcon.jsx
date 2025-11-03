import React from 'react'
import { Bot } from 'lucide-react'
import DashedArrowIcon from '../../../assets/icons/DashedArrowIcon'

function BotIcon({
  className = ''
}) {
  return (
    <div
      className={`flex w-[1427px] h-[77px] px-[20px] pr-[70px] py-[13px] justify-between items-center rounded-b-[7px] border-[1.5px] border-white shadow-[0px_4px_6px_rgba(0,0,0,0.07)] bg-[linear-gradient(83deg,_rgba(0,255,225,0.07)_1.85%,_rgba(13,84,255,0.07)_44.08%,_rgba(149,36,198,0.07)_110.73%),_#ffffff] ${className}`}
    >
      <div className="flex items-center gap-[8px]">
        {/* Opportunity Manager */}
        <div className="flex items-center gap-[9px]">
          <span className="inline-flex items-center">
            <Bot width={22} height={19} color="#0d54ff" strokeWidth={2.5} />
          </span>
          <span
            className="font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] whitespace-nowrap bg-clip-text text-transparent bg-[linear-gradient(84.69deg,_rgba(0,255,225,1)_27.09%,_rgba(13,84,255,1)_15.15%,_rgba(149,36,198,1)_93.31%)]"
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