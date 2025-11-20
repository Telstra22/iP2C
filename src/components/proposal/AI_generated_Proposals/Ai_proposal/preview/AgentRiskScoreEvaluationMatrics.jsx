import React from 'react'
import MetricsIcon from '../../../../../assets/icons/MetricsIcon'
import BotAvatarIcon from '../../../../../assets/icons/BotAvatarIcon'
import SoundWaveIcon from '../../../../../assets/icons/SoundWaveIcon'
import ProgressBar from '../../../../../assets/images/progress-bar.svg?react'

const AgentRiskScoreEvaluationMatrics = () => {
  const agents = [
    {
      id: 'proposal-evaluator',
      name: 'Proposal Evaluator',
      description: 'Creates End-to-end proposal, manages template building, solution outline, pricing integration, and draft assembly.',
      badge: null,
      hasGradientText: true,
      icon: <BotAvatarIcon width={30} height={26} color='#0D54FF' />
    },
    {
      id: 'risk-scorer',
      name: 'Risk Scorer',
      description: 'Assessing proposal content to identify and score potential delivery, financial, or reputation risks..',
      badge: 'TR',
      badgeColor: '#D4F1FF',
      hasGradientText: false,
      icon: null
    },
    {
      id: 'compliance-checker',
      name: 'Compliance Checker',
      description: 'Evaluating alignment with RFP requirements, internal standards, and mandatory terms...',
      badge: 'CR',
      badgeColor: '#FFE8F5',
      hasGradientText: false,
      icon: null
    },
    {
      id: 'customer-centricity',
      name: 'Customer Centricity',
      description: 'Measuring how well the proposal addresses client needs, value outcomes, and business impact...',
      badge: 'CR',
      badgeColor: '#FFE8F5',
      hasGradientText: false,
      icon: null
    }
  ]

  const topBadges = [
    { text: 'TR', color: '#D4F1FF' },
    { text: 'CR', color: '#FFE8F5' },
    { text: 'EA', color: '#FFFACD' }
  ]

  return (
    <div className='w-[491px] h-full flex flex-col border-l border-[#D9D9D9] bg-[#F5F0F0] shadow-[-4px_0px_13px_rgba(0,0,0,0.10)]'>
      {/* Header */}
      <div className='flex items-center gap-[10px] px-[20px] py-[24px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
        <MetricsIcon width={35} height={32} color='#050505' />
        <h2 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
          Proposal Evaluation Metrics
        </h2>
      </div>

      {/* Content */}
      <div className='flex-1 px-[21px] pt-[23px] pb-[30px] flex flex-col gap-[20px] overflow-y-auto'>
        {/* Proposal Evaluator Badge */}
        <div 
          className='flex items-center justify-between px-[20px] py-[17px] rounded-[9px]'
          style={{
            border: '1.5px solid transparent',
            backgroundImage: 'linear-gradient(#F5F0F0, #F5F0F0), linear-gradient(83.12deg, rgba(0,255,225,1) 22.75%, rgba(13,84,255,1) 32.11%, rgba(149,36,198,1) 108.54%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }}
        >
          <div className='flex items-center gap-[6px]'>
            <BotAvatarIcon width={24} height={21} color='#0D54FF' />
            <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Proposal Evaluator
            </span>
          </div>
          
          <div className='flex items-center gap-[10px]'>
            <SoundWaveIcon width={28} height={31} />
            <div className='flex items-center gap-[-6.79px]'>
              {topBadges.map((badge, index) => (
                <div
                  key={index}
                  className='w-[31px] h-[31px] rounded-full border-[1.5px] border-[#0D54FF] flex items-center justify-center'
                  style={{ backgroundColor: badge.color }}
                >
                  <span className="text-[rgba(5,5,5,0.80)] font-['Inter',sans-serif] text-[15.68px] font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agent Cards */}
        <div className='flex flex-col gap-[20px]'>
          {agents.map((agent, index) => (
            <div key={agent.id} className='flex items-start gap-[8px]'>
              {/* Badge/Icon */}
              <div className='flex-shrink-0'>
                {agent.icon ? (
                  agent.icon
                ) : (
                  <div
                    className='w-[30px] h-[30px] rounded-full border-[1.5px] border-[#0D54FF] flex items-center justify-center'
                    style={{ backgroundColor: agent.badgeColor }}
                  >
                    <span className="text-[rgba(5,5,5,0.80)] font-['Inter',sans-serif] text-[19.57px] font-medium">
                      {agent.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='flex-1 flex flex-col gap-[7px] px-[12px] py-[12px] border border-[#D9D9D9] rounded-[4px] bg-white'>
                <h3 
                  className={`font-['Inter',sans-serif] text-[20px] font-${agent.hasGradientText ? '600' : '500'} leading-[27px]`}
                  style={agent.hasGradientText ? {
                    background: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  } : { color: '#050505' }}
                >
                  {agent.name}
                </h3>
                <p 
                  className={`font-['Inter',sans-serif] text-[${index === 0 ? '18px' : '17px'}] font-normal italic leading-[${index === 0 ? '24.14px' : '22.80px'}] text-[#828282]`}
                >
                  {agent.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className='flex flex-col gap-[8px]'>
          <p 
            className="font-['Inter',sans-serif] text-[19px] font-normal leading-[25px]"
            style={{
              background: 'linear-gradient(84.69deg, rgba(0,255,225,1) 27.09%, rgba(13,84,255,1) 15.15%, rgba(149,36,198,1) 93.31%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Huddle in progress..
          </p>
          <ProgressBar className='w-[292px] h-[7px] rounded-[20px]' />
        </div>
      </div>
    </div>
  )
}

export default AgentRiskScoreEvaluationMatrics