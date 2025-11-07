import React from 'react';
import ProposalSection from './ProposalSection';

const ProposalContent = ({ content, onToggleSection, onDeleteSection }) => {
  return (
    <div className="flex flex-col gap-[26px]">
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