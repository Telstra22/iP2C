import React, { useState } from 'react'
import { Trash2, Check } from 'lucide-react'
import { UI_STRINGS } from './mockData'

const EditableTextArea = ({ initialValue, onSave, onDiscard, showActionsInitially = false, readOnly = false, onRequestEdit }) => {
  const [value, setValue] = useState(initialValue ?? '')
  const [isEdited, setIsEdited] = useState(showActionsInitially)

  // Keep local value in sync if parent resets initialValue
  React.useEffect(() => {
    setValue(initialValue ?? '')
    setIsEdited(showActionsInitially)
  }, [initialValue, showActionsInitially])

  const handleChange = e => {
    if (readOnly) return
    setValue(e.target.value)
    setIsEdited(true)
  }

  const handleSave = () => {
    if (typeof onSave === 'function') onSave(value)
    setIsEdited(false)
  }

  const handleDiscard = () => {
    setValue(initialValue ?? '')
    setIsEdited(false)
    if (typeof onDiscard === 'function') onDiscard()
  }

  return (
    <div className='flex flex-col gap-[20px]'>
      <textarea
        value={value}
        onChange={handleChange}
        readOnly={readOnly}
        className={`w-full min-h-[167px] px-[22px] py-[20px] text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px] ${readOnly ? 'border-0 shadow-none bg-transparent' : 'border-[1.5px] border-[#0D54FF] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.14)] bg-white'} rounded-[9px] focus:outline-none resize-none`}
        onFocus={() => { if (readOnly && typeof onRequestEdit === 'function') onRequestEdit() }}
        onClick={() => { if (readOnly && typeof onRequestEdit === 'function') onRequestEdit() }}
      />

      {isEdited && !readOnly && (
        <div className='flex items-center justify-end gap-[30px]'>
          <button
            onClick={handleDiscard}
            className="flex items-center gap-[8px] text-[#828282] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Trash2 size={24} color='#828282' className="w-[24px] h-[24px] aspect-[1/1]" />
            {UI_STRINGS.editableDiscard}
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-[8px] text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
          >
            {UI_STRINGS.editableSave}
            <Check size={20} color='#0D54FF' />
          </button>
        </div>
      )}
    </div>
  )
}

export default EditableTextArea
