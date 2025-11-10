import React from 'react'
import { Bold, Italic, Underline, AlignLeft, List, Paperclip, Image, Trash2, Star, Link, Users, Sparkles } from 'lucide-react'

const ProposalEditorToolbar = () => {
  return (
    <div className='flex items-center justify-between px-[31px] py-[20px]'>
      {/* Left Side - Formatting Tools */}
      <div className='flex items-center gap-[19px]'>
        {/* Text Formatting */}
        <div className='flex items-center gap-[20px]'>
          <button className='w-[16px] h-[22px] flex items-center justify-center hover:opacity-70'>
            <Bold size={16} color='#050505' strokeWidth={2.5} />
          </button>
          <button className='w-[15px] h-[19px] flex items-center justify-center hover:opacity-70'>
            <Bold size={15} color='#050505' strokeWidth={3} />
          </button>
          <button className='w-[11px] h-[18px] flex items-center justify-center hover:opacity-70'>
            <Italic size={11} color='#050505' strokeWidth={2.5} />
          </button>
          <button className='w-[16px] h-[21px] flex items-center justify-center hover:opacity-70'>
            <Underline size={16} color='#050505' strokeWidth={2} />
          </button>
        </div>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Alignment */}
        <button className='hover:opacity-70'>
          <AlignLeft size={23} color='#050505' strokeWidth={1.5} />
        </button>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Lists */}
        <button className='hover:opacity-70'>
          <List size={23} color='#050505' strokeWidth={1.5} />
        </button>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Attachment */}
        <button className='hover:opacity-70'>
          <Paperclip size={21} color='#050505' strokeWidth={2} />
        </button>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Image */}
        <button className='hover:opacity-70'>
          <Image size={21} color='#000000' strokeWidth={1.5} />
        </button>

        <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

        {/* Delete */}
        <button className='hover:opacity-70'>
          <Trash2 size={20} color='#050505' strokeWidth={1.5} />
        </button>
      </div>

      {/* Right Side - Action Buttons */}
      <div className='flex items-center gap-[7px]'>
        {/* Rate */}
        <button className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'>
          <Star size={19} color='#050505' strokeWidth={2} />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Rate
          </span>
        </button>

        {/* Source */}
        <button className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'>
          <Link size={19} color='#050505' strokeWidth={2} />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Source
          </span>
        </button>

        {/* Collaborate */}
        <button className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'>
          <Users size={19} color='#050505' strokeWidth={1.5} />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Collaborate
          </span>
        </button>

        {/* Regenerate with AI */}
        <button className='flex items-center gap-[14px] px-[20px] py-[14px] rounded-[6px] hover:opacity-90' style={{
          background: 'linear-gradient(82.57deg, rgba(0,255,225,1) 3.76%, rgba(13,84,255,1) 44.08%, rgba(149,36,198,1) 110.73%)'
        }}>
          <Sparkles size={23} color='#FFFFFF' strokeWidth={1} fill='#FFFFFF' />
          <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
            Regenerate with AI
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProposalEditorToolbar