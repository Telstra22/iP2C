import React, { useState } from 'react';
import Breadcrumb from '../../upload_document/Breadcrumb';
import TableOfContents from '../TableOfContents';
import EditorToolbar from '../EditorToolbar';
import ActionButtons from './ActionButtons';
import ProposalContent from '../ProposalContent';
import FloatingChatButton from '../FloatingChatButton';
import { mockRootProps } from '../AIGeneratedProposalMockData';

const AIGeneratedProposal = () => {
  const [tableOfContents, setTableOfContents] = useState(mockRootProps.tableOfContents);
  const [proposalContent, setProposalContent] = useState(mockRootProps.proposalContent);

  const handleToggleTOCSection = (sectionId) => {
    setTableOfContents((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

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
    // Implement delete logic
  };

  const handleDelete = () => {
    console.log('Delete current section');
  };

  const handleDownload = () => {
    console.log('Download proposal');
  };

  const handleSaveExit = () => {
    console.log('Save and exit');
  };

  const handleChatClick = () => {
    console.log('Open chat');
  };

  return (
    <div className="w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden">
      {/* Breadcrumb */}
      <Breadcrumb current={mockRootProps.currentPage} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Table of Contents */}
        <TableOfContents
          sections={tableOfContents}
          onToggleSection={handleToggleTOCSection}
        />

        {/* Main Form Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pl-[30px] pr-[37px] py-[37px]">
        {/* Title and Action Buttons */}
            <div className="flex items-center justify-between mb-[45px]">
              <h1 className="heading-primary">AI Generated Proposal</h1>
              <ActionButtons
                onDelete={handleDelete}
                onDownload={handleDownload}
                onSaveExit={handleSaveExit}
              />
            </div>
          <div className="w-[1331px] bg-white rounded-[9px] px-[37px] py-[37px]">
            

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
        </div>
      </div>

      {/* Floating Chat Button */}
      <FloatingChatButton onClick={handleChatClick} />
    </div>
  );
};

export default AIGeneratedProposal;