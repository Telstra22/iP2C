import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateCard from './TemplateCard.jsx'
import { mockRootProps } from './SelectTemplateMockData.js'
import FileUploadZone from '../add_opportunity-details/FileUploadZone.jsx'
import AiLoader from '../../AI_generated_Proposals/AiLoader/AiLoader.jsx'
import PreviewTemplate from './PreviewTemplate.jsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Breadcrumb from '../Breadcrumb'
import Sidebar from '../Sidebar'
import FooterNav from '../FooterNav'

const SelectTemplate = forwardRef(
  (
    {
      onTemplateSelect,
      onUploadChange,
      errorMessage,
      clearError,
      errorTick = 0,
      showLoader: showLoaderProp = false
    },
    ref
  ) => {
    const navigate = useNavigate()

    // -------------- FIXED: Add filePath to all templates --------------
   const [templates, setTemplates] = useState(
  (mockRootProps.templates || []).map((t) => {
    // Map template type/description to correct PDF
    let filePath = null;

    if (t.description?.toLowerCase().includes('word')) {
      filePath = '/select_template/Telstra-Standard-Proposal-Template_v3-1.pdf';
    } else if (t.description?.toLowerCase().includes('excel')) {
      filePath = '/select_template/Excel-Based-RFP-Response.pdf';
    } else if (t.description?.toLowerCase().includes('ppt')) {
      filePath = '/select_template/Control-Centre-Customer-Presentation_2306.pdf';
    }

    return {
      ...t,
      isSelected: false,
      filePath, // ✅ Each template now points to the correct PDF
    };
  })
);


    const [currentIndex, setCurrentIndex] = useState(0)
    const [showLoader, setShowLoader] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [localError, setLocalError] = useState('')
    const [localErrorTick, setLocalErrorTick] = useState(0)
    const [previewTemplate, setPreviewTemplate] = useState(null)
    const [showPreview, setShowPreview] = useState(false)

    const handleTemplateSelect = templateId => {
      setTemplates(prevTemplates =>
        prevTemplates.map(template => ({
          ...template,
          isSelected: template.id === templateId
        }))
      )
      if (onTemplateSelect) onTemplateSelect()
      if (clearError) clearError()
      if (localError) setLocalError('')
    }

    const handlePreview = template => {
      console.log("Preview clicked → Template passed:", template)
      setPreviewTemplate(template)
      setShowPreview(true)
    }

    const handleClosePreview = () => {
      setShowPreview(false)
      setPreviewTemplate(null)
    }

    // Toast Component
    const Toast = ({ message, duration = 3000, trigger = 0 }) => {
      const [visible, setVisible] = useState(Boolean(message))

      useEffect(() => {
        if (!message) return
        setVisible(true)
        const t = setTimeout(() => setVisible(false), duration)
        return () => clearTimeout(t)
      }, [message, duration, trigger])

      if (!visible) return null

      return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999]">
          <div className="min-w-[420px] max-w-[640px] px-6 py-4 rounded-[10px] shadow-[0_6px_16px_rgba(0,0,0,0.15)] bg-white border-b-2 border-b-[#FF4D4F]">
            <span className="text-[#505050] font-inter text-[16px] leading-[22px] whitespace-nowrap inline-block">
              {message}
            </span>
          </div>
        </div>
      )
    }

    const handleNext = () => {
      const hasSelectedTemplate = templates.some(t => t.isSelected)
      const hasUploadedFile = uploadedFiles.length > 0

      if (hasSelectedTemplate || hasUploadedFile) {
        setShowLoader(true)
        setTimeout(() => {
          navigate('/ai_proposal_page')
        }, 3500)
      } else {
        setLocalError('Please select a template or upload a document to proceed.')
        setLocalErrorTick(t => t + 1)
      }
    }

    const handleFileUploadChange = files => {
      setUploadedFiles(files)
      if (onUploadChange) onUploadChange(files)
      if (files.length > 0 && clearError) clearError()
      if (files.length > 0 && localError) setLocalError('')
    }

    const handleCarouselPrevious = () => {
      const pageSize = 3
      setCurrentIndex(prev => Math.max(0, prev - pageSize))
    }

    const handleCarouselNext = () => {
      const pageSize = 3
      const remainder = templates.length % pageSize
      const lastStart =
        templates.length === 0
          ? 0
          : remainder === 0
          ? Math.max(0, templates.length - pageSize)
          : templates.length - remainder
      setCurrentIndex(prev => Math.min(lastStart, prev + pageSize))
    }

    // Expose to parent
    useImperativeHandle(ref, () => ({
      triggerNext: handleNext
    }))

    const pageSize = 3
    const visibleTemplates = templates.slice(currentIndex, currentIndex + pageSize)
    const remainder = templates.length % pageSize
    const lastStart =
      templates.length === 0
        ? 0
        : remainder === 0
        ? Math.max(0, templates.length - pageSize)
        : templates.length - remainder

    const isAtEnd = currentIndex >= lastStart

    return (
      <>
        {(errorMessage || localError) && (
          <Toast message={errorMessage || localError} duration={3000} trigger={localErrorTick + errorTick} />
        )}

        <AiLoader isVisible={showLoader || showLoaderProp} onCancel={() => setShowLoader(false)} />

        <div className="w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden">
          <Breadcrumb current={'Select Template'} />

          <div className="flex flex-1 overflow-hidden">
            <Sidebar
              activeStep={4}
              completedSteps={[0, 1, 2, 3]}
              onStepClick={idx => {
                if (idx === 1) navigate('/opportunity_summary')
                if (idx === 2) navigate('/upload_historical_proposal')
                if (idx === 3) navigate('/create_outline')
                if (idx === 4) navigate('/select_template')
              }}
            />

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden pl-[30px] pr-[37px] pt-0 pb-[37px]">
              <div className="w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px] mt-[37px] mb-[37px]">
                {/* Header */}
                <div className="flex flex-col -ml-[37px] -mr-[37px] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.07)] mb-[40px]">
                  <div className="flex h-[120px] px-[41px] items-center gap-[25px] border-l-[12px] border-[#0D54FF]">
                    <h1 className="text-[#050505] text-[28px] font-semibold">Select Template</h1>
                  </div>
                </div>

                {/* Carousel */}
                <div className="flex flex-col gap-[30px]">
                  <div className="relative flex items-center gap-[20px] w-full">
                    <button
                      onClick={handleCarouselPrevious}
                      disabled={currentIndex === 0}
                      className="hover:opacity-70 disabled:opacity-30 ml-[-30px]"
                    >
                      <ChevronLeft width={32} height={32} />
                    </button>

                    <div className="flex gap-[20px]">
                      {visibleTemplates.map(template => (
                        <TemplateCard
                          key={template.id}
                          template={template}
                          isSelected={template.isSelected}
                          onSelect={handleTemplateSelect}
                          onPreview={handlePreview}
                        />
                      ))}

                      {Array.from({ length: Math.max(0, pageSize - visibleTemplates.length) }).map((_, i) => (
                        <div key={`placeholder-${i}`} className="w-[393px] h-[313px] invisible" />
                      ))}
                    </div>

                    <button
                      onClick={handleCarouselNext}
                      disabled={isAtEnd}
                      className="hover:opacity-70 disabled:opacity-30"
                    >
                      <ChevronRight width={32} height={32} />
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-[22px] mt-[4px]">
                    <div className="flex-1 border-t border-[#D9D9D9]" />
                    <span className="text-[#A0A0A0] text-[20px]">OR</span>
                    <div className="flex-1 border-t border-[#D9D9D9]" />
                  </div>

                  {/* Upload */}
                  <div className="flex flex-col gap-[26px]">
                    <h2 className="text-[#050505] text-[22px] font-medium">Upload Customer Template</h2>

                    <FileUploadZone
                      showUploadGuidelines={true}
                      guidelinesText={'File format must be .ppt, .doc or .xlsx Maximum file size: 10 MB.'}
                      onFilesChange={handleFileUploadChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FooterNav activeStep={4} onPrevious={() => navigate('/create_outline')} onNext={handleNext} />

          {/* ⭐ Preview Modal */}
          <PreviewTemplate isOpen={showPreview} onClose={handleClosePreview} template={previewTemplate} />
        </div>
      </>
    )
  }
)

export default SelectTemplate