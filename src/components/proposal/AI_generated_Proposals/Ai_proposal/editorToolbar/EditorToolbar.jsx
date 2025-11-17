import { useRef, useState } from 'react'
import AttachmentDropdown from '../attachmentDoc/AttachmentDropdown'
import {
  Trash2,
  TextSearch,
  Users,
  Star,
  Save,
  ChevronLeft,
  Paperclip,
  ChevronDown,
  FlipVertical,
  Bold,
  Underline,
  Italic,
  TextAlignCenter,
  Baseline,
  List,
  Orbit
} from 'lucide-react'

const EditorToolbar = ({
  showComments,
  onToggleComments,
  onCollaborate,
  onRate,
  onSource,
  onSave,
  onInsertSpace,
  onAddAttachment,
  onRegenerateWithAI
}) => {
  const [showAttachmentDropdown, setShowAttachmentDropdown] = useState(false)
  const docInputRef = useRef(null)
  const imgInputRef = useRef(null)

  const handleAttachmentClick = () => {
    setShowAttachmentDropdown(!showAttachmentDropdown)
  }

  const handleAttachmentOptionSelect = option => {
    if (option === 'document') {
      if (docInputRef.current) docInputRef.current.click()
    } else if (option === 'image') {
      if (imgInputRef.current) imgInputRef.current.click()
    }
  }

  const handleDocChange = e => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    onAddAttachment &&
      onAddAttachment({ type: 'document', name: file.name, url, file })
    e.target.value = ''
  }

  const handleImgChange = e => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    onAddAttachment &&
      onAddAttachment({ type: 'image', name: file.name, url, file })
    e.target.value = ''
  }

  const applyCommand = cmd => {
    try {
      document.execCommand(cmd, false, null)
    } catch (e) {
      console.warn('execCommand not supported:', cmd)
    }
  }

  const handleBold = () => applyCommand('bold')
  const handleItalic = () => applyCommand('italic')
  const handleUnderline = () => applyCommand('underline')
  const handleAlignLeft = () => applyCommand('justifyCenter')
  const handleBulletList = () => applyCommand('insertUnorderedList')
  const handleDeleteSelection = () => applyCommand('delete')

  return (
    <div className='flex flex-col'>
      {/* Main Toolbar Row */}
      <div className='flex items-center justify-between px-[31px] py-[20px]'>
        {/* Left Side - Formatting Tools */}
        <div className='flex items-center gap-[19px]'>
          {/* Text Formatting */}
          <div className='flex items-center gap-[20px]'>
            <button
              onMouseDown={e => e.preventDefault()}
              onClick={handleBold}
              className='w-[22px] h-[22px] flex items-center justify-center hover:opacity-70'
            >
              <Baseline width={20} height={20} color='#050505' />
            </button>
            <button
              onMouseDown={e => e.preventDefault()}
              onClick={handleBold}
              className='w-[25px] h-[25px] flex items-center justify-center hover:opacity-70'
            >
              <Bold width={20} height={20} color='#050505' />
            </button>
            <button
              onMouseDown={e => e.preventDefault()}
              onClick={handleItalic}
              className='w-[25px] h-[25px] flex items-center justify-center hover:opacity-70'
            >
              <Italic width={20} height={20} color='#050505' />
            </button>
            <button
              onMouseDown={e => e.preventDefault()}
              onClick={handleUnderline}
              className='w-[25px] h-[25px] flex items-center justify-center hover:opacity-70'
            >
              <Underline width={20} height={20} color='#050505' />
            </button>
          </div>

          <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

          {/* Alignment */}
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={handleAlignLeft}
            className='hover:opacity-70'
          >
            <TextAlignCenter width={20} height={20} color='#050505' />
          </button>

          <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

          {/* Lists */}
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={handleBulletList}
            className='hover:opacity-70'
          >
            <List width={20} height={20} color='#050505' />
          </button>

          <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

          {/* Attachment */}
          <div className='relative flex items-center'>
            <button
              onClick={handleAttachmentClick}
              className='hover:opacity-70'
            >
              <Paperclip width={20} height={20} color='#050505' />
            </button>
            <button
              onClick={handleAttachmentClick}
              className={`ml-[6px] hover:opacity-70 transition-transform ${
                showAttachmentDropdown ? 'rotate-180' : ''
              }`}
              aria-label='Open attachments'
            >
              <ChevronDown width={19} height={19} color='#050505' />
            </button>
            {/* Hidden inputs for attachments */}
            <input
              ref={docInputRef}
              type='file'
              accept='application/pdf'
              onChange={handleDocChange}
              style={{ display: 'none' }}
            />
            <input
              ref={imgInputRef}
              type='file'
              accept='image/png, image/jpeg, image/jpg'
              onChange={handleImgChange}
              style={{ display: 'none' }}
            />

            <AttachmentDropdown
              isOpen={showAttachmentDropdown}
              onClose={() => setShowAttachmentDropdown(false)}
              onSelectOption={handleAttachmentOptionSelect}
            />
          </div>

          <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

          {/* Image (Add space at end) */}
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={onInsertSpace}
            className='hover:opacity-70'
          >
            <FlipVertical width={20} height={20} color='#000000' />
          </button>

          <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

          {/* Delete */}
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={handleDeleteSelection}
            className='hover:opacity-70'
          >
            <Trash2 width={20} height={20} color='#050505' />
          </button>

          <div className='w-[2px] h-[39px] bg-[#D8D8D8]' />

          {/* Dashed Box (Save) */}
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={onSave}
            className='hover:opacity-70'
          >
            <Save width={20} height={20} color='#050505' />
          </button>
        </div>

        {/* Right Side - Action Buttons */}
        <div className='flex items-center gap-[7px] ml-[12px]'>
          {/* Rate */}
          <button
            onClick={onRate}
            className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'
          >
            <Star width={20} height={20} color='#050505' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Rate
            </span>
          </button>

          {/* Source */}
          <button
            onClick={onSource}
            className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'
          >
            <TextSearch width={20} height={20} color='#050505' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Source
            </span>
          </button>

          {/* Collaborate */}
          <button
            onClick={onCollaborate}
            className='flex items-center gap-[5px] px-[16px] py-[14px] rounded-[6px] border border-[#C6C6C6] hover:bg-gray-50'
          >
            <Users width={20} height={20} color='#050505' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Collaborate
            </span>
          </button>

          {/* Regenerate with AI */}
          <button
            onClick={onRegenerateWithAI}
            className='flex items-center gap-[14px] px-[20px] py-[14px] rounded-[6px] hover:opacity-90'
            style={{
              background:
                'linear-gradient(82.57deg, rgba(0,255,225,1) 3.76%, rgba(13,84,255,1) 44.08%, rgba(149,36,198,1) 110.73%)'
            }}
          >
            <Orbit width={23} height={23} color='#FFFFFF' />
            <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px] whitespace-nowrap">
              Regenerate with AI
            </span>
          </button>
        </div>
      </div>

      {/* Second Row - Show/Hide Comments Button */}
      <div className='w-[356] flex items-center justify-end px-[40px] pb-[14px]'>
        <button
          onClick={onToggleComments}
          className='flex items-center justify-between w-full max-w-[300px] px-[16px] py-[14px] rounded-[6px] bg-[var(--black-0,#fff)] border border-[#C6C6C6] hover:bg-gray-50'
        >
          <div className='flex items-center gap-[11px]'>
            <Users width={20} height={20} color='#0D54FF' />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              {showComments ? 'Hide Comments' : 'Show Comments'}
            </span>
          </div>
          <ChevronLeft
            width={28}
            height={28}
            color='#050505'
            className={`transform transition-transform ${
              showComments ? '' : 'rotate-180'
            }`}
          />
        </button>
      </div>
    </div>
  )
}

export default EditorToolbar