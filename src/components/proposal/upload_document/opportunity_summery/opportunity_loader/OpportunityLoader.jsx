import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularLoader from '../../../../../assets/icons/CircularLoader.jsx';
import AISparkleIcon from '../../../../../assets/icons/AISparkleIcon.jsx';
import OrchestratorSidebar from '../OrchestratorSidebar.jsx';
import Breadcrumb from '../../Breadcrumb.jsx';
import Sidebar from '../../Sidebar.jsx';
import FooterNav from '../../FooterNav.jsx';
import { mockOrchestratorDataLoading } from '../OrchestratorSidebarMockData.js'

function OpportunityLoader({ onCancel, onSendMessage, onStepClick, activeStep = 1, completedSteps = [0], onPrevious, onNext }) {
  const navigate = useNavigate();
  const totalActivities = mockOrchestratorDataLoading.agentActivities.length
  const [visibleCount, setVisibleCount] = useState(1)
  const [progress, setProgress] = useState(Math.round((1 / totalActivities) * 100))
  const [done, setDone] = useState(false)
  const [startTs] = useState(() => Date.now())
  const [endedStatus, setEndedStatus] = useState('')

  useEffect(() => {
    // reveal next activity every ~1.8s and update progress
    if (done) return
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        const next = Math.min(prev + 1, totalActivities)
        setProgress(Math.min(100, Math.round((next / totalActivities) * 100)))
        if (next === totalActivities) {
          setDone(true)
        }
        return next
      })
    }, 1800)
    return () => clearInterval(interval)
  }, [done, totalActivities])

  useEffect(() => {
    if (done) {
      const ms = Date.now() - startTs
      const secs = Math.max(1, Math.round(ms / 1000))
      setEndedStatus(`Huddle ended after ${secs} secs..`)
      // brief pause to show 100% and status, then navigate
      const t = setTimeout(() => navigate('/opportunity_done'), 1200)
      return () => clearTimeout(t)
    }
  }, [done, navigate, startTs])

  const sidebarData = useMemo(() => ({
    ...mockOrchestratorDataLoading,
    agentActivities: mockOrchestratorDataLoading.agentActivities.slice(0, visibleCount),
    huddleStatus: done ? endedStatus : `Huddle in progress.. ${progress}%`,
    isHuddleInProgress: !done
  }), [visibleCount, progress, done, endedStatus])

  const handleCancel = () => {
    if (onCancel) return onCancel();
    navigate('/opportunity_summary');
  }
  return (
    <div className="h-full flex flex-col bg-[#f6f6f6]">
      {/* Breadcrumb */}
      <Breadcrumb current="Opportunity Summary" />

      {/* Main content area - scrollable */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar 
          onStepClick={onStepClick}
          activeStep={activeStep}
          completedSteps={completedSteps}
        />

        {/* Center content with modal */}
        <div className="flex-1 flex items-center justify-center bg-[#f6f6f6] overflow-y-auto">
          <div className="bg-white rounded-xl border border-[#cfcfcf] shadow-[0px_4px_8px_2px_rgba(0,0,0,0.07)] w-[690px] p-8 flex flex-col gap-6 my-8">
            {/* Header */}
            <div className="flex items-center gap-3">
              <AISparkleIcon width={33} height={33} />
              <h2 className="text-2xl font-semibold text-[#39393a]">
                AI is generating your summary...
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-8">
              {/* Circular Loader */}
              <CircularLoader size={119} strokeWidth={8} progress={progress} animated={true} />
              
              {/* Estimated wait time */}
              <p className="text-xl text-[#828282]">
                Estimated wait time 3-5 minutes
              </p>
              
              {/* Message */}
              <p className="text-xl text-[#505050] text-center leading-[26.82px]">
                Please continue with other Proposals . You will be notified once the huddle has ended
              </p>
            </div>

            {/* Cancel Button */}
            <div className="flex justify-end">
              <button
                onClick={handleCancel}
                className="text-[22px] font-semibold text-[#0d54ff] hover:text-[#0040d9] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Right Agent Huddle Sidebar */}
        <OrchestratorSidebar data={sidebarData} isLoading={false} onSendMessage={onSendMessage} />
      </div>

      {/* Footer Navigation */}
      <div className="flex-shrink-0">
        <FooterNav
          activeStep={activeStep}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
}

export default OpportunityLoader;