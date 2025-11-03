import React, { useState } from 'react';
import BotIcon from '../upload_document/BotIcon';
import TemplateCard from './TemplateCard';
import { mockRootProps } from './SelectTemplateMockData';

const SelectTemplate = () => {
  const [templates, setTemplates] = useState(mockRootProps.templates);
  const [selectedTemplateId, setSelectedTemplateId] = useState('1');

  const handleTemplateSelect = (templateId) => {
    setTemplates(prevTemplates =>
      prevTemplates.map(template => ({
        ...template,
        isSelected: template.id === templateId
      }))
    );
    setSelectedTemplateId(templateId);
  };

  return (
    <div>
      {/* Agent Huddle */}
      <BotIcon className="mb-[37px]" />

      {/* Main Content Card */}
      <div className="w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px]">
        {/* Page Title */}
        <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px] mb-[46px]">
          Select Template
        </h1>

        {/* Template Cards Grid - 3 per row */}
        <div className="grid grid-cols-3 gap-[39px]">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={handleTemplateSelect}
              isSelected={template.isSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTemplate;