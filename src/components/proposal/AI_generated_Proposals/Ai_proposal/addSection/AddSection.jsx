import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButtons from './components/ActionButtons';
import SectionNumberInput from './components/SectionNumberInput';
import EditorToolbar from './components/EditorToolbar';
import ChatAssistant from './components/ChatAssistant';
import { mockRootProps } from './AddSectionMockData';

const AddSection = ({ 
  sectionNumber = mockRootProps.sectionNumber,
  isOpen = true,
  onClose,
  onDone,
  onCancel,
  chatMessages = mockRootProps.chatMessages
}) => {
  const navigate = useNavigate();
  const [editorContent, setEditorContent] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigate('/ai-proposal_page');
    }
    if (onClose) onClose();
  };

  const handleDone = () => {
    if (onDone) {
      onDone();
    } else {
      // Save the section and navigate back
      console.log('Section saved:', editorContent);
      navigate('/ai-proposal_page');
    }
    if (onClose) onClose();
  };

  const handleAdd = (title) => {
    if (!title.trim()) return;

    // Get existing sections from localStorage or use empty array
    const existingSections = JSON.parse(localStorage.getItem('allSections') || '[]');
    
    // Calculate next section number
    const nextId = existingSections.length > 0 
      ? Math.max(...existingSections.map(s => s.id)) + 1 
      : parseInt(sectionNumber);
    
    // Create new section object
    const newSection = {
      id: nextId,
      title: `${sectionNumber}. ${title.toUpperCase()}`,
      isActive: false
    };
    
    // Add to sections array
    const updatedSections = [...existingSections, newSection];
    
    // Save to localStorage
    localStorage.setItem('allSections', JSON.stringify(updatedSections));
    
    console.log('Section added:', newSection);
    
    // Navigate back to proposal page
    navigate('/ai-proposal_page');
  };

  const handleSectionTitleChange = (title) => {
    setSectionTitle(title);
  };

  const handleCollaborate = () => {
    console.log('Collaborate clicked');
  };

  const handleRegenerateWithAI = () => {
    console.log('Regenerate with AI clicked');
  };

  return (
    <div className="fixed inset-0 bg-[#F6F6F6] z-50 flex">
      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Header with Title and Action Buttons */}
        <div className="flex items-center justify-between px-[68px] py-[28px]">
          <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
            AI Generated Proposal
          </h1>
          <ActionButtons onCancel={handleCancel} onDone={handleDone} />
        </div>

        {/* Editor Container */}
        <div className="mx-[67px] mb-[40px] flex flex-col gap-[13px]">
          {/* Section Number Input */}
          <SectionNumberInput 
            sectionNumber={sectionNumber} 
            onAdd={handleAdd}
            sectionTitle={sectionTitle}
            onSectionTitleChange={handleSectionTitleChange}
          />

          {/* Editor Box with Toolbar */}
          <div className="rounded-[0px_9px_9px_9px] border border-[#C6C6C6] bg-white shadow-editor">
            <EditorToolbar 
              onCollaborate={handleCollaborate}
              onRegenerateWithAI={handleRegenerateWithAI}
            />
            
            {/* Editor Content Area */}
            <div 
              className="min-h-[500px] px-[31px] pb-[40px] outline-none"
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => setEditorContent(e.currentTarget.textContent)}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </div>
        </div>
      </div>

      {/* AI Chat Assistant Sidebar */}
      <ChatAssistant messages={chatMessages} />
    </div>
  );
};

export default AddSection;