import React from 'react'
import IP2CLogoIcon from '../../../../assets/icons/IP2CLogoIcon'
import CheckCircleIcon from '../../../../assets/icons/CheckCircleIcon'
import { UI_STRINGS } from './mockData'

const CompletionModal = ({ onDone }) => {
  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50'>
      <div className='bg-white rounded-[12px] border border-[#CFCFCF] shadow-[0px_4px_8px_2px_rgba(0,0,0,0.07)] inline-flex flex-col items-center px-[62px] pt-[40px] pb-[30px] gap-[32px]'>
        {/* Header with logo and title */}
        <div className='flex items-center gap-[10px]'>
          <IP2CLogoIcon width={42} height={42} />
          <h2 className="text-[#39393A] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px] whitespace-nowrap">
            {UI_STRINGS.completionTitle}
          </h2>
        </div>

        {/* Content section */}
        <div className='flex flex-col items-center gap-[32px]'>
          {/* Check circle icon */}
          <CheckCircleIcon size={100} strokeWidth={6} />

          {/* Instruction text */}
          <p className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] text-center">
            {UI_STRINGS.completionInstruction}
          </p>
        </div>

        {/* Done button */}
        <button
          onClick={onDone}
          className="self-end text-[#0D54FF] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          {UI_STRINGS.completionDone}
        </button>
      </div>
    </div>
  )
}

export default CompletionModal
