import React, { useState } from "react";
import SelectableChip from "./SelectableChip.jsx";
import Checkbox from "./Checkbox.jsx";

function Create_Outline() {
  const [standardSections, setStandardSections] = useState([
    { id: "executive-summary", label: "Executive Summary", selected: true },
    {
      id: "meeting-objectives",
      label: "Meeting Your Objectives",
      selected: true,
    },
    { id: "commercial", label: "Commercial", selected: true },
    {
      id: "proposed-solution",
      label: "Detail on the proposed solution",
      selected: true,
    },
    { id: "appendices", label: "Appendices", selected: true },
    { id: "proposal-terms", label: "Proposal terms", selected: true },
    { id: "telstra-team", label: "Your Telstra team", selected: true },
  ]);

  const [additionalSections, setAdditionalSections] = useState([
    {
      id: "inclusion&diversity",
      label: "Inclusion & Diversity",
      selected: false,
    },
    {
      id: "sustainability&differentiators",
      label: "Sustainability & Differentiators",
      selected: false,
    },
    {
      id: "people&changemanagement",
      label: "People & Change Management",
      selected: false,
    },
    { id: "riskmanagement", label: "Risk Management", selected: false },
    {
      id: "integrationstrategy",
      label: "Integration Strategy",
      selected: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(true);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setStandardSections(
      standardSections.map((section) => ({
        ...section,
        selected: newSelectAll,
      }))
    );
    setAdditionalSections(
      additionalSections.map((section) => ({
        ...section,
        selected: newSelectAll,
      }))
    );
  };

  const handleStandardToggle = (id) => {
    const updatedSections = standardSections.map((section) =>
      section.id === id ? { ...section, selected: !section.selected } : section
    );
    setStandardSections(updatedSections);
    updateSelectAllState(updatedSections, additionalSections);
  };

  const handleAdditionalToggle = (id) => {
    const updatedSections = additionalSections.map((section) =>
      section.id === id ? { ...section, selected: !section.selected } : section
    );
    setAdditionalSections(updatedSections);
    updateSelectAllState(standardSections, updatedSections);
  };

  const updateSelectAllState = (standard, additional) => {
    const allSelected =
      standard.every((s) => s.selected) && additional.every((s) => s.selected);
    setSelectAll(allSelected);
  };

  return (
    <div className="w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px] mt-[37px] pt-0 pb-[37px]">
      {/* Header */}
      <div className="flex flex-col -ml-[35px] -mr-[35px] items-start self-stretch bg-[var(--blacks-0,#FFF)] shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] mb-[40px]">
        <div className="flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] self-stretch border-l-[12px] border-[#0D54FF]">
          <h1 className="text-[#050505] font-['Inter',sans-serif] text-[26px] font-semibold leading-[35px]">
            Create my own Outline
          </h1>
          <span>
            Select headings to create your Opportunity response outline
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[30px]">
        {/* Header Row with Select All */}
        <div className="flex items-center justify-between">
          <h2 className="text-[#050505] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px]">
            Select headings to create your Opportunity response outline
          </h2>
          <div className="flex items-center gap-[23px]">
            <Checkbox checked={selectAll} onChange={handleSelectAll} />
            <span className="text-[#0d54ff] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px]">
              Select all
            </span>
          </div>
        </div>

        {/* Sections Container */}
        <div className="flex flex-col gap-[36px]">
          {/* Standard Sections */}
          <div className="flex flex-col gap-[26px]">
            {/* Select All for Standard */}
            <div className="flex items-center gap-[17px]">
              <Checkbox
                checked={standardSections.every((s) => s.selected)}
                onChange={() => {
                  const allSelected = standardSections.every((s) => s.selected);
                  setStandardSections(
                    standardSections.map((s) => ({
                      ...s,
                      selected: !allSelected,
                    }))
                  );
                  updateSelectAllState(
                    standardSections.map((s) => ({
                      ...s,
                      selected: !allSelected,
                    })),
                    additionalSections
                  );
                }}
              />
              <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                Select all
              </span>
            </div>

            {/* Two Column Grid */}
            <div className="grid grid-cols-2 gap-x-[463px]">
              {/* Left Column */}
              <div className="flex flex-col gap-[26px] pl-[40px]">
                {standardSections.slice(0, 4).map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center gap-[23px]"
                  >
                    <Checkbox
                      checked={section.selected}
                      onChange={() => handleStandardToggle(section.id)}
                    />
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                      {section.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-[26px]">
                {standardSections.slice(4).map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center gap-[23px]"
                  >
                    <Checkbox
                      checked={section.selected}
                      onChange={() => handleStandardToggle(section.id)}
                    />
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                      {section.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Optional Sections */}
          <div className="flex flex-col gap-[26px]">
            <h3 className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Optional sections (Please choose as required)
            </h3>

            {/* Select All for Optional */}
            <div className="flex items-center gap-[17px]">
              <Checkbox
                checked={additionalSections.every((s) => s.selected)}
                onChange={() => {
                  const allSelected = additionalSections.every(
                    (s) => s.selected
                  );
                  setAdditionalSections(
                    additionalSections.map((s) => ({
                      ...s,
                      selected: !allSelected,
                    }))
                  );
                  updateSelectAllState(
                    standardSections,
                    additionalSections.map((s) => ({
                      ...s,
                      selected: !allSelected,
                    }))
                  );
                }}
              />
              <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                Select all
              </span>
            </div>

            {/* Two Column Grid */}
            <div className="grid grid-cols-2 gap-x-[463px]">
              {/* Left Column */}
              <div className="flex flex-col gap-[26px] pl-[40px]">
                {additionalSections.slice(0, 4).map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center gap-[23px]"
                  >
                    <Checkbox
                      checked={section.selected}
                      onChange={() => handleAdditionalToggle(section.id)}
                    />
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                      {section.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-[26px]">
                {additionalSections.slice(4).map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center gap-[23px]"
                  >
                    <Checkbox
                      checked={section.selected}
                      onChange={() => handleAdditionalToggle(section.id)}
                    />
                    <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                      {section.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Others - Upload / Prompt Engineering */}
          <div className="flex flex-col gap-[26px]">
            <h3 className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Others - Upload / Prompt Engineering
            </h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Create_Outline;
