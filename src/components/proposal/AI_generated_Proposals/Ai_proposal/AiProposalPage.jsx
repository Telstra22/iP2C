import React, { useState } from 'react'
import Header from '../../../Header'
import Breadcrumb from '../../upload_document/Breadcrumb'
import AgentHuddleBar from './AgentHuddleBar'
import ProposalActionButtons from './ProposalActionButtons'
import ProposalEditorToolbar from './ProposalEditorToolbar'
import ProposalSectionContent from './ProposalSectionContent'
import ChatSidebar from './ChatSidebar'
import { mockRootProps } from './AiProposalPageMockData'

const AiProposalPage = () => {
  const [sections, setSections] = useState(mockRootProps.sections)
  const [showSectionsList, setShowSectionsList] = useState(false)

  const handleToggleSection = (sectionId) => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    )
    // Toggle sections list when clicking on section 1
    if (sectionId === 1) {
      setShowSectionsList(!showSectionsList)
    }
  }

  const handleDeleteSubsection = (subsectionId) => {
    console.log('Delete subsection:', subsectionId)
    // Implement delete logic
  }

  const handleAddSection = () => {
    console.log('Add section')
    // Implement add section logic
  }

  const handlePreview = () => {
    console.log('Preview proposal')
    // Implement preview logic
  }

  const handleSaveExit = () => {
    console.log('Save and exit')
    // Implement save and exit logic
  }

  return (
    <div className='w-full h-screen bg-[#F6F6F6] flex flex-col overflow-hidden'>

      {/* Breadcrumb */}
      <Breadcrumb current={mockRootProps.currentPage} />

      {/* Agent Huddle Bar */}
      <AgentHuddleBar />

      {/* Main Content Area */}
      <div className='flex-1 flex overflow-hidden'>
        {/* Left Side - Proposal Content */}
        <div className='flex-1 overflow-y-auto px-[68px] py-[37px]'>
          {/* Title and Action Buttons */}
          <div className='flex items-center justify-between mb-[13px]'>
            <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
              {mockRootProps.proposalTitle}
            </h1>
            <ProposalActionButtons
              onAddSection={handleAddSection}
              onPreview={handlePreview}
              onSaveExit={handleSaveExit}
            />
          </div>

          {/* Proposal Sections */}
          <div className='flex flex-col gap-[13px]'>
            {sections.map((section) => (
              <div key={section.id}>
                <ProposalSectionContent
                  section={section}
                  onToggleSection={handleToggleSection}
                  onDeleteSubsection={handleDeleteSubsection}
                  showSectionsList={showSectionsList}
                  allSections={mockRootProps.allSections}
                />
                {section.isExpanded && (
                  <div className='bg-white rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] mt-[-1px]'>
                    <ProposalEditorToolbar />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Chat Sidebar */}
        <ChatSidebar />
      </div>
    </div>
  )
}

export default AiProposalPage