import React, { useState, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../upload_document/Breadcrumb';
import AgentHuddleBar from './agentHuddle/AgentHuddleBar';
import ProposalActionButtons from './proposal_section/ProposalActionButtons';
import ChatSidebar from './agentHuddle/ChatSidebar';
import EditorToolbar from './editorToolbar/EditorToolbar';
import CollaborationModal from './collaborate/CollaborationModal';
import RatingModal from './rating/RatingModal';
import DocumentSourceModal from './SourceDoc/DocumentSourceModal';
import CommentsPanel from './comments/CommentsPanel';
import { comments as commentsData } from './comments/commentsMockData';

import { mockRootProps } from './GenerateAIBlankMockData';
import { mockRootProps as aiPageMock } from './proposal_section/AiProposalPageMockData';

const GenerateAIBlank = () => {
  const navigate = useNavigate();
  const [sectionTitle] = useState(mockRootProps.sectionTitle);
  const [isRegenerating] = useState(mockRootProps.isRegenerating);
  const [agentStatus] = useState(mockRootProps.agentStatus);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showCollaborationModal, setShowCollaborationModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showDocumentSourceModal, setShowDocumentSourceModal] = useState(false);
  const [showSectionsList, setShowSectionsList] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(
    (aiPageMock.allSections && (aiPageMock.allSections.find(s => s.title.includes('MEETING YOUR OBJECTIVES'))?.id || aiPageMock.allSections[0]?.id)) || 1
  );

  const handleAddSection = () => {
    navigate('/add-section');
  };

  const handlePreview = () => {
    navigate('/preview-proposal');
  };

  const handleSaveExit = () => {
    navigate('/manage_proposals');
  };


  const handleCollaborate = () => setShowCollaborationModal(true);

  const handleRegenerateWithAI = () => {};

  const handleToggleComments = () => setShowComments(!showComments);
  const handleRate = () => setShowRatingModal(true);
  const handleSource = () => setShowDocumentSourceModal(true);
  const handleCloseCollaboration = () => setShowCollaborationModal(false);
  const handleCloseRating = () => setShowRatingModal(false);
  const handleCloseDocumentSource = () => setShowDocumentSourceModal(false);

  // After landing on this page, auto-navigate to GeneratedWithAI after 2 minutes
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/generated-with-ai');
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [navigate]);
//navigate('/generated-with-ai');
  const handleToggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-[#F6F6F6]">
      {/* Breadcrumb */}
      <Breadcrumb current="Ai Generated Proposal" />

      {/* Agent Huddle Bar */}
      
        <AgentHuddleBar agentStatus={agentStatus} />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Left side - Editor Area */}
        <div className="flex-1 flex flex-col gap-[13px] px-[68px] py-[30px] overflow-y-auto">
          {/* Page Title and Action Buttons */}
          <div className="flex items-center justify-between">
            <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
              AI Generated Proposal
            </h1>
            <ProposalActionButtons
              onAddSection={handleAddSection}
              onPreview={handlePreview}
              onSaveExit={handleSaveExit}
            />
          </div>

          {/* allSections Dropdown (populated list, default to 'MEETING YOUR OBJECTIVES') */}
          <div className='flex flex-col gap-[13px] w-[483px]'>
            <div className='relative'>
              <div className='bg-white rounded-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] px-[20px] py-[16px]'>
                <button
                  onClick={() => setShowSectionsList(!showSectionsList)}
                  className='flex items-center justify-between w-full hover:opacity-70'
                >
                  <span className="text-[#000000] font-['Inter',sans-serif] text-[21px] font-semibold leading-[28px]">
                    {(aiPageMock.allSections || []).find(s => s.id === selectedSectionId)?.title || 'Select Section'}
                  </span>
                  <ChevronDown
                    width={30}
                    height={30}
                    color='#000000'
                    className={`transform transition-transform ${showSectionsList ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {showSectionsList && (
                <div className='absolute right-0 top-full mt-2 z-50 bg-white rounded-[12px] border border-[#E5E5E5] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] p-[24px] w-[483px]'>
                  <div className='flex flex-col gap-[20px]'>
                    {(aiPageMock.allSections || []).map((item) => (
                      <div
                        key={item.id}
                        className='flex items-center justify-between cursor-pointer hover:opacity-80'
                        onClick={() => { setSelectedSectionId(item.id); setShowSectionsList(false); }}
                      >
                        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                          {item.title}
                        </span>
                        {(selectedSectionId ? item.id === selectedSectionId : item.isActive) && (
                          <Check size={24} color='#0D54FF' strokeWidth={3} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Editor Section */}
          <div className="flex flex-col border border-[#C6C6C6] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] bg-white min-h-0">

            {/* Editor Toolbar and Content - only show when expanded */}
            {isExpanded && (
              <>
                {/* Editor Toolbar */}
                <EditorToolbar
                  showComments={showComments}
                  onToggleComments={handleToggleComments}
                  onCollaborate={handleCollaborate}
                  onRegenerateWithAI={handleRegenerateWithAI}
                  onRate={handleRate}
                  onSource={handleSource}
                />
                {/* Regenerating message */}
                {isRegenerating && (
                  <div className="flex flex-col gap-[8px] px-[40px] pt-[0px] pb-[16px] bg-white rounded-b-[9px] h-[848px] overflow-y-auto min-h-0">
                    <div className={`${showComments ? 'flex gap-[24px] items-start' : 'block'}`}>
                      {/* Content column */}
                      <div className={`${showComments ? 'flex-1' : 'w-full'}`}>
                        <p className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal italic leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                          {mockRootProps.regeneratingMessage}
                        </p>
                      </div>
                      {/* Comments column */}
                      {showComments && (
                        <CommentsPanel comments={commentsData} />
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right side - Chat Assistant Sidebar */}
        <div className="sticky top-0">
          <ChatSidebar />
        </div>
      </div>
      {/* Collaboration Modal */}
      <CollaborationModal
        isOpen={showCollaborationModal}
        onClose={handleCloseCollaboration}
      />
      {/* Rating Modal */}
      <RatingModal isOpen={showRatingModal} onClose={handleCloseRating} />
      {/* Document Source Modal */}
      <DocumentSourceModal
        isOpen={showDocumentSourceModal}
        onClose={handleCloseDocumentSource}
      />
    </div>
  );
};

export default GenerateAIBlank;