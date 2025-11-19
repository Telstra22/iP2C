import React from 'react'
import OrchestratorAgentIcon from '../../../../assets/icons/OrchestratorAgentIcon'
import GreenCheckIcon from '../../../../assets/icons/GreenCheckIcon'
import CloseIcon from '../../../../assets/icons/CloseIcon'
import BadgeCircle1 from '../../../../assets/icons/BadgeCircle1'
import BadgeCircle2 from '../../../../assets/icons/BadgeCircle2'
import BadgeCircle3 from '../../../../assets/icons/BadgeCircle3'
import { Check } from 'lucide-react'

const GeneratedAIHuddle = ({ onClose }) => {
  const agentBadges = [
    { label: 'MA', BadgeComponent: BadgeCircle1 },
    { label: 'SC', BadgeComponent: BadgeCircle2 },
    { label: 'PD', BadgeComponent: BadgeCircle3 },
    { label: 'CG', BadgeComponent: BadgeCircle3 }
  ]

  return (
    <div className='flex items-center justify-between border-[1.5px] border-white rounded-b-[7px] shrink-0 overflow-visible w-[1429px] h-[77px] py-[13px] pr-[32px] pl-[70px] bg-[linear-gradient(83deg,_rgba(0,255,225,0.07)_1.85%,_rgba(13,84,255,0.07)_44.08%,_rgba(149,36,198,0.07)_110.73%),_#FFF] shadow-[0_4px_6px_0_rgba(0,0,0,0.07)]'>
      {/* Left Side - Orchestrator Agent */}
      <div className='flex items-center gap-[9px]'>
        <OrchestratorAgentIcon width={27} height={21} />
        <span 
          className="font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] bg-[linear-gradient(84.69deg,_rgba(0,255,225,1)_27.09%,_rgba(13,84,255,1)_15.15%,_rgba(149,36,198,1)_93.31%)] bg-clip-text text-transparent"
        >
          Orchestrator Agent
        </span>
      </div>

      {/* Right Side - Agent Badges, Status Text, and Close Button */}
      <div className='flex items-center'>
        {/* Agent Badges with Check Marks - wrapped to ensure full visibility */}
        <div className='flex items-center mr-[34px] pb-[8px]'>
          {agentBadges.map(({ label, BadgeComponent }, index) => (
            <div 
              key={label} 
              className={`relative shrink-0 ${index > 0 ? 'ml-[-6.5px]' : ''} w-[46px] h-[54px]`}
            >
              {/* Badge Circle Background with Label */}
              <div className='relative w-[46px] h-[46px]'>
                {/* Circle Background */}
                <div className='absolute inset-0'>
                  <BadgeComponent 
                    width={46} 
                    height={46} 
                    className="shrink-0 w-[46px] h-[46px]"
                  />
                </div>
                {/* Agent Label - positioned absolutely to center in the visible circle */}
                <div className='absolute inset-0 flex items-center justify-center pl-[15px]'>
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[17.91px] font-medium leading-[24px]">
                    {label}
                  </span>
                </div>
                {/* Green Check Mark positioned at bottom - match AI loader completion style */}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[16px] h-[16px] rounded-full bg-[#56A72B] flex items-center justify-center'>
                  <Check size={8} width={16} height={16} color='#FFFFFF' strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Text */}
        <span 
          className="shrink-0 text-[18px] font-normal leading-[24px] mr-[33px] text-[rgba(19,60,159,0.60)] font-['Inter',sans-serif]"
        >
          Huddle ended after 0m 42secs..
        </span>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className='flex items-center justify-center shrink-0 hover:opacity-70 transition-opacity w-[21px] h-[21px]'
          aria-label="Close"
        >
          <CloseIcon 
            width={21} 
            height={21} 
            color="#505050"
            className="block"
          />
        </button>
      </div>
    </div>
  )
}

export default GeneratedAIHuddle