import React, { useState } from 'react'
import MetricsIcon from '../../../../../assets/icons/MetricsIcon'
import ChevronDownIcon from '../../../../../assets/icons/ChevronDownIcon'
import ChevronUpIcon from '../../../../../assets/icons/ChevronUpIcon'

const ProposalEvaluationMetrics = ({ onScoreProposal }) => {
  const [selectedSection, setSelectedSection] = useState('Executive Summary')
  const [showDropdown, setShowDropdown] = useState(false)
  const [expandedCriteria, setExpandedCriteria] = useState('Risk Score')

  const sections = [
    'Executive Summary',
    'Meeting Your Objectives',
    'Service and Solution Overview',
    'Commercial',
    'Detail on the Proposed Solution',
    'Appendices',
    'Proposal Terms',
    'Your Telstra Team',
    'Terms & Conditions'
  ]

  const scoringCriteria = [
    {
      title: 'Risk Score',
      description: 'Assesses potential delivery, financial, or operational risks and the clarity of mitigation plans.'
    },
    {
      title: 'Compliance Score',
      description: 'Evaluates alignment with RFP requirements, internal standards, and mandatory terms.'
    },
    {
      title: 'Client Focus Score',
      description: 'Measures how well the proposal addresses client needs, value outcomes, and business impact.'
    },
    {
      title: 'Accuracy Score',
      description: 'Evaluates the precision and correctness of information, data, and claims presented in the proposal.'
    }
  ]

  const toggleCriteria = (title) => {
    setExpandedCriteria(expandedCriteria === title ? null : title)
  }

  const handleScoreClick = () => {
    if (onScoreProposal) {
      onScoreProposal(selectedSection)
    }
  }

  return (
    <div className='w-[491px] h-full flex flex-col border-l border-[#D9D9D9] bg-[#FCFCFC] shadow-[-4px_0px_13px_rgba(0,0,0,0.10)]'>
      {/* Header */}
      <div className='flex items-center gap-[10px] px-[20px] py-[24px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
        <MetricsIcon width={35} height={32} color='#050505' />
        <h2 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
          Proposal Evaluation Metrics
        </h2>
      </div>

      {/* Description */}
      <div className='px-[21px] pt-[21px] pb-[19px]'>
        <p className="text-[#505050] font-['Graphik',sans-serif] text-[19px] font-normal leading-[25px]">
          Score a section or entire document on a 3-point system based on the criteria below.
        </p>
      </div>

      {/* Divider */}
      <div className='mx-[21px] border-t border-[#D9D9D9]' />

      {/* Content */}
      <div className='flex-1 px-[21px] pt-[33px] pb-[30px] flex flex-col gap-[30px] overflow-y-auto'>
        {/* Section Selector */}
        <div className='flex flex-col gap-[10px]'>
          <label className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-medium leading-[24px]">
            Select Section to Score
          </label>
          <div className='relative'>
            <button
              type='button'
              disabled
              aria-disabled='true'
              className='w-full flex items-center justify-between px-[20px] py-[9px] bg-white border border-[#D9D9D9] rounded-[6px] cursor-not-allowed'
            >
              <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                {selectedSection}
              </span>
              <ChevronDownIcon width={19} height={11} color='#A0A0A0' />
            </button>
            
            {showDropdown && (
              <>
                <div 
                  className='fixed inset-0 z-40' 
                  onClick={() => setShowDropdown(false)} 
                />
                <div className='absolute z-50 w-full mt-2 bg-white border border-[#D9D9D9] rounded-[6px] shadow-lg max-h-[300px] overflow-y-auto'>
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedSection(section)
                        setShowDropdown(false)
                      }}
                      className='w-full px-[20px] py-[9px] text-left hover:bg-[#F6F6F6] transition-colors'
                    >
                      <span className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal">
                        {section}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Scoring Criteria */}
        <div className='flex flex-col gap-[15px]'>
          <h3 className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-medium leading-[24px]">
            Scoring Criteria
          </h3>
          
          <div className='flex flex-col gap-[15px]'>
            {scoringCriteria.map((criteria, index) => {
              const isExpanded = expandedCriteria === criteria.title
              return (
                <div 
                  key={index}
                  className='border border-[#0D54FF] rounded-[9px] overflow-hidden'
                >
                  <button
                    onClick={() => toggleCriteria(criteria.title)}
                    className='w-full flex items-center justify-between px-[20px] py-[14px] hover:bg-[#F6F6F6] transition-colors'
                  >
                    <h4 className="text-[#0D54FF] font-['Inter',sans-serif] text-[21px] font-semibold leading-[28px]">
                      {criteria.title}
                    </h4>
                    {isExpanded ? (
                      <ChevronUpIcon width={19} height={11} color='#0D54FF' />
                    ) : (
                      <ChevronDownIcon width={19} height={11} color='#0D54FF' />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <>
                      <div className='mx-[20px] border-t border-[#D9D9D9]' />
                      <div className='px-[20px] pb-[14px] pt-[8px]'>
                        <p className="text-[#050505] font-['Inter',sans-serif] text-[17px] font-normal leading-[22.80px]">
                          {criteria.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='mx-[21px] border-t border-[#D9D9D9]' />

      {/* Score Button */}
      <div className='px-[21px] pt-[33px] pb-[30px]'>
        <button
          onClick={handleScoreClick}
          className='w-full px-[20px] py-[12px] bg-[#0D54FF] hover:bg-[#0040D9] rounded-[6px] transition-colors'
        >
          <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[22px] font-medium leading-[30px]">
            Score my Proposal
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProposalEvaluationMetrics