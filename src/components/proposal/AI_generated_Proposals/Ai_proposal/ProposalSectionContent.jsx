import React from 'react'
import ChevronDownIcon from '../../../../assets/icons/ChevronDownIcon'
import TrashSmallIcon from '../../../../assets/icons/TrashSmallIcon'
import CommentsIcon from '../../../../assets/icons/CommentsIcon'
import ChevronLeftIcon from '../../../../assets/icons/ChevronLeftIcon'
import ThumbsUpIcon from '../../../../assets/icons/ThumbsUpIcon'
import EmojiIcon from '../../../../assets/icons/EmojiIcon'
import ProposalEditorToolbar from './ProposalEditorToolbar'
import { Check } from 'lucide-react'

const ProposalSectionContent = ({ 
  section, 
  onToggleSection, 
  onDeleteSubsection, 
  showSectionsList, 
  allSections,
  comments,
  showComments,
  onToggleComments,
  onCollaborate,
  onRate,
  onSource
}) => {
  return (
    <div className='flex flex-col gap-[13px]'>
      {/* Section Header */}
      <div className='flex flex-col gap-[13px] w-[483px]'>
        <div className='bg-white rounded-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] px-[20px] py-[16px]'>
          <button
            onClick={() => onToggleSection(section.id)}
            className='flex items-center justify-between w-full hover:opacity-70'
          >
            <span className="text-[#000000] font-['Inter',sans-serif] text-[21px] font-semibold leading-[28px]">
              {section.title}
            </span>
            <ChevronDownIcon
              width={18}
              height={10}
              color='#000000'
              className={`transform transition-transform ${section.isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Sections List Dropdown */}
        {section.id === 1 && showSectionsList && (
          <div className='bg-white rounded-[12px] border border-[#E5E5E5] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] p-[24px]'>
            <div className='flex flex-col gap-[20px]'>
              {allSections && allSections.map((item) => (
                <div key={item.id} className='flex items-center justify-between'>
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                    {item.title}
                  </span>
                  {item.isActive && (
                    <Check size={24} color='#0D54FF' strokeWidth={3} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Section Content with Comments Sidebar */}
      {section.isExpanded && (
        <div className='flex gap-0'>
          {/* Main Content Area */}
          <div className={`bg-white rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] ${showComments ? 'flex-1' : 'w-full'}`}>
            {/* Editor Toolbar */}
            <ProposalEditorToolbar 
              showComments={showComments}
              onToggleComments={onToggleComments}
              onCollaborate={onCollaborate}
              onRate={onRate}
              onSource={onSource}
            />
            
            {/* Main Content */}
            <div className='flex flex-col gap-[21px] px-[40px] py-[14px] overflow-y-auto'>
              <div className='flex flex-col gap-[30px]'>
                {/* Main Section Text */}
                <p className="w-[856px] text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px]">
                  {section.content}
                </p>

                {/* Subsections */}
                {section.subsections && section.subsections.map((subsection) => (
                  <div key={subsection.id} className='flex flex-col gap-[15px]'>
                    {/* Subsection Header */}
                    <div className='flex items-center gap-[13px]'>
                      <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] underline">
                        {subsection.title}
                      </span>
                      <button
                        onClick={() => onDeleteSubsection(subsection.id)}
                        className='hover:opacity-70'
                      >
                        <TrashSmallIcon width={13} height={16} color='#050505' />
                      </button>
                    </div>

                    {/* Subsection Content */}
                    <p className={`w-[860px] text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] ${subsection.isItalic ? 'italic text-[#828282]' : ''}`}>
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comments Sidebar */}
          {showComments && (
            <div className='w-[356px] h-[794px] flex flex-col border border-[#D9D9D9] bg-white ml-[-1px]'>
              {/* Comments List */}
              <div className='flex flex-col gap-[26px] px-[16px] pt-[20px] pb-[30px] overflow-y-auto'>
                {comments && comments.filter(c => !c.isInput).map((comment) => (
                  <div key={comment.id} className='flex flex-col gap-[13px]'>
                    {/* Comment Header */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-[21px]'>
                        <div className='w-[38px] h-[38px] rounded-full bg-[#F18B79] flex items-center justify-center'>
                          <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal">
                            {comment.initials}
                          </span>
                        </div>
                        <div className='flex flex-col gap-[-8px]'>
                          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[34px]">
                            {comment.author}
                          </span>
                          <span className="text-[#B4B4B4] font-['Inter',sans-serif] text-[17px] font-normal leading-[34px]">
                            {comment.timestamp}
                          </span>
                        </div>
                      </div>
                      <div className='w-[16px] h-[4px] bg-[#000000]' />
                    </div>

                    {/* Comment Text */}
                    <p className="text-[#050505] font-['Inter',sans-serif] text-[19px] font-normal leading-[27px]">
                      {comment.text}
                    </p>

                    {/* Comment Actions */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-[24px]'>
                        <span className="text-[#050505] font-['Inter',sans-serif] text-[17px] font-semibold leading-normal">
                          REPLY
                        </span>
                        {comment.hasEmoji ? (
                          <div className='flex items-center'>
                            <ThumbsUpIcon width={19} height={20} color='#050505' />
                          </div>
                        ) : (
                          <ThumbsUpIcon width={19} height={20} color='#050505' />
                        )}
                      </div>
                      <span className="text-[#828282] font-['Inter',sans-serif] text-[17px] font-medium leading-normal">
                        {comment.commentNumber}
                      </span>
                    </div>

                    {comment.hasEmoji && (
                      <div className='mt-[-10px]'>
                        <EmojiIcon width={23} height={23} />
                      </div>
                    )}

                    <div className='w-full h-[1px] bg-[#D9D9D9]' />
                  </div>
                ))}

                {/* Add Comment Input */}
                <div className='flex flex-col gap-[15px] pb-[26px]'>
                  <div className='flex items-center gap-[11px]'>
                    <div className='w-[38px] h-[12px] rounded-full bg-[#F18B79]' />
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[23px]">
                      Andrew Bernard
                    </span>
                  </div>
                  <div className='flex flex-col gap-[15px]'>
                    <input
                      type='text'
                      placeholder='Add a comment here'
                      className="text-[#737373] font-['Graphik',sans-serif] text-[18px] font-normal leading-[18px] border-none outline-none bg-transparent placeholder:text-[#737373]"
                    />
                    <button className="text-[#0D54FF] font-['Graphik',sans-serif] text-[18px] font-medium self-end">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProposalSectionContent