import React from 'react'
import PreviewBreadcrumb from './PreviewBreadcrumb'
import PreviewActionButtons from './PreviewActionButtons'
import ProposalContentSection from './ProposalContentSection'
import RiskScoreSidebar from './RiskScoreSidebar'
import { mockRootProps } from './PreviewProposalMockData'

const PreviewProposalPage = () => {
  const handleDownload = () => {
    console.log('Download proposal')
    // Implement download logic
  }

  const handleEditSection = () => {
    console.log('Edit section')
    // Implement edit section logic
  }

  const handleSaveExit = () => {
    console.log('Save and exit')
    // Implement save and exit logic
  }

  const handleRiskAssessment = () => {
    console.log('Open risk assessment')
    // Implement risk assessment logic
  }

  const handleSendMessage = (message) => {
    console.log('Send message:', message)
    // Implement send message logic
  }

  return (
    <div className='w-full h-screen bg-[#F6F6F6] flex flex-col overflow-hidden'>
      {/* Breadcrumb */}
      <PreviewBreadcrumb breadcrumbPath={mockRootProps.breadcrumbPath} />

      {/* Main Content Area */}
      <div className='flex-1 flex overflow-hidden'>
        {/* Left Side - Proposal Content */}
        <div className='flex-1 overflow-y-auto'>
          <div className='px-[68px] py-[37px]'>
            {/* Title and Action Buttons */}
            <div className='flex items-center justify-between mb-[13px]'>
              <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                Preview Proposal
              </h1>
              <PreviewActionButtons
                onDownload={handleDownload}
                onEditSection={handleEditSection}
                onSaveExit={handleSaveExit}
              />
            </div>

            {/* Proposal Content */}
            <div className='bg-white rounded-[9px] border border-[#D9D9D9] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] px-[32px] py-[40px]'>
              <div className='flex flex-col gap-[40px]'>
                {mockRootProps.proposalContent.sections.map((section) => (
                  <ProposalContentSection key={section.id} section={section} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Risk Score Sidebar */}
        <RiskScoreSidebar
          onRiskAssessment={handleRiskAssessment}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  )
}

export default PreviewProposalPage