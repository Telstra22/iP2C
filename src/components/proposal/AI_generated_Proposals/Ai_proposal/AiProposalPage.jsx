import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../Header'
import Breadcrumb from '../../upload_document/Breadcrumb'
import ProposalActionButtons from './ProposalActionButtons'
import ProposalSectionContent from './ProposalSectionContent'
import ChatSidebar from './ChatSidebar'
import CollaborationModal from './CollaborationModal'
import RatingModal from './RatingModal'
import DocumentSourceModal from './DocumentSourceModal'
import { mockRootProps } from './AiProposalPageMockData'

const AiProposalPage = () => {
  const navigate = useNavigate()
  const [sections, setSections] = useState(mockRootProps.sections)
  const [showComments, setShowComments] = useState(true)
  const [showSectionsList, setShowSectionsList] = useState(false)
  const [showCollaborationModal, setShowCollaborationModal] = useState(false)
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [showDocumentSourceModal, setShowDocumentSourceModal] = useState(false)

  const handleToggleSection = (sectionId) => {
    // For section 1, toggle the dropdown list instead of expanding/collapsing
    if (sectionId === 1) {
      setShowSectionsList(!showSectionsList)
    } else {
      setSections(prev =>
        prev.map(section =>
          section.id === sectionId
            ? { ...section, isExpanded: !section.isExpanded }
            : section
        )
      )
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
    navigate('/preview-proposal')
  }

  const handleSaveExit = () => {
    console.log('Save and exit')
    // Implement save and exit logic
  }

  const handleToggleComments = () => {
    setShowComments(!showComments)
  }

  const handleCollaborate = () => {
    setShowCollaborationModal(true)
  }

  const handleCloseCollaboration = () => {
    setShowCollaborationModal(false)
  }

  const handleRate = () => {
    setShowRatingModal(true)
  }

  const handleCloseRating = () => {
    setShowRatingModal(false)
  }

  const handleSource = () => {
    setShowDocumentSourceModal(true)
  }

  const handleCloseDocumentSource = () => {
    setShowDocumentSourceModal(false)
  }

  return (
    <div className='w-full h-screen bg-[#F6F6F6] flex flex-col overflow-hidden'>

      {/* Breadcrumb */}
      <Breadcrumb current={mockRootProps.currentPage} />

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
              <ProposalSectionContent
                key={section.id}
                section={section}
                onToggleSection={handleToggleSection}
                onDeleteSubsection={handleDeleteSubsection}
                showSectionsList={showSectionsList}
                allSections={mockRootProps.allSections}
                comments={mockRootProps.comments}
                showComments={showComments}
                onToggleComments={handleToggleComments}
                onCollaborate={handleCollaborate}
                onRate={handleRate}
                onSource={handleSource}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Chat Sidebar */}
        <ChatSidebar />
      </div>

      {/* Collaboration Modal */}
      <CollaborationModal
        isOpen={showCollaborationModal}
        onClose={handleCloseCollaboration}
      />

      {/* Rating Modal */}
      <RatingModal
        isOpen={showRatingModal}
        onClose={handleCloseRating}
      />

      {/* Document Source Modal */}
      <DocumentSourceModal
        isOpen={showDocumentSourceModal}
        onClose={handleCloseDocumentSource}
      />
    </div>
  )
}

export default AiProposalPage