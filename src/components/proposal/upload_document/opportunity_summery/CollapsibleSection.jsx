import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const CollapsibleSection = ({
  title,
  children,
  defaultExpanded = false,
  isCollapsible = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const toggleExpanded = () => {
    if (isCollapsible) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div
      className={`${isExpanded ? 'flex flex-col gap-[26px]' : ''} ${
        !isExpanded ? 'bg-[#F6F6F6] rounded-[9px]' : ''
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          !isExpanded ? 'px-[38px] py-[26px]' : ''
        } ${isCollapsible ? 'cursor-pointer' : ''}`}
        onClick={toggleExpanded}
      >
        <h3 className="text-[#050505] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px]">
          {title}
        </h3>
        {isCollapsible && (
          <div>
            {isExpanded ? (
              <ChevronUp width={30} height={30} className='text-[#050505]' />
            ) : (
              <ChevronDown width={30} height={30} className='text-[#050505]' />
            )}
          </div>
        )}
      </div>
      {isExpanded && children}
    </div>
  )
}

export default CollapsibleSection
