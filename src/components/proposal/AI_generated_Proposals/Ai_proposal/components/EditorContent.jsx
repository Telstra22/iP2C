import React from 'react';
import CommentsIcon from '../../../../../assets/icons/CommentsIcon';
import ChevronRightIcon from '../../../../../assets/icons/ChevronRightIcon';

const EditorContent = ({ isRegenerating, onShowComments }) => {
  return (
    <div className="flex flex-col gap-[21px] px-[43px] py-[32px] bg-white rounded-b-[9px]">
      {/* Regenerating message */}
      {isRegenerating && (
        <p className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal italic leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
          Regenerating your content...
        </p>
      )}

      {/* Show Comments button - aligned to the right */}
      <div className="flex justify-end">
        <button
          onClick={onShowComments}
          className="flex items-center px-[20px] py-[12px] rounded-[6px] bg-white hover:bg-gray-50 border border-transparent"
        >
          <div className="flex items-center gap-[11px]">
            <CommentsIcon width={19} height={14} color="#050505" />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Show Comments
            </span>
          </div>
          <ChevronRightIcon width={10} height={18} color="#050505" className="ml-[8px]" />
        </button>
      </div>
    </div>
  );
};

export default EditorContent;