import React, { useState, useEffect, useRef } from 'react'

import OrchestratorIcon from '../../../../assets/icons/OrchestratorIcon'
import ProposalBuilderIcon from '../../../../assets/icons/ProposalBuilderIcon'
import ProgressBarIcon from '../../../../assets/icons/ProgressBarIcon'
import ExpandArrowIcon from '../../../../assets/icons/ExpandArrowIcon'
import { Send, Check } from 'lucide-react'
import { mockDataLoading, mockDataDone } from './AiLoaderMockData'
import OpportunityManagerIcon from '../../../../assets/icons/OpportunityManagerIcon'
import SoundWaveIcon from '../../../../assets/icons/SoundWaveIcon'

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
    icon: activity.icon || null,
    isGradient: activity.hasGradientTitle || false,
    isFirst: index === 0 && !activity.badge && !activity.icon && !isCompleted
  }))

  const huddleStatusText = data?.huddleStatus
    ? data.huddleStatus
    : (isCompleted ? (mockDataDone.huddleStatus || 'Huddle ended after 3m 56secs..') : (mockDataLoading.huddleStatus || 'Huddle in progress..'))

  const progressValue = typeof data?.progress === 'number'
    ? Math.max(0, Math.min(100, data.progress))
    : 0

  const isHuddleInProgress = typeof data?.isHuddleInProgress === 'boolean'
    ? data.isHuddleInProgress
    : (isCompleted ? (mockDataDone.isHuddleInProgress ?? false) : (mockDataLoading.isHuddleInProgress ?? true))

  const listEndRef = useRef(null)

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [agents.length, isHuddleInProgress])

  return (
    <div className='w-[491px] h-full flex flex-col bg-[#F5F0F0] border-l border-[#D9D9D9]'>
      <style>{`
        @keyframes barPulse {
          0%, 100% { transform: scaleY(0.5); opacity: 0.6; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
      `}</style>

      {/* Header with gradient background */}
      <div
        className='flex items-center justify-between px-[20px] h-[77px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'
        style={{
          background: 'linear-gradient(81deg, rgba(0, 255, 225, 0.81) -29.04%, rgba(13, 84, 255, 0.81) 24.99%, rgba(90, 57, 223, 0.81) 80.05%, rgba(149, 36, 198, 0.81) 145.23%, rgba(255, 137, 0, 0.81) 223.67%)'
        }}
      >
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

      {/* Proposal Builder Section (matches OpportunityManagerCard) */}
      <div className='mx-[20px] mt-[22px]'>
        <div
          className='rounded-[9px] p-[2px]'
          style={{
            backgroundImage:
              'linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(90deg, rgba(13,84,255,0.35) 0%, rgba(149,36,198,0.35) 50%, rgba(0,255,225,0.35) 100%)',
            backgroundClip: 'content-box, border-box',
            backgroundOrigin: 'border-box',
            backgroundSize: 'auto, 200% 100%',
            animation: 'borderFlow 7s linear infinite'
          }}
        >
          <div className='flex items-center justify-between px-[20px] py-[20px] rounded-[9px] bg-white'>
            {/* Left side: Icon + Title */}
            <div className='flex items-center gap-[6px]'>
              <OpportunityManagerIcon width={24} height={24} color="#0D54FF" />
              <span
                className="font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]"
                style={{
                  background:
                    'linear-gradient(85deg, #00FFE1 -26.81%, #0D54FF 15.3%, #9524C6 93.24%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Proposal Builder
              </span>
            </div>

            {/* Right side: Sound wave + Badges */}
            <div className='flex items-center gap-[7px]'>
              {progressValue < 100 ? (
                <div className='flex items-end justify-center h-[31px] w-[28px] gap-[4px]'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className='inline-block w-[3px] h-[12px] rounded-[2px] bg-[#0D54FF] animate-bar-pulse'
                      style={{ animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              ) : (
                <SoundWaveIcon width={28} height={31} />
              )}
              <div className='flex items-center' style={{ gap: '-6.79px' }}>
                {sidebarAgentBadges.map((badge, index) => (
                  <div
                    key={badge.id}
                    style={{ marginLeft: index > 0 ? '-6.79px' : '0', zIndex: sidebarAgentBadges.length - index }}
                  >
                    <div className='w-[35px] h-[35px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]'>
                      <div className={`w-full h-full rounded-full flex items-center justify-center ${agentBgClasses[badge.label] || 'bg-white'}`}>
                        <span className="text-[#050505] font-['Inter',sans-serif] text-[15.68px] font-medium leading-normal">
                          {badge.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Cards */}
      <div className='flex-1 overflow-y-auto overflow-x-hidden px-[16px] pt-[28px] pb-[16px] min-h-0'>
        <div className='flex flex-col gap-[28px]'>
          {agents.map((agent) => (
            <div key={agent.id} className='flex items-start gap-[8px]'>
              {/* Left-side indicator: icon circle, badge, or arrow */}
              {agent.icon ? (
                <div
                  className='w-[45.65px] h-[45.65px] rounded-[48.45px] flex items-center justify-center p-[8.1px] flex-shrink-0 mt-[4px]'
                  style={{
                    background:
                      'linear-gradient(102deg, #00FFE1 -1.03%, #0D54FF 36.82%, #9524C6 100.49%)'
                  }}
                >
                  <OpportunityManagerIcon width={30.352} height={30.352} color="#FFFFFF" />
                </div>
              ) : agent.badge ? (
                <div className='w-[42px] h-[42px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] flex-shrink-0 mt-[4px]'>
                  <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
                    <span className="text-[rgba(5,5,5,0.80)] font-['Inter',sans-serif] text-[19.57px] font-medium leading-normal">
                      {agent.badge}
                    </span>
                  </div>
                </div>
              ) : agent.isFirst ? (
                <div className='flex-shrink-0 mt-[8px]'>
                  <ExpandArrowIcon width={30} height={26} />
                </div>
              ) : null}

              {/* Agent Info Card */}
              <div className='flex-1 flex flex-col gap-[5px] px-[12px] py-[12px] rounded-[10px] border border-[#D9D9D9] bg-white'>
                <h3 className={`font-['Inter',sans-serif] text-[18px] font-medium leading-[27px] ${agent.isGradient ? 'bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent' : 'text-[#050505]'}`}>
                  {agent.name}
                </h3>
                <p className="font-['Inter',sans-serif] text-[16px] font-normal leading-[26.82px] italic text-[#828282]">
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
              {/* Dynamic progress bar driven by data.progress */}
              <div className='w-[292px] h-[7px] rounded-[100px] bg-[#E0E0E0] overflow-hidden'>
                <div
                  className='h-full rounded-[100px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] transition-all duration-300 ease-out'
                  style={{ width: `${progressValue}%` }}
                />
              </div>
            </div>
          ) : (
            <>
              {/* Completion Text */}
              <div className='flex justify-center'>
                <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[19px] font-normal leading-[25px] text-center">
                  {huddleStatusText}
                </span>
              </div>

              {/* Completion Badges - centered with bottom check badge */}
              <div className='flex justify-center mt-[12px]'>
                <div className='flex items-center' style={{ gap: '-8.48px' }}>
                  {completionBadges.map((badge, index) => (
                    <div
                      key={badge.id}
                      className={`relative rounded-full p-[2.9px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]`}
                      style={{ marginLeft: index > 0 ? '-8.48px' : '0', zIndex: completionBadges.length - index }}
                    >
                      <div className={`w-[56.2px] h-[56.2px] rounded-full flex items-center justify-center ${badge.bgClass}`}>
                        <span className="text-[#050505] font-['Inter',sans-serif] text-[26.74px] font-medium leading-normal">
                          {badge.label}
                        </span>
                      </div>
                      {/* Green check badge centered at bottom */}
                      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[20px] h-[20px] rounded-full bg-[#56A72B] flex items-center justify-center'>
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L4 7L10 1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          <div ref={listEndRef} />
        </div>
      </div>

      {/* Input Area at bottom */}
      {/* <div className='h-[89px] px-[28px] flex items-center bg-[#F9F9F9]'>
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
      </div> */}
    </div>
  )
}

export default OrchestratorSidebar