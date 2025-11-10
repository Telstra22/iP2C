import React from 'react'
import OrchestratorAgentIcon from '../../../../assets/icons/OrchestratorAgentIcon'
import ProposalBuilderIcon from '../../../../assets/icons/ProposalBuilderIcon'
import SoundWaveIcon from '../../../../assets/icons/SoundWaveIcon'

const AgentHuddleBar = () => {
  const agentBadges = [
    { id: 'OE', label: 'OE' },
    { id: 'CC', label: 'CC' },
    { id: 'OV', label: 'OV' }
  ]

  return (
    <div className='flex items-center justify-between px-[70px] h-[77px] border-[1.5px] border-white rounded-b-[7px] shadow-[0px_4px_6px_rgba(0,0,0,0.07)]' style={{
      background: 'linear-gradient(82.57deg, rgba(0,255,225,0.07) 1.86%, rgba(13,84,255,0.07) 44.08%, rgba(149,36,198,0.07) 110.73%), #ffffff'
    }}>
      {/* Left Side - Orchestrator Agent */}
      <div className='flex flex-col gap-[1px]'>
        <div className='flex items-center gap-[9px]'>
          <OrchestratorAgentIcon width={27} height={21} />
          <span className="font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent">
            Orchestrator Agent
          </span>
        </div>
        <span className="text-[rgba(19,60,159,0.50)] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
          Huddle in Progress..
        </span>
      </div>

      {/* Middle - Proposal Writer Agent */}
      <div className='flex items-center gap-[9px]'>
        <div className='w-[22px] h-[21px] bg-[#0D54FF] rounded-sm' />
        <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
          Proposal Writer Agent is working..
        </span>
      </div>

      {/* Right Side - Proposal Builder */}
      <div className='flex items-center gap-[10px] px-[20px] py-[16px] border-[1.5px] rounded-[9px]' style={{
        borderImage: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%) 1',
        borderImageSlice: 1
      }}>
        <div className='flex items-center gap-[6px]'>
          <div className='w-[27px] h-[16px] bg-[#247CFF] rounded-sm' />
          <span className="font-['Inter',sans-serif] text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent">
            Proposal Builder
          </span>
        </div>
        <div className='flex items-center gap-[7px]'>
          <SoundWaveIcon width={28} height={31} />
          <div className='flex items-center'>
            {agentBadges.map((badge, index) => (
              <div
                key={badge.id}
                className='w-[30px] h-[30px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]'
                style={{ marginLeft: index > 0 ? '-6.79px' : '0' }}
              >
                <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
                  <span className="text-[rgba(5,5,5,0.80)] font-['Inter',sans-serif] text-[15.68px] font-medium leading-normal">
                    {badge.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentHuddleBar