import React from 'react'
import { Download,PencilLine,Check } from 'lucide-react'

const PreviewActionButtons = ({ onDownload, onEditSection, onSaveExit }) => {
  return (
    <div className='flex items-center gap-[6px]'>
      {/* Download */}
      <button
        onClick={(e) => onDownload && onDownload(e)}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50 transition-colors'
      >
        <Download width={24} height={24} color='#0D54FF' />
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Download
        </span>
      </button>

      {/* Edit Section */}
      <button
        onClick={onEditSection}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50 transition-colors'
      >
        <PencilLine width={24} height={24} color='#272727' />
        <span className="text-[#272727] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Edit Section
        </span>
      </button>

      {/* Save & Exit */}
      <button
        onClick={onSaveExit}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] bg-[#0D54FF] hover:bg-[#0040D9] transition-colors'
      >
        <Check width={25} height={25} color='#FFFFFF' />
        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Save & Exit
        </span>
      </button>
    </div>
  )
}

export default PreviewActionButtons