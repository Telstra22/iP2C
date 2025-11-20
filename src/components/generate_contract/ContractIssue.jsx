import React, { useState } from 'react';
import ContractHeader from './ContractHeader';
import ContractRevertText from './ContractRevertText';

import DownloadIcon from '../../assets/icons/DownloadIcon';
import SendIcon from '../../assets/icons/SendIcon';
import BoldIcon from '../../assets/icons/BoldIcon';
import ItalicIcon from '../../assets/icons/ItalicIcon';
import UnderlineIcon from '../../assets/icons/UnderlineIcon';
import AlignLeftIcon from '../../assets/icons/AlignLeftIcon';
import BulletListIcon from '../../assets/icons/BulletListIcon';
import AttachmentDropdownIcon from '../../assets/icons/AttachmentDropdownIcon';
import LinkIcon from '../../assets/icons/LinkIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import CopyDocIcon from '../../assets/icons/CopyDocIcon';
import ChevronRightSmallIcon from '../../assets/icons/ChevronRightSmallIcon.svg?react';
import ChevronDownSmallIcon from '../../assets/icons/ChevronDownSmallIcon.svg?react';
import StarOutlineIcon from '../../assets/icons/StarOutlineIcon.svg?react';
import UsersCollaborateIcon from '../../assets/icons/UsersCollaborateIcon.svg?react';
import RefreshSparkleIcon from '../../assets/icons/RefreshSparkleIcon.svg?react';
import NumberedListIcon from '../../assets/icons/NumberedListIcon.svg?react';
import ImageInsertIcon from '../../assets/icons/ImageInsertIcon.svg?react';
import TableIcon from '../../assets/icons/TableIcon.svg?react';
import MoreOptionsIcon from '../../assets/icons/MoreOptionsIcon.svg?react';
import ContractAssistantIcon from '../../assets/icons/ContractAssistantIcon.svg?react';
import ReplaceSuggestionIcon from '../../assets/icons/ReplaceSuggestionIcon.svg?react';
import SendMessageIcon from '../../assets/icons/SendMessageIcon.svg?react';
import BotChatIcon from '../../assets/icons/BotChatIcon.svg?react';

