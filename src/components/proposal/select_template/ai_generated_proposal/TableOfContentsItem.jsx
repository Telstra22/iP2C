import React from 'react';
import { ChevronDown,ChevronUp } from 'lucide-react';

const TableOfContentsItem = ({ section, index, onToggle }) => {
  const isActive = section.isExpanded;
  const hasSubsections = section.subsections && section.subsections.length > 0;

  return (
    <div>
      <div
        className={`relative flex items-center justify-between cursor-pointer ${
          isActive ? 'bg-[#edf4fc]' : ''
        }`}
        onClick={onToggle}
      >
        {isActive && (
          <div className="absolute left-0 top-0 bottom-0 w-[10px] bg-[#0d54ff] rounded-r-[10px]" />
        )}
        <div className="flex-1 py-[15px] pl-[67px]">
          <span className={isActive ? 'nav-item-active' : 'nav-item'}>
            {index + 1}. {section.title}
          </span>
        </div>
        <div className="pr-[45px]">
          {isActive ? (
            <ChevronUp width={18} height={10} color="#828282" />
          ) : (
            <ChevronDown width={18} height={10} color="#828282" />
          )}
        </div>
      </div>

      {isActive && hasSubsections && (
        <>
          <div className="mx-[66px] border-t border-[rgba(13,84,255,0.11)] bg-[#edf4fc]" />
          <div className="flex flex-col gap-[5px] pt-[19px] pb-[15px] pl-[87px] bg-[#edf4fc]">
            {section.subsections.map((subsection) => (
              <div
                key={subsection.id}
                className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[41px]"
              >
                {subsection.id}. {subsection.title}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TableOfContentsItem;