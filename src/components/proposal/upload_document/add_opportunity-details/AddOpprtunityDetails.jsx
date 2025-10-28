import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Download, Check, CircleAlert } from 'lucide-react'
import Breadcrumb from '../Breadcrumb.jsx'
import Sidebar from '../Sidebar.jsx'
import FileUploadZone from './FileUploadZone.jsx'
import FooterNav from '../FooterNav.jsx'
import Blank_Opportunity_Summery from '../opportunity_summery/Blank_Opportunity_Summery.jsx'
import OpportunitySummery from '../opportunity_summery/Opportunity_Summery.jsx'
import Source_Connection from '../source_connection/Source_Connection.jsx'
import Create_Outline from '../create_outline/Create_Outline.jsx'
import BotIcon from '../BotIcon.jsx'

const UploadProposalDocument = () => {
  const navigate = useNavigate()
  const [opportunityId, setOpportunityId] = useState('')
  const [activeStep, setActiveStep] = useState(0)
  const [mainUploadCount, setMainUploadCount] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([]) // indexes of steps completed
  const [allowSummary, setAllowSummary] = useState(false) // only true after Generate Summary with AI

  const handleDownloadQuestionnaire = () => {
    // Download the existing CSV from public folder
    const fileName = 'Customer-Question-Fill.csv'
    const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/'
    const url = base.replace(/\/$/, '/') + fileName
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(s => Math.max(0, s - 1))
      return
    }
    navigate(-1)
  }

  const handleNext = () => {
    if (activeStep === 0) {
      // Only proceed if required inputs provided on step 0
      const isGenerateEnabled =
        opportunityId.trim().length > 0 && mainUploadCount >= 1
      if (!isGenerateEnabled) return
      // Mark step 0 as complete and go to step 1 (Opportunity Summary)
      setCompletedSteps(prev => (prev.includes(0) ? prev : [...prev, 0]))
      setAllowSummary(true)
      setActiveStep(1)
      return
    }
    // For subsequent steps, just advance
    setCompletedSteps(prev => (prev.includes(activeStep) ? prev : [...prev, activeStep]))
    setActiveStep(s => Math.min(s + 1, 4))
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className='w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px]'>
            {/* Header with AI Agent Status */}
            <div className='flex items-start justify-between mb-[45px]'>
              <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                Add Opportunity Details
              </h1>
              <BotIcon />
            </div>

            {/* Form Content */}
            <div className='flex flex-col gap-[50px]'>
              {/* Opportunity ID Section */}
              <div className='flex flex-col gap-[9px]'>
                <label className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                  Add your Opportunity ID
                  <span className='text-[#FF0000]'>*</span>
                </label>
                <div className='flex flex-col gap-[10px]'>
                  <div className='w-full h-[64px] px-[20px] bg-white rounded-[8px] border border-[#E5E5E5] flex items-center'>
                    <input
                      type='text'
                      value={opportunityId}
                      onChange={e => setOpportunityId(e.target.value)}
                      placeholder='Enter Opportunity ID'
                      className="w-full bg-transparent text-[#828282] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px] placeholder:text-[#828282] focus:outline-none"
                    />
                    {opportunityId === '001K0132578HWb16AAD' && (
                      <div className='ml-[10px] w-[28px] h-[28px] rounded-full bg-[#56A72B] flex items-center justify-center flex-shrink-0'>
                        <Check size={18} color='#FFFFFF' strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-light leading-[27px]">
                    Only numeric values allowed
                  </span>
                </div>
              </div>

              {/* Upload Documents Section */}
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[8px]'>
                  <label className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                    Upload relevant opportunity documents
                    <span className='text-[#FF0000]'>*</span>
                  </label>
                  <p className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                    Select a maximum of 5 files to upload. File format must be
                    Word, Excel or PDF. Total file size maximum: 10 MB.
                  </p>
                  {mainUploadCount === 5 && (
                    <p className="text-[#FF0000] font-['Inter',sans-serif] text-[18px] font-medium leading-[24px]">
                      Max file size limit is five
                    </p>
                  )}
                </div>

                <div className='flex flex-col gap-[15px]'>
                  <FileUploadZone
                    onFilesChange={list => setMainUploadCount(list.length)}
                  />
                  <p className="text-[#A0A0A0] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                    File name should not contain the following characters: " #
                    % & * : &lt; &gt; ? \ / &#123; &#125; ~ |
                  </p>
                </div>
              </div>

              {/* Optional Questionnaire Section */}
              <div className='flex flex-col gap-[24px] pb-[50px]'>
                <div className='flex flex-col gap-[8px]'>
                  <label className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                    Upload Customer Questionnaire.xlsx (Optional)
                  </label>
                  <p className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                    Please download and fill the Customer RFp Questionnaire
                    and upload it in the below field
                  </p>
                </div>

                {/* Download Section */}
                <div className='w-full bg-[#F5F5F5] rounded-[8px] px-[24px] py-[20px] flex items-center justify-between'>
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                    Customer Questionnaire.csv (10KB)
                  </span>
                  <button
                    onClick={handleDownloadQuestionnaire}
                    className='flex items-center gap-[8px] px-[20px] py-[10px] bg-white rounded-[6px] border-[1.5px] border-[#0D54FF] hover:bg-[#F0F7FF] transition-colors'
                  >
                    <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[18px] font-medium leading-[24px]">
                      Download
                    </span>
                    <Download size={20} color='#0D54FF' strokeWidth={2} />
                  </button>
                </div>

                <div className='flex flex-col gap-[15px]'>
                  <FileUploadZone />
                  <p className="text-[#A0A0A0] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                    File name should not contain the following characters: " #
                    % & * : &lt; &gt; ? \ / &#123; &#125; ~ |
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      case 1:
        return allowSummary ? <OpportunitySummery /> : <Blank_Opportunity_Summery />
      case 2:
        return allowSummary ? <Source_Connection /> : <Blank_Opportunity_Summery />
      case 3:
        return allowSummary ? <Create_Outline /> : <Blank_Opportunity_Summery />
      default:
        return <Blank_Opportunity_Summery />
    }
  }

  return (
    <div className='w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden'>
      {/* Breadcrumb */}
      {(() => {
        const sidebarStepLabels = [
          'Add Opportunity Details',
          'Opportunity Summary',
          'Select Source Connection',
          'Create Outline',
          'Select Template',
        ]
        const currentLabel = sidebarStepLabels[activeStep]
        return <Breadcrumb current={currentLabel} />
      })()}

      {/* Main Content Area */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar */}
        <Sidebar
          activeStep={activeStep}
          completedSteps={completedSteps}
          onStepClick={idx => {
            // Navigate without marking completed; ticks are only set via Next
            setActiveStep(idx)
          }}
        />

        {/* Main Form Content */}
        <div className='flex-1 overflow-y-auto overflow-x-hidden pl-[68px] pr-[37px] py-[37px]'>
          {renderStepContent()}
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNav
        activeStep={activeStep}
        opportunityId={opportunityId}
        mainUploadCount={mainUploadCount}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  )
}

export default UploadProposalDocument
