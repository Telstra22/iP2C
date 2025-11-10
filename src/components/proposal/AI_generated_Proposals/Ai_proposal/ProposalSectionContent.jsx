import React from 'react'
import { ChevronDown, Trash2, MessageSquare, ChevronRight, Check } from 'lucide-react'

const ProposalSectionContent = ({ section, onToggleSection, onDeleteSubsection, showSectionsList, allSections }) => {
  return (
    <div className='flex flex-col gap-[13px]'>
      {/* Section Header */}
      <div className='flex items-center gap-[13px]'>
        <button
          onClick={() => onToggleSection(section.id)}
          className='flex items-center gap-[13px] hover:opacity-70'
        >
          <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
            {section.title}
          </span>
          <ChevronDown
            size={18}
            color='#050505'
            className={`transform transition-transform ${section.isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Sections List Dropdown */}
      {section.id === 1 && showSectionsList && (
        <div className='bg-white rounded-[12px] border border-[#E5E5E5] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] p-[24px] mb-[13px]'>
          <div className='flex flex-col gap-[20px]'>
            {allSections.map((item) => (
              <div key={item.id} className='flex items-center justify-between'>
                <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                  {item.title}
                </span>
                {item.isActive && (
                  <Check size={24} color='#0D54FF' strokeWidth={3} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section Content */}
      {section.isExpanded && (
        <div className='bg-white rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)]'>
          {/* Editor Toolbar - imported separately */}
          
          {/* Main Content */}
          <div className='flex flex-col gap-[21px] px-[40px] py-[14px]'>
            <div className='flex flex-col gap-[30px]'>
              {/* Main Section Text */}
              <p className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px]">
                {section.content}
              </p>

              {/* Subsections */}
              {section.subsections && section.subsections.map((subsection) => (
                <div key={subsection.id} className='flex flex-col gap-[15px]'>
                  {/* Subsection Header */}
                  <div className='flex items-center gap-[13px]'>
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] underline">
                      {subsection.title}
                    </span>
                    <button
                      onClick={() => onDeleteSubsection(subsection.id)}
                      className='hover:opacity-70'
                    >
                      <Trash2 size={13} color='#050505' strokeWidth={2} />
                    </button>
                  </div>

                  {/* Subsection Content */}
                  <p className={`text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] ${subsection.isItalic ? 'italic text-[#828282]' : ''} ${subsection.id === '1.1' ? 'line-clamp-4' : subsection.id === '1.2' ? 'line-clamp-5' : ''}`}>
                    {subsection.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Show Comments Button */}
            <div className='flex items-center justify-between rounded-[6px] px-[16px] py-[14px] hover:bg-gray-50 cursor-pointer'>
              <div className='flex items-center gap-[11px]'>
                <MessageSquare size={19} color='#050505' strokeWidth={1.5} />
                <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                  Show Comments
                </span>
              </div>
              <ChevronRight size={10} color='#050505' strokeWidth={2} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProposalSectionContent