import React, { useState } from 'react'
import { Trash2, Check } from 'lucide-react'
import { UI_STRINGS } from './mockData'

const EditableTextArea = ({ initialValue, onSave, onDiscard, showActionsInitially = false, readOnly = false, onRequestEdit, compactBullets = false }) => {
  const [value, setValue] = useState(initialValue ?? '')
  const [isEdited, setIsEdited] = useState(showActionsInitially)
  const textAreaRef = React.useRef(null)

  const autoResize = () => {
    const el = textAreaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  // Keep local value in sync if parent resets initialValue
  React.useEffect(() => {
    setValue(initialValue ?? '')
    setIsEdited(showActionsInitially)
    if (!readOnly) {
      // allow DOM to paint before measuring
      requestAnimationFrame(autoResize)
    }
  }, [initialValue, showActionsInitially, readOnly])

  const handleChange = e => {
    if (readOnly) return
    setValue(e.target.value)
    setIsEdited(true)
    autoResize()
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
      {readOnly ? (
        <div
          className={
            "w-full min-h-[81px] px-0 py-0 text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px] border-0 shadow-none bg-transparent rounded-[9px] break-words"
          }
          onClick={() => { if (readOnly && typeof onRequestEdit === 'function') onRequestEdit() }}
          style={{ whiteSpace: 'pre-wrap' }}
          dangerouslySetInnerHTML={{
            __html: value
              .split('\n')
              .map(line => {
                const bulletLineStyle = compactBullets
                  ? 'margin-bottom: 4px; line-height: 20px;'
                  : 'margin-bottom: 6px; line-height: 22px;'
                // Check if line starts with bullet point
                if (line.trim().startsWith('•')) {
                  return `<div style="${bulletLineStyle}">${line}</div>`;
                }
                // Check if line starts with asterisk
                if (line.trim().startsWith('*')) {
                  const replaced = line.replace(/^\s*\*\s?/, '• ')
                  return `<div style="margin-bottom: 8px;">${replaced}</div>`;
                }
                // Regular line
                return line ? `<div>${line}</div>` : ' ';
              })
              .join('')
          }}
        />
      ) : (
        <textarea
          ref={textAreaRef}
          value={value}
          onChange={handleChange}
          className={
            "w-full min-h-[81px] text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px] border-[1.5px] border-[#0D54FF] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.14)] bg-white px-[22px] py-[20px] rounded-[9px] focus:outline-none resize-none whitespace-pre-wrap"
          }
          style={{ overflow: 'hidden' }}
        />
      )}

      {isEdited && !readOnly && (
        <div className='flex items-center justify-end gap-[30px]'>
          <button
            onClick={handleDiscard}
            className="flex items-center gap-[8px] text-[#272727] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
          >
            {UI_STRINGS.editableDiscard}
            <Trash2 size={24} color='#272727' className="w-[24px] h-[24px] aspect-[1/1]" />
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-[8px] text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
          >
            {UI_STRINGS.editableSave}
            <Check size={32} color='#0D54FF' className="w-[32px] h-[32px] aspect-[1/1]" />
          </button>
        </div>
      )}
    </div>
  )
}

export default EditableTextArea
