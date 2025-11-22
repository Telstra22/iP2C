import React, { useEffect, useMemo, useRef, useState } from 'react'

import { RiskMetricsHeader } from './RiskMetricsHeader'
import { agents as agentsMock, topBadges as topBadgesMock } from './RiskScoreMockData'

import BotAvatarIcon from '../../../../../assets/icons/BotAvatarIcon'
import SoundWaveIcon from '../../../../../assets/icons/SoundWaveIcon'
import OpportunityManagerIcon from '../../../../../assets/icons/OpportunityManagerIcon'

const AgentRiskScoreEvaluationMatrics = ({ onComplete }) => {

  const agents = agentsMock
  const topBadges = topBadgesMock

  const totalAgents = agents.length
  const [visibleCount, setVisibleCount] = useState(1)
  const [progress, setProgress] = useState(() =>
    totalAgents > 0 ? Math.round((1 / totalAgents) * 100) : 0
  )
  const [hasCompleted, setHasCompleted] = useState(false)

  const listEndRef = useRef(null)

  useEffect(() => {
    if (totalAgents <= 1) return

    const intervalTime = (10 * 1000) / totalAgents

    const intervalId = setInterval(() => {
      setVisibleCount((prev) => {
        const next = Math.min(prev + 1, totalAgents)
        const pct = Math.min(100, Math.round((next / totalAgents) * 100))
        setProgress(pct)

        if (next === totalAgents) {
          clearInterval(intervalId)
        }

        return next
      })
    }, intervalTime)

    return () => clearInterval(intervalId)
  }, [totalAgents])

  useEffect(() => {
    let timeoutId

    if (!hasCompleted && progress >= 100) {
      setHasCompleted(true)

      if (typeof onComplete === 'function') {
        timeoutId = setTimeout(() => {
          onComplete()
        }, 0)
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [progress, hasCompleted, onComplete])

  const visibleAgents = useMemo(
    () => agents.slice(0, Math.max(1, visibleCount)),
    [agents, visibleCount]
  )

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [visibleCount])

  return (
    <div className='w-[491px] h-full flex flex-col bg-[#F5F0F0] border-l border-[#D9D9D9]'>
      <style>{`
        @keyframes barPulse {
          0%, 100% { transform: scaleY(0.5); opacity: 0.6; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
      `}</style>
      <div className='bg-white'>
        <RiskMetricsHeader />
      </div>

      {/* Content */}
      <div className='flex-1 px-[21px] pt-[23px] pb-[30px] flex flex-col gap-[20px] overflow-y-auto'>

        {/* Proposal Evaluator Badge - match OpportunityManagerCard styling */}
        <div className='mx-[0px]'>
          <div
            className='rounded-[9px] p-[2px] bg-[linear-gradient(#F5F0F0,_#F5F0F0),_linear-gradient(90deg,_rgba(13,84,255,0.35)_0%,_rgba(149,36,198,0.35)_50%,_rgba(0,255,225,0.35)_100%)] bg-origin-border bg-clip-content'
          >
            <div className='flex items-center justify-between px-[20px] py-[17px] rounded-[9px] bg-white'>
              <div className='flex items-center gap-[6px]'>
                <OpportunityManagerIcon width={24} height={21} color='#0D54FF' />
                <span
                  className="font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]"
                >
                  Proposal Evaluator
                </span>
              </div>

              <div className='flex items-center gap-[7px]'>
                {progress < 100 ? (
                  <div className='flex items-end justify-center h-[31px] w-[28px] gap-[4px]'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className='inline-block w-[3px] h-[12px] rounded-[2px] bg-[#0D54FF]'
                        style={{
                          animation: 'barPulse 1.1s ease-in-out infinite',
                          animationDelay: `${i * 0.12}s`
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <SoundWaveIcon width={28} height={31} />
                )}

                <div className='flex items-center' style={{ gap: '-6.79px' }}>
                  {topBadges.map((badge, index) => (
                    <div
                      key={badge.text}
                      style={{ marginLeft: index > 0 ? '-6.79px' : '0', zIndex: topBadges.length - index }}
                    >
                      <div
                        className='w-[30px] h-[30px] rounded-full p-[2px] bg-[linear-gradient(83deg,_#00FFE1_1.85%,_#0D54FF_44.08%,_#9524C6_110.73%)]'
                      >
                        <div
                          className='w-full h-full rounded-full flex items-center justify-center'
                          style={{ backgroundColor: badge.bgColor }}
                        >
                          <span className="text-[#050505] font-['Inter',sans-serif] text-[15.68px] font-medium leading-normal">
                            {badge.text}
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

        {/* Agent Cards - timed reveal, match AgentActivityCard styling */}
        <div className='flex flex-col gap-[20px]'>
          {visibleAgents.map((agent) => (
            <div key={agent.id} className='flex items-start gap-[8px]'>
              {/* Badge/Icon */}
              <div className='relative flex-shrink-0'>
                {agent.icon ? (
                  <div
                    className='w-[45.65px] h-[45.65px] rounded-[48.45px] flex items-center justify-center p-[8.1px] bg-[linear-gradient(102deg,_#00FFE1_-1.03%,_#0D54FF_36.82%,_#9524C6_100.49%)]'
                  >
                    <OpportunityManagerIcon width={30.352} height={30.352} color='#FFFFFF' />
                  </div>
                ) : (
                  <div
                    className='w-[46px] h-[46px] rounded-full p-[2.9px] bg-[linear-gradient(83deg,_#00FFE1_1.85%,_#0D54FF_44.08%,_#9524C6_110.73%)]'
                  >
                    <div
                      className='w-full h-full rounded-full flex items-center justify-center'
                      style={{ backgroundColor: agent.badgeColor || '#FFFFFF' }}
                    >
                      <span className="text-[#050505] font-['Inter',sans-serif] text-[19.57px] font-medium leading-normal">
                        {agent.badge}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='flex-1 flex flex-col gap-[5px] px-[12px] py-[12px] rounded-[10px] border border-[#D9D9D9] bg-white'>
                <h3
                  className={`font-['Inter',sans-serif] text-[18px] font-medium leading-[27px] ${
                    agent.hasGradientText
                      ? 'bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent'
                      : 'text-[#050505]'
                  }`}
                >
                  {agent.name}
                </h3>
                <p className="font-['Inter',sans-serif] text-[16px] font-normal italic leading-[23.96px] text-[#828282]">
                  {agent.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section - match ProgressIndicator */}
        <div className='flex flex-col gap-[8px]'>
          <p
            className="font-['Inter',sans-serif] text-[19px] font-normal leading-[25px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] bg-clip-text text-transparent"
          >
            {`Huddle in progress.. ${progress}%`}
          </p>
          <div className='w-[292px] h-[7px] rounded-[20px] bg-[#E0E0E0] overflow-hidden'>
            <div
              className='h-full rounded-[20px] bg-gradient-to-r from-[#00FFE1] via-[#0D54FF] to-[#9524C6] transition-all duration-300 ease-out'
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div ref={listEndRef} />

      </div>
    </div>
  )
}

export default AgentRiskScoreEvaluationMatrics