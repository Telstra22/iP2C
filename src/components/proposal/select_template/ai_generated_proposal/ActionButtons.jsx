import React from 'react';
import { Download, Check, Maximize,Pencil } from 'lucide-react';

const ActionButtons = ({ onAddSection, onPreview, onDownload, onSaveExit }) => {
  return (
    <div className="flex items-center gap-[11px]">
      {/* Add Section */}
      <button
        onClick={onAddSection}
        className="flex items-center gap-[10px] px-[20px] py-[13px] border border-[#C6C6C6] rounded-[6px] bg-white hover:bg-gray-50"
        aria-label="Add section"
      >
        <Pencil width={18} height={18} />
        <span className="text-[#272727] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Add Section
        </span>
      </button>

      {/* Preview Proposal */}
      <button
        onClick={onPreview}
        className="flex items-center gap-[10px] px-[20px] py-[13px] border border-[#C6C6C6] rounded-[6px] bg-white hover:bg-gray-50"
        aria-label="Preview proposal"
      >
        <Maximize width={16} height={20} />
        <span className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Preview Proposal
        </span>
      </button>

      {/* Download */}
      <button
        onClick={onDownload}
        className="flex items-center gap-[10px] px-[20px] py-[13px] border border-[#C6C6C6] rounded-[6px] bg-white hover:bg-blue-50"
        aria-label="Download"
      >
        <Download width={16} height={16} color="#0D54FF" />
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Download
        </span>
      </button>

      {/* Save & Exit */}
      <button
        onClick={onSaveExit}
        className="flex items-center gap-[10px] px-[20px] py-[13px] bg-[#0D54FF] rounded-[6px] hover:bg-[#0040D9]"
        aria-label="Save and exit"
      >
        <Check width={17} height={13} color="#FFFFFF" />
        <span className="text-white font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Save & Exit
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;