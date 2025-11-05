import React, { useState } from 'react'
import TemplateCard from './TemplateCard'
import FileUploadIcon from '../../../assets/icons/FileUploadIcon'
import { mockRootProps } from './SelectTemplateMockData'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SelectTemplate = () => {
  const [templates, setTemplates] = useState(
    (mockRootProps.templates || []).map(t => ({ ...t, isSelected: false }))
  )
  const [selectedTemplateId, setSelectedTemplateId] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleTemplateSelect = templateId => {
    setTemplates(prevTemplates =>
      prevTemplates.map(template => ({
        ...template,
        isSelected: template.id === templateId
      }))
    )
    setSelectedTemplateId(templateId)
  }

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(templates.length - 3, prev + 1))
  }

  const visibleTemplates = templates.slice(currentIndex, currentIndex + 3)

  return (
    <div className="flex flex-col bg-[#F6F6F6] min-h-screen">
      {/* Header with Title */}
      <div className="flex flex-col bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.07)]">
        <div className="flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] border-l-[12px] border-[#0D54FF]">
          <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
            Select Template
          </h1>
        </div>
      </div>

      {/* Main Content Card */}
      <div className='w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px]'>
        {/* Template Cards with Carousel */}
        <div className="flex flex-col gap-[26px]">
          <div className="relative flex items-center gap-[20px]">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex-shrink-0 disabled:opacity-30 hover:opacity-70 transition-opacity"
              aria-label="Previous templates"
            >
              <ChevronLeft width={32} height={32} color="#B4B4B4" />
            </button>

            {/* Template Cards - 3 visible at a time */}
            <div className='flex gap-[20px]'>
              {visibleTemplates.map(template => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onSelect={handleTemplateSelect}
                  isSelected={template.isSelected}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= templates.length - 3}
              className="flex-shrink-0 disabled:opacity-30 hover:opacity-70 transition-opacity"
              aria-label="Next templates"
            >
              <ChevronRight width={32} height={32} color="#050505" />
            </button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-[22px] mt-[4px]">
            <div className="flex-1 h-[1px] border-t border-[#D9D9D9]" />
            <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
              OR
            </span>
            <div className="flex-1 h-[1px] border-t border-[#D9D9D9]" />
          </div>

          {/* Upload your own Template */}
          <div className="flex flex-col gap-[26px]">
            <h2 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-medium leading-[30px]">
              Upload your own Template
            </h2>
            
            {/* File Upload Zone */}
            <div className="w-full h-[183px] border-2 border-dashed border-[#D9D9D9] rounded-[9px] flex flex-col items-center justify-center gap-[23px]">
              <FileUploadIcon width={32} height={43} color="#C6C6C6" />
              <div className="flex flex-col items-center gap-[6px]">
                <div className="flex items-center gap-[5px]">
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                    Drag and Drop file here or
                  </span>
                  <button className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] underline hover:opacity-80">
                    Choose file
                  </button>
                </div>
                <p className="text-[#A0A0A0] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
                  File format must be .ppt, .doc or .xlsx  Maximum file size: 10 MB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTemplate