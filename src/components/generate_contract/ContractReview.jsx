import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Check, Star, Users, Sparkles, Bot, RefreshCw } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import DownloadIcon from '../../assets/icons/DownloadIcon';
import SendIcon from '../../assets/icons/SendIcon';
import BoldIcon from '../../assets/icons/BoldIcon';
import ItalicIcon from '../../assets/icons/ItalicIcon';
import UnderlineIcon from '../../assets/icons/UnderlineIcon';
import AlignLeftIcon from '../../assets/icons/AlignLeftIcon';
import AttachmentDropdownIcon from '../../assets/icons/AttachmentDropdownIcon';
import LinkIcon from '../../assets/icons/LinkIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import CopyDocIcon from '../../assets/icons/CopyDocIcon';
import ContractHeader from './ContractHeader';
import Breadcrumb from './Breadcrumb';
import { contractIssues, contractContent, contractMockRootProps } from './ContractReviewMockData';

function ContractReview() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Issues');
  const [isExpanded, setIsExpanded] = useState(true);
  const initialSectionId =
    contractMockRootProps.allSections.find((s) => s.isActive)?.id ||
    (contractMockRootProps.allSections[0] && contractMockRootProps.allSections[0].id);
  const [selectedSectionId, setSelectedSectionId] = useState(initialSectionId);
  const [showSectionsList, setShowSectionsList] = useState(false);

  const handleSelectSection = (id) => {
    setSelectedSectionId(id);
    setShowSectionsList(false);
    setIsExpanded(true);
  };

  const currentSectionTitle =
    contractMockRootProps.allSections.find((s) => s.id === selectedSectionId)?.title ||
    (contractMockRootProps.allSections[0] && contractMockRootProps.allSections[0].title);

  const currentSectionContent = contractContent.filter(
    (section) => section.sectionId === selectedSectionId
  );

  return (
    <div className="flex flex-col h-screen bg-(--color-background-light)">
      <ContractHeader />
      <div className="flex flex-col flex-1 overflow-hidden bg-(--color-background-light)">
        <Breadcrumb />

        {/* Main Content */}
        <div className="flex-1 overflow-hidden px-[66px] pb-8">
          {/* Title and Actions */}
          <div className="flex items-center justify-between mb-[30px]">
            <h1 className="contract-title">AI Generated Contract</h1>
            <div className="flex items-center gap-[6px]">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-(--color-border-gray) rounded-lg hover:bg-gray-50 transition-colors">
                <DownloadIcon width={16} height={16} className="text-(--color-text-primary)" />
                <span className="action-button-text text-(--color-text-primary)">Download</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-(--color-primary-blue) rounded-lg hover:bg-blue-50 transition-colors">
                <span className="action-button-text text-(--color-primary-blue)">Save & Exit</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-(--color-primary-blue) rounded-lg hover:bg-(--color-primary-dark-blue) transition-colors">
                <SendIcon width={24} height={24} className="text-white" />
                <span className="action-button-text text-white">Send for Review</span>
              </button>
            </div>
          </div>

          {/* Editor and Sidebar Layout */}
          <div className="flex gap-6" style={{ height: 'calc(100vh - 248px)' }}>
            {/* Left: Contract Editor */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Top Row: Section Dropdown and Action Buttons */}
              <div className="flex items-start justify-between gap-4 mb-[14px]">
                {/* Section Dropdown - Left Side */}
                <div className="relative w-[483px]">
                  <div className="bg-white rounded-md border border-(--color-border-gray) px-[15px] py-3 shadow-[0px_4px_14px_rgba(0,0,0,0.12)]">
                    <button
                      type="button"
                      onClick={() => setShowSectionsList(!showSectionsList)}
                      className="flex items-center justify-between w-full hover:opacity-70"
                    >
                      <span className="section-header truncate">
                        {currentSectionTitle}
                      </span>
                      <ChevronDown
                        width={24}
                        height={24}
                        color="#000000"
                        className={`transform transition-transform ${showSectionsList ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  {showSectionsList && (
                    <div className="absolute right-0 top-full mt-2 z-50 bg-white rounded-[12px] border border-[#E5E5E5] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] p-[24px] w-[483px]">
                      <div className="flex flex-col gap-[20px]">
                        {contractMockRootProps.allSections.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between cursor-pointer hover:opacity-80"
                            onClick={() => handleSelectSection(item.id)}
                          >
                            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                              {item.title}
                            </span>
                            {item.id === selectedSectionId && (
                              <Check size={24} color="#0D54FF" strokeWidth={3} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons - Right Side */}
                <div className="flex items-center gap-[6px]">
                  <button className="flex items-center justify-center gap-[5px] h-[55px] px-4 py-2.5 bg-white border border-(--color-border-gray) rounded-md hover:bg-gray-50 transition-colors">
                    <Star width={20} height={20} className="text-(--color-text-primary)" />
                    <span className="text-[18px] font-medium text-(--color-text-primary)">Rate</span>
                  </button>
                  <button className="flex items-center justify-center gap-[5px] h-[55px] px-4 py-2.5 bg-white border border-(--color-border-gray) rounded-md hover:bg-gray-50 transition-colors">
                    <Users width={20} height={20} className="text-(--color-text-primary)" />
                    <span className="text-[18px] font-medium text-(--color-text-primary)">Collaborate</span>
                  </button>
                  <button
                    className="flex items-center justify-between gap-2.5 w-[299px] h-[55px] px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                    style={{
                      background: 'linear-gradient(85deg, rgba(0, 255, 225, 0.78) -24.07%, rgba(13, 84, 255, 0.78) 16.75%, rgba(149, 36, 198, 0.78) 64.85%, rgba(255, 137, 0, 0.78) 146.63%), #FFF'
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <RefreshCw width={24} height={24} className="text-white" />
                      <span className="text-[18px] font-medium text-white">Revalidate with AI</span>
                    </div>
                    <div className="px-2.5 py-1 border-2 border-white rounded">
                      <span className="text-[14px] font-semibold text-white">BETA</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Main Content Section */}
              <div className="flex-1 bg-white border border-(--color-border-gray) rounded-md shadow-editor overflow-hidden flex flex-col">

                {/* Editor Toolbar and Content */}
                {isExpanded && (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Toolbar */}
                    <div className="flex items-center gap-[19px] px-6 py-[10px] border-b border-(--color-border-gray)">
                      <div className="flex items-center gap-5">
                        <BoldIcon width={16} height={22} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                        <ItalicIcon width={15} height={19} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                        <ItalicIcon width={11} height={18} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                        <UnderlineIcon width={16} height={21} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                      </div>
                      <div className="w-[2px] h-[39px] bg-(--color-toolbar-divider)" />
                      <AlignLeftIcon width={23} height={17} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                      <div className="w-[2px] h-[39px] bg-(--color-toolbar-divider)" />
                      <div className="cursor-pointer hover:opacity-70">
                        <svg width="23" height="17" viewBox="0 0 23 17" fill="none">
                          <circle cx="2" cy="2" r="2" fill="currentColor" className="text-(--color-text-primary)" />
                          <rect x="6" y="0" width="17" height="4" fill="currentColor" className="text-(--color-text-primary)" />
                          <circle cx="2" cy="8.5" r="2" fill="currentColor" className="text-(--color-text-primary)" />
                          <rect x="6" y="6.5" width="17" height="4" fill="currentColor" className="text-(--color-text-primary)" />
                          <circle cx="2" cy="15" r="2" fill="currentColor" className="text-(--color-text-primary)" />
                          <rect x="6" y="13" width="17" height="4" fill="currentColor" className="text-(--color-text-primary)" />
                        </svg>
                      </div>
                      <div className="w-[2px] h-[39px] bg-(--color-toolbar-divider)" />
                      <AttachmentDropdownIcon width={53} height={30} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                      <div className="w-[2px] h-[39px] bg-(--color-toolbar-divider)" />
                      <LinkIcon width={21} height={22} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                      <div className="w-[2px] h-[39px] bg-(--color-toolbar-divider)" />
                      <DeleteIcon width={21} height={24} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                      <div className="w-[2px] h-[39px] bg-(--color-toolbar-divider)" />
                      <CopyDocIcon width={20} height={20} className="text-(--color-text-primary) cursor-pointer hover:opacity-70" />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-auto px-[40px] py-[21px] custom-scrollbar">
                      <p className="text-[18px] italic text-(--color-italic-text) mb-[21px]">
                        No issues detected in this section
                      </p>
                      <div className="body-text whitespace-pre-line">
                        {currentSectionContent
                          .map((section) => `${section.title}\n${section.content}`)
                          .join('\n\n')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Contract Assistant Sidebar */}
            <div className="w-[793px] min-w-[793px] h-full bg-(--color-sidebar-bg) border-l border-(--color-sidebar-border) rounded-t-[9px] shadow-[-4px_0px_13px_rgba(0,0,0,0.10)] flex flex-col overflow-hidden">

              {/* Header */}
              <div className="flex items-center gap-2.5 px-6 py-[18px] border-b border-(--color-chat-header-border) shadow-assistant-header">
                <Bot width={24} height={24} className="text-(--color-primary-blue)" />
                <h2 className="tab-text">Contract Assistant</h2>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-[40px] px-6 pt-[22px] pb-[12px] border-b border-(--color-sidebar-border)">
                <button
                  onClick={() => setActiveTab('Issues')}
                  className={`tab-text pb-2 border-b-2 transition-colors ${
                    activeTab === 'Issues' 
                      ? 'border-(--color-primary-blue) text-(--color-text-primary)' 
                      : 'border-transparent text-(--color-text-secondary)'
                  }`}
                >
                  Issues
                </button>
                <button
                  onClick={() => setActiveTab('Chatbot')}
                  className={`tab-text pb-2 border-b-2 transition-colors ${
                    activeTab === 'Chatbot' 
                      ? 'border-(--color-primary-blue) text-(--color-text-primary)' 
                      : 'border-transparent text-(--color-text-secondary)'
                  }`}
                >
                  Chatbot
                </button>
                <button
                  onClick={() => setActiveTab('Comments')}
                  className={`tab-text pb-2 border-b-2 transition-colors ${
                    activeTab === 'Comments' 
                      ? 'border-(--color-primary-blue) text-(--color-text-primary)' 
                      : 'border-transparent text-(--color-text-secondary)'
                  }`}
                >
                  Comments
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-auto px-6 py-5 custom-scrollbar">
                {activeTab === 'Issues' && (
                  <div className="flex flex-col gap-[18px]">
                    {/* Issues Count Card */}
                    <div className="relative h-[83px] rounded-lg overflow-hidden">
                      <div className="absolute inset-0" style={{background: 'linear-gradient(90deg, #0d54ff 0%, #9524c6 100%)'}} />
                      <div className="relative h-full flex flex-col items-center justify-center text-white">
                        <div className="text-[64px] font-semibold leading-[1]">10</div>
                        <div className="text-[18px] font-normal leading-[1.2]">Issues detected</div>
                      </div>
                    </div>

                    {/* Issues List */}
                    <div className="flex flex-col">
                      {contractIssues.map((issue, index) => (
                        <React.Fragment key={issue.id}>
                          {index > 0 && <div className="h-px bg-(--color-sidebar-border)" />}
                          <div className="flex items-center justify-between py-[18px]">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <span className="issue-title flex-shrink truncate">{issue.title}</span>
                              <span className="issue-number flex-shrink-0">{issue.issueNumber}</span>
                            </div>
                            <button 
                              onClick={() => navigate('/contract-issue')}
                              className="text-[18px] font-normal text-(--color-issue-link) hover:underline flex-shrink-0 ml-4"
                            >
                              Open
                            </button>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'Chatbot' && (
                  <div className="flex items-center justify-center h-full text-(--color-text-secondary)">
                    Chatbot content coming soon
                  </div>
                )}

                {activeTab === 'Comments' && (
                  <div className="flex items-center justify-center h-full text-(--color-text-secondary)">
                    Comments content coming soon
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractReview;