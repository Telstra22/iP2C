import React from 'react';
import { Baseline,Bold,Italic,Underline, TextAlignCenter,List,File,Paperclip,ChevronDown,FlipVertical,TextSearch,Users, Sparkles} from 'lucide-react';

const EditorToolbar = () => {
  return (
    <div className="flex">
      {/* Left side - Formatting tools */}
      <div className="flex items-center gap-[22px]">
        {/* Text formatting buttons */}
        <div className="flex items-center gap-[20.8px]">
          <button className="p-1" aria-label="Bold">
            <Baseline width={16} height={22} color="#050505" />
          </button>
          <button className="p-1" aria-label="Bold">
            <Bold width={15} height={19} color="#050505" />
          </button>
          <button className="p-1" aria-label="Italic">
            <Italic width={11} height={18} color="#050505" />
          </button>
          <button className="p-1" aria-label="Underline">
            <Underline width={16} height={21} color="#050505" />
          </button>
        </div>

        <div className="w-[2px] h-[39px] bg-[#d8d8d8]" />

        {/* Alignment */}
        <button className="p-1" aria-label="Align text">
          <TextAlignCenter width={23} height={17} color="#050505" />
        </button>

        <div className="w-[2px] h-[39px] bg-[#d8d8d8]" />

        {/* List */}
        <button className="p-1" aria-label="Bullet list">
          <List width={23} height={17} color="#050505" />
        </button>

        <div className="w-[2px] h-[39px] bg-[#d8d8d8]" />

        {/* Copy */}
        <button className="p-1" aria-label="Copy">
          <File width={26} height={26} color="#050505" />
        </button>

        <div className="w-[2px] h-[39px] bg-[#d8d8d8]" />

        {/* Attachment */}
        <button className="p-1" aria-label="Attach file">
          <Paperclip width={55} height={30} color="#050505" />
          <span><ChevronDown width={55} height={30} color="#050505" /></span>
        </button>

        <div className="w-[2px] h-[39px] bg-[#d8d8d8]" />

        {/* Add Subsection */}
        <button className="flex items-center gap-[13px] px-2 py-1" aria-label="Add subsection">
          <FlipVertical width={21} height={22} color="#000000" />
          <span className="button-text text-[#050505] whitespace-nowrap">Add Subsection</span>
        </button>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-[8px]">
        <button
          className="flex items-center gap-[7px] px-[23px] py-[17px] border border-[#c6c6c6] rounded-[4px]"
          aria-label="Source"
        >
          <TextSearch width={19} height={19} color="#000000" />
          <span className="button-text text-[#050505] whitespace-nowrap">Source</span>
        </button>

        <button
          className="flex items-center gap-[7px] px-[21px] py-[17px] border border-[#c6c6c6] rounded-[4px]"
          aria-label="Collaborate"
        >
          <Users width={19} height={14} color="#050505" />
          <span className="button-text text-[#050505] whitespace-nowrap">Collaborate</span>
        </button>

        {/* Gradient border using an outer wrapper; inner button holds accessible semantics */}
        <div className="rounded-[4px] p-[1.5px] bg-[linear-gradient(83deg,_#00FFE1_-1.99%,_#0D54FF_27.15%,_#9524C6_61.47%,_#FF8900_119.84%)]">
          <button
            className="flex flex-col justify-center items-center gap-[10px] h-[60px] px-[20px] py-[14px] bg-[var(--blacks-0,_#FFF)] rounded-[3px] w-full"
            aria-label="Regenerate with AI"
          >
            <Sparkles width={23} height={23} color="#202020" />
            <span className="button-text text-[#202020] whitespace-nowrap">Regenerate with AI</span>
          </button>
        </div>    
      </div>
    </div>
  );
};

export default EditorToolbar;