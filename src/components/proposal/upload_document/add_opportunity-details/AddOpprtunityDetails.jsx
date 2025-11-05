import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Check, CircleAlert,ChevronRight } from "lucide-react";
import Breadcrumb from "../Breadcrumb.jsx";
import Sidebar from "../Sidebar.jsx";
import FileUploadZone from "./FileUploadZone.jsx";
import FooterNav from "../FooterNav.jsx";
import Blank_Opportunity_Summery from "../opportunity_summery/Blank_Opportunity_Summery.jsx";
import OpportunitySummery from "../opportunity_summery/Opportunity_Summery.jsx";
import Source_Connection from "../source_connection/Source_Connection.jsx";
import Create_Outline from "../create_outline/Create_Outline.jsx";
import SelectTemplate from "../../select_template/SelectTemplate.jsx";

const UploadProposalDocument = () => {
  const navigate = useNavigate();
  const [opportunityId, setOpportunityId] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [mainUploadCount, setMainUploadCount] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]); // indexes of steps completed
  const [allowSummary, setAllowSummary] = useState(false); // only true after Generate Summary with AI
  const [isVerified, setIsVerified] = useState(false);

  // The specific ID that enables the Verify button (per request)
  const EXPECTED_OPPORTUNITY_ID = "001K0132578HWb16AAD";
  const isVerifyEnabled = opportunityId === EXPECTED_OPPORTUNITY_ID;

  useEffect(() => {
    // clear prior verification if user edits the input
    setIsVerified(false);
  }, [opportunityId]);

  const handleDownloadQuestionnaire = () => {
    // Download the existing CSV from public folder
    const fileName = "Customer-Question-Fill.csv";
    const base =
      (import.meta && import.meta.env && import.meta.env.BASE_URL) || "/";
    const url = base.replace(/\/$/, "/") + fileName;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep((s) => Math.max(0, s - 1));
      return;
    }
    navigate(-1);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      // Only proceed if required inputs provided on step 0
      const isGenerateEnabled =
        opportunityId.trim().length > 0 && mainUploadCount >= 1;
      if (!isGenerateEnabled) return;
      // Mark step 0 as complete and go to step 1 (Opportunity Summary)
      setCompletedSteps((prev) => (prev.includes(0) ? prev : [...prev, 0]));
      setAllowSummary(true);
      setActiveStep(1);
      return;
    }
    // For subsequent steps, just advance
    setCompletedSteps((prev) =>
      prev.includes(activeStep) ? prev : [...prev, activeStep]
    );
    setActiveStep((s) => Math.min(s + 1, 4));
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="w-[1330px] bg-white rounded-[9px] px-[37px] mt-[37px]">
            {/* Header with AI Agent Status */}
            <div className="flex flex-col -ml-[35px] -mr-[35px] items-start self-stretch bg-[var(--blacks-0,#FFF)] shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] mb-[54px]">
              <div className="flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] self-stretch border-l-[12px] border-[#0D54FF]">
                <h1 className="text-[#050505] font-['Inter',sans-serif] text-[26px] font-semibold leading-[35px]">
                  Add Opportunity Details
                </h1>
              </div>
            </div>
            {/* Opportunity ID Section */}
            <div className="flex flex-col gap-[9px] mb-[54px]">
              <label className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                Add your Opportunity ID<span className="text-[#FF0000]">*</span>
              </label>
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[10px]">
                    <div className="flex items-center justify-between w-[630px] h-[61px] px-[20px] bg-[#FFF] rounded-[9px] border-[1px] border-[var(--Primary-Blue,#0D54FF)]">
                    <input
                      type="text"
                      value={opportunityId}
                      onChange={(e) => setOpportunityId(e.target.value)}
                      placeholder="Enter Opportunity ID"
                         className="flex-1 bg-transparent text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] placeholder:text-[#828282] placeholder:font-normal focus:outline-none"
                    />
                    {isVerified && (
                      <div className="ml-[12px] flex items-center">
                        <Check size={32} color="#0D54FF" />
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      // Only allow verifying when enabled and not already verified
                      if (!isVerified && isVerifyEnabled) setIsVerified(true);
                    }}
                    className={`h-[64px] px-[20px] rounded-[8px] flex items-center gap-[10px] transition-colors ${
                      // show blue only when the ID is entered and NOT yet verified
                      !isVerified && isVerifyEnabled
                        ? "bg-[#0D54FF] hover:bg-[#0b4de6]"
                        : "bg-[#D9D9D9] hover:bg-[#C6C6C6]"
                    }`}
                    aria-disabled={isVerified || !isVerifyEnabled}
                  >
                    <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                      Verify ID
                    </span>
                    <ChevronRight color="#FFFFFF" className="w-[24px] h-[24px] aspect-[1/1]" />
                  </button>
                </div>
                <span className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-light leading-[24px]">
                  Only numeric values allowed
                </span>
              </div>
            </div>

            {/* Upload Documents Section */}
            <div className="flex flex-col gap-[20px] mb-[54px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                  Upload relevant opportunity documents
                  <span className="text-[#FF0000]">*</span>
                </label>
                <p className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
                  Select a maximum of 5 files to upload. File format must be
                  Word, CSV or PDF. Total file size maximum: 10 MB.
                </p>
                {mainUploadCount === 5 && (
                  <p className="text-[#FF0000] font-['Inter',sans-serif] text-[18px] font-medium leading-[24px]">
                    Max file size limit is five
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-[15px]">
                <FileUploadZone
                  onFilesChange={(list) => setMainUploadCount(list.length)}
                />
              </div>
            </div>

            {/* Optional Questionnaire Section */}
            <div className="flex flex-col gap-[20px] pb-[50px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
                  Upload Customer Questionnaire.xlsx (Optional)
                </label>
                <p className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                  Please download and fill the Customer RFp Questionnaire and
                  upload it in the below field
                </p>
              </div>

              {/* Download Section */}
              <div className="self-stretch h-[103px] px-[38px] py-[27px] flex items-center justify-between rounded-[3px] border border-[var(--blacks-30,#B4B4B4)] bg-white relative">
                <div className="absolute left-0 top-0 w-[9px] h-[103px] bg-[#C9D7FA]"></div>
                <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-medium leading-[30px]">
                  Customer Questionnaire.csv (10KB)
                </span>
                <button
                  onClick={handleDownloadQuestionnaire}
                  className="flex items-center gap-[10px] px-[20px] py-[10px] bg-white rounded-[6px] border-[1.5px] border-[#0D54FF] hover:bg-[#F0F7FF] transition-colors"
                >
                  <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
                    Download
                  </span>
                  <Download size={16} color="#0D54FF" strokeWidth={2} />
                </button>
              </div>

              <div className="flex flex-col gap-[15px]">
                <FileUploadZone />
              </div>
            </div>
          </div>
        );
      case 1:
        return allowSummary ? (
          <OpportunitySummery />
        ) : (
          <Blank_Opportunity_Summery />
        );
      case 2:
        return allowSummary ? (
          <Source_Connection />
        ) : (
          <Blank_Opportunity_Summery />
        );
      case 3:
        return allowSummary ? (
          <Create_Outline />
        ) : (
          <Blank_Opportunity_Summery />
        );
      case 4:
        return allowSummary ? (
          <SelectTemplate />
        ) : (
          <Blank_Opportunity_Summery />
        );
      default:
        return <Blank_Opportunity_Summery />;
    }
  };

  return (
    <div className="w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden">
      {/* Breadcrumb */}
      {(() => {
        const sidebarStepLabels = [
          "Add Opportunity Details",
          "Opportunity Summary",
          "Select Source Connection",
          "Create Outline",
          "Select Template",
        ];
        const currentLabel = sidebarStepLabels[activeStep];
        return <Breadcrumb current={currentLabel} />;
      })()}

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeStep={activeStep}
          completedSteps={completedSteps}
          onStepClick={(idx) => {
            // Navigate without marking completed; ticks are only set via Next
            setActiveStep(idx);
          }}
        />

        {/* Main Form Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pl-[30px] pr-[37px] pt-0 pb-[37px]">
          {renderStepContent()}
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNav
        activeStep={activeStep}
        opportunityId={opportunityId}
        mainUploadCount={mainUploadCount}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isVerified={isVerified}
      />
    </div>
  );
};

export default UploadProposalDocument;
