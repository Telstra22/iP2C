import React from 'react';
import { Download, Trash2,Check } from 'lucide-react';

const ActionButtons = ({ onDelete, onDownload, onSaveExit }) => {
  return (
    <div className="flex items-center gap-[18px]">
      {/* Delete Section */}
      <button
        onClick={onDelete}
        className="flex items-center gap-[10px] px-[20px] py-[13px] border border-transparent rounded bg-white hover:bg-gray-50"
        aria-label="Delete section"
      >
        <span className="button-text text-[#505050] whitespace-nowrap">Delete Section</span>
        <Trash2 width={16} height={18} color="#fb4848" className="w-[24px] h-[24px] aspect-[1/1]" />
      </button>

      {/* Download */}
      <button
        onClick={onDownload}
        className="flex items-center gap-[10px] px-[27px] py-[13px] border border-[#0d54ff] rounded bg-white hover:bg-blue-50"
        aria-label="Download"
      >
        <span className="button-text text-[#0d54ff] whitespace-nowrap">Download</span>
        <Download width={16} height={16} color="#0d54ff"  className="w-[24px] h-[24px] aspect-[1/1]"/>
      </button>

      {/* Save & Exit */}
      <button
        onClick={onSaveExit}
        className="flex items-center gap-[10px] px-[24px] py-[13px] bg-[#0d54ff] rounded hover:bg-[#0040d9]"
        aria-label="Save and exit"
      >
        <span className="button-text text-white whitespace-nowrap">Save & Exit</span>
        <Check width={17} height={13} color="#ffffff"  className="w-[25px] h-[25px] aspect-[1/1]" />
      </button>
    </div>
  );
};

export default ActionButtons;