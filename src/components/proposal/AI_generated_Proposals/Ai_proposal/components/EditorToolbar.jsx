import React from 'react';
import BoldAIcon from '../../../../../assets/icons/BoldAIcon';
import BoldBIcon from '../../../../../assets/icons/BoldBIcon';
import ItalicIIcon from '../../../../../assets/icons/ItalicIIcon';
import UnderlineUIcon from '../../../../../assets/icons/UnderlineUIcon';
import AlignTextIcon from '../../../../../assets/icons/AlignTextIcon';
import BulletPointsIcon from '../../../../../assets/icons/BulletPointsIcon';
import AttachmentIcon from '../../../../../assets/icons/AttachmentIcon';
import ImageIcon from '../../../../../assets/icons/ImageIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import CopyIcon from '../../../../../assets/icons/CopyIcon';
import StarRateIcon from '../../../../../assets/icons/StarRateIcon';
import SourceDocIcon from '../../../../../assets/icons/SourceDocIcon';
import CollaborateIcon from '../../../../../assets/icons/CollaborateIcon';
import RegenerateAIIcon from '../../../../../assets/icons/RegenerateAIIcon';

const EditorToolbar = ({ onRate, onSource, onCollaborate, onRegenerateWithAI }) => {
  return (
    <div className="flex items-center justify-between px-[31px] py-[16px] bg-white">
      {/* Left side - Text formatting tools */}
      <div className="flex items-center gap-[19px]">
        {/* Bold, Italic, Underline group */}
        <div className="flex items-center gap-[20px]">
          <button className="p-0" aria-label="Bold">
            <BoldAIcon width={16} height={22} color="#050505" />
          </button>
          <button className="p-0" aria-label="Bold B">
            <BoldBIcon width={15} height={19} color="#050505" />
          </button>
          <button className="p-0" aria-label="Italic">
            <ItalicIIcon width={11} height={18} color="#050505" />
          </button>
          <button className="p-0" aria-label="Underline">
            <UnderlineUIcon width={16} height={21} color="#050505" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Alignment */}
        <button className="p-0" aria-label="Text alignment">
          <AlignTextIcon width={23} height={17} color="#050505" />
        </button>

        {/* Divider */}
        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Bullet list */}
        <button className="p-0" aria-label="Bullet list">
          <BulletPointsIcon width={23} height={17} color="#050505" />
        </button>

        {/* Divider */}
        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Attachment */}
        <button className="p-0" aria-label="Attach file">
          <AttachmentIcon width={53} height={30} color="#050505" />
        </button>

        {/* Divider */}
        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Image */}
        <button className="p-0 border-2 border-black rounded-sm" aria-label="Insert image">
          <ImageIcon width={21} height={22} color="#050505" />
        </button>

        {/* Divider */}
        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Delete */}
        <button className="p-0 bg-black rounded-sm" aria-label="Delete">
          <TrashIcon width={21} height={24} color="#EFEFEF" />
        </button>

        {/* Divider */}
        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Copy */}
        <button className="p-0" aria-label="Copy">
          <CopyIcon width={20} height={20} color="#050505" />
        </button>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-[7px]">
        {/* Rate */}
        <button
          onClick={onRate}
          className="flex items-center gap-[5px] px-[18px] py-[14px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50"
        >
          <StarRateIcon width={19} height={18} color="#050505" />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Rate
          </span>
        </button>

        {/* Source */}
        <button
          onClick={onSource}
          className="flex items-center gap-[5px] px-[18px] py-[14px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50"
        >
          <SourceDocIcon width={19} height={19} color="#050505" />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Source
          </span>
        </button>

        {/* Collaborate */}
        <button
          onClick={onCollaborate}
          className="flex items-center gap-[5px] px-[18px] py-[14px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50"
        >
          <CollaborateIcon width={19} height={14} color="#050505" />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Collaborate
          </span>
        </button>

        {/* Regenerate with AI */}
        <button
          onClick={onRegenerateWithAI}
          className="flex items-center gap-[14px] px-[20px] py-[12px] rounded-[9px] hover:opacity-90"
          style={{
            background: 'linear-gradient(82.57deg, rgba(0,255,225,1) 3.76%, rgba(13,84,255,1) 44.08%, rgba(149,36,198,1) 110.73%)'
          }}
        >
          <RegenerateAIIcon width={23} height={23} color="#FFFFFF" />
          <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
            Regenerate with AI
          </span>
        </button>
      </div>
    </div>
  );
};

export default EditorToolbar;