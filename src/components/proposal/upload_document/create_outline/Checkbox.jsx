import React from 'react'
import { Check } from 'lucide-react'

function Checkbox ({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className='flex items-center gap-[14px] cursor-pointer group'
    >
      <div
        className={`w-[28px] h-[28px] rounded-[3px] border-[1.5px] flex items-center justify-center transition-colors flex-shrink-0 ${
          checked
            ? 'bg-[#FFFFFF] border-[#0D54FF]'
            : 'border-[#0D54FF] bg-white group-hover:border-[#0D54FF]'
        }`}
      >
        {checked && <Check width={20} height={20} color='#0D54FF' />}
      </div>
    </button>
  )
}

export default Checkbox