import React from 'react'
import OrchestratorAgentIcon from '../../../../../assets/icons/OrchestratorAgentIcon'
import ProposalWriterIcon from '../../../../../assets/icons/ProposalWriterIcon'
import ProposalBuilderIconSmall from '../../../../../assets/icons/ProposalBuilderIconSmall'
import SoundWaveSmallIcon from '../../../../../assets/icons/SoundWaveSmallIcon'

const AgentHuddleBar = ({ agentStatus }) => {

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
        <span className="text-[rgba(19,60,159,0.50)] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] ml-[36px]">
          {agentStatus?.orchestrator || 'Huddle in Progress..'}
        </span>
      </div>

      {/* Right side - Proposal Writer and Builder */}
      <div className="flex items-center gap-[7px]">
        {/* Proposal Writer Agent */}
        <div className='flex items-center gap-[9px]'>
          <ProposalWriterIcon width={22} height={21} color="#0D54FF" />
          <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
            {agentStatus?.proposalWriter || 'Proposal Writer Agent is working..'}
          </span>
        </div>

        {/* Proposal Builder with badges */}
        <div className='flex items-center gap-[10px] px-[20px] py-[12px] border-[1.5px] rounded-[9px]' style={{
        borderImage: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%) 1',
        borderImageSlice: 1
      }}>
          <div className='flex items-center gap-[6px]'>
            <ProposalBuilderIconSmall width={27} height={16} color="#247CFF" />
            <span className="font-['Inter',sans-serif] text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent">
              Proposal Builder
            </span>
          </div>
          
          <SoundWaveSmallIcon width={28} height={31} />
          
          <div className='flex items-center'>
            {agentStatus?.proposalBuilder?.agents?.map((agent, index) => (
              <div
                key={index}
                className='w-[30px] h-[30px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]'
                style={{ marginLeft: index > 0 ? '-6.79px' : '0' }}
              >
                <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
                  <span className="text-[rgba(5,5,5,0.80)] font-['Inter',sans-serif] text-[15.68px] font-medium leading-normal">
                    {agent}
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
