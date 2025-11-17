import React from 'react';

const EditorContent = ({ isRegenerating }) => {
  return (
    <div className="flex flex-col gap-[21px] px-[43px] py-[32px] bg-white rounded-b-[9px]">
      {/* Regenerating message */}
      {isRegenerating && (
        <p className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal italic leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
          Regenerating your content...
        </p>
      )}
    </div>
  );
};

export default EditorContent;