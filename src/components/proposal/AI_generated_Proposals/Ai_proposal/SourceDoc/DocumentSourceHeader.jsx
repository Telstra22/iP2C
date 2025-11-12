import React from 'react'
import { X } from 'lucide-react'
const DocumentSourceHeader = ({ onClose }) => {
  return (
    <div className='flex items-center justify-between px-[28px] py-[30px]'>
      <h2 className="text-[#000000] font-['Inter',sans-serif] text-[22px] font-semibold leading-normal">
        Document Source List
      </h2>
      
      <button
        onClick={onClose}
        className='hover:opacity-70 transition-opacity'
      >
        <X width={32} height={32} color='#505050' className='flex-shrink-0 aspect-square' />
      </button>
    </div>
  )
}

export default DocumentSourceHeader
