import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GenerateAiIcon from '../../../assets/icons/GenerateAiIcon.jsx'

function FooterNav ({
  activeStep = 0,
  opportunityId = '',
  mainUploadCount = 0,
  onPrevious,
  onNext
}) {
  const isSummaryStep = activeStep === 1
  const isSourceConnectionStep = activeStep === 2
  const isCreateOutlineStep = activeStep === 3
  const isNextStep =
    isSummaryStep || isSourceConnectionStep || isCreateOutlineStep
  const isGenerateEnabled =
    opportunityId.trim().length > 0 && mainUploadCount >= 1
  const enabled = isNextStep ? true : isGenerateEnabled
  const label = isNextStep ? 'Next' : 'Generate Summary with AI'

  return (
    <div className='flex flex-col w-[1920px] bg-[#FFF] shadow-[4px_0_8px_1px_rgba(0,0,0,0.08)] px-[37px] py-[29px] items-start gap-[10px]'>
      <div className='flex items-center justify-end gap-[30px] w-full'>
        <button
          onClick={onPrevious}
          className='flex items-center gap-[14px] px-[20px] py-[12px] bg-white rounded-[6px] hover:bg-gray-50 transition-colors'
        >
          <ChevronLeft width={29} height={29} color='#0D54FF' />
          <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px]">
            Previous
          </span>
        </button>

        <button
          onClick={onNext}
          disabled={!enabled}
          className={
            isNextStep
              ? `flex h-[71px] py-[14px] px-[80px] flex-row justify-center items-center gap-[10px] rounded-[6px] text-white transition-all ${
                  enabled ? '' : 'opacity-50 cursor-not-allowed'
                }`
              : `flex items-center gap-[10px] h-[71px] px-[40px] rounded-[6px] transition-all ${
                  enabled
                    ? 'hover:opacity-95'
                    : 'bg-[var(--blacks-20,#C6C6C6)] cursor-not-allowed'
                }`
          }
          style={
            isNextStep
              ? { background: 'var(--Primary-Blue, #0054FF)' }
              : enabled
              ? {
                  background:
                    'linear-gradient(83deg, #00FFE1 -20.02%, #0D54FF 38.86%, #9524C6 131.8%)'
                }
              : undefined
          }
        >
          <span className="text-[var(--blacks-0,#FFF)] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32.184px] whitespace-nowrap">
            {label}
          </span>
          {isNextStep ? (
            <ChevronRight
              width={30}
              height={30}
              color='#FFFFFF'
              className='rotate-0'
            />
          ) : (
            <div className='w-[27.76px] h-[30.419px] flex-shrink-0'>
              <GenerateAiIcon width={28} height={31} />
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default FooterNav
