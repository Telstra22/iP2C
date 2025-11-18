import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { mockOrchestratorData, mockOrchestratorDataLoading } from './OrchestratorSidebarMockData'
import ProposalBuilderIcon from '../../../../assets/icons/ProposalBuilderIcon'
import CompletedAgentsBadgesIcon from '../../../../assets/icons/CompletedAgentsBadges'
import OpportunityManagerIcon from '../../../../assets/icons/OpportunityManagerIcon'

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

const AgentBadge = ({ label, backgroundColor = '#FFFFFF' }) => {
  return (
    <div className='w-[30px] h-[30px] rounded-full p-[2px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6]'>
      <div 
        className='w-full h-full rounded-full flex items-center justify-center'
        style={{ backgroundColor }}
      >
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
      className='flex items-center justify-between w-full h-[77px] px-[20px] py-[12px] flex-shrink-0 border-b border-[#DDD] shadow-[0_4px_12px_0_rgba(0,0,0,0.08)]'
      style={{
        background: 'linear-gradient(81deg, rgba(0, 255, 225, 0.81) -29.04%, rgba(13, 84, 255, 0.81) 24.99%, rgba(90, 57, 223, 0.81) 80.05%, rgba(149, 36, 198, 0.81) 145.23%, rgba(255, 137, 0, 0.81) 223.67%)'
      }}
    >
      <div className='flex items-center gap-[10px]'>
        {/* Orchestrator Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path d="M25.3357 4.75009C30.5813 4.75009 34.8357 9.01718 34.8357 14.2406V33.2501H12.6706C7.42348 33.2501 3.16906 28.983 3.16906 23.7596V17.4168H6.33572V23.7596C6.34033 25.4373 7.00959 27.0448 8.19694 28.23C9.38428 29.4153 10.9929 30.0818 12.6706 30.0834H31.6691V14.2406C31.6645 12.5632 30.9954 10.9559 29.8084 9.7707C28.6214 8.58547 27.0131 7.91885 25.3357 7.91676H15.8357V4.75009H25.3357ZM15.8357 20.5834H12.6691V17.4168H15.8357V20.5834ZM25.3357 20.5834H22.1691V17.4168H25.3357V20.5834ZM5.59156 2.09009C5.65152 1.94186 5.75439 1.81491 5.88698 1.72552C6.01956 1.63613 6.17582 1.58838 6.33572 1.58838C6.49563 1.58838 6.65189 1.63613 6.78447 1.72552C6.91706 1.81491 7.01993 1.94186 7.07989 2.09009L7.48206 3.05592C8.15417 4.6948 9.42922 6.01349 11.0446 6.74034L12.1814 7.24701C12.3267 7.31427 12.4498 7.42172 12.5361 7.55667C12.6223 7.69162 12.6681 7.84843 12.6681 8.00859C12.6681 8.16875 12.6223 8.32557 12.5361 8.46052C12.4498 8.59547 12.3267 8.70292 12.1814 8.77017L10.9781 9.30534C9.40323 10.012 8.15028 11.2831 7.46622 12.8678L7.07514 13.764C7.01427 13.9099 6.91158 14.0346 6.78 14.1223C6.64842 14.21 6.49384 14.2567 6.33572 14.2567C6.17761 14.2567 6.02303 14.21 5.89145 14.1223C5.75987 14.0346 5.65718 13.9099 5.59631 13.764L5.20522 12.8694C4.52111 11.2838 3.26752 10.0121 1.69181 9.30534L0.488474 8.77017C0.342679 8.70311 0.219171 8.59564 0.132594 8.46052C0.0460165 8.3254 0 8.16828 0 8.0078C0 7.84732 0.0460165 7.6902 0.132594 7.55508C0.219171 7.41996 0.342679 7.31249 0.488474 7.24543L1.62531 6.73876C3.24065 6.01299 4.51623 4.69547 5.18939 3.05751L5.59156 2.09009Z" fill="white"/>
        </svg>
        <h2 className="text-[#FFFFFF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]" style={{ fontWeight: 600 }}>
          ORCHESTRATOR AGENT
        </h2>
      </div>
      <ActiveStatusBadge />
    </div>
  )
}

const OpportunityManagerCard = ({ data }) => {
  // Define background colors for each agent badge
  const agentColors = {
    'OE': '#D3EDFE',
    'RS': '#FBFED3', 
    'OV': '#D3FEEF',
    'CC': '#FFE5DE'
  }

  return (
    <div 
      className='flex items-center justify-between px-[20px] py-[20px] border-[1.5px] rounded-[9px] mx-[20px] mt-[22px] bg-white'
      style={{
        borderImage: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%) 1',
        borderImageSlice: 1
      }}
    >
      {/* Left side: Icon + Title */}
      <div className='flex items-center gap-[6px]'>
        <OpportunityManagerIcon width={24} height={24} color="#0D54FF" />
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          {data.title}
        </span>
      </div>
      
      {/* Right side: Sound wave + Badges */}
      <div className='flex items-center gap-[7px]'>
        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.0034,10.9999v9" stroke="#0D54FF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M6.9966,5.9999v19" stroke="#0D54FF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M13.9966,-0.0001v31" stroke="#0D54FF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M20.9966,5.9999v19" stroke="#0D54FF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M27.9966,10.9999v9" stroke="#0D54FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <div className='flex items-center' style={{ gap: '-6.79px' }}>
          {data.agents.map((agent, index) => (
            <div key={agent} style={{ marginLeft: index > 0 ? '-6.79px' : '0', zIndex: data.agents.length - index }}>
              <AgentBadge label={agent} backgroundColor={agentColors[agent] || '#FFFFFF'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const AgentActivityCard = ({ activity, showCheckmark }) => {
  const getBgColor = (badge) => {
    switch(badge) {
      case 'OE': return '#D3EDFE'
      case 'RS': return '#FBFED3'
      case 'OV': return '#D3FEEF'
      case 'CC': return '#FFE5DE'
      default: return '#FFFFFF'
    }
  }

  return (
    <div className='flex items-start gap-[8px]'>
      {/* Badge/Icon on LEFT */}
      <div className='relative flex-shrink-0'>
        {activity.icon ? (
          // Gradient icon for Opportunity Manager
          <div 
            className='w-[45.65px] h-[45.65px] rounded-[48.45px] flex items-center justify-center p-[8.1px]'
            style={{
              background: 'linear-gradient(102deg, #00FFE1 -1.03%, #0D54FF 36.82%, #9524C6 100.49%)'
            }}
          >
            <OpportunityManagerIcon width={30.352} height={30.352} color="#FFFFFF" />
          </div>
        ) : (
          // Regular badge with gradient border
          <>
            <div 
              className='w-[46px] h-[46px] rounded-full p-[2.9px]'
              style={{
                background: 'linear-gradient(135deg, #00FFE1 0%, #0D54FF 50%, #9524C6 100%)'
              }}
            >
              <div 
                className='w-full h-full rounded-full flex items-center justify-center'
                style={{ backgroundColor: getBgColor(activity.badge) }}
              >
                <span className="text-[#050505] font-['Inter',sans-serif] text-[19.57px] font-medium leading-normal">
                  {activity.badge}
                </span>
              </div>
            </div>
            {showCheckmark && (
              <div className='absolute bottom-0 right-0'>
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L4 7L10 1" stroke="#56A72B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </>
        )}
      </div>

      {/* Content Card on RIGHT */}
      <div className='flex flex-col gap-[7px] px-[12px] py-[12px] rounded-[4px] border border-[#D9D9D9] bg-white flex-1'>
        <h3 
          className={`font-['Inter',sans-serif] text-[20px] font-${activity.hasGradientTitle ? 'semibold' : 'medium'} leading-[27px]`}
          style={activity.hasGradientTitle ? {
            background: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          } : { color: '#050505' }}
        >
          {activity.title}
        </h3>
        <p className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal italic leading-[23.96px]">
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

const CompletedAgentsBadges = () => {
  return (
    <div className='w-[479px]'>
      <CompletedAgentsBadgesIcon width={479} height={62.391} />
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

const OrchestratorSidebar = ({ data, onSendMessage, isLoading = false }) => {
  // Use loading data if isLoading is true, otherwise use provided data or default completed data
  const sidebarData = data || (isLoading ? mockOrchestratorDataLoading : mockOrchestratorData)
  
  return (
    <div className='w-[491px] h-full flex flex-col bg-[#F5F0F0] border-l border-[#D9D9D9]'>
      <OrchestratorHeader />
      
      <OpportunityManagerCard data={sidebarData.opportunityManager} />
      
      <div className='flex-1 overflow-y-auto px-[20px] pt-[22px] pb-[16px] min-h-0'>
        <div className='flex flex-col' style={{ gap: sidebarData.isHuddleInProgress ? '22px' : '18px' }}>
          {sidebarData.agentActivities.map((activity) => (
            <AgentActivityCard key={activity.id} activity={activity} showCheckmark={!sidebarData.isHuddleInProgress} />
          ))}
          
          {sidebarData.isHuddleInProgress ? (
            <ProgressIndicator status={sidebarData.huddleStatus} />
          ) : (
            <div className='flex flex-col gap-[18px] mt-[0px]'>
              <p className="text-[#A0A0A0] font-['Inter',sans-serif] text-[19px] font-normal leading-[25px]">
                {sidebarData.huddleStatus}
              </p>
              <CompletedAgentsBadges />
            </div>
          )}
        </div>
      </div>
      
      <ChatInput onSend={onSendMessage} />
    </div>
  )
}

export default OrchestratorSidebar