import React, { useRef, useState } from 'react'

import MetricsIcon from '../../../../../assets/icons/MetricsIcon'
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

  const [expandedSummarySection, setExpandedSummarySection] = useState(null)

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

  const scoreData = {
    current: 2,
    total: 3,
    statuses: [
      { label: 'High Risk', met: true },
      { label: 'Medium Risk', met: true },
      { label: 'No Risk', met: false }
    ]
  }

  const summaryContent = [
    '⦁ Financial risk is low due to comprehensive cost breakdowns, clear billing terms, and value for money through incentives like the technology fund. However, there is a need for more detailed justifications for professional services charges.',
    '⦁ Timeline risk is medium because of the lack of detailed schedules, Gantt charts, and contingency plans. The proposal mentions optimistic delivery timelines without detailed logistics support.',
    '⦁ Technical risk is low, with a strong emphasis on security practices, compliance with international standards, and innovation. However, there is a need for more explicit details on responsibilities and potential vendor lock-in risks.',
    '⦁ Contractual and legal risk is medium due to the lack of detail on contract duration, renewal terms, and ambiguity in payment terms. The proposal also lacks explicit mention of dispute resolution and governing law.'
  ]

  const suggestionsContent = [
    '⦁ For Financial risk, provide more detailed justifications for the pricing of professional services charges and clarify conditions for using the technology fund.',
    '⦁ For Timeline risk, include detailed schedules or Gantt charts, a logistics plan, and contingency plans for potential delays.',
    '⦁ For Technical risk, provide case studies of successful implementations and clarify responsibilities for technical implementation.',
    '⦁ For Contractual and Legal risk, include specific contract duration and renewal terms, enhance confidentiality clauses, and clarify payment terms and dispute resolution mechanisms.'
  ]

  const complianceData = {
    current: 3,
    total: 3,
    statuses: [
      { label: 'Not Met', met: true },
      { label: 'Partially Met', met: true },
      { label: 'Fully Met', met: true }
    ]
  }

  const complianceSummaryContent = [
    '⦁ The proposal provides comprehensive compliance information, including ISO/IEC 27001:2022 certification, which is a well-known standard for information security management systems.',
    '⦁ The proposal includes evidence of SOC2 (ASAE3150) audit reports, demonstrating adherence to security processes and controls.',
    '⦁ The proposal discusses compliance with legal and regulatory standards, including Telstra\'s Code of Conduct and Human Rights & Modern Slavery statement.',
    '⦁ The proposal is on-topic and relevant, focusing on compliance requirements and providing detailed information on how compliance will be achieved.',
    '⦁ The proposal includes necessary appendices and references, such as the Telstra ISO27001 Certification and Telstra Statement of Applicability.'
  ]

  const complianceSuggestionsContent = [
    '⦁ Ensure that all compliance-related documents, such as the Telstra ASAE3150 (SOC2) Audit report, are easily accessible to the client, possibly by providing direct links or instructions on how to request them.',
    '⦁ Include a summary table of all certifications and compliance standards met by Telstra and imei to provide a quick reference for the client.',
    '⦁ Consider adding a section that outlines the process for maintaining compliance over time, including any regular audits or reviews that will be conducted.'
  ]

  const clientFocusData = {
    current: 2,
    total: 3,
    statuses: [
      { label: 'Not Compelling', met: true },
      { label: 'Somewhat Compelling', met: true },
      { label: 'Fully Compelling', met: false }
    ]
  }

  const clientFocusSummaryContent = [
    '⦁ The proposal mentions both Telstra and Total Brick frequently, maintaining a balance between the two.',
    '⦁ The client focus is stated upfront in sections like \'Our Understanding of Your Challenges and Objectives\' and \'A solution aligned with your vision\'.',
    '⦁ The proposal is structured to address client needs, with sections dedicated to understanding client challenges and offering tailored solutions.',
    '⦁ The proposal uses some plain language and is somewhat easy to read, though it includes technical jargon and Telstra-specific terminology.',
    '⦁ There is a mix of active and passive voice, with some sentences starting with \'We\' or \'Telstra\'.',
    '⦁ The proposal includes lead-in sentences for bullet points and uses lists to break up text, though it could benefit from more visual elements like tables or graphics.',
    '⦁ The proposal provides examples and details about how Telstra\'s solutions can address Total Brick\'s needs, but lacks extensive client-specific benefits.'
  ]

  const clientFocusSuggestionsContent = [
    '⦁ Increase the use of visuals such as tables or graphics to illustrate key points and break up text-heavy sections.',
    '⦁ Reduce the use of technical jargon and Telstra-specific terminology to improve readability and focus more on client-specific language.',
    '⦁ Provide more client-specific benefits and examples to substantiate claims and demonstrate how the solutions directly address Total Brick\'s challenges.',
    '⦁ Use more active voice and client-focused language to enhance engagement and clarity.',
    '⦁ Include more data, facts, or statistics that directly relate to Total Brick\'s industry or specific needs to strengthen the proposal\'s relevance.'
  ]

  const accuracyData = {
    score: 86,
    label: 'Near Accurate'
  }

  const accuracySummaryContent = [
    '⦁ The proposal mentions both Telstra and Total Brick frequently, maintaining a balance between the two.',
    '⦁ The client focus is stated upfront in sections like \'Our Understanding of Your Challenges and Objectives\' and \'A solution aligned with your vision\'.',
    '⦁ The proposal is structured to address client needs, with sections dedicated to understanding client challenges and offering tailored solutions.',
    '⦁ The proposal uses some plain language and is somewhat easy to read, though it includes technical jargon and Telstra-specific terminology.',
    '⦁ There is a mix of active and passive voice, with some sentences starting with \'We\' or \'Telstra\'.',
    '⦁ The proposal includes lead-in sentences for bullet points and uses lists to break up text, though it could benefit from more visual elements like tables or graphics.',
    '⦁ The proposal provides examples and details about how Telstra\'s solutions can address Total Brick\'s needs, but lacks extensive client-specific benefits.'
  ]

  return (
    <div className='w-[491px] h-full flex flex-col border-l border-[#D9D9D9] bg-[#FCFCFC] shadow-[-4px_0px_13px_rgba(0,0,0,0.10)]'>
      {/* Header */}
      <div className='flex items-center gap-[10px] px-[20px] py-[24px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
        <MetricsIcon width={35} height={32} color='#050505' />
        <h2 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
          Proposal Evaluation Metrics
        </h2>
      </div>

      {/* Content */}
      <div className='flex-1 px-[21px] pt-[31px] pb-[30px] flex flex-col gap-[15px] overflow-y-auto min-h-0'>
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
                {/* Summary */}
                <div className='flex flex-col'>
                  <button
                    onClick={() => setExpandedSummarySection(prev => prev === 'risk' ? null : 'risk')}
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
                  {expandedSummarySection === 'risk' && (
                    <div className='pt-[12px] flex flex-col gap-[18px]'>
                      {summaryContent.map((text, index) => (
                        <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className='border-t border-[#C6C6C6]' />

                {/* Suggestions */}
                <div className='flex flex-col'>
                  <button
                    onClick={() => toggleSection('suggestions')}
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
            </div>
          )}
        </div>

        {/* Compliance Section */}
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
              <div className='bg-white px-[16px] py-[18px] flex flex-col gap-[18px]'>
                {/* Summary */}
                <div className='flex flex-col'>
                  <button
                    onClick={() => setExpandedSummarySection(prev => prev === 'compliance' ? null : 'compliance')}
                    className='flex items-center justify-between py-[8px] hover:bg-[#F6F6F6] transition-colors'
                  >
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Summary
                    </h4>
                    {expandedSummarySection === 'compliance' ? (
                      <ChevronUpIcon width={19} height={11} color='#050505' />
                    ) : (
                      <ChevronDownIcon width={19} height={11} color='#050505' />
                    )}
                  </button>
                  {expandedSummarySection === 'compliance' && (
                    <div className='pt-[12px] flex flex-col gap-[18px]'>
                      {complianceSummaryContent.map((text, index) => (
                        <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className='border-t border-[#C6C6C6]' />

                {/* Suggestions */}
                <div className='flex flex-col'>
                  <button
                    onClick={() => toggleSection('suggestions')}
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
                      {complianceSuggestionsContent.map((text, index) => (
                        <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Client Focus Section */}
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
              <div className='bg-white px-[16px] py-[18px] flex flex-col gap-[18px]'>
                {/* Summary */}
                <div className='flex flex-col'>
                  <button
                    onClick={() => setExpandedSummarySection(prev => prev === 'clientFocus' ? null : 'clientFocus')}
                    className='flex items-center justify-between py-[8px] hover:bg-[#F6F6F6] transition-colors'
                  >
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Summary
                    </h4>
                    {expandedSummarySection === 'clientFocus' ? (
                      <ChevronUpIcon width={19} height={11} color='#050505' />
                    ) : (
                      <ChevronDownIcon width={19} height={11} color='#050505' />
                    )}
                  </button>
                  {expandedSummarySection === 'clientFocus' && (
                    <div className='pt-[12px] flex flex-col gap-[18px]'>
                      {clientFocusSummaryContent.map((text, index) => (
                        <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className='border-t border-[#C6C6C6]' />

                {/* Suggestions */}
                <div className='flex flex-col'>
                  <button
                    onClick={() => toggleSection('suggestions')}
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
                      {clientFocusSuggestionsContent.map((text, index) => (
                        <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Accuracy Section */}
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
              <div className='bg-white px-[16px] py-[18px] flex flex-col gap-[18px]'>
                <div className='flex flex-col'>
                  <button
                    onClick={() => setExpandedSummarySection(prev => prev === 'accuracy' ? null : 'accuracy')}
                    className='flex items-center justify-between py-[8px] hover:bg-[#F6F6F6] transition-colors'
                  >
                    <h4 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                      Summary
                    </h4>
                    {expandedSummarySection === 'accuracy' ? (
                      <ChevronUpIcon width={19} height={11} color='#050505' />
                    ) : (
                      <ChevronDownIcon width={19} height={11} color='#050505' />
                    )}
                  </button>
                  {expandedSummarySection === 'accuracy' && (
                    <div className='pt-[12px] flex flex-col gap-[18px]'>
                      {accuracySummaryContent.map((text, index) => (
                        <p key={index} className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[25.22px]">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RiskScoreProcessCheck