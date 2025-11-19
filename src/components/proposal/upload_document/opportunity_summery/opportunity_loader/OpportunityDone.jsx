import React, { useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CheckmarkSuccessIcon from '../../../../../assets/icons/CheckmarkSuccessIcon.jsx';
import AISparkleIcon from '../../../../../assets/icons/AISparkleIcon.jsx';
import OrchestratorSidebar from '../OrchestratorSidebar.jsx';
import Breadcrumb from '../../Breadcrumb.jsx';
import Sidebar from '../../Sidebar.jsx';
import FooterNav from '../../FooterNav.jsx';
import { mockOrchestratorDataLoading } from '../OrchestratorSidebarMockData.js'

function OpportunityDone({ onDone, onSendMessage, onStepClick, activeStep = 1, completedSteps = [0], onPrevious, onNext }) {
  const navigate = useNavigate();
  const location = useLocation();
  const totalActivities = mockOrchestratorDataLoading.agentActivities.length
  const [visibleCount] = useState(totalActivities)
  const endedStatusFromState = location?.state?.endedStatus

  const sidebarData = useMemo(() => ({
    ...mockOrchestratorDataLoading,
    agentActivities: mockOrchestratorDataLoading.agentActivities.slice(0, visibleCount),
    // show as completed state: checkmarks on, no progress bar
    huddleStatus: endedStatusFromState || 'Huddle ended after 3m 56secs..',
    isHuddleInProgress: false
  }), [visibleCount, endedStatusFromState])
  const handleDone = () => {
    if (onDone) return onDone();
    navigate('/opportunity_summary');
  }
  const handleNext = () => {
    navigate('/opportunity_summary');
  }
  return (
    <div className="h-full flex flex-col bg-[#f6f6f6] overflow-hidden">
      {/* Breadcrumb */}
      <Breadcrumb current="Opportunity Summary" />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden min-w-0">
        {/* Left Sidebar */}
        <Sidebar 
          onStepClick={onStepClick}
          activeStep={activeStep}
          completedSteps={completedSteps}
        />

        {/* Center content with success modal */}
        <div className="flex-1 flex items-center justify-center bg-[#f6f6f6]">
          <div className="bg-white rounded-xl border border-[#cfcfcf] shadow-[0px_4px_8px_2px_rgba(0,0,0,0.07)] w-[674px] flex flex-col gap-6" style={{ padding: '32px' }}>
            {/* Header */}
            <div className="flex items-center gap-3">
              <AISparkleIcon width={33} height={33} />
              <h2 className="text-2xl font-semibold text-[#39393a]">
                AI Generated Opportunity Summary Ready!
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center" style={{ gap: '32px' }}>
              {/* Success Checkmark - Blue circle outline with blue checkmark */}
              <div className="relative w-[80px] h-[80px] rounded-full border-[4px] border-[#0d54ff] bg-transparent flex items-center justify-center">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15L15 27L37 5" stroke="#0d54ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Instruction text */}
              <p className="text-xl text-[#828282] text-center">
                Click on Done to continue to the Opportunity Summary Page
              </p>
            </div>

            {/* Done Button */}
            <div className="flex justify-end">
              <button
                onClick={handleDone}
                className="text-[22px] font-semibold text-[#0d54ff] hover:text-[#0040d9] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>

        {/* Right Agent Huddle Sidebar - completed state with one-by-one reveal */}
        <OrchestratorSidebar data={sidebarData} isLoading={false} onSendMessage={onSendMessage} />
      </div>

      {/* Footer Navigation */}
      <div className="flex-shrink-0">
        <FooterNav
          activeStep={activeStep}
          onPrevious={onPrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

export default OpportunityDone;