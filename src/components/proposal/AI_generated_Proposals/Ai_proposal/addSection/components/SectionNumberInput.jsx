import React, { useState } from 'react';

const SectionNumberInput = ({ sectionNumber, onAdd, onSectionNumberChange, sectionTitle, onSectionTitleChange }) => {
  const [titleInput, setTitleInput] = useState(sectionTitle || '');

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitleInput(value);
    if (onSectionTitleChange) {
      onSectionTitleChange(value);
    }
  };

  const handleAddClick = () => {
    if (onAdd && titleInput.trim()) {
      onAdd(titleInput);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white px-[16px] py-[11px] border-b border-[#E5E5E5] w-[483px]">
      <div className="flex items-center flex-1">
        <span className="text-[#050505] font-['Inter',sans-serif] text-[21px] font-semibold leading-[28px]">
          {sectionNumber}.
        </span>
        <input
          type="text"
          value={titleInput}
          onChange={handleTitleChange}
          placeholder=""
          className="flex-1 ml-[13px] text-[#000000] font-['Inter',sans-serif] text-[20px] font-normal leading-[24px] bg-transparent border-none outline-none"
          style={{ caretColor: '#000000' }}
        />
      </div>
      <button
        onClick={handleAddClick}
        disabled={!titleInput.trim()}
        className={`text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] hover:underline ml-[16px] ${!titleInput.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Add
      </button>
    </div>
  );
};

export default SectionNumberInput;