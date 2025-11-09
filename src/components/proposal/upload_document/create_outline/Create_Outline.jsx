import React, { useState } from "react";
import { Send, X, Check } from "lucide-react";
import { standardSectionsData, additionalSectionsData } from './createOutlineMockData'


function Create_Outline() {
  const [standardSections, setStandardSections] = useState(standardSectionsData);
  const [additionalSections, setAdditionalSections] = useState(additionalSectionsData);

  const [selectAll, setSelectAll] = useState(true);

  const [promptInput, setPromptInput] = useState("");
  const [prompts, setPrompts] = useState([
    "What is the latest pricing terms",
    "Bring in recent terms & conditions",
  ]);

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

  const addPrompt = () => {
    const value = promptInput.trim();
    if (!value) return;
    setPrompts((prev) => [...prev, value]);
    setPromptInput("");
  };

  const removePrompt = (index) => {
    setPrompts((prev) => prev.filter((_, i) => i !== index));
  };

  const updateSelectAllState = (standard, additional) => {
    const allSelected =
      standard.every((s) => s.selected) && additional.every((s) => s.selected);
    setSelectAll(allSelected);
  };

  const Checkbox = ({ checked, onChange, isSelectAll = false }) => (
    <button
      onClick={onChange}
      className={`flex items-center justify-center w-[20.412px] h-[20.412px] rounded-[2px] border-[1.053px] ${isSelectAll ? 'border-[#828282]' : 'border-[#828282]'} bg-white flex-shrink-0`}
    >
      {checked && <Check width={13} height={13} color="#0D54FF" />}
    </button>
  );

  return (
    <div className="flex flex-col gap-[18px]">
      {/* Main Card */}
      <div className="w-full max-w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px] mt-[37px] pt-0 pb-[37px]">
        {/* Header */}
        <div className="flex flex-col -ml-[37px] -mr-[37px] items-start self-stretch bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] mb-[40px]">
          <div className="flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] self-stretch border-l-[12px] border-[#0D54FF]">
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
                Create Outline
              </h1>
              <span className="text-[#505050] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                Select headings to create your Opportunity response outline
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-[26px]">
          {/* Select All */}
          <div className="flex items-center gap-[17px]">
            <Checkbox checked={selectAll} onChange={handleSelectAll} isSelectAll={true} />
            <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
              Select all
            </span>
          </div>

          {/* Two Column Grid */}
          <div className="flex gap-[130px]">
            {/* Left Column */}
            <div className="flex flex-col gap-[26px] pl-[44px]">
              {standardSections.map((section) => (
                <div
                  key={section.id}
                  className="flex items-center gap-[17px] min-w-0"
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
              {additionalSections.map((section) => (
                <div
                  key={section.id}
                  className="flex items-center gap-[17px] min-w-0"
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
      </div>

      {/* Section Extractor (Optional) */}
      <div className="w-full max-w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px] flex flex-col gap-[26px]">
        <h3 className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
          Section Extractor (Optional)
        </h3>
        <div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex w-[915px] h-[67px] box-border px-[34px] py-[10px] justify-between items-center rounded-[9px] border border-[#B4B4B4] bg-white">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none text-[#050505] font-['Graphik',sans-serif] text-[22px] font-normal leading-[18px] placeholder:text-[#505050]"
                  placeholder="Describe the section to extract"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addPrompt();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addPrompt}
                  className="flex-shrink-0"
                >
                  <Send width={25} height={25} color="#0D54FF" />
                </button>
              </div>
              <div className="flex flex-wrap gap-[12px] max-w-[915px]">
                {prompts.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex h-auto px-[34px] py-[16px] items-center justify-between gap-[18px] rounded-[5px] border border-[#0D54FF] bg-white shadow-[0_4px_3px_0_rgba(0,0,0,0.06)]"
                  >
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis text-[#3C3B3B] font-['Graphik',sans-serif] text-[20px] font-normal leading-[18px]">
                      {text}
                    </span>
                    <button
                      type="button"
                      onClick={() => removePrompt(idx)}
                      className="flex-shrink-0"
                    >
                      <X width={24} height={24} color="#0D54FF" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Create_Outline;