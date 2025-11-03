import React from 'react';
import ProposalSection from '../ProposalSection';

const ProposalContent = ({ content, onToggleSection, onDeleteSection, onEditTitle }) => {
  return (
    <div className="flex flex-col gap-[26px]">
      <h1 className="heading-tertiary">{content.title}</h1>
      
      {content.sections.map((section) => (
        <ProposalSection
          key={section.id}
          section={section}
          onToggle={() => onToggleSection(section.id)}
          onDelete={() => onDeleteSection(section.id)}
        />
      ))}
    </div>
  );
};

export default ProposalContent;