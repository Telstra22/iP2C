import React from 'react'
import OrchestratorAgentIcon from '../../../../../assets/icons/OrchestratorAgentIcon'
import ProposalWriterIcon from '../../../../../assets/icons/ProposalWriterIcon'
import ProposalBuilderIconSmall from '../../../../../assets/icons/ProposalBuilderIconSmall'
import SoundWaveSmallIcon from '../../../../../assets/icons/SoundWaveSmallIcon'

const AgentHuddleBar = ({ agentStatus }) => {

  return (
    <div className='flex items-center justify-between border-[1.5px] border-white rounded-b-[7px] shrink-0 overflow-visible w-[1429px] h-[77px] py-[13px] pr-[32px] pl-[70px] bg-[linear-gradient(83deg,_rgba(0,255,225,0.07)_1.85%,_rgba(13,84,255,0.07)_44.08%,_rgba(149,36,198,0.07)_110.73%),_#FFF] shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] animate-pulse'>
      {/* Left Side - Orchestrator Agent */}
      <div className='flex flex-col gap-[1px]'>
        <div className='flex items-center gap-[9px]'>
          <OrchestratorAgentIcon width={27} height={21} />
          <span className="font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent">
            Orchestrator Agent
          </span>
        </div>
        <span className="text-[rgba(19,60,159,0.50)] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] ml-[36px] animate-pulse">
          {agentStatus?.orchestrator || 'Huddle in Progress..'}
        </span>
      </div>

      {/* Right side - Proposal Writer and Builder */}
      <div className="flex items-center gap-[15px]">
        {/* Proposal Writer Agent */}
        <div className='flex items-center gap-[9px] px-[20px] py-[13px] rounded-[107px] border-[1.5px] border-[#C7D7FF] bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.06)_inset]'>
          <ProposalWriterIcon width={22} height={21} color="#0D54FF" />
          <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] animate-pulse">
            {agentStatus?.proposalWriter || 'Proposal Writer Agent is working..'}
          </span>
        </div>

        {/* Proposal Builder with badges - outer container with border */}
        <div className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[9px] border-[1.5px] bg-white' style={{
          borderImage: 'linear-gradient(to right, #00FFE1, #0D54FF, #9524C6, #FF8900) 1'
        }}>
          <div className='flex items-center gap-[6px]'>
            <ProposalBuilderIconSmall width={27} height={16} color="#247CFF" />
            <span className="font-['Inter',sans-serif] text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent">
              Proposal Builder
            </span>
          </div>
          
          <div className='animate-pulse'>
            <SoundWaveSmallIcon width={28} height={31} />
          </div>
          
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
