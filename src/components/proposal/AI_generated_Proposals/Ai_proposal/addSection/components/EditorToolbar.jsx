import React from 'react';
import { Bold, Italic, Underline, Trash2 } from 'lucide-react';
import TextAlignIcon from '../../../../../../assets/icons/TextAlignIcon';
import BulletListIcon from '../../../../../../assets/icons/BulletListIcon';
import PaperclipIcon from '../../../../../../assets/icons/PaperclipIcon';
import ImageUploadIcon from '../../../../../../assets/icons/ImageUploadIcon';

const EditorToolbar = ({ onCollaborate, onRegenerateWithAI }) => {
  const applyCommand = (cmd) => {
    try {
      document.execCommand(cmd, false, null);
    } catch (e) {
      console.warn('execCommand not supported:', cmd);
    }
  };

  const handleBold = () => applyCommand('bold');
  const handleItalic = () => applyCommand('italic');
  const handleUnderline = () => applyCommand('underline');
  const handleAlignLeft = () => applyCommand('justifyLeft');
  const handleBulletList = () => applyCommand('insertUnorderedList');
  const handleDelete = () => applyCommand('delete');

  return (
    <div className="flex items-center justify-between px-[31px] py-[20px]">
      {/* Left Side - Formatting Tools */}
      <div className="flex items-center gap-[19px]">
        {/* Text Formatting Group */}
        <div className="flex items-center gap-[20px]">
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleBold}
            className="w-[16px] h-[22px] flex items-center justify-center hover:opacity-70"
            aria-label="Bold"
          >
            <Bold width={15} height={19} color="#050505" />
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleBold}
            className="w-[15px] h-[19px] flex items-center justify-center hover:opacity-70"
            aria-label="Bold"
          >
            <Bold width={15} height={19} color="#050505" />
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleItalic}
            className="w-[11px] h-[18px] flex items-center justify-center hover:opacity-70"
            aria-label="Italic"
          >
            <Italic width={11} height={18} color="#050505" />
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleUnderline}
            className="w-[16px] h-[21px] flex items-center justify-center hover:opacity-70"
            aria-label="Underline"
          >
            <Underline width={16} height={21} color="#050505" />
          </button>
        </div>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Alignment */}
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleAlignLeft}
          className="hover:opacity-70"
          aria-label="Align text"
        >
          <TextAlignIcon width={23} height={17} />
        </button>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Bullet List */}
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleBulletList}
          className="hover:opacity-70"
          aria-label="Bullet list"
        >
          <BulletListIcon width={23} height={17} />
        </button>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Attachment */}
        <button
          className="hover:opacity-70"
          aria-label="Attach file"
        >
          <PaperclipIcon width={53} height={30} />
        </button>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Delete */}
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleDelete}
          className="hover:opacity-70"
          aria-label="Delete"
        >
          <Trash2 width={21} height={22} color="#000000" strokeWidth={2} />
        </button>

        <div className="w-[2px] h-[39px] bg-[#D8D8D8]" />

        {/* Image Upload */}
        <button
          className="hover:opacity-70"
          aria-label="Upload image"
        >
          <ImageUploadIcon width={20} height={20} />
        </button>
      </div>

      {/* Right Side - Action Buttons */}
      <div className="flex items-center gap-[7px]">
        {/* Collaborate Button */}
        <button
          onClick={onCollaborate}
          className="flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50"
        >
          <UsersIcon width={19} height={14} />
          <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Collaborate
          </span>
        </button>

        {/* Regenerate with AI Button */}
        <button
          onClick={onRegenerateWithAI}
          className="flex items-center gap-[14px] px-[20px] py-[14px] rounded-[6px] hover:opacity-90 gradient-ai-assistant"
        >
          <RegenerateIcon width={23} height={23} />
          <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
            Regenerate with AI
          </span>
        </button>
      </div>
    </div>
  );
};

// Import icons for collaborate and regenerate buttons
import UsersIcon from '../../../../../../assets/icons/UsersIcon';
import RegenerateIcon from '../../../../../../assets/icons/RegenerateIcon';

export default EditorToolbar;