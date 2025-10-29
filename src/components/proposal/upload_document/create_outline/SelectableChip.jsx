import React from 'react'
import { PlusCircle, X } from 'lucide-react'

function SelectableChip ({ label, selected, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-[18px] px-[20px] py-[11.5px] rounded-[100px] border transition-colors ${
        selected
          ? 'border-[#D9D9D9] bg-white hover:bg-gray-50'
          : 'border-[#D9D9D9] bg-white hover:bg-gray-50'
      }`}
    >
      <span className={`font-['Inter',sans-serif] text-[22px] leading-[30px] ${
        selected 
          ? 'text-[#050505] font-medium' 
          : 'text-[#505050] font-normal'
      }`}>
        {label}
      </span>
      {selected ? (
        <span className="bg-[#0D54FF] rounded-full flex items-center justify-center" style={{ width: 29, height: 29 }}>
          <X width={20} height={20} color="#fff" strokeWidth={2.25} />
        </span>
      ) : (
        <PlusCircle width={29} height={29} color="#A0A0A0" />
      )}
    </button>
  )
}

export default SelectableChip