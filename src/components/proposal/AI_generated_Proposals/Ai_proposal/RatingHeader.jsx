import React from 'react'
import CloseIcon from '../../../../assets/icons/CloseIcon'

const RatingHeader = ({ onClose }) => {
  return (
    <div className='flex items-center justify-between px-[28px] py-[30px]'>
      <h2 className="text-[#000000] font-['Inter',sans-serif] text-[22px] font-semibold leading-normal">
        Rate this AI generated response
      </h2>
      
      <button
        onClick={onClose}
        className='hover:opacity-70 transition-opacity'
      >
        <CloseIcon width={21} height={21} color='#505050' />
      </button>
    </div>
  )
}

export default RatingHeader