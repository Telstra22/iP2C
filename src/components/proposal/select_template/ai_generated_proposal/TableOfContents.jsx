import React from 'react';
import TableOfContentsItem from './TableOfContentsItem';

const TableOfContents = ({ sections, onToggleSection }) => {
  return (
    <div className="w-[491px] bg-white h-full overflow-y-auto">
      <div className="pt-[46px] pb-[68px]">
        <h2 className="heading-secondary mb-[37px] px-[68px]">Table of contents</h2>
        <div className="flex flex-col">
          {sections.map((section, index) => (
            <TableOfContentsItem
              key={section.id}
              section={section}
              index={index}
              onToggle={() => onToggleSection(section.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;