import React from 'react'
import { Circle } from 'lucide-react'

function RadioButton ({ label, checked, onChange, name }) {
  return (
    <button
      type='button'
      onClick={onChange}
      className='flex items-center gap-[6px] cursor-pointer'
      role='radio'
      aria-checked={checked}
      aria-label={label}
      name={name}
    >
      {checked ? (
        <span className='relative inline-flex items-center justify-center' style={{ width: 21, height: 21 }}>
          <Circle width={21} height={21} strokeWidth={2} color='#0D54FF' />
          <span className='absolute rounded-full bg-[#0D54FF]' style={{ width: 9, height: 9 }} />
        </span>
      ) : (
        <Circle width={21} height={21} strokeWidth={2} />
      )}
      <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
        {label}
      </span>
    </button>
  )
}

export default RadioButton