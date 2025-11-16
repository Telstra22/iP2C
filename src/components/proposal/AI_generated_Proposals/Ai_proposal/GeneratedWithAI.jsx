import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, ChevronRight, Trash2 } from 'lucide-react'
import Breadcrumb from '../../upload_document/Breadcrumb'
import ProposalActionButtons from './proposal_section/ProposalActionButtons'
import ChatSidebar from './agentHuddle/ChatSidebar'
import CollaborationModal from './collaborate/CollaborationModal'
import RatingModal from './rating/RatingModal'
import DocumentSourceModal from './SourceDoc/DocumentSourceModal'
import PreviewProposalPage from './preview/PreviewProposalPage'
import { mockRootProps, mockProposalContent } from './GeneratedWithAIMockData'
import GeneratedAIHuddle from './GeneratedAIHuddle'

const GeneratedWithAI = () => {
  const navigate = useNavigate()
  const [showComments, setShowComments] = useState(false)
  const [showCollaborationModal, setShowCollaborationModal] = useState(false)
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [showDocumentSourceModal, setShowDocumentSourceModal] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [content, setContent] = useState(mockProposalContent)

  const handleDeleteSubsection = (subsectionId) => {
    setContent(prev => ({
      ...prev,
      subsections: prev.subsections.filter(s => s.id !== subsectionId)
    }))
  }

  const handleAddSection = () => {
    navigate('/add-section')
  }

  const handlePreview = () => {
    setShowPreview(true)
  }

  const handleSaveExit = () => {
    console.log('Save and exit')
    navigate('/manage_proposals')
  }

  const handleToggleComments = () => setShowComments(!showComments)
  const handleCollaborate = () => setShowCollaborationModal(true)
  const handleCloseCollaboration = () => setShowCollaborationModal(false)
  const handleRate = () => setShowRatingModal(true)
  const handleCloseRating = () => setShowRatingModal(false)
  const handleSource = () => setShowDocumentSourceModal(true)
  const handleCloseDocumentSource = () => setShowDocumentSourceModal(false)

  return (
    <div className='w-full h-screen bg-[#F6F6F6] flex flex-col overflow-hidden'>
      {/* Breadcrumb */}
      <Breadcrumb current={mockRootProps.currentPage} />

      {/* Agent Huddle Status Bar */}
      {/* <AgentHuddleBar agentStatus={mockRootProps.agentStatus} /> */}
      <GeneratedAIHuddle agentStatus={mockRootProps.agentStatus} />

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

          {/* Proposal Content Section */}
          <div className='flex flex-col gap-[21px]'>
            {/* Regenerated Header with Show Comments Button */}
            <div className='flex items-start justify-between'>
              <p className="flex-1 text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal italic leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                {content.regeneratedHeader}
              </p>
              
              {/* Show Comments Button */}
              <button
                onClick={handleToggleComments}
                className='flex items-center gap-[11px] px-[20px] py-[10px] rounded-[6px] hover:bg-white transition-colors shrink-0 ml-[20px]'
              >
                <Users width={19} height={14} color='#0D54FF' strokeWidth={1.6} />
                <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                  Show Comments
                </span>
                <ChevronRight width={10} height={18} color='#050505' />
              </button>
            </div>

            {/* Main Content */}
            <div className='flex flex-col gap-[30px]'>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] whitespace-pre-line">
                {content.mainContent}
              </p>

              {/* Subsections */}
              {content.subsections.map((subsection) => (
                <div key={subsection.id} className='flex flex-col gap-[15px]'>
                  {/* Subsection Header */}
                  <div className='flex items-center gap-[13px]'>
                    <h3 className="flex-1 text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] underline">
                      {subsection.title}
                    </h3>
                    <button
                      onClick={() => handleDeleteSubsection(subsection.id)}
                      className='hover:opacity-70 shrink-0'
                      aria-label="Delete subsection"
                    >
                      <Trash2 width={13} height={16} color='#050505' />
                    </button>
                  </div>

                  {/* Subsection Content */}
                  <p 
                    className={`text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] whitespace-pre-line ${subsection.isItalic ? 'italic text-[#828282]' : ''} ${subsection.isCollapsed ? 'line-clamp-3 overflow-hidden' : ''}`}
                    style={subsection.isCollapsed ? {
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3
                    } : {}}
                  >
                    {subsection.content}
                  </p>
                </div>
              ))}
            </div>
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

      {/* Preview Overlay */}
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

export default GeneratedWithAI