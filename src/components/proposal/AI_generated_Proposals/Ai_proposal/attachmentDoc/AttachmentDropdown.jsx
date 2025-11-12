import React, { useEffect, useRef } from 'react'

const AttachmentDropdown = ({ isOpen, onClose, onSelectOption }) => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOptionClick = (option) => {
    onSelectOption(option)
    onClose()
  }

  return (
    <div
      ref={dropdownRef}
      className='absolute top-full left-0 mt-[8px] bg-white rounded-[6px] border border-[#D9D9D9] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] py-[12px] px-[16px] z-50 min-w-[280px]'
    >
      <div className='flex flex-col gap-[15px]'>
        <button
          onClick={() => handleOptionClick('document')}
          className="text-left text-[#050505] font-['Inter',sans-serif] text-[21px] font-normal leading-normal hover:opacity-70 transition-opacity"
        >
          1. Attach Ref document
        </button>
        <button
          onClick={() => handleOptionClick('image')}
          className="text-left text-[#050505] font-['Inter',sans-serif] text-[21px] font-normal leading-normal hover:opacity-70 transition-opacity"
        >
          2. Attach image
        </button>
      </div>
    </div>
  )
}

export default AttachmentDropdown
