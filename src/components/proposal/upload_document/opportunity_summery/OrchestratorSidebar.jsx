import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { mockOrchestratorData } from './OrchestratorSidebarMockData'
import ProposalBuilderIcon from '../../../../assets/icons/ProposalBuilderIcon'

const ActiveStatusBadge = () => {
  return (
    <div className='flex items-center gap-[7.73px] px-[10px] py-[4px] rounded-[4px] border-[1.2px] border-white'>
      <span className="text-white font-['Inter',sans-serif] text-[17.4px] font-normal leading-normal">
        Active
      </span>
      <div className='w-[11px] h-[11px] rounded-full bg-[#75FF2B]' />
    </div>
  )
}

const AgentBadge = ({ label }) => {
  return (
    <div className='w-[30px] h-[30px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]'>
      <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
        <span className="text-[#050505] font-['Inter',sans-serif] text-[15.68px] font-medium leading-normal">
          {label}
        </span>
      </div>
    </div>
  )
}

const OrchestratorHeader = () => {
  return (
    <div 
      className='flex items-center justify-between px-[20px] h-[77px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'
      style={{
        background: 'linear-gradient(81.03deg, rgba(0,255,225,0.81) 29.03%, rgba(13,84,255,0.81) 25%, rgba(90,57,223,0.81) 80.06%, rgba(149,36,198,0.81) 145.24%, rgba(255,137,0,0.81) 223.68%)'
      }}
    >
      <div className='flex items-center gap-[10px]'>
        {/* Orchestrator Icon */}
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'multiply' }}>
            <path d="M17.5 0L35 16L17.5 32L0 16L17.5 0Z" fill="url(#orchestrator_gradient)"/>
          </g>
          <defs>
            <linearGradient id="orchestrator_gradient" x1="0" y1="16" x2="35" y2="16" gradientUnits="userSpaceOnUse">
              <stop offset="0.0186" stopColor="#00FFE1"/>
              <stop offset="0.4407" stopColor="#0D54FF"/>
              <stop offset="1.1073" stopColor="#9524C6"/>
            </linearGradient>
          </defs>
        </svg>
        <h2 className="text-[#FFFFFF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
          ORCHESTRATOR AGENT
        </h2>
      </div>
      <ActiveStatusBadge />
    </div>
  )
}

const OpportunityManagerCard = ({ data }) => {
  return (
    <div 
      className='flex items-center gap-[10px] px-[20px] py-[20px] border-[1.5px] rounded-[9px] mx-[20px] mt-[22px] bg-white'
      style={{
        borderImage: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%) 1',
        borderImageSlice: 1
      }}
    >
      {/* Left side: Icon + Title */}
      <div className='flex items-center gap-[6px]'>
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="21" rx="2" fill="#0D54FF"/>
        </svg>
        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          {data.title}
        </span>
      </div>
      
      {/* Right side: Sound wave + Badges */}
      <div className='flex items-center gap-[7px] ml-auto'>
        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="8" width="4" height="15" rx="2" fill="#0D54FF"/>
          <rect x="8" y="0" width="4" height="31" rx="2" fill="#0D54FF"/>
          <rect x="16" y="8" width="4" height="15" rx="2" fill="#0D54FF"/>
          <rect x="24" y="4" width="4" height="23" rx="2" fill="#0D54FF"/>
        </svg>
        <div className='flex items-center'>
          {data.agents.map((agent, index) => (
            <div key={agent} style={{ marginLeft: index > 0 ? '-6.79px' : '0' }}>
              <AgentBadge label={agent} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const AgentActivityCard = ({ activity }) => {
  return (
    <div className='flex items-start gap-[12px]'>
      {/* Icon/Badge on LEFT - Circular with gradient border */}
      {activity.icon && !activity.badge && (
        <div className='w-[70px] h-[70px] rounded-full p-[3px] flex-shrink-0' style={{
          background: 'linear-gradient(135deg, #00FFE1 0%, #0D54FF 50%, #9524C6 100%)'
        }}>
          <div className='w-full h-full rounded-full bg-[#0D54FF] flex items-center justify-center'>
            <ProposalBuilderIcon width={32} height={28} color="white" style={{ color: 'white' }} />
          </div>
        </div>
      )}
      
      {activity.badge && (
        <div className='w-[70px] h-[70px] rounded-full p-[3px] flex-shrink-0' style={{
          background: 'linear-gradient(135deg, #00FFE1 0%, #0D54FF 50%, #9524C6 100%)'
        }}>
          <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
            <span className="text-[#000000] font-['Inter',sans-serif] text-[26px] font-semibold leading-normal">
              {activity.badge}
            </span>
          </div>
        </div>
      )}

      {/* Content Card on RIGHT */}
      <div className='flex-1 flex flex-col gap-[8px] px-[20px] py-[18px] rounded-[12px] border border-[#E5E7EB] bg-white'>
        <h3 
          className={`font-['Inter',sans-serif] text-[22px] font-bold leading-[30px]`}
          style={activity.hasGradientTitle ? {
            background: 'linear-gradient(90deg, #0D54FF 0%, #9524C6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          } : { color: '#1F2937' }}
        >
          {activity.title}
        </h3>
        <p className="font-['Inter',sans-serif] text-[15px] font-normal leading-[21px] italic text-[#9CA3AF]">
          {activity.description}
        </p>
      </div>
    </div>
  )
}

const ProgressIndicator = ({ status }) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <span 
        className="font-['Inter',sans-serif] text-[19px] font-normal leading-[25px]"
        style={{
          background: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {status}
      </span>
      <div className='w-[292px] h-[7px] rounded-[20px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]' />
    </div>
  )
}

const ChatInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend && onSend(inputValue)
      setInputValue('')
    }
  }

  return (
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
  )
}

const OrchestratorSidebar = ({ data = mockOrchestratorData, onSendMessage }) => {
  return (
    <div className='w-[491px] h-[906px] flex flex-col bg-[#F5F0F0] border-l border-[#D9D9D9]'>
      <OrchestratorHeader />
      
      <OpportunityManagerCard data={data.opportunityManager} />
      
      <div className='flex-1 overflow-y-auto px-[20px] pt-[22px] pb-[16px]'>
        <div className='flex flex-col gap-[8px]'>
          {data.agentActivities.map((activity) => (
            <AgentActivityCard key={activity.id} activity={activity} />
          ))}
          
          {data.isHuddleInProgress && (
            <div className='mt-[14px]'>
              <ProgressIndicator status={data.huddleStatus} />
            </div>
          )}
        </div>
      </div>
      
      <ChatInput onSend={onSendMessage} />
    </div>
  )
}

export default OrchestratorSidebar