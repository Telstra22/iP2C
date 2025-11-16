import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../upload_document/Breadcrumb';
import AgentHuddleBar from './agentHuddle/AgentHuddleBar';
import ProposalActionButtons from './proposal_section/ProposalActionButtons';
import ChatSidebar from './agentHuddle/ChatSidebar';
import EditorToolbar from './components/EditorToolbar';
import SectionHeader from './components/SectionHeader';
import EditorContent from './components/EditorContent';
import { mockRootProps } from './GenerateAIBlankMockData';

const GenerateAIBlank = () => {
  const navigate = useNavigate();
  const [sectionTitle] = useState(mockRootProps.sectionTitle);
  const [isRegenerating] = useState(mockRootProps.isRegenerating);
  const [agentStatus] = useState(mockRootProps.agentStatus);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAddSection = () => {
    navigate('/add-section');
  };

  const handlePreview = () => {
    navigate('/preview-proposal');
  };

  const handleSaveExit = () => {
    navigate('/manage_proposals');
  };

  const handleRate = () => {
    console.log('Rate clicked');
  };

  const handleSource = () => {
    console.log('Source clicked');
  };

  const handleCollaborate = () => {
    console.log('Collaborate clicked');
  };

  const handleRegenerateWithAI = () => {
    console.log('Regenerate with AI clicked');
  };

  const handleShowComments = () => {
    console.log('Show comments clicked');
  };

  const handleToggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-full flex flex-col bg-[#F6F6F6] overflow-hidden">
      {/* Breadcrumb */}
      <Breadcrumb current="Ai Generated Proposal" />

      {/* Agent Huddle Bar */}
      <AgentHuddleBar agentStatus={agentStatus} />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
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

          {/* Editor Section */}
          <div className="flex flex-col border border-[#C6C6C6] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] bg-white overflow-hidden">
            {/* Section Header */}
            <SectionHeader
              title={sectionTitle}
              isExpanded={isExpanded}
              onToggle={handleToggleSection}
            />

            {/* Editor Toolbar and Content - only show when expanded */}
            {isExpanded && (
              <>
                {/* Editor Toolbar */}
                <EditorToolbar
                  onRate={handleRate}
                  onSource={handleSource}
                  onCollaborate={handleCollaborate}
                  onRegenerateWithAI={handleRegenerateWithAI}
                />

                {/* Editor Content */}
                <EditorContent
                  isRegenerating={isRegenerating}
                  onShowComments={handleShowComments}
                />
              </>
            )}
          </div>
        </div>

        {/* Right side - Chat Assistant Sidebar */}
        <ChatSidebar />
      </div>
    </div>
  );
};

export default GenerateAIBlank;