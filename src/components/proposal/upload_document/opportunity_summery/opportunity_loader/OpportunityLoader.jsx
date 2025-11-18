import React from 'react';
import CircularLoader from '../../../../../assets/icons/CircularLoader.jsx';
import AISparkleIcon from '../../../../../assets/icons/AISparkleIcon.jsx';
import OrchestratorSidebar from '../OrchestratorSidebar.jsx';
import Breadcrumb from '../../Breadcrumb.jsx';
import Sidebar from '../../Sidebar.jsx';
import FooterNav from '../../FooterNav.jsx';

function OpportunityLoader({ onCancel, onSendMessage, onStepClick, activeStep = 1, completedSteps = [0], onPrevious, onNext }) {
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
              <CircularLoader size={119} strokeWidth={8} progress={75} animated={true} />
              
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
                onClick={onCancel}
                className="text-[22px] font-semibold text-[#0d54ff] hover:text-[#0040d9] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Right Agent Huddle Sidebar */}
        <OrchestratorSidebar isLoading={true} onSendMessage={onSendMessage} />
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