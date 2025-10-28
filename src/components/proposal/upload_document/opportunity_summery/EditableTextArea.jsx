import React, { useState } from 'react'
import { Trash2, Check } from 'lucide-react'

const EditableTextArea = ({ initialValue, onSave, onDiscard }) => {
  const [value, setValue] = useState(initialValue)
  const [isEdited, setIsEdited] = useState(false)

  const handleChange = e => {
    setValue(e.target.value)
    setIsEdited(true)
  }

  const handleSave = () => {
    onSave(value)
    setIsEdited(false)
  }

  const handleDiscard = () => {
    setValue(initialValue)
    setIsEdited(false)
    onDiscard()
  }

  return (
    <div className='flex flex-col gap-[20px]'>
      <textarea
        value={value}
        onChange={handleChange}
        className="w-full min-h-[167px] px-[22px] py-[20px] text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px] border-[1.5px] border-[#0D54FF] rounded-[9px] bg-white shadow-[inset_0px_3px_4px_rgba(0,0,0,0.14)] focus:outline-none resize-none"
      />
      {isEdited && (
        <div className='flex items-center justify-end gap-[30px]'>
          <button
            onClick={handleDiscard}
            className="flex items-center gap-[8px] text-[#828282] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Trash2 size={20} color='#828282' />
            Discard Changes
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-[8px] text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
          >
            Make Changes
            <Check size={20} color='#0D54FF' />
          </button>
        </div>
      )}
    </div>
  )
}

export default EditableTextArea
