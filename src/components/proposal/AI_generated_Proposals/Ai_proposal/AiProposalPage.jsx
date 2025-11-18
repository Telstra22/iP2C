import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../../upload_document/Breadcrumb'
import ProposalActionButtons from './proposal_section/ProposalActionButtons'
import ProposalSectionContent from './proposal_section/ProposalSectionContent'
import ChatSidebar from './agentHuddle/ChatSidebar'
import CollaborationModal from './collaborate/CollaborationModal'
import RatingModal from './rating/RatingModal'
import DocumentSourceModal from './SourceDoc/DocumentSourceModal'
import PreviewProposalPage from './preview/PreviewProposalPage'
import { mockRootProps } from './proposal_section/AiProposalPageMockData'
import { comments as commentsData } from './comments/commentsMockData'

const AiProposalPage = () => {
  const navigate = useNavigate()
  const [sections, setSections] = useState(mockRootProps.sections)
  const [selectedSectionId, setSelectedSectionId] = useState(1)
  const [showComments, setShowComments] = useState(false)
  const [showSectionsList, setShowSectionsList] = useState(false)
  const [showCollaborationModal, setShowCollaborationModal] = useState(false)
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [showDocumentSourceModal, setShowDocumentSourceModal] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleToggleSection = (sectionId) => {
    // Toggle the dropdown from any section header
    setShowSectionsList(!showSectionsList)
  }

  const handleSelectSection = (sectionId) => {
    setSelectedSectionId(sectionId)
    setSections(prev => prev.map(s => ({ ...s, isExpanded: s.id === sectionId })))
    setShowSectionsList(false)
  }

  // Edit handlers
  const handleChangeSectionTitle = (sectionId, newTitle) => {
    setSections(prev => prev.map(s => s.id === sectionId ? { ...s, title: newTitle } : s))
  }

  const handleChangeSectionContent = (sectionId, newContent) => {
    setSections(prev => prev.map(s => s.id === sectionId ? { ...s, content: newContent } : s))
  }

  const handleChangeSubsectionTitle = (sectionId, subsectionId, newTitle) => {
    setSections(prev => prev.map(s => {
      if (s.id !== sectionId) return s
      const subsections = (s.subsections || []).map(ss => ss.id === subsectionId ? { ...ss, title: newTitle } : ss)
      return { ...s, subsections }
    }))
  }

  const handleChangeSubsectionContent = (sectionId, subsectionId, newContent) => {
    setSections(prev => prev.map(s => {
      if (s.id !== sectionId) return s
      const subsections = (s.subsections || []).map(ss => ss.id === subsectionId ? { ...ss, content: newContent } : ss)
      return { ...s, subsections }
    }))
  }

  const handleDeleteSubsection = (subsectionId) => {
    console.log('Delete subsection:', subsectionId)
    // Implement delete logic
  }

  const handleAddSection = () => {
    navigate('/add-section')
  }

  const handlePreview = () => {
    setShowPreview(true)
  }

  const handleSaveExit = () => {
    try {
      const card = {
        id: '1',
        title: 'A-01284889',
        category: 'Real Estate | Melbourne',
        customer: 'Total Bricks Pvt. Ltd.',
        template: 'Standard',
        createdOn: 'Sep 25, 2025 06:29 AM',
        updatedOn: 'Sep 25, 2025 06:47 AM',
        statusKey: 'active'
      }
      localStorage.setItem('newProposalCard', JSON.stringify(card))
    } catch {}
    navigate('/manage_proposals')
  }

  const handleSave = () => {
    try {
      localStorage.setItem('proposalSections', JSON.stringify(sections))
      console.log('Proposal saved to localStorage')
    } catch (e) {
      console.warn('Failed to save proposal:', e)
    }
  }

  const handleRegenerateWithAI = () => {
    navigate('/generate-ai-blank')
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
      <div className='flex-1 flex overflow-hidden min-h-0'>
        {/* Left Side - Proposal Content */}
        <div className='flex-1 overflow-y-auto px-[68px] py-[37px] pb-[120px] min-h-0'>
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


          {/* Proposal Section (single, based on dropdown selection) */}
          <div className='flex flex-col gap-[13px]'>
            {(() => {
              const section = sections.find((s) => s.id === selectedSectionId) || sections[0]
              return (
                <ProposalSectionContent
                  key={section.id}
                  section={section}
                  onToggleSection={handleToggleSection}
                  onDeleteSubsection={handleDeleteSubsection}
                  showSectionsList={showSectionsList}
                  allSections={mockRootProps.allSections}
                  comments={commentsData}
                  showComments={showComments}
                  onToggleComments={handleToggleComments}
                  onCollaborate={handleCollaborate}
                  onRate={handleRate}
                  onSource={handleSource}
                  onSelectSection={handleSelectSection}
                  selectedSectionId={selectedSectionId}
                  onSave={handleSave}
                  onChangeSectionTitle={handleChangeSectionTitle}
                  onChangeSectionContent={handleChangeSectionContent}
                  onChangeSubsectionTitle={handleChangeSubsectionTitle}
                  onChangeSubsectionContent={handleChangeSubsectionContent}
                  onRegenerateWithAI={handleRegenerateWithAI}
                />
              )
            })()}
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

      {/* Preview Overlay (no routing) */}
      {showPreview && (
        <div className='fixed inset-0 bg-black/30 backdrop-blur-[1px] z-50 flex'>
          <div className='flex-1 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)]'>
            <PreviewProposalPage embedded onClose={() => setShowPreview(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default AiProposalPage