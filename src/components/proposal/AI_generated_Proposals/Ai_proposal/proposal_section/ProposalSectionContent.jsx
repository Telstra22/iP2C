import React, { useRef, useState, useEffect } from 'react'
import EditorToolbar from '../editorToolbar/EditorToolbar'
import CommentsPanel from '../comments/CommentsPanel'
import { Check,Trash2,ChevronDown } from 'lucide-react'

const ProposalSectionContent = ({ 
  section, 
  onToggleSection, 
  onDeleteSubsection, 
  showSectionsList, 
  allSections,
  comments,
  showComments,
  onToggleComments,
  onCollaborate,
  onRate,
  onSource,
  onSave,
  onSelectSection,
  selectedSectionId,
  onChangeSectionTitle,
  onChangeSectionContent,
  onChangeSubsectionTitle,
  onChangeSubsectionContent,
  onRegenerateWithAI
}) => {
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const subsectionContentRefs = useRef({})
  const subsectionTitleRefs = useRef({})
  const [attachments, setAttachments] = useState([])

  // Initialize editable contents when switching sections (avoid per-keystroke updates)
  useEffect(() => {
    try {
      if (titleRef.current) titleRef.current.textContent = section?.title || ''
      if (contentRef.current) contentRef.current.textContent = section?.content || ''
      if (Array.isArray(section?.subsections)) {
        section.subsections.forEach(ss => {
          const tRef = subsectionTitleRefs.current[ss.id]
          const cRef = subsectionContentRefs.current[ss.id]
          if (tRef) tRef.textContent = ss.title || ''
          if (cRef) cRef.textContent = ss.content || ''
        })
      }
    } catch {}
  }, [section?.id])

  const handleAddAttachment = (att) => {
    setAttachments(prev => [...prev, att])
  }

  const handleInsertSpace = () => {
    // If subsections exist, target the last subsection content; otherwise target main content
    const hasSubsections = Array.isArray(section.subsections) && section.subsections.length > 0
    const targetEl = hasSubsections
      ? subsectionContentRefs.current[section.subsections[section.subsections.length - 1].id]
      : contentRef.current
    if (!targetEl) return
    // Focus target and move caret to the end
    targetEl.focus()
    const range = document.createRange()
    range.selectNodeContents(targetEl)
    range.collapse(false)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    // Insert an extra blank line (black), then a placeholder line (black, editable) using Tailwind classes
    const gapHTML = '<div data-gap="1" class="text-[#050505]"><br/></div>'
    const placeholderHTML = '<div data-placeholder="1" class="text-[#050505]">add new context section</div>'
    let inserted = false
    try {
      inserted = document.execCommand('insertHTML', false, gapHTML + placeholderHTML)
    } catch (e) {
      inserted = false
    }
    if (!inserted) {
      // Fallback: append gap then placeholder
      const gap = document.createElement('div')
      gap.setAttribute('data-gap', '1')
      gap.className = 'text-[#050505]'
      gap.appendChild(document.createElement('br'))
      targetEl.appendChild(gap)
      const div = document.createElement('div')
      div.textContent = 'add new context section'
      div.className = 'text-[#050505]'
      // Make placeholder editable so typing happens on it
      // (contentEditable is true by default for parent, but we ensure here)
      // div.setAttribute('contenteditable', 'true') // optional
      div.setAttribute('data-placeholder', '1')
      targetEl.appendChild(div)
      // Place caret inside the placeholder so typing starts there in black
      try {
        const range2 = document.createRange()
        range2.selectNodeContents(div)
        // Select all text so typing replaces the placeholder
        const sel2 = window.getSelection()
        sel2.removeAllRanges()
        sel2.addRange(range2)
      } catch {}
    } else {
      // After execCommand, move caret inside the placeholder element so typing starts there
      try {
        const listPH = targetEl.querySelectorAll('[data-placeholder="1"]')
        const ph = listPH.length ? listPH[listPH.length - 1] : null
        if (ph && targetEl.contains(ph)) {
          const range2 = document.createRange()
          range2.selectNodeContents(ph)
          const sel2 = window.getSelection()
          sel2.removeAllRanges()
          sel2.addRange(range2)
        }
      } catch {}
    }
    // Ensure visibility
    try { targetEl.scrollIntoView({ block: 'end' }) } catch {}
  }
  return (
    <div className='flex flex-col gap-[13px]'>
      {/* Section Header */}
      <div className='flex flex-col gap-[13px] w-[483px]'>
        <div className='relative'>
          <div className='bg-white rounded-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] px-[20px] py-[16px]'>
            <button
              onClick={() => onToggleSection(section.id)}
              className='flex items-center justify-between w-full hover:opacity-70'
            >
              <span className="text-[#000000] font-['Inter',sans-serif] text-[21px] font-semibold leading-[28px]">
                {section.title}
              </span>
              <ChevronDown
                width={30}
                height={30}
                color='#000000'
                className='transform transition-transform'
              />
            </button>
          </div>

          {/* Sections List Dropdown */}
          {showSectionsList && (
            <div className='absolute right-0 top-full mt-2 z-50 bg-white rounded-[12px] border border-[#E5E5E5] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] p-[24px] w-[483px]'>
              <div className='flex flex-col gap-[20px]'>
                {allSections && allSections.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center justify-between cursor-pointer hover:opacity-80'
                    onClick={() => onSelectSection && onSelectSection(item.id)}
                  >
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                      {item.title}
                    </span>
                    {(selectedSectionId ? item.id === selectedSectionId : item.isActive) && (
                      <Check size={24} color='#0D54FF' strokeWidth={3} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section Content with Comments Sidebar */}
      {section.isExpanded && (
        <div className='flex gap-0 min-h-0'>
          {/* Main Content Area */}
          <div className={`bg-white rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] w-full min-h-0`}>
            {/* Editor Toolbar */}
            <EditorToolbar 
              showComments={showComments}
              onToggleComments={onToggleComments}
              onCollaborate={onCollaborate}
              onRate={onRate}
              onSource={onSource}
              onSave={onSave}
              onInsertSpace={handleInsertSpace}
              onAddAttachment={handleAddAttachment}
              onRegenerateWithAI={onRegenerateWithAI}
            />
            {/* Attachments preview list below toolbar */}
            {attachments.length > 0 && (
              <div className='px-[40px] pb-[8px]'>
                <div className='flex flex-wrap gap-[12px] items-center'>
                  {attachments.map((att, idx) => (
                    <div key={idx} className='flex items-center gap-[10px] border border-[#E5E5E5] rounded-[6px] px-[10px] py-[8px] bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.05)]'>
                      {att.type === 'image' ? (
                        <img src={att.url} alt={att.name} className='w-[48px] h-[48px] object-cover rounded-[4px]' />
                      ) : (
                        <div className='w-[48px] h-[48px] rounded-[4px] bg-[#F5F0F0] flex items-center justify-center text-[#050505]'>PDF</div>
                      )}
                      <span className="text-[#050505] font-['Inter',sans-serif] text-[16px] font-normal leading-normal max-w-[280px] truncate">{att.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Main Content arranged side-by-side with comments when shown */}
            <div className='flex flex-col gap-[21px] px-[40px] py-[14px] pb-[80px]'>
              <div className={`${showComments ? 'flex gap-[24px] items-start' : 'block'}`}>
                {/* Content column */}
                <div className={`${showComments ? 'flex-1' : 'w-full'}`}>
                  <div className='flex flex-col gap-[30px]'>
                    {/* Editable Section Title (inline) */}
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onInput={(e) => onChangeSectionTitle && onChangeSectionTitle(section.id, e.currentTarget.textContent)}
                      className={`${showComments ? 'w-[856px]' : 'w-full'} text-[#050505] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px] outline-none`}
                      ref={titleRef}
                    />

                    {/* Editable Main Section Text (inline) */}
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onInput={(e) => onChangeSectionContent && onChangeSectionContent(section.id, e.currentTarget.textContent)}
                      className={`${showComments ? 'w-[856px]' : 'w-full'} min-h-[140px] text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] outline-none`}
                      ref={contentRef}
                    />

                    {/* Subsections */}
                    {section.subsections && section.subsections.map((subsection) => (
                      <div key={subsection.id} className='flex flex-col gap-[15px]'>
                        {/* Subsection Header */}
                        <div className='flex items-center gap-[13px]'>
                          <div
                            contentEditable
                            suppressContentEditableWarning
                            onInput={(e) => onChangeSubsectionTitle && onChangeSubsectionTitle(section.id, subsection.id, e.currentTarget.textContent)}
                            className={`${showComments ? 'w-[700px]' : 'w-full'} text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] underline outline-none`}
                            ref={(el) => { subsectionTitleRefs.current[subsection.id] = el }}
                          />
                          <button
                            onClick={() => onDeleteSubsection(subsection.id)}
                            className='hover:opacity-70'
                          >
                            <Trash2 width={20} height={20} color='#050505' />
                          </button>
                        </div>

                        {/* Subsection Content */}
                        <div
                          contentEditable
                          suppressContentEditableWarning
                          onInput={(e) => onChangeSubsectionContent && onChangeSubsectionContent(section.id, subsection.id, e.currentTarget.textContent)}
                          className={`${showComments ? 'w-[860px]' : 'w-full'} min-h-[120px] text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] outline-none ${subsection.isItalic ? 'italic text-[#828282]' : ''}`}
                          ref={(el) => { subsectionContentRefs.current[subsection.id] = el }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments column (right) */}
                {showComments && (
                  <CommentsPanel comments={comments || []} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProposalSectionContent