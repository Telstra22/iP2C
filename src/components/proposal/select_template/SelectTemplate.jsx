import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateCard from './TemplateCard'
import { mockRootProps } from './SelectTemplateMockData'
import FileUploadZone from '../upload_document/add_opportunity-details/FileUploadZone.jsx'
import FooterNav from '../upload_document/FooterNav'
import AiLoader from '../AI_generated_Proposals/AiLoader'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SelectTemplate = ({ onTemplateSelect, onUploadChange, errorMessage, clearError }) => {
  const navigate = useNavigate()
  const [templates, setTemplates] = useState(
    (mockRootProps.templates || []).map(t => ({ ...t, isSelected: false }))
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLoader, setShowLoader] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleTemplateSelect = templateId => {
    setTemplates(prevTemplates =>
      prevTemplates.map(template => ({
        ...template,
        isSelected: template.id === templateId
      }))
    )
    if (onTemplateSelect) onTemplateSelect()
    if (clearError) clearError()
  }

  const handleNext = () => {
    const hasSelectedTemplate = templates.some(t => t.isSelected)
    const hasUploadedFile = uploadedFiles.length > 0
    
    if (hasSelectedTemplate || hasUploadedFile) {
      // Show loader
      setShowLoader(true)
      
      // Simulate AI generation time (3-5 seconds), then navigate
      setTimeout(() => {
        navigate('/ai-generated-proposal')
      }, 3500)
    }
  }

  const handlePrevious = () => {
    navigate(-1)
  }

  const handleCancelLoader = () => {
    setShowLoader(false)
  }

  const handleFileUploadChange = (files) => {
    setUploadedFiles(files)
    if (onUploadChange) onUploadChange(files)
    if (files && files.length > 0 && clearError) clearError()
  }

  const hasSelectedTemplate = templates.some(t => t.isSelected)
  const hasUploadedFile = uploadedFiles.length > 0
  const isNextEnabled = hasSelectedTemplate || hasUploadedFile

  const handleCarouselPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleCarouselNext = () => {
    setCurrentIndex(prev => Math.min(templates.length - 3, prev + 1))
  }

  const visibleTemplates = templates.slice(currentIndex, currentIndex + 3)
  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex >= templates.length - 3

  return (
    <>
      <AiLoader isVisible={showLoader} onCancel={handleCancelLoader} />
      <div className="flex flex-col bg-[#F6F6F6] h-full overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-[66px]">
        {/* Main Content Card */}
        <div className='w-[1330px] bg-white rounded-[9px] px-[37px] pt-0 pb-[37px] mt-[37px] mb-[37px]'>
        {/* Header (matching Create_Outline design) */}
        <div className='flex flex-col -ml-[37px] -mr-[37px] items-start self-stretch bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] mb-[40px]'>
          <div className='flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] self-stretch border-l-[12px] border-[#0D54FF]'>
            <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
              Select Template
            </h1>
          </div>
        </div>

        {/* Template Cards with Carousel */}
        <div className="flex flex-col gap-[30px]">
          {/* Error message at top of card */}
        {errorMessage && (
          <div className="mt-[10px] mb-[-10px] text-[#FF0000] text-[16px] leading-[22px] px-[2px]">{errorMessage}</div>
        )}
            <div className="relative flex items-center gap-[20px] w-full">
              {/* Left Arrow */}
              <button
                onClick={handleCarouselPrevious}
                disabled={currentIndex === 0}
                className="flex-shrink-0 disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed hover:opacity-70 transition-opacity ml-[-30px]"
                aria-label="Previous templates"
              >
                <ChevronLeft width={32} height={32} color={isAtEnd ? "#050505" : "#B4B4B4"} />
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
                onClick={handleCarouselNext}
                disabled={currentIndex >= templates.length - 3}
                className="flex-shrink-0 disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
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
              Upload Customer Template
            </h2>
            
            {/* File Upload Zone */}
            <FileUploadZone
              showUploadGuidelines={true}
              guidelinesText={"File format must be .ppt, .doc or .xlsx Maximum file size: 10 MB."}
              onFilesChange={handleFileUploadChange}
            />
          </div>
        </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNav
        activeStep={4}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isVerified={isNextEnabled}
      />
    </div>
    </>
  )
}

export default SelectTemplate