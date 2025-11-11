import React from 'react'
import LinkIcon from '../../../../assets/icons/LinkIcon'
import CloseIcon from '../../../../assets/icons/CloseIcon'

const CollaborationHeader = ({ onClose, onCopyLink }) => {
  return (
    <div className='flex items-center justify-between px-[28px] py-[30px]'>
      <h2 className="text-[#000000] font-['Inter',sans-serif] text-[22px] font-semibold leading-normal">
        Collaborate with your team
      </h2>
      
      <div className='flex items-center gap-[18px]'>
        <button
          onClick={onCopyLink}
          className='flex items-center gap-[9px] hover:opacity-70 transition-opacity'
        >
          <LinkIcon width={23} height={12} color='#0D54FF' />
          <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[19px] font-normal leading-normal">
            Copy link
          </span>
        </button>
        
        <button
          onClick={onClose}
          className='hover:opacity-70 transition-opacity'
        >
          <CloseIcon width={21} height={21} color='#505050' />
        </button>
      </div>
    </div>
  )
}

export default CollaborationHeader