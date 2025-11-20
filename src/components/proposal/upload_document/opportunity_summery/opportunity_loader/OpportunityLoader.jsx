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
  const [visibleCount, setVisibleCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [startTs] = useState(() => Date.now())
  const [endedStatus, setEndedStatus] = useState('')

  useEffect(() => {
    // reveal next activity on an interval and show 100% in-progress briefly before completing
    if (done) return

    let endTimeoutId
    let startTimeoutId
    const firstStepPct = totalActivities > 0 ? Math.round((1 / totalActivities) * 100) : 0

    // First time: wait 1s at 0%, then move to first step and let effect rerun to start interval
    if (visibleCount === 0 && totalActivities > 0) {
      startTimeoutId = setTimeout(() => {
        setVisibleCount(1)
        setProgress(firstStepPct)
      }, 1000)

      return () => {
        if (startTimeoutId) clearTimeout(startTimeoutId)
      }
    }

    // Calculate interval for each activity so the total completes in 50 seconds
    const intervalTime = (50 * 1000) / totalActivities // 50 seconds for total, spread across all activities

    const intervalId = setInterval(() => {
      setVisibleCount((prev) => {
        const next = Math.min(prev + 1, totalActivities)
        const pct = Math.min(100, Math.round((next / totalActivities) * 100))
        setProgress(pct)
        
        if (next === totalActivities) {
          // stop further increments and delay completion so 100% in-progress is visible
          clearInterval(intervalId)
          endTimeoutId = setTimeout(() => setDone(true), 1000) // 1-second delay before marking as done
        }
        return next
      })
    }, intervalTime)

    return () => {
      clearInterval(intervalId)
      if (endTimeoutId) clearTimeout(endTimeoutId)
      if (startTimeoutId) clearTimeout(startTimeoutId)
    }
  }, [done, totalActivities, visibleCount])

  useEffect(() => {
    if (done) {
      const ms = Date.now() - startTs;
      const secs = Math.max(1, Math.round(ms / 1000));
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      const status = `Huddle ended after ${m > 0 ? `${m}m ${s} secs` : `${s} secs`}..`;
      setEndedStatus(status);
      // brief pause to show 100% and status, then navigate with state
      const t = setTimeout(() => navigate('/opportunity_done', { state: { endedStatus: status, elapsedSeconds: secs, elapsedMs: ms } }), 1200);
      return () => clearTimeout(t);
    }
  }, [done, navigate, startTs]);

  const sidebarData = useMemo(() => ({
    ...mockOrchestratorDataLoading,
    agentActivities: mockOrchestratorDataLoading.agentActivities.slice(0, visibleCount),
    huddleStatus: done ? endedStatus : `Huddle in progress.. ${progress}%`,
    isHuddleInProgress: !done,
    progress
  }), [visibleCount, progress, done, endedStatus]);

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
                Estimated wait time 1-2 minutes
              </p>
              
              {/* Message */}
              <p className="text-xl text-[#505050] text-center leading-[26.82px]">
                Please continue with other Proposals. You will be notified once the huddle has ended.
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
