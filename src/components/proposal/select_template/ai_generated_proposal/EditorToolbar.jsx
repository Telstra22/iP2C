import React from 'react';
import { Bold, Italic, Underline, AlignLeft, List, Paperclip, ChevronDown, Trash2, Users, Sparkles } from 'lucide-react';
import SaveIcon from '../../../../assets/icons/SaveIcon';

const EditorToolbar = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Left side - Formatting tools */}
      <div className="flex items-center gap-[21px]">
        {/* Text formatting buttons - A, B, I, U */}
        <div className="flex items-center gap-[20px]">
          <button className="p-0" aria-label="Font A">
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
              <path d="M7.5 0L0 22H4L5.5 16H10.5L12 22H16L8.5 0H7.5ZM6.5 12L8 6L9.5 12H6.5Z" fill="#050505"/>
            </svg>
          </button>
          <button className="p-0" aria-label="Bold">
            <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
              <path d="M0 0V19H8.5C11.5 19 14 16.5 14 13.5C14 11.5 13 9.8 11.5 9C12.5 8.2 13 7 13 5.5C13 2.5 10.5 0 7.5 0H0ZM4 3H7C8.1 3 9 3.9 9 5C9 6.1 8.1 7 7 7H4V3ZM4 10H8C9.1 10 10 10.9 10 12C10 13.1 9.1 14 8 14H4V10Z" fill="#050505"/>
            </svg>
          </button>
          <button className="p-0" aria-label="Italic">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none">
              <path d="M0 18H7L8 15H5L8 3H11L10 0H3L2 3H5L2 15H0L0 18Z" fill="#050505"/>
            </svg>
          </button>
          <button className="p-0" aria-label="Underline">
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
              <path d="M0 0V10C0 13.3 2.7 16 6 16H10C13.3 16 16 13.3 16 10V0H13V10C13 11.7 11.7 13 10 13H6C4.3 13 3 11.7 3 10V0H0ZM0 18V21H16V18H0Z" fill="#050505"/>
            </svg>
          </button>
        </div>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Alignment */}
        <button className="p-0" aria-label="Align text">
          <svg width="23" height="17" viewBox="0 0 23 17" fill="none">
            <rect width="23" height="3" fill="#050505"/>
            <rect y="7" width="23" height="3" fill="#050505"/>
            <rect y="14" width="23" height="3" fill="#050505"/>
          </svg>
        </button>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* List */}
        <button className="p-0" aria-label="Bullet list">
          <svg width="23" height="17" viewBox="0 0 23 17" fill="none">
            <circle cx="2" cy="2" r="2" fill="#050505"/>
            <circle cx="2" cy="8.5" r="2" fill="#050505"/>
            <circle cx="2" cy="15" r="2" fill="#050505"/>
            <rect x="7" y="0.5" width="16" height="3" fill="#050505"/>
            <rect x="7" y="7" width="16" height="3" fill="#050505"/>
            <rect x="7" y="13.5" width="16" height="3" fill="#050505"/>
          </svg>
        </button>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Attachment with dropdown */}
        <button className="flex items-center gap-[6px] p-0" aria-label="Attach file">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none">
            <path d="M19 10V18C19 20.2 17.2 22 15 22H6C3.8 22 2 20.2 2 18V6C2 3.8 3.8 2 6 2H14" stroke="#050505" strokeWidth="2" fill="none"/>
            <path d="M14 2L19 7L14 12" stroke="#050505" strokeWidth="2" fill="none"/>
          </svg>
          <ChevronDown width={12} height={8} color="#050505" />
        </button>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Delete */}
        <button className="p-0" aria-label="Delete">
          <Trash2 width={19} height={23} color="#000000" strokeWidth={2} />
        </button>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-[12px]">
        {/* Save */}
        <button
          className="flex items-center gap-[5px] px-[18px] py-[17px] border border-[#C6C6C6] rounded-[6px] bg-white hover:bg-gray-50"
          aria-label="Save"
        >
          <SaveIcon width={17} height={17} />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Save
          </span>
        </button>

        {/* Source */}
        <button
          className="flex items-center gap-[5px] px-[18px] py-[17px] border border-[#C6C6C6] rounded-[6px] bg-white hover:bg-gray-50"
          aria-label="Source"
        >
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M2 2L17 17M2 17L17 2" stroke="#000000" strokeWidth="2"/>
          </svg>
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Source
          </span>
        </button>

        {/* Collaborate */}
        <button
          className="flex items-center gap-[5px] px-[18px] py-[17px] border border-[#C6C6C6] rounded-[6px] bg-white hover:bg-gray-50"
          aria-label="Collaborate"
        >
          <Users width={19} height={14} color="#050505" />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Collaborate
          </span>
        </button>

        {/* Regenerate with AI - gradient border */}
        <div className="rounded-[6px] p-[1px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]">
          <button
            className="flex items-center gap-[14px] px-[20px] py-[14px] bg-white rounded-[5px] hover:bg-gray-50"
            aria-label="Regenerate with AI"
          >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M11.5 0L14 7L21 4.5L16 11.5L23 14L16 16.5L21 23L14 20.5L11.5 23L9 16L2 18.5L7 11.5L0 9L7 6.5L2 0L9 2.5L11.5 0Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1"/>
            </svg>
            <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]" style={{color: '#000000'}}>
              Regenerate with AI
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorToolbar;