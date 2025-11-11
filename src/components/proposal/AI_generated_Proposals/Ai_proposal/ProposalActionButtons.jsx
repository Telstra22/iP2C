import React from 'react'
import EditIcon from '../../../../assets/icons/EditIcon'
import PreviewIcon from '../../../../assets/icons/PreviewIcon'
import CheckIcon from '../../../../assets/icons/CheckIcon'

const ProposalActionButtons = ({ onAddSection, onPreview, onSaveExit }) => {
  return (
    <div className='flex items-center gap-[8px]'>
      {/* Add Section */}
      <button
        onClick={onAddSection}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50'
      >
        <EditIcon width={18} height={18} color='#050505' />
        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Add Section
        </span>
      </button>

      {/* Preview Proposal */}
      <button
        onClick={onPreview}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50'
      >
        <PreviewIcon width={16} height={20} color='#050505' />
        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Preview Proposal
        </span>
      </button>

      {/* Save & Exit */}
      <button
        onClick={onSaveExit}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] bg-[#0054FF] hover:bg-[#0040D9]'
      >
        <CheckIcon width={17} height={13} color='#FFFFFF' />
        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Save & Exit
        </span>
      </button>
    </div>
  )
}

export default ProposalActionButtons