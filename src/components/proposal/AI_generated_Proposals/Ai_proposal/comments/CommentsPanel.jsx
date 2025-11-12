import React from 'react'
import { Ellipsis, Smile,ThumbsUp } from 'lucide-react'

const CommentsPanel = ({ comments = [] }) => {
  return (
    <div className='w-[356px] flex-shrink-0 flex flex-col border border-[#D9D9D9] bg-white rounded-[6px]'>
      <div className='flex flex-col gap-[26px] px-[16px] pt-[20px] pb-[30px] overflow-y-auto max-h-[600px]'>
        {comments.map((comment) => (
          comment.isInput ? (
            <div key={comment.id} className='flex flex-col gap-[15px] pb-[10px]'>
              <div className='flex items-center gap-[11px]'>
                <div
                  className='w-[38px] h-[38px] rounded-full flex items-center justify-center'
                  style={{ backgroundColor: comment.bgColor || (comment.initials === 'AA' ? '#4868B5' : '#F18B79') }}
                >
                  <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal">{comment.initials}</span>
                </div>
                <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[23px]">{comment.author}</span>
              </div>
              <div className='flex flex-col gap-[15px]'>
                <input type='text' placeholder='Add a comment here' className="text-[#737373] font-['Graphik',sans-serif] text-[18px] font-normal leading-[18px] border-none outline-none bg-transparent placeholder:text-[#737373]" />
                <button className="text-[#0D54FF] font-['Graphik',sans-serif] text-[18px] font-medium self-end">Send</button>
              </div>
            </div>
          ) : (
            <div key={comment.id} className='flex flex-col gap-[13px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[21px]'>
                  <div
                    className='w-[38px] h-[38px] rounded-full flex items-center justify-center'
                    style={{ backgroundColor: comment.bgColor || (comment.initials === 'AA' ? '#4868B5' : '#F18B79') }}
                  >
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal">{comment.initials}</span>
                  </div>
                  <div className='flex flex-col gap-[-8px]'>
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[34px]">{comment.author}</span>
                    <span className="text-[#B4B4B4] font-['Inter',sans-serif] text-[17px] font-normal leading-[34px]">{comment.timestamp}</span>
                  </div>
                </div>
                <Ellipsis size={18} color='#000000' />
              </div>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[19px] font-normal leading-[27px]">{comment.text}</p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[24px]'>
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[17px] font-semibold leading-normal">REPLY</span>
                  <ThumbsUp width={20} height={20} color='#050505' />
                </div>
                <span className="text-[#828282] font-['Inter',sans-serif] text-[17px] font-medium leading-normal">{comment.commentNumber}</span>
              </div>
              {comment.hasEmoji && (
                <div className='mt-[-10px]'>
                  <div className='w-[28px] h-[28px] rounded-full bg-[#FFC300] flex items-center justify-center'>
                    <Smile width={28} height={28} color='#050505' />
                  </div>
                </div>
              )}
              <div className='w-full h-[1px] bg-[#D9D9D9]' />
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default CommentsPanel
