import React from 'react'
import { CircleAlert } from 'lucide-react'

const Blank_Opportunity_Summery = () => {
  return (
    <div className='w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px]'>
      <div className='w-full min-h-[400px] flex items-center justify-center'>
        <div className='w-[579px] flex flex-col items-center gap-[50px]'>
          <p className="text-[#828282] font-['Inter',sans-serif] text-[28px] font-normal leading-[134.1%]">
            No Opportunity summery available
          </p>
          <CircleAlert size={142} color='#B4B4B4' strokeWidth={2} />
          <p className="w-[595px] text-center text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[134.1%]">
            Please visit the upload customer Opportunity documents in the
            <span className='text-[#0D54FF] underline ml-[6px] mr-[6px]'>
              Upload document
            </span>
            page to generate Opportunity Summary
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blank_Opportunity_Summery