const ContractIssue = () => {
  const [activeTab, setActiveTab] = useState('Chatbot');
  const [sectionExpanded, setSectionExpanded] = useState(true);
  const [isReplaced, setIsReplaced] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-(--color-background-light)">
      {/* Header */}
      <ContractHeader />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-[66px] pt-4 pb-3">
        <span className="breadcrumb-text">Login</span>
        <ChevronRightSmallIcon width={11} height={18} className="text-(--color-breadcrumb-separator)" />
        <span className="breadcrumb-active">Contract Review</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden pl-[66px] pt-[30px]">
        {/* Title and Actions */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="contract-title">AI Contract Review</h1>
          <div className="flex items-center gap-[6px]">
            <button className="flex items-center gap-2.5 px-6 py-3 bg-white border border-(--color-border-gray) rounded-lg hover:bg-gray-50 transition-colors">
              <DownloadIcon width={16} height={16} className="text-(--color-edit-button)" />
              <span className="action-button-text text-(--color-edit-button)">Download</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-(--color-primary-blue) rounded-lg hover:bg-blue-50 transition-colors">
              <span className="action-button-text text-(--color-primary-blue)">Save & Exit</span>
            </button>
            <button className="flex items-center gap-2.5 px-6 py-3 bg-(--color-primary-blue) rounded-lg hover:bg-(--color-primary-dark-blue) transition-colors">
              <SendIcon width={16} height={16} className="text-white" />
              <span className="action-button-text text-white">Send for Review</span>
            </button>
          </div>
        </div>

        {/* Editor and Sidebar Layout */}
        <div className="flex" style={{ height: 'calc(100vh - 248px)' }}>
          {/* Left: Contract Editor */}
          <div className="flex-1 min-w-0 flex flex-col pr-6 pb-8">
            {/* Top Row: Section Dropdown and Action Buttons */}
            <div className="flex items-start justify-between gap-[7px] mb-[14px]">
              {/* Section Dropdown */}
              <button 
                onClick={() => setSectionExpanded(!sectionExpanded)}
                className="flex items-center justify-between w-[470px] h-[55px] px-[15px] py-3 bg-white border border-(--color-border-gray) rounded-md hover:bg-gray-50 transition-colors"
              >
                <span className="section-header uppercase">2. Services</span>
                <ChevronDownSmallIcon width={18} height={10} className="text-(--color-text-primary)" />
              </button>

              {/* Action Buttons */}
              <div className="flex items-center gap-[7px]">
                <button className="flex items-center justify-center gap-[5px] h-[55px] px-4 py-2.5 bg-white border border-(--color-border-gray) rounded-md hover:bg-gray-50 transition-colors">
                  <StarOutlineIcon width={19} height={18} className="text-(--color-text-primary)" />
                  <span className="text-xl font-medium text-(--color-text-primary)">Rate</span>
                </button>
                <button className="flex items-center justify-center gap-[5px] h-[55px] px-4 py-2.5 bg-white border border-(--color-border-gray) rounded-md hover:bg-gray-50 transition-colors">
                  <UsersCollaborateIcon width={19} height={14} className="text-(--color-text-primary)" />
                  <span className="text-xl font-medium text-(--color-text-primary)">Collaborate</span>
                </button>
                <button 
                  className="flex items-center justify-between gap-3.5 h-[55px] px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(85deg, rgba(0, 255, 225, 0.78) -24.07%, rgba(13, 84, 255, 0.78) 16.75%, rgba(149, 36, 198, 0.78) 64.85%, rgba(255, 137, 0, 0.78) 146.63%), #FFF'
                  }}
                >
                  <div className="flex items-center gap-[6px]">
                    <RefreshSparkleIcon width={23} height={23} className="text-white" />
                    <span className="text-xl font-semibold text-white">Revalidate with AI</span>
                  </div>
                  <div className="px-2.5 py-1 bg-transparent border-2 border-white rounded">
                    <span className="text-base font-semibold text-white">BETA</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Main Editor Section */}
            <div className="flex-1 bg-white border border-(--color-border-gray) rounded-[9px] shadow-editor overflow-hidden flex flex-col">
              {/* Editor Toolbar */}
              <div className="flex items-center gap-[19px] px-[31px] py-[11px] border-b border-(--color-toolbar-divider)">
                {/* Text Formatting */}
                <div className="flex items-center gap-5">
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <BoldIcon width={16} height={22} className="text-(--color-text-primary)" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <ItalicIcon width={11} height={18} className="text-(--color-text-primary)" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <UnderlineIcon width={16} height={21} className="text-(--color-text-primary)" />
                  </button>
                </div>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                {/* Alignment */}
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <AlignLeftIcon width={23} height={17} className="text-(--color-text-primary)" />
                </button>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                {/* Lists */}
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <BulletListIcon width={23} height={17} className="text-(--color-text-primary)" />
                </button>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <NumberedListIcon width={23} height={30} className="text-(--color-text-primary)" />
                </button>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                {/* Attachment */}
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <AttachmentDropdownIcon width={53} height={30} className="text-(--color-text-primary)" />
                </button>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                {/* Link */}
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <LinkIcon width={21} height={22} className="text-(--color-text-primary)" />
                </button>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                {/* Image */}
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <ImageInsertIcon width={21} height={22} className="text-(--color-text-primary)" />
                </button>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                {/* Table */}
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <TableIcon width={21} height={24} className="text-(--color-text-primary)" />
                </button>

                <div className="w-px h-[39px] bg-(--color-toolbar-divider)" />

                {/* More Options */}
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <MoreOptionsIcon width={20} height={20} className="text-(--color-text-primary)" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto px-[37px] py-[22px]">
                <div className="mb-[21px]">
                  <p className="text-lg italic text-(--color-italic-text) mb-[22px]">1 issue detected in this section</p>

                  {isReplaced ? (
                    <ContractRevertText onRevert={() => setIsReplaced(false)} />
                  ) : (
                    <>
                      {/* Issue Box */}
                      <div className="relative mb-[17px] p-[30px] bg-white border border-[#f96449] rounded-lg shadow-[0px_4px_8px_rgba(0,0,0,0.10)]">
                        <span className="absolute top-[16px] left-[30px] text-base font-medium text-[#f96449]">Issue#1</span>
                        <p className="text-lg leading-[23px] text-(--color-text-black) mt-[20px]">
                          2.1. We agree to supply the Services to you, and you agree to acquire them from us, at the prices and on the terms of this Agreement.
                          <br /><br />
                          2.2 We may provide the Services from locations outside of Australia, however this will not reduce our obligations under this Agreement.
                        </p>
                      </div>

                      {/* Regular Content */}
                      <p className="text-lg leading-[24.14px] text-(--color-text-black)">
                        2.3 You acknowledge and agree that we use a global services delivery model to deliver our Services to you under this Agreement cost effectively and efficiently. For these purposes, our global services delivery model means that:<br />
                        Certain Services are delivered by Personnel located in Australia, while other kinds of Services are delivered by Personnel located outside of Australia (including the Philippines, India and Malaysia); and<br />
                        Personnel located in Australia and outside of Australia may need to access your Customer Data and our Service Related Data to provide Services to you.<br />
                        2.4 From time to time, we may subcontract our obligations under this Agreement and where we subcontract any of our obligations under this Agreement, we will:<br />
                        ensure that the subcontractor has all the necessary skills and resources to perform the work they TELSTRA LIMITED (ABN 64 086 174 781) | COMPANY 4 AUSTRALIA PTY LTD CONFIDENTIAL undertake; and not be relieved of our obligations to you under this Agreement for such work.<br />
                        2.5 We may, without your consent:<br />
                        directly or indirectly (including by way of intra-group arrangements) subcontract all or any part of this Agreement to another Telstra Group Entity that has the sufficient financial capacity to perform our obligations under this Agreement; and do all things reasonably required to give effect to paragraph (a) above.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contract Assistant Sidebar */}
          <div className="w-[793px] min-w-[793px] flex flex-col bg-(--color-sidebar-bg) border-l border-(--color-sidebar-border) rounded-t-[9px] shadow-[-4px_0px_13px_rgba(0,0,0,0.10)] overflow-hidden h-full">
            {/* Assistant Header */}
            <div className="flex items-center gap-2.5 px-5 py-[21px] border-b border-(--color-chat-header-border) shadow-assistant-header">
              <ContractAssistantIcon width={35} height={32} className="text-(--color-text-primary)" />
              <h2 className="text-[22px] font-semibold text-(--color-text-primary)" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contract Assistant
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-[43px] px-[26px] pt-[27px] border-b border-(--color-sidebar-border)">
              <button 
                onClick={() => setActiveTab('Issues')}
                className={`text-xl pb-[9px] transition-colors relative ${
                  activeTab === 'Issues' 
                    ? 'font-semibold text-(--color-text-primary)' 
                    : 'font-normal text-(--color-text-primary)'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Issues
                {activeTab === 'Issues' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-(--color-primary-blue)" />
                )}
              </button>
              <button 
                onClick={() => setActiveTab('Chatbot')}
                className={`text-xl pb-[9px] transition-colors relative ${
                  activeTab === 'Chatbot' 
                    ? 'font-semibold text-(--color-text-primary)' 
                    : 'font-normal text-(--color-text-primary)'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Chatbot
                {activeTab === 'Chatbot' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-(--color-primary-blue)" />
                )}
              </button>
              <button 
                onClick={() => setActiveTab('Comments')}
                className={`text-xl pb-[9px] transition-colors relative ${
                  activeTab === 'Comments' 
                    ? 'font-semibold text-(--color-text-primary)' 
                    : 'font-normal text-(--color-text-primary)'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Comments
                {activeTab === 'Comments' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-(--color-primary-blue)" />
                )}
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-(--color-chat-sidebar-bg) px-[26px] py-[28px]">
              {/* Suggestion Content Box */}
              <div className="flex flex-col items-start self-stretch bg-white rounded px-[18px] pr-[18px] pl-3 py-3" style={{ gap: '-4px' }}>
                <div className="flex items-start gap-2 w-full">
                  {/* Bot Chat Icon on Left */}
                  <BotChatIcon width={18} height={16} className="text-(--color-text-primary) mt-1 flex-shrink-0" />
                  
                  <div className="flex-1">
                  <p className="text-xl leading-[30px] text-(--color-text-black)" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Here is a suggestion for #Issue1:
                  </p>
                  <p className="text-xl leading-[30px] text-(--color-text-black) mt-6 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    2.1 We agree to supply the Services to you, and you agree to acquire them from us, at the prices and on the terms of this Agreement. The Services may be delivered to, and used by, your locations both within and outside Australia, subject to the terms set out herein.
                    <br /><br />
                    2.2 We may provide the Services using personnel or resources located outside of Australia. Regardless of the location from which the Services are delivered or supported, we will ensure that all Services comply with the requirements of this Agreement, including applicable Australian laws, data privacy, and security standards. Any cross-border data transfers or offshore service delivery will be conducted in accordance with your data protection requirements and relevant regulatory obligations, and will not diminish our obligations or your rights under this Agreement.
                    <br />
                    This wording clarifies:<br />
                    Services can be delivered and used both within and outside Australia.<br />
                    Telstra's obligations remain unchanged regardless of delivery location.<br />
                    Compliance with Australian law, data privacy, and security is explicitly required for offshore delivery.
                  </p>
                  
                    {/* Replace Button */}
                    <button
                      className="flex items-center gap-2.5 px-4 py-2 hover:bg-white/50 rounded transition-colors"
                      onClick={() => setIsReplaced(true)}
                    >
                      <ReplaceSuggestionIcon width={10} height={8} className="text-(--color-primary-blue)" />
                      <span className="text-lg font-medium text-(--color-primary-blue)" style={{ fontFamily: 'Graphik, sans-serif' }}>
                        Replace Suggestion in Contract
                      </span>
                    </button>
                    {isReplaced && (
                      <button
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-white/50 rounded transition-colors mt-2"
                        onClick={() => setIsReplaced(false)}
                      >
                        {/* <span className="text-lg font-medium text-(--color-primary-blue)" style={{ fontFamily: 'Graphik, sans-serif' }}>
                          Revert
                        </span> */}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="px-[26px] py-[22px] bg-(--color-chat-input-bg)">
              <div className="flex items-center gap-3 px-5 py-4 bg-white border border-(--color-chat-input-border) rounded-lg">
                <input 
                  type="text"
                  placeholder="Ask Contract Assistant"
                  className="flex-1 text-xl leading-[18px] text-(--color-chat-placeholder) outline-none bg-transparent placeholder:text-(--color-chat-placeholder)"
                  style={{ fontFamily: 'Graphik, sans-serif' }}
                />
                <button className="p-1 hover:opacity-80 transition-opacity">
                  <SendMessageIcon width={24} height={24} className="text-(--color-text-primary)" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractIssue;