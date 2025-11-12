import React from 'react'
import { Link2,X } from 'lucide-react'

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
          <Link2 width={30} height={28} color='#0D54FF' className='flex-shrink-0' />
          <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[19px] font-normal leading-normal">
            Copy link
          </span>
        </button>
        
        <button
          onClick={onClose}
          className='hover:opacity-70 transition-opacity'
        >
          <X width={32} height={32} color='#505050' className='flex-shrink-0 aspect-square' />
        </button>
      </div>
    </div>
  )
}

export default CollaborationHeader
