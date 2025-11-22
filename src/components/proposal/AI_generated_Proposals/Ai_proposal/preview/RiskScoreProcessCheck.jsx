import React, { useRef, useState } from 'react'

import { RiskMetricsHeader } from './RiskMetricsHeader'
import {
  riskSummaryContent,
  riskSuggestionsContent,
  complianceSummaryContent,
  complianceSuggestionsContent,
  clientFocusSummaryContent,
  clientFocusSuggestionsContent,
  accuracySummaryContent,
  riskScoreData,
  complianceData,
  clientFocusData,
  accuracyData
} from './RiskScoreMockData'

import ChevronUpIcon from '../../../../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../../../../assets/icons/ChevronDownIcon'
import ProgressBarFilled from '../../../../../assets/images/progress-bar-filled.svg?react'
import ProgressBarUnfilled from '../../../../../assets/images/progress-bar-unfilled.svg?react'

const RiskScoreProcessCheck = () => {
  const [expandedSections, setExpandedSections] = useState({
    risk: true,
    summary: false,
    suggestions: false,
    compliance: false,
    clientFocus: false,
    accuracy: false
  })

  const [expandedSummarySection, setExpandedSummarySection] = useState('risk')

  const [expandedDetail, setExpandedDetail] = useState({
    compliance: null, // 'summary' | 'suggestions' | null
    clientFocus: null,
    accuracy: null
  })

  const containerRef = useRef(null)
  const sectionRefs = {
    risk: useRef(null),
    compliance: useRef(null),
    clientFocus: useRef(null),
    accuracy: useRef(null)
  }
  const summaryRefs = {
    risk: useRef(null),
    compliance: useRef(null),
    clientFocus: useRef(null),
    accuracy: useRef(null)
  }

  const scrollIntoViewIfNeeded = (ref) => {
    if (!ref?.current || !containerRef.current) return

    const container = containerRef.current
    const element = ref.current

    const containerRect = container.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    if (elementRect.top < containerRect.top || elementRect.bottom > containerRect.bottom) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleSection = (section) => {
    // For top-level sections, enforce accordion behaviour
    if (['risk', 'compliance', 'clientFocus', 'accuracy'].includes(section)) {
      setExpandedSections(prev => {
        const currentlyOpen = !!prev[section]
        const nextState = {
          ...prev,
          risk: false,
          compliance: false,
          clientFocus: false,
          accuracy: false,
          // toggle the clicked one
          [section]: !currentlyOpen
        }

        const next = nextState

        if (!currentlyOpen) {
          setTimeout(() => {
            scrollIntoViewIfNeeded(sectionRefs[section])
          }, 0)
        }

        return next
      })

      // Whenever we switch top-level sections, close any open Summary subsection
      setExpandedSummarySection(null)
      return
    }

    // For other keys (summary, suggestions), just toggle normally
    setExpandedSections(prev => {
      const next = {
        ...prev,
        [section]: !prev[section]
      }

      if (section === 'suggestions') {
        const topLevel = expandedSections.risk
          ? 'risk'
          : expandedSections.compliance
            ? 'compliance'
            : expandedSections.clientFocus
              ? 'clientFocus'
              : expandedSections.accuracy
                ? 'accuracy'
                : null

        if (topLevel) {
          setTimeout(() => {
            scrollIntoViewIfNeeded(summaryRefs[topLevel])
          }, 0)
        }
      }

      return next
    })
  }

  const scoreData = riskScoreData

  const summaryContent = riskSummaryContent
  const suggestionsContent = riskSuggestionsContent

  const isRiskDetailOpen = expandedSections.risk && (expandedSummarySection === 'risk' || expandedSections.suggestions)

  return (
    <div className='w-[491px] h-full flex flex-col border-l border-[#D9D9D9] bg-[#FCFCFC] shadow-[-4px_0px_13px_rgba(0,0,0,0.10)]'>
      <RiskMetricsHeader />

      {/* Content */}
      <div
        ref={containerRef}
        className='flex-1 px-[21px] pt-[31px] pb-[30px] flex flex-col gap-[15px] overflow-y-auto min-h-0'
      >
        {/* Risk Section */}
        <div className='border border-[#0D54FF] rounded-[9px] overflow-hidden'>
          {/* Risk Header */}
          <button
            onClick={() => toggleSection('risk')}
            className='w-full flex items-center justify-between px-[20px] py-[16px] bg-white hover:bg-[#F6F6F6] transition-colors'
          >
            <h3 className="text-[#0D54FF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
              Risk
            </h3>
            {expandedSections.risk ? (
              <ChevronUpIcon width={19} height={11} color='#505050' />
            ) : (
              <ChevronDownIcon width={19} height={11} color='#050505' />
            )}
          </button>

          {/* Risk Content */}
          {expandedSections.risk && (
            <div className='flex flex-col'>
              {/* Gradient Score Section */}
              <div 
                className='px-[31px] py-[28px] flex flex-col items-center gap-[20px] bg-[linear-gradient(90deg,#0D54FF_0%,#7B3FE4_100%)]'
              >
                <p className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[18px]">
                  Document Risk Score
                </p>
                
                <div className='flex items-center gap-[13px]'>
                  <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[100.57px] font-bold leading-[135px]">
                    {scoreData.current}
                  </span>
                  <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px]">
                    / {scoreData.total}
                  </span>
                </div>

                {/* Status Indicators */}
                <div className='flex items-start gap-[19px] w-full justify-center'>
                  {scoreData.statuses.map((status, index) => (
                    <div key={index} className='flex flex-col items-center gap-[9px]'>
                      {status.met ? (
                        <ProgressBarFilled className='w-[117px] h-[12px] rounded-[30px]' />
                      ) : (
                        <ProgressBarUnfilled className='w-[117px] h-[12px] rounded-[30px]' />
                      )}
                      <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[23px] text-center">
                        {status.label}
                      </span>
                    </div>
                  ))} 
                </div>
              </div>

              {/* Summary and Suggestions */}
              <div className='bg-white px-[16px] py-[18px] flex flex-col gap-[18px]'>
                {/* Summary header */}
                <div className='flex flex-col'>
                  <button
                    onClick={() => {
                      setExpandedSummarySection(prev => (prev === 'risk' ? null : 'risk'))
                      setExpandedSections(prev => ({
                        ...prev,
                        suggestions: false
                      }))
                    }}
                    className='flex items-center justify-between py-[8px] hover:bg-[#F6F6F6] transition-colors'
                  >
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Summary
                    </h4>
                    {expandedSummarySection === 'risk' ? (
                      <ChevronUpIcon width={19} height={11} color='#050505' />
                    ) : (
                      <ChevronDownIcon width={19} height={11} color='#050505' />
                    )}
                  </button>
                </div>

                {/* Risk detail (Summary + Suggestions) - inner scroll so long text is scrollable */}
                {expandedSummarySection === 'risk' && (
                  <div className='pt-[12px] flex flex-col gap-[18px] max-h-[220px] overflow-y-auto pr-[6px]'>
                    {/* Risk Summary text */}
                    {summaryContent.map((text, index) => (
                      <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                        {text}
                      </p>
                    ))}

                    <div className='border-t border-[#C6C6C6]' />

                    {/* Suggestions toggle + content at bottom of scroll */}
                    <div className='flex flex-col pt-[8px]'>
                      <button
                        onClick={() =>
                          setExpandedSections(prev => ({
                            ...prev,
                            suggestions: !prev.suggestions
                          }))
                        }
                        className='flex items-center justify-between py-[8px] hover:bg-[#F6F6F6] transition-colors'
                      >
                        <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                          Suggestions
                        </h4>
                        {expandedSections.suggestions ? (
                          <ChevronUpIcon width={19} height={11} color='#050505' />
                        ) : (
                          <ChevronDownIcon width={19} height={11} color='#050505' />
                        )}
                      </button>

                      {expandedSections.suggestions && (
                        <div className='pt-[12px] flex flex-col gap-[18px]'>
                          {suggestionsContent.map((text, index) => (
                            <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                              {text}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Compliance Section */}
        {!isRiskDetailOpen && (
          <div className='border border-[#0D54FF] rounded-[9px] overflow-hidden'>
            {/* Compliance Header */}
            <button
              onClick={() => toggleSection('compliance')}
              className='w-full flex items-center justify-between px-[20px] py-[16px] bg-white hover:bg-[#F6F6F6] transition-colors'
            >
              <h3 className="text-[#0D54FF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                Compliance
              </h3>
              {expandedSections.compliance ? (
                <ChevronUpIcon width={19} height={11} color='#505050' />
              ) : (
                <ChevronDownIcon width={19} height={11} color='#050505' />
              )}
            </button>

            {/* Compliance Content */}
            {expandedSections.compliance && (
              <div className='flex flex-col'>
                {/* Gradient Score Section */}
                <div 
                  className='px-[31px] py-[28px] flex flex-col items-center gap-[20px]'
                  style={{
                    background: 'linear-gradient(90deg, #0D54FF 0%, #7B3FE4 100%)'
                  }}
                >
                  <p className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[18px]">
                    Document Compliance Score
                  </p>
                  
                  <div className='flex items-center gap-[13px]'>
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[100.57px] font-bold leading-[135px]">
                      {complianceData.current}
                    </span>
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px]">
                      / {complianceData.total}
                    </span>
                  </div>

                  {/* Status Indicators */}
                  <div className='flex items-start gap-[19px] w-full justify-center'>
                    {complianceData.statuses.map((status, index) => (
                      <div key={index} className='flex flex-col items-center gap-[9px]'>
                        {status.met ? (
                          <ProgressBarFilled className='w-[117px] h-[12px] rounded-[30px]' />
                        ) : (
                          <ProgressBarUnfilled className='w-[117px] h-[12px] rounded-[30px]' />
                        )}
                        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[23px] text-center">
                          {status.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary and Suggestions */}
                <div className='bg-white px-[16px] py-[18px]'>
                  <div className='flex flex-col gap-[18px]'>
                    {/* Compliance Summary */}
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Summary
                    </h4>
                    {complianceSummaryContent.map((text, index) => (
                      <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                        {text}
                      </p>
                    ))}

                    <div className='border-t border-[#C6C6C6]' />

                    {/* Compliance Suggestions */}
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Suggestions
                    </h4>
                    {complianceSuggestionsContent.map((text, index) => (
                      <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Client Focus Section */}
        {!isRiskDetailOpen && (
          <div className='border border-[#0D54FF] rounded-[9px] overflow-hidden'>
            {/* Client Focus Header */}
            <button
              onClick={() => toggleSection('clientFocus')}
              className='w-full flex items-center justify-between px-[20px] py-[16px] bg-white hover:bg-[#F6F6F6] transition-colors'
            >
              <h3 className="text-[#0D54FF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                Client Focus
              </h3>
              {expandedSections.clientFocus ? (
                <ChevronUpIcon width={19} height={11} color='#505050' />
              ) : (
                <ChevronDownIcon width={19} height={11} color='#050505' />
              )}
            </button>

            {/* Client Focus Content */}
            {expandedSections.clientFocus && (
              <div className='flex flex-col'>
                {/* Gradient Score Section */}
                <div 
                  className='px-[31px] py-[28px] flex flex-col items-center gap-[20px]'
                  style={{
                    background: 'linear-gradient(90deg, #0D54FF 0%, #7B3FE4 100%)'
                  }}
                >
                  <p className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[18px]">
                    Document Client Focus Score
                  </p>
                  
                  <div className='flex items-center gap-[13px]'>
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[100.57px] font-bold leading-[135px]">
                      {clientFocusData.current}
                    </span>
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px]">
                      / {clientFocusData.total}
                    </span>
                  </div>

                  {/* Status Indicators */}
                  <div className='flex items-start gap-[19px] w-full justify-center'>
                    {clientFocusData.statuses.map((status, index) => (
                      <div key={index} className='flex flex-col items-center gap-[9px]'>
                        {status.met ? (
                          <ProgressBarFilled className='w-[117px] h-[12px] rounded-[30px]' />
                        ) : (
                          <ProgressBarUnfilled className='w-[117px] h-[12px] rounded-[30px]' />
                        )}
                        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[23px] text-center">
                          {status.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary and Suggestions */}
                <div className='bg-white px-[16px] py-[18px]'>
                  <div className='flex flex-col gap-[18px]'>
                    {/* Client Focus Summary */}
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Summary
                    </h4>
                    {clientFocusSummaryContent.map((text, index) => (
                      <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                        {text}
                      </p>
                    ))}

                    <div className='border-t border-[#C6C6C6]' />

                    {/* Client Focus Suggestions */}
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Suggestions
                    </h4>
                    {clientFocusSuggestionsContent.map((text, index) => (
                      <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Accuracy Section */}
        {!isRiskDetailOpen && (
          <div className='border border-[#0D54FF] rounded-[9px] overflow-hidden'>
            {/* Accuracy Header */}
            <button
              onClick={() => toggleSection('accuracy')}
              className='w-full flex items-center justify-between px-[20px] py-[16px] bg-white hover:bg-[#F6F6F6] transition-colors'
            >
              <h3 className="text-[#0D54FF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                Accuracy
              </h3>
              {expandedSections.accuracy ? (
                <ChevronUpIcon width={19} height={11} color='#505050' />
              ) : (
                <ChevronDownIcon width={19} height={11} color='#050505' />
              )}
            </button>

            {/* Accuracy Content */}
            {expandedSections.accuracy && (
              <div className='flex flex-col'>
                {/* Gradient Score Section */}
                <div 
                  className='px-[31px] py-[28px] flex flex-col items-center gap-[20px]'
                  style={{
                    background: 'linear-gradient(90deg, #0D54FF 0%, #7B3FE4 100%)'
                  }}
                >
                  <p className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[18px]">
                    Accuracy Score
                  </p>
                  
                  <div className='flex items-center'>
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[100.57px] font-bold leading-[135px]">
                      {accuracyData.score}%
                    </span>
                  </div>

                  {/* Single Progress Bar */}
                  <div className='flex flex-col items-center gap-[9px] w-full max-w-[480px]'>
                    <div className='relative w-full h-[12px] bg-[rgba(255,255,255,0.3)] rounded-[30px] overflow-hidden'>
                      <div 
                        className='absolute top-0 left-0 h-full bg-white rounded-[30px]'
                        style={{ width: `${accuracyData.score}%` }}
                      />
                    </div>
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[17px] font-medium leading-[23px] text-center">
                      {accuracyData.label}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div className='bg-white px-[16px] py-[18px]'>
                  <div className='flex flex-col gap-[18px]'>
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Summary
                    </h4>
                    {accuracySummaryContent.map((text, index) => (
                      <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default RiskScoreProcessCheck