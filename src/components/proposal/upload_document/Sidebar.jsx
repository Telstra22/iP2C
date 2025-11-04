import React from 'react'
import IP2CLogoIcon from '../../../assets/icons/IP2CLogoIcon'
import FolderIcon from '../../../assets/icons/FolderIcon'
import DocumentIcon from '../../../assets/icons/DocumentIcon'
import ConnectionIcon from '../../../assets/icons/ConnectionIcon'
import ListIcon from '../../../assets/icons/ListIcon'
import TemplateIcon from '../../../assets/icons/TemplateIcon'
import { Check } from 'lucide-react'

const Sidebar = ({ onStepClick, activeStep = 0, completedSteps = [] }) => {
  const steps = [
    {
      icon: FolderIcon,
      label: 'Add Opportunity Details',
      iconWidth: 22,
      iconHeight: 21
    },
    {
      icon: DocumentIcon,
      label: 'Opportunity Summary',
      iconWidth: 17,
      iconHeight: 22
    },
    {
      icon: ConnectionIcon,
      label: 'Select Source Connection',
      iconWidth: 20,
      iconHeight: 18
    },
    { icon: ListIcon, label: 'Create Outline', iconWidth: 20, iconHeight: 16 },
    {
      icon: TemplateIcon,
      label: 'Select Template',
      iconWidth: 22,
      iconHeight: 17
    }
  ]
  // Completed state is controlled by parent via completedSteps

  return (
    <div className='relative w-[491px] bg-white flex flex-col pb-[50px] flex-shrink-0'>
      {/* Logo Section */}
      <div className='flex px-[27px] py-[20px] flex-col items-start gap-[10px] self-stretch border-b-[2px] border-[#EFEFEF] bg-white mb-[19px]'>
        <div className='flex items-center gap-[22px]'>
          <IP2CLogoIcon width={63} height={63} />
          <div className='flex flex-col gap-[4px]'>
            <span className="text-[#050505] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px]">
              iP2C
            </span>
            <span className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
              Ai-Powered B2B Platform
            </span>
          </div>
        </div>
      </div>

      {/* Steps Navigation (scrollable with bottom padding) */}
      <div className='flex flex-col relative'>
        {steps.map((step, index) => {
          const IconComponent = step.icon
          const isActive = index === activeStep
          const isChecked = completedSteps.includes(index)
          return (
            <div key={index} className='relative'>
              {/* Active indicator bar */}
              {isActive && (
                <div className='absolute left-0 top-0 w-[10px] h-[102px] bg-[#6CCBFE] rounded-r-[9px]' />
              )}

              {/* Step content (clickable) */}
              <button
                type='button'
                onClick={() => onStepClick?.(index)}
                className={`w-full text-left h-[102px] flex items-center justify-between pl-[29px] pr-[29px] ${
                  isActive ? 'bg-[#D9D9D9]' : 'bg-white'
                } cursor-pointer`}
                aria-pressed={isActive}
              >
                <div className='flex items-center gap-[14px]'>
                  <IconComponent
                    width={step.iconWidth}
                    height={step.iconHeight}
                    color='#505050'
                  />
                  <span className="text-[#000000] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                    {step.label}
                  </span>
                </div>
                <div
                  aria-hidden='true'
                  className={`w-[35px] h-[35px] rounded-[17px] flex-shrink-0 flex items-center justify-center transition-colors ${
                    isChecked
                      ? 'bg-[#fff] border-[2px] border-[#56A72B]'
                      : 'border-[2px] border-[#A0A0A0] bg-transparent'
                  }`}
                >
                  {isChecked ? (
                    <Check size={20} color='#56A72B' strokeWidth={3} />
                  ) : null}
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
