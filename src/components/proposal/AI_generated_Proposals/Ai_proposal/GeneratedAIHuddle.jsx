import React from 'react'
import OrchestratorAgentIcon from '../../../../assets/icons/OrchestratorAgentIcon'
import GreenCheckIcon from '../../../../assets/icons/GreenCheckIcon'
import CloseIcon from '../../../../assets/icons/CloseIcon'
import BadgeCircle1 from '../../../../assets/icons/BadgeCircle1'
import BadgeCircle2 from '../../../../assets/icons/BadgeCircle2'
import BadgeCircle3 from '../../../../assets/icons/BadgeCircle3'

const GeneratedAIHuddle = ({ onClose }) => {
  const agentBadges = [
    { label: 'OE', BadgeComponent: BadgeCircle1 },
    { label: 'CC', BadgeComponent: BadgeCircle2 },
    { label: 'OV', BadgeComponent: BadgeCircle3 }
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
              className={`relative shrink-0 ${index > 0 ? 'ml-[-5.68px]' : ''} w-[41.785px] h-[50px]`}
            >
              {/* Badge Circle Background with Label */}
              <div className='relative w-[41.785px] h-[41.785px]'>
                {/* Circle Background */}
                <div className='absolute inset-0'>
                  <BadgeComponent 
                    width={41.785} 
                    height={41.785} 
                    className="shrink-0 w-[41.785px] h-[41.785px]"
                  />
                </div>
                {/* Agent Label - positioned absolutely to center in the visible circle */}
                <div className='absolute inset-0 flex items-center justify-center pl-[6px]'>
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[17.91px] font-medium leading-[24px]">
                    {label}
                  </span>
                </div>
                {/* Green Check Mark positioned at bottom */}
                <div 
                  className='absolute flex items-center justify-center w-[13.395px] h-[13.395px] p-[2.679px] rounded-[6.697px] bg-[#56A72B] gap-[3.349px] left-[23.441px] bottom-[-3.088px]'
                >
                  <GreenCheckIcon 
                    width={7.278} 
                    height={5.369} 
                    className="shrink-0 w-[7.278px] h-[5.369px] text-white"
                  />
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