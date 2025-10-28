import React from 'react'

const ProgressBarItem = ({ label, progress = 0, barColor = '#A8A8A8' }) => {
  return (
    <div className='flex flex-col gap-[7px]'>
      <span className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
        {label}
      </span>
      <div className='w-full h-[10px] bg-[#F3F3F3] rounded-[6px] overflow-hidden'>
        <div
          className='h-full transition-all duration-300 ease-out rounded-[6px]'
          style={{
            width: `${progress}%`,
            backgroundColor: barColor
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBarItem
