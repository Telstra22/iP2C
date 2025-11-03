import React, { useState } from 'react'
import { ChevronDown, ChevronUp, FileCheck } from 'lucide-react'
import VendorQuestionsIcon from '../../../../assets/icons/VendorQuestionsIcon'

const CollapsibleSection = ({
  title,
  children,
  defaultExpanded = false,
  isCollapsible = true,
  hasSpecialIcon = false,
  isExpanded: controlledExpanded,
  onToggle
}) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  
  // Use controlled state if provided, otherwise use internal state
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const toggleExpanded = () => {
    if (isCollapsible) {
      if (onToggle) {
        onToggle()
      } else {
        setInternalExpanded(!internalExpanded)
      }
    }
  }

  const renderSpecialIcon = () => {
    if (title === 'Vendor Questions') {
      return <VendorQuestionsIcon width={30} height={30} color="#050505" />
    }
    if (title === 'Terms & Conditions') {
      return <FileCheck width={30} height={30} className='text-[#050505]' />
    }
    return null
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
        <div className='flex items-center gap-[10px]'>
          {hasSpecialIcon && !isExpanded && renderSpecialIcon()}
          <h3 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-medium leading-[30px]">
            {title}
          </h3>
        </div>
        {isCollapsible && (
          <div>
            {isExpanded ? (
              <ChevronUp width={25} height={25} className='text-[#050505]' />
            ) : (
              <ChevronDown width={25} height={25} className='text-[#050505]' />
            )}
          </div>
        )}
      </div>
      {isExpanded && children}
    </div>
  )
}

export default CollapsibleSection
