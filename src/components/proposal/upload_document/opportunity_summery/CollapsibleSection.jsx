import React, { useState } from 'react'
import { ChevronDown, FileCheck } from 'lucide-react'
import VendorQuestionsIcon from '../../../../assets/icons/VendorQuestionsIcon'
import ChevronUpBlueIcon from '../../../../assets/icons/ChevronUpBlueIcon.svg?react'

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
    <div className='flex flex-col'>
      <div
        className={`flex items-center justify-between ${isCollapsible ? 'cursor-pointer' : ''}`}
        onClick={toggleExpanded}
      >
        <div className='flex items-center gap-[10px]'>
          {hasSpecialIcon && !isExpanded && renderSpecialIcon()}
          <h3 className="text-[#0D54FF] font-['Inter',sans-serif] text-[22px] font-medium leading-[30px]">
            {title}
          </h3>
        </div>
        {isCollapsible && (
          <div>
            {isExpanded ? (
              <ChevronUpBlueIcon width={25} height={15} className='text-[#0D54FF]' />
            ) : (
              <ChevronDown width={25} height={15} className='text-[#0D54FF]' />
            )}
          </div>
        )}
      </div>
      {isExpanded && (
        <div className='mt-[22px]'>
          {children}
        </div>
      )}
    </div>
  )
}

export default CollapsibleSection
