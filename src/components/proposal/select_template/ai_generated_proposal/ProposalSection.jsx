import React, { useState, useEffect } from 'react';
import { Pencil, ChevronDown, ChevronUp, Trash, Users, ChevronRight } from 'lucide-react';

const ProposalSection = ({ section, onToggle, onDelete }) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingContent, setEditingContent] = useState({});
  const [titleValue, setTitleValue] = useState(section.title);
  const [contentValues, setContentValues] = useState(section.content);

  useEffect(() => {
    setTitleValue(section.title);
    setContentValues(section.content);
  }, [section.title, section.content]);

  const handleTitleEdit = () => {
    setEditingTitle(true);
  };

  const handleTitleSave = () => {
    setEditingTitle(false);
    // Here you would call a prop function to update the parent state
  };

  const handleContentEdit = (index) => {
    setEditingContent({ ...editingContent, [index]: true });
  };

  const handleContentSave = (index) => {
    const newEditing = { ...editingContent };
    delete newEditing[index];
    setEditingContent(newEditing);
    // Here you would call a prop function to update the parent state
  };

  const handleContentDelete = (index) => {
    const newContent = contentValues.filter((_, i) => i !== index);
    setContentValues(newContent);
    // Here you would call a prop function to update the parent state
  };

  const getContentStyle = (index) => {
    // First content in section 1.1 - line clamp 4
    if (section.id === '1.1' && index === 0) {
      return {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        lineHeight: '24.14px'
      };
    }
    // First content in section 1.3 - line clamp 2
    if (section.id === '1.3' && index === 0) {
      return {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        lineHeight: '24.14px'
      };
    }
    // Other content in section 1.3 - single line with ellipsis
    if (section.id === '1.3' && index > 0) {
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      };
    }
    // Default - normal text
    return {};
  };

  return (
    <div className="flex flex-col">
      {/* Section header */}
      <div className="flex items-start justify-between gap-[13px] group">
        <div className="flex items-start gap-[13px] flex-1">
        {editingTitle ? (
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            onBlur={handleTitleSave}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleTitleSave();
              } else if (e.key === 'Escape') {
                setTitleValue(section.title);
                setEditingTitle(false);
              }
            }}
            className="subsection-title flex-1 border-b-2 border-blue-500 focus:outline-none bg-blue-50 px-2 py-1"
            autoFocus
          />
        ) : (
          <div className="flex items-center gap-2 flex-1">
            <h3 
              className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] underline cursor-pointer" 
              onClick={onToggle}
            >
              {section.id}. {titleValue}
            </h3>
            <button
              onClick={handleTitleEdit}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded"
              aria-label="Edit title"
            >
              <Pencil size={14} color="#050505" />
            </button>
          </div>
        )}
          <div className="flex items-center gap-[12px] pt-[2px]">
            <button onClick={onToggle} aria-label={section.isExpanded ? 'Collapse' : 'Expand'}>
              {section.isExpanded ? (
                <ChevronUp width={18} height={10} color="#050505" />
              ) : (
                <ChevronDown width={18} height={10} color="#050505" />
              )}
            </button>
            <button onClick={onDelete} aria-label="Delete section">
              <Trash width={13} height={16} color="#050505" />
            </button>
          </div>
        </div>

        {/* Show Comments Button */}
        {section.showComments && (
          <button className="flex items-center gap-[11px] px-[16px] py-[12px] rounded-[6px] border border-[#E5E5E5] bg-white hover:bg-gray-50">
            <div className="flex items-center gap-[11px]">
              <Users width={19} height={14} color="#050505" />
              <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                Show Comments
              </span>
            </div>
            <ChevronRight width={10} height={18} color="#050505" />
          </button>
        )}
      </div>

      {/* Section content */}
      {section.isExpanded && contentValues.length > 0 && (
        <div className="flex flex-col gap-[26px] pl-[40px] mt-[26px]">
          {contentValues.map((text, index) => (
            <div key={index} className="relative group">
              {editingContent[index] ? (
                <textarea
                  value={text}
                  onChange={(e) => {
                    const newContent = [...contentValues];
                    newContent[index] = e.target.value;
                    setContentValues(newContent);
                  }}
                  onBlur={() => handleContentSave(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setContentValues(section.content);
                      handleContentSave(index);
                    }
                  }}
                  className="body-text w-full border-2 border-blue-500 rounded px-2 py-1 focus:outline-none bg-blue-50 resize-vertical min-h-[80px]"
                  autoFocus
                />
              ) : (
                <div className="flex items-start gap-2">
                  <p
                    className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] flex-1"
                    style={getContentStyle(index)}
                  >
                    {text}
                  </p>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleContentEdit(index)}
                      className="p-1 hover:bg-gray-100 rounded"
                      aria-label="Edit content"
                    >
                      <Pencil size={14} color="#050505" />
                    </button>
                    <button
                      onClick={() => handleContentDelete(index)}
                      className="p-1 hover:bg-gray-100 rounded"
                      aria-label="Delete content"
                    >
                      <Trash width={13} height={16} color="#050505" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProposalSection;