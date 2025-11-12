import React from 'react'

const ProposalContentSection = ({ section }) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      {/* Section Title */}
      <h2 className={`text-[#0D54FF] font-['Inter',sans-serif] text-[17.57px] font-bold leading-[23px]`}>
        {section.title}
      </h2>

      {/* Section Content */}
      {section.content && (
        <p className="text-[#050505] font-['Inter',sans-serif] text-[17.57px] font-normal leading-[23px] whitespace-pre-line">
          {section.content}
        </p>
      )}

      {/* Subsections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className='flex flex-col gap-[20px] pl-[32px]'>
          {section.subsections.map((subsection) => (
            <div key={subsection.id} className='flex flex-col gap-[12px]'>
              <h3 className="text-[#050505] font-['Inter',sans-serif] text-[17.57px] font-semibold leading-[23px]">
                {subsection.title}
              </h3>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[17.57px] font-normal leading-[23px] whitespace-pre-line">
                {subsection.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProposalContentSection
