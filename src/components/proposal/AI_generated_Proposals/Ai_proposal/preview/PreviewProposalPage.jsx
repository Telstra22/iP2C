import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PreviewActionButtons from './PreviewActionButtons'
import ProposalContentSection from '../proposal_section/ProposalContentSection'
import ProposalEvaluationMetrics from './ProposalEvaluationMetrics'
import AgentRiskScoreEvaluationMatrics from './AgentRiskScoreEvaluationMatrics'
import RiskScoreProcessCheck from './RiskScoreProcessCheck'
import { mockRootProps } from '../proposal_section/AiProposalPageMockData'
import { performDownload } from './downloadUtils'
import { saveNewProposalCard } from '../saveNewProposalCard'

const PreviewProposalPage = ({ embedded = false, onClose }) => {
  const navigate = useNavigate()
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 })
  const [showAgentRiskScore, setShowAgentRiskScore] = useState(false)
  const [showRiskScoreProcess, setShowRiskScoreProcess] = useState(false)

  const handleDownloadChoice = (choice) => {
    const sections = mockRootProps.sections || []

    performDownload(choice, sections)
    setShowDownloadModal(false)
  }

  const handleDownload = (e) => {
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect()
      setMenuPos({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX })
    }
    setShowDownloadModal(true)
  }

  const handleEditSection = () => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

    if (embedded && typeof onClose === 'function') {
      onClose()

      if (currentPath !== '/ai_proposal_page') {
        navigate('/ai_proposal_page')
      }
    } else {
      navigate('/ai_proposal_page')
    }
  }

  const handleExport = () => {
    console.log('Export proposal')
    // Implement export logic
  }

  const handleSaveExit = () => {
    console.log('Save and exit')
    saveNewProposalCard()
    navigate('/manage_proposals')
  }

  const handleScoreProposal = (section) => {
    console.log('Score proposal for section:', section)
    setShowAgentRiskScore(true)
    setShowRiskScoreProcess(false)
  }

  const handleBackToMetrics = () => {
    setShowAgentRiskScore(false)
  }

  return (
    <div className='w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden'>
      {/* Main Content Area */}
      <div className='flex-1 flex overflow-hidden min-h-0'>
        {/* Left Side - Proposal Content */}
        <div className='flex-1 overflow-y-scroll min-h-0'>
          <div className='px-[68px] py-[37px]'>
            {/* Title and Action Buttons */}
            <div className='flex items-center justify-between mb-[13px]'>
              <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                Preview Proposal
              </h1>
              <PreviewActionButtons
                onDownload={handleDownload}
                onExport={handleExport}
                onEditSection={handleEditSection}
                onSaveExit={handleSaveExit}
              />
            </div>

            {/* Proposal Content */}
            <div className='bg-white rounded-[9px] border border-[#D9D9D9] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] px-[32px] py-[40px]'>
              <div className='flex flex-col gap-[40px]'>
                {mockRootProps.sections.map((section) => (
                  <ProposalContentSection key={section.id} section={section} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Proposal Evaluation Metrics */}
        {showRiskScoreProcess ? (
          <RiskScoreProcessCheck />
        ) : showAgentRiskScore ? (
          <AgentRiskScoreEvaluationMatrics
            onComplete={() => setShowRiskScoreProcess(true)}
            onBack={handleBackToMetrics}
          />
        ) : (
          <ProposalEvaluationMetrics
            onScoreProposal={handleScoreProposal}
          />
        )}
      </div>

      {showDownloadModal && (
        <>
          <div className='fixed inset-0 z-40' onClick={() => setShowDownloadModal(false)} />
          <div
            className='absolute z-50 bg-white rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-[#E5E5E5]'
            style={{ top: `${menuPos.top}px`, left: `${menuPos.left}px`, width: 220 }}
          >
            <div className='py-2'>
              <button onClick={() => handleDownloadChoice('pdf')} className='w-full px-4 py-2 hover:bg-gray-50 text-center'>PDF</button>
              <hr className='my-1 border-t border-[#D9D9D9]' />
              <button onClick={() => handleDownloadChoice('docx')} className='w-full px-4 py-2 hover:bg-gray-50 text-center'>Word (.doc)</button>
              <hr className='my-1 border-t border-[#D9D9D9]' />
              <button onClick={() => handleDownloadChoice('csv')} className='w-full px-4 py-2 hover:bg-gray-50 text-center'>CSV</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PreviewProposalPage