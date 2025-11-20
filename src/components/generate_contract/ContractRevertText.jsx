import React, { useState } from 'react';
import RevertArrowIcon from '../../assets/icons/RevertArrowIcon.svg?react';
import ContractAssistantIcon from '../../assets/icons/ContractAssistantIcon.svg?react';
import ThumbsUpIcon from '../../assets/icons/ThumbsUpIcon.svg?react';
import SmileyEmojiIcon from '../../assets/icons/SmileyEmojiIcon.svg?react';

function ContractRevertText({ onRevert, className = '' }) {
  const [activeTab, setActiveTab] = useState('Comments');
  const [commentText, setCommentText] = useState('');

  const comments = [
    {
      id: 1,
      author: 'Andrew Bernard',
      initials: 'AB',
      timestamp: '27 minutes ago',
      message: 'Hey @Alex.anderson Can you have a look at this please?',
      number: '#1'
    },
    {
      id: 2,
      author: 'Alex Anderson',
      initials: 'AA',
      timestamp: '12 minutes ago',
      message: 'Hi @Andrew.bernard looking into this now',
      number: '#2',
      hasEmoji: true
    },
    {
      id: 3,
      author: 'Andrew Bernard',
      initials: 'AB',
      timestamp: '1 minute ago',
      message: 'Hey thanks a ton!',
      number: '#3'
    }
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {/* Left Side - Contract Content */}
      <div className="flex-1 flex flex-col gap-[17px]">
        {/* No issues text */}
        <p className="text-center italic-text">No issues detected in this section</p>

        {/* AI Suggested Text Container */}
        <div className="rounded-lg border border-[#56a72b] shadow-[0px_4px_8px_rgba(0,0,0,0.10)] p-4 bg-white">
          {/* Contract Text Content */}
          <p className="contract-text mb-4">
            2.1 We agree to supply the Services to you, and you agree to acquire them from us, at the prices and on
            the terms of this Agreement. The Services may be delivered to, and used by, your locations both 
            within and outside Australia, subject to the terms set out herein.
            <br /><br />
            2.2 We may provide the Services using personnel or resources located outside of Australia. Regardless of
            the location from which the Services are delivered or supported, we will ensure that all Services 
            comply with the requirements of this Agreement, including applicable Australian laws, data privacy, 
            and security standards. Any cross-border data transfers or offshore service delivery will be 
            conducted in accordance with your data protection requirements and relevant regulatory obligations,
            and will not diminish our obligations or your rights under this Agreement.
            <br /><br />
            <span className="block ml-8">This wording clarifies:</span>
            <span className="block ml-8">Services can be delivered and used both within and outside Australia.</span>
            <span className="block ml-8">Telstra's obligations remain unchanged regardless of delivery location.</span>
            <span className="block ml-8">Compliance with Australian law, data privacy, and security is explicitly required for offshore delivery.</span>
          </p>

          {/* Divider */}
          <div className="border-t border-[#c6c6c6] mb-4"></div>

          {/* Revert Section */}
          <div className="flex items-center justify-between">
            <span className="revert-label-text">Replaced with AI Suggestion</span>
            <button 
              onClick={onRevert}
              className="flex items-center gap-[5px] hover:opacity-80 transition-opacity"
            >
              <RevertArrowIcon width={19} height={15} className="text-black" />
              <span className="revert-button-text">Revert text</span>
            </button>
          </div>
        </div>

        {/* Original Contract Text */}
        <p className="contract-text line-clamp-[17]">
          2.3 You acknowledge and agree that we use a global services delivery model to deliver our Services to you 
          under this Agreement cost effectively and efficiently. For these purposes, our global services delivery    
          model means that:  
          <br /><br />
          <span className="block ml-8">Certain Services are delivered by Personnel located in Australia, while other kinds of Services are delivered</span>
          <span className="block ml-8">by Personnel located outside of Australia (including the Philippines, India and Malaysia); and</span>
          <span className="block ml-8">Personnel located in Australia and outside of Australia may need to access your Customer Data and    </span>
          <span className="block ml-8">our Service Related Data to provide Services to you.</span>
          <br />
          2.4 From time to time, we may subcontract our obligations under this Agreement and where we subcontract 
          any of our obligations under this Agreement, we will:  
          <br /><br />
          <span className="block ml-8">ensure that the subcontractor has all the necessary skills and resources to perform the work they  </span>
          <span className="block ml-8">TELSTRA LIMITED (ABN 64 086 174 781) | COMPANY 4 AUSTRALIA PTY LTD CONFIDENTIAL undertake;  </span>
          <span className="block ml-8">and not be relieved of our obligations to you under this Agreement for such work.</span>
          <br />
          2.5 We may, without your consent:  
          <br /><br />
          <span className="block ml-8">directly or indirectly (including by way of intra-group arrangements) subcontract all or any part of this </span>
          <span className="block ml-8">Agreement to another Telstra Group Entity that has the sufficient financial capacity to perform our </span>
          <span className="block ml-8">obligations under this Agreement; and do all things reasonably required to give effect to paragraph </span>
          <span className="block ml-8">(a) above.</span>
        </p>
      </div>

      {/* Right Side - Contract Assistant Sidebar */}
      <div className="w-[793px] flex flex-col bg-[#fcfcfc] border-l border-[#d9d9d9] rounded-t-lg shadow-[-4px_0px_13px_rgba(0,0,0,0.10)]">
        {/* Header */}
        <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#dddddd] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
          <ContractAssistantIcon width={35} height={32} className="text-black" />
          <h2 className="assistant-header-text">Contract Assistant</h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-[23px] px-6 pt-6 pb-4">
          <button 
            onClick={() => setActiveTab('Issues')}
            className={activeTab === 'Issues' ? 'tab-text-active' : 'tab-text-inactive'}
          >
            Issues
          </button>
          <button 
            onClick={() => setActiveTab('Chatbot')}
            className={activeTab === 'Chatbot' ? 'tab-text-active' : 'tab-text-inactive'}
          >
            Chatbot
          </button>
          <button 
            onClick={() => setActiveTab('Comments')}
            className={activeTab === 'Comments' ? 'tab-text-active' : 'tab-text-inactive'}
          >
            Comments
          </button>
        </div>

        {/* Tab underline */}
        <div className="border-b border-[#d9d9d9]"></div>

        {/* Comments Content */}
        <div className="flex-1 flex flex-col gap-[23px] p-6 overflow-y-auto">
          {comments.map((comment, index) => (
            <React.Fragment key={comment.id}>
              <div className="flex flex-col gap-[11px]">
                {/* Avatar placeholder */}
                <div className="w-0 h-0"></div>

                {/* Comment Content */}
                <div className="flex flex-col gap-[13px]">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[21px]">
                      <div className={`w-[43px] h-[43px] rounded-full flex items-center justify-center ${comment.initials === 'AB' ? 'bg-[#fb4848]' : 'bg-[#247cff]'}`}>
                        <span className="comment-avatar-text">{comment.initials}</span>
                      </div>
                      <div className="flex flex-col gap-[-8px]">
                        <span className="comment-author-text">{comment.author}</span>
                        <span className="comment-timestamp-text">{comment.timestamp}</span>
                      </div>
                    </div>
                    <div className="w-4 h-1 bg-black"></div>
                  </div>

                  {/* Message */}
                  <p className="comment-message-text">{comment.message}</p>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1 hover:opacity-80">
                        <span className="comment-reply-text">REPLY</span>
                        <ThumbsUpIcon width={19} height={20} className="text-black" />
                      </button>
                    </div>
                    <span className="comment-number-text">{comment.number}</span>
                  </div>

                  {/* Emoji if present */}
                  {comment.hasEmoji && (
                    <SmileyEmojiIcon width={23} height={23} className="self-start" />
                  )}
                </div>
              </div>

              {/* Divider */}
              {index < comments.length - 1 && (
                <div className="border-b border-[#d9d9d9]"></div>
              )}
            </React.Fragment>
          ))}

          {/* Divider before input */}
          <div className="border-b border-[#d9d9d9]"></div>

          {/* Add Comment Section */}
          <div className="flex flex-col gap-[13px]">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment for this section"
              className="comment-input-text bg-transparent border-none outline-none"
            />
            <button className="comment-send-text self-end hover:opacity-80">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractRevertText;