import React from 'react'
import { Bot } from 'lucide-react'

function BotIcon ({
  text = 'Opportunity Validation Agent working...',
  className = ''
}) {
  return (
    <div
      className={`rounded-[7px] p-[1.5px] shadow-[0px_4px_14px_rgba(0,0,0,0.15)] [background:linear-gradient(83deg,_#00FFE1_-1.99%,_#0D54FF_27.15%,_#9524C6_61.47%,_#FF8900_119.84%)] ${className}`}
    >
      <div className='flex px-[20px] py-[13px] items-center gap-[14px] rounded-[7px] bg-white'>
        <Bot width={24} height={21} color='#828282' />
        <span className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          {text}
        </span>
      </div>
    </div>
  )
}

export default BotIcon
