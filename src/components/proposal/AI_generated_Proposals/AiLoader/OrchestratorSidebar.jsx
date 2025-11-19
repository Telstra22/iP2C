import React, { useState, useEffect, useRef } from 'react'

import OrchestratorIcon from '../../../../assets/icons/OrchestratorIcon'
import ProposalBuilderIcon from '../../../../assets/icons/ProposalBuilderIcon'
import ProgressBarIcon from '../../../../assets/icons/ProgressBarIcon'
import ExpandArrowIcon from '../../../../assets/icons/ExpandArrowIcon'
import { Send, Check } from 'lucide-react'
import { mockDataLoading, mockDataDone } from './AiLoaderMockData'

const OrchestratorSidebar = ({ isCompleted = false, data }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('Send message:', inputValue)
      setInputValue('')
    }
  }

  const defaultAgentBadges = [
    { id: 'MA', label: 'MA' },
    { id: 'SC', label: 'SC' },
    { id: 'PD', label: 'PD' },
    { id: 'CG', label: 'CG' },
  ]

  const agentBgClasses = {
    MA: 'bg-[#D3EDFE]',
    SC: 'bg-[#FFE3DE]',
    PD: 'bg-[#F9E9FF]',
    CG: 'bg-[#F9E9FF]'
  }

  const completionBadges = [
    { id: 'MA', label: 'MA', bgClass: 'bg-[#D3EDFE]', borderClass: 'border-[#0D54FF]' },
    { id: 'SC', label: 'SC', bgClass: 'bg-[#FFE3DE]', borderClass: 'border-[#FF6B6B]' },
    { id: 'PD', label: 'PD', bgClass: 'bg-[#F9E9FF]', borderClass: 'border-[#9524C6]' },
    { id: 'CG', label: 'CG', bgClass: 'bg-[#F9E9FF]', borderClass: 'border-[#9524C6]' }
  ]

  const sidebarAgentBadges = data?.opportunityBuilder?.agents
    ? data.opportunityBuilder.agents.map((code) => ({ id: code, label: code }))
    : (mockDataLoading.opportunityBuilder?.agents || defaultAgentBadges).map((code) => (
        typeof code === 'string' ? { id: code, label: code } : code
      ))

  const baseMock = isCompleted ? mockDataDone : mockDataLoading

  const agents = (data?.agentActivities || baseMock.agentActivities || []).map((activity, index) => ({
    id: activity.id,
    name: activity.title,
    description: activity.description,
    badge: activity.badge || null,
    isGradient: activity.hasGradientTitle || false,
    isFirst: index === 0 && !activity.badge && !isCompleted
  }))

  const huddleStatusText = data?.huddleStatus
    ? data.huddleStatus
    : (isCompleted ? (mockDataDone.huddleStatus || 'Huddle ended after 3m 56secs..') : (mockDataLoading.huddleStatus || 'Huddle in progress..'))

  const isHuddleInProgress = typeof data?.isHuddleInProgress === 'boolean'
    ? data.isHuddleInProgress
    : (isCompleted ? (mockDataDone.isHuddleInProgress ?? false) : (mockDataLoading.isHuddleInProgress ?? true))

  const listEndRef = useRef(null)

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [agents.length])

  return (
    <div className='w-[491px] h-full flex flex-col bg-[#F5F0F0] border-l border-[#D9D9D9]'>
      <style>{`
        @keyframes barPulse {
          0%, 100% { transform: scaleY(0.5); opacity: 0.6; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
      `}</style>

      {/* Header with gradient background */}
      <div className='flex items-center justify-between px-[20px] h-[77px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] bg-gradient-to-r from-[rgba(0,255,225,0.81)] via-[rgba(13,84,255,0.81)] to-[rgba(149,36,198,0.81)]'>
        <div className='flex items-center gap-[10px]'>
          <OrchestratorIcon width={35} height={32} className='text-white' />
          <h2 className="text-white font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
            ORCHESTRATOR AGENT
          </h2>
        </div>
        <div className='flex items-center gap-[7.73px] px-[10px] py-[4px] rounded-[4px] border-[1.2px] border-[#FFFFFF]'>
          <span className="text-white font-['Inter',sans-serif] text-[17.4px] font-normal leading-normal">
            Active
          </span>
          <div className='w-[11px] h-[11px] rounded-full bg-[#75FF2B]' />
        </div>
      </div>

      {/* Proposal Builder Section */}
      <div className='flex items-center justify-between px-[20px] py-[20px] border-[1.5px] rounded-[9px] mx-[16px] mt-[23px] border-gradient-proposal'>
        <div className='flex items-center gap-[10px]'>
          <div className='relative w-[24px] h-[21px] rounded-[48.45px] p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]'>
            <div className='w-full h-full flex items-center justify-center bg-white rounded-[48.45px]'>
              <ProposalBuilderIcon width={16} height={13} className='text-[#0D54FF]' />
            </div>
          </div>
          <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
            Proposal Builder
          </span>
        </div>
        <div className='flex items-center gap-[7px]'>
          <div className='flex items-end justify-center h-[31px] w-[28px] gap-[4px]'>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className='inline-block w-[3px] h-[12px] rounded-[2px] bg-[#0D54FF] animate-bar-pulse'
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
          <div className='flex items-center'>
            {sidebarAgentBadges.map((badge, index) => (
              <div
                key={badge.id}
                className='w-[35px] h-[35px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]'
                style={{ marginLeft: index > 0 ? '-6.79px' : '0' }}
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center ${agentBgClasses[badge.label] || 'bg-white'}`}>
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[15.68px] font-medium leading-normal">
                    {badge.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Cards */}
      <div className='flex-1 overflow-y-auto overflow-x-hidden px-[16px] pt-[28px] pb-[16px] min-h-0'>
        <div className='flex flex-col gap-[28px]'>
          {agents.map((agent) => (
            <div key={agent.id} className='flex items-start gap-[8px]'>
              {/* Badge on left for all agents */}
              {agent.badge && (
                <div className='w-[38px] h-[38px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] flex-shrink-0 mt-[4px]'>
                  <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
                    <span className="text-[rgba(5,5,5,0.80)] font-['Inter',sans-serif] text-[19.57px] font-medium leading-normal">
                      {agent.badge}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Icon on left for first agent in loading state */}
              {agent.isFirst && (
                <div className='flex-shrink-0 mt-[8px]'>
                  <ExpandArrowIcon width={30} height={26} />
                </div>
              )}

              {/* Agent Info Card */}
              <div className='flex-1 flex flex-col gap-[7px] px-[12px] py-[12px] rounded-[4px] border border-[#D9D9D9] bg-white'>
                <h3 className={`font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] ${agent.isGradient ? 'bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent' : 'text-[#050505]'}`}>
                  {agent.name}
                </h3>
                <p className="font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px] italic text-[#828282]">
                  {agent.description}
                </p>
              </div>
            </div>
          ))}

          {/* Progress or Completion Section */}
          {isHuddleInProgress ? (
            <div className='flex flex-col gap-[8px]'>
              <span className="font-['Inter',sans-serif] text-[19px] font-normal leading-[25px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent">
                {huddleStatusText}
              </span>
              <ProgressBarIcon width={292} height={7} />
            </div>
          ) : (
            <>
              {/* Completion Text */}
              <div>
                <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[19px] font-normal leading-[25px]">
                  {huddleStatusText}
                </span>
              </div>

              {/* Completion Badges */}
              <div className='flex items-center'>
                {completionBadges.map((badge, index) => (
                  <div
                    key={badge.id}
                    className={`relative w-[62px] h-[62px] rounded-full flex items-center justify-center border-[2.9px] ${badge.bgClass} ${badge.borderClass}`}
                    style={{ marginLeft: index > 0 ? '-8.48px' : '0' }}
                  >
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[26.74px] font-medium leading-normal">
                      {badge.label}
                    </span>
                    {/* Green circle with white checkmark in bottom right */}
                    <div className='absolute bottom-[8px] right-[3px] w-[14px] h-[14px] rounded-full bg-[#56A72B] flex items-center justify-center'>
                      <Check size={10} color='#FFFFFF' strokeWidth={3} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          <div ref={listEndRef} />
        </div>
      </div>

      {/* Input Area at bottom */}
      <div className='h-[89px] px-[28px] flex items-center bg-[#F9F9F9]'>
        <div className='flex items-center gap-[12px] flex-1'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder='Ask me Anything'
            className="flex-1 bg-transparent outline-none text-[#737373] font-['Graphik',sans-serif] text-[20px] font-normal leading-[18px] placeholder:text-[#737373]"
          />
          <button
            onClick={handleSend}
            className='flex-shrink-0 p-0 bg-transparent border-none cursor-pointer'
            aria-label='Send message'
          >
            <Send width={24} height={24} color='#050505' strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrchestratorSidebar