import React from 'react'
import { FileText, Check,PencilLine } from 'lucide-react'
const ProposalActionButtons = ({ onAddSection, onPreview, onSaveExit }) => {
  return (
    <div className='flex items-center gap-[8px]'>
      {/* Add Section */}
      <button
        onClick={onAddSection}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50'
      >
        <PencilLine width={24} height={24} color='#050505' />
        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Add Section
        </span>
      </button>

      {/* Preview Proposal */}
      <button
        onClick={onPreview}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50'
      >
        <FileText width={24} height={24} color='#050505' />
        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Preview Proposal
        </span>
      </button>

      {/* Save & Exit */}
      <button
        onClick={onSaveExit}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] bg-[#0054FF] hover:bg-[#0040D9]'
      >
        <Check width={25} height={25} color='#FFFFFF' />
        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Save & Exit
        </span>
      </button>
    </div>
  )
}

export default ProposalActionButtons