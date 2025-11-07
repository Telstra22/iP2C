import React, { useState } from 'react';
import Breadcrumb from '../../upload_document/Breadcrumb';
import EditorToolbar from './EditorToolbar';
import ActionButtons from './ActionButtons';
import ProposalContent from './ProposalContent';
import ChatSidebar from './ChatSidebar';
import { mockRootProps } from './AIGeneratedProposalMockData';
import { ChevronDown } from 'lucide-react';

const AIGeneratedProposal = () => {
  const [proposalContent, setProposalContent] = useState(mockRootProps.proposalContent);
  const [isMainSectionExpanded, setIsMainSectionExpanded] = useState(true);

  const handleToggleContentSection = (sectionId) => {
    setProposalContent((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    }));
  };

  const handleDeleteSection = (sectionId) => {
    console.log('Delete section:', sectionId);
  };

  const handleAddSection = () => {
    console.log('Add section');
  };

  const handlePreview = () => {
    console.log('Preview proposal');
  };

  const handleDownload = () => {
    console.log('Download proposal');
  };

  const handleSaveExit = () => {
    console.log('Save and exit');
  };

  return (
    <div className="w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden">
      {/* Breadcrumb */}
      <Breadcrumb current={mockRootProps.currentPage} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content - No left sidebar */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="px-[68px] py-[37px]">
            {/* Title and Action Buttons Row */}
            <div className="flex items-center justify-between mb-[37px]">
              <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                AI Generated Proposal
              </h1>
              <ActionButtons
                onAddSection={handleAddSection}
                onPreview={handlePreview}
                onDownload={handleDownload}
                onSaveExit={handleSaveExit}
              />
            </div>

            {/* Main Section Dropdown - Outside the white card */}
            <div className="mb-[13px]">
              <button
                onClick={() => setIsMainSectionExpanded(!isMainSectionExpanded)}
                className="flex items-center gap-[13px]"
              >
                <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                  1. Executive Summary
                </span>
                <ChevronDown
                  width={18}
                  height={10}
                  color="#050505"
                  className={`transform transition-transform ${isMainSectionExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* White Content Card */}
            {isMainSectionExpanded && (
              <div className="bg-white rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] px-[31px] py-[31px]">
                {/* Editor Toolbar */}
                <EditorToolbar />

                {/* Proposal Content */}
                <div className="mt-[46px]">
                  <ProposalContent
                    content={proposalContent}
                    onToggleSection={handleToggleContentSection}
                    onDeleteSection={handleDeleteSection}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Chat Assistant */}
        <ChatSidebar />
      </div>
    </div>
  );
};

export default AIGeneratedProposal;