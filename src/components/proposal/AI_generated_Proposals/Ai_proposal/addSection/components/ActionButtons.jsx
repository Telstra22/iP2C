import React from 'react';
import CloseXIcon from '../../../../../../assets/icons/CloseXIcon';
import CheckmarkIcon from '../../../../../../assets/icons/CheckmarkIcon';

const ActionButtons = ({ onCancel, onDone }) => {
  return (
    <div className="flex items-center gap-[8px]">
      {/* Cancel Button */}
      <button
        onClick={onCancel}
        className="flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50"
      >
        <CloseXIcon width={15} height={15} />
        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Cancel
        </span>
      </button>

      {/* Done Button */}
      <button
        onClick={onDone}
        className="flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] bg-[#0D54FF] hover:bg-[#0040D9]"
      >
        <CheckmarkIcon width={17} height={13} />
        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Done
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;