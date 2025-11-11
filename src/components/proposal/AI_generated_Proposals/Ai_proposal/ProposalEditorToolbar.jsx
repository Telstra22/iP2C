import React, { useState } from 'react'
import BoldAIcon from '../../../../assets/icons/BoldAIcon'
import BoldBIcon from '../../../../assets/icons/BoldBIcon'
import ItalicIcon from '../../../../assets/icons/ItalicIcon'
import UnderlineIcon from '../../../../assets/icons/UnderlineIcon'
import AlignLeftIcon from '../../../../assets/icons/AlignLeftIcon'
import BulletListIcon from '../../../../assets/icons/BulletListIcon'
import AttachmentIcon from '../../../../assets/icons/AttachmentIcon'
import ImageIcon from '../../../../assets/icons/ImageIcon'
import TrashIcon from '../../../../assets/icons/TrashIcon'
import DashedBoxIcon from '../../../../assets/icons/DashedBoxIcon'
import StarIcon from '../../../../assets/icons/StarIcon'
import SourceIcon from '../../../../assets/icons/SourceIcon'
import CollaborateIcon from '../../../../assets/icons/CollaborateIcon'
import SparkleIcon from '../../../../assets/icons/SparkleIcon'
import CommentsIcon from '../../../../assets/icons/CommentsIcon'
import ChevronLeftIcon from '../../../../assets/icons/ChevronLeftIcon'
import AttachmentDropdown from './AttachmentDropdown'

const ProposalEditorToolbar = ({ showComments, onToggleComments, onCollaborate, onRate, onSource }) => {
  const [showAttachmentDropdown, setShowAttachmentDropdown] = useState(false)

  const handleAttachmentClick = () => {
    setShowAttachmentDropdown(!showAttachmentDropdown)
  }

  const handleAttachmentOptionSelect = (option) => {
    console.log('Selected attachment option:', option)
    // Add logic to handle attachment option selection
  }

  return (
    <div className='flex flex-col'>
      {/* Main Toolbar Row */}
      <div className='flex items-center justify-between px-[31px] py-[20px]'>
        {/* Left Side - Formatting Tools */}
        <div className='flex items-center gap-[19px]'>
        {/* Text Formatting */}
        <div className='flex items-center gap-[20px]'>
          <button className='w-[16px] h-[22px] flex items-center justify-center hover:opacity-70'>
            <BoldAIcon width={16} height={22} color='#050505' />
          </button>
          <button className='w-[15px] h-[19px] flex items-center justify-center hover:opacity-70'>
            <BoldBIcon width={15} height={19} color='#050505' />
          </button>
          <button className='w-[11px] h-[18px] flex items-center justify-center hover:opacity-70'>
            <ItalicIcon width={11} height={18} color='#050505' />
          </button>
          <button className='w-[16px] h-[21px] flex items-center justify-center hover:opacity-70'>
            <UnderlineIcon width={16} height={21} color='#050505' />
          </button>
        </div>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Alignment */}
        <button className='hover:opacity-70'>
          <AlignLeftIcon width={23} height={17} color='#050505' />
        </button>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Lists */}
        <button className='hover:opacity-70'>
          <BulletListIcon width={23} height={17} color='#050505' />
        </button>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Attachment */}
        <div className='relative'>
          <button 
            onClick={handleAttachmentClick}
            className='hover:opacity-70'
          >
            <AttachmentIcon width={21} height={22} color='#050505' />
          </button>
          
          <AttachmentDropdown
            isOpen={showAttachmentDropdown}
            onClose={() => setShowAttachmentDropdown(false)}
            onSelectOption={handleAttachmentOptionSelect}
          />
        </div>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Image */}
        <button className='hover:opacity-70'>
          <ImageIcon width={21} height={22} color='#000000' />
        </button>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Delete */}
        <button className='hover:opacity-70'>
          <TrashIcon width={21} height={24} color='#050505' />
        </button>

          <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

          {/* Dashed Box */}
          <button className='hover:opacity-70'>
            <DashedBoxIcon width={20} height={20} color='#050505' />
          </button>
        </div>

        {/* Right Side - Action Buttons */}
        <div className='flex items-center gap-[7px]'>
          {/* Rate */}
          <button 
            onClick={onRate}
            className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'
          >
            <StarIcon width={19} height={18} color='#050505' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Rate
            </span>
          </button>

          {/* Source */}
          <button 
            onClick={onSource}
            className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'
          >
            <SourceIcon width={19} height={19} color='#050505' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Source
            </span>
          </button>

          {/* Collaborate */}
          <button 
            onClick={onCollaborate}
            className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'
          >
            <CollaborateIcon width={19} height={14} color='#050505' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Collaborate
            </span>
          </button>

          {/* Regenerate with AI */}
          <button className='flex items-center gap-[14px] px-[20px] py-[14px] rounded-[6px] hover:opacity-90' style={{
            background: 'linear-gradient(82.57deg, rgba(0,255,225,1) 3.76%, rgba(13,84,255,1) 44.08%, rgba(149,36,198,1) 110.73%)'
          }}>
            <SparkleIcon width={23} height={23} color='#FFFFFF' />
            <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
              Regenerate with AI
            </span>
          </button>
        </div>
      </div>

      {/* Second Row - Show/Hide Comments Button */}
      <div className='w-[356] flex items-center justify-end px-[40px] pb-[14px]'>
        <button 
          onClick={onToggleComments}
          className='flex items-center justify-between w-full max-w-[300px] px-[16px] py-[14px] rounded-[6px] hover:bg-gray-50'
        >
          <div className='flex items-center gap-[11px]'>
            <CommentsIcon width={19} height={14} color='#050505' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              {showComments ? 'Hide Comments' : 'Show Comments'}
            </span>
          </div>
          <ChevronLeftIcon 
            width={10} 
            height={18} 
            color='#050505'
            className={`transform transition-transform ${showComments ? '' : 'rotate-180'}`}
          />
        </button>
      </div>
    </div>
  )
}

export default ProposalEditorToolbar