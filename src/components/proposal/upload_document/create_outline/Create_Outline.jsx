import React, { useState } from 'react'
import BotIcon from '../BotIcon.jsx'
import SelectableChip from './SelectableChip.jsx'
import Checkbox from './Checkbox.jsx'

function Create_Outline () {
  const [standardSections, setStandardSections] = useState([
    { id: 'executive-summary', label: 'Executive Summary', selected: true },
    {
      id: 'meeting-objectives',
      label: 'Meeting Your Objectives',
      selected: true
    },
    {
      id: 'service-solution',
      label: 'Service and solution overview',
      selected: true
    },
    { id: 'commercial', label: 'Commercial', selected: true },
    {
      id: 'proposed-solution',
      label: 'Detail on the proposed solution',
      selected: true
    },
    { id: 'appendices', label: 'Appendices', selected: true },
    { id: 'proposal-terms', label: 'Proposal terms', selected: true },
    { id: 'telstra-team', label: 'Your Telstra team', selected: true }
  ])

  const [additionalSections, setAdditionalSections] = useState([
    { id: 'section-a', label: 'Section A', selected: false },
    { id: 'section-b', label: 'Section B', selected: false },
    { id: 'section-c', label: 'Section C', selected: false },
    { id: 'section-d', label: 'Section D', selected: false },
    { id: 'section-e', label: 'Section E', selected: false }
  ])

  const [selectAll, setSelectAll] = useState(true)

  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    setStandardSections(
      standardSections.map(section => ({ ...section, selected: newSelectAll }))
    )
    setAdditionalSections(
      additionalSections.map(section => ({
        ...section,
        selected: newSelectAll
      }))
    )
  }

  const handleStandardToggle = id => {
    const updatedSections = standardSections.map(section =>
      section.id === id ? { ...section, selected: !section.selected } : section
    )
    setStandardSections(updatedSections)
    updateSelectAllState(updatedSections, additionalSections)
  }

  const handleAdditionalToggle = id => {
    const updatedSections = additionalSections.map(section =>
      section.id === id ? { ...section, selected: !section.selected } : section
    )
    setAdditionalSections(updatedSections)
    updateSelectAllState(standardSections, updatedSections)
  }

  const updateSelectAllState = (standard, additional) => {
    const allSelected =
      standard.every(s => s.selected) && additional.every(s => s.selected)
    setSelectAll(allSelected)
  }

  return (
    <div className='w-full bg-white rounded-[9px] px-[37px] py-[37px]'>
      {/* Header with Status Indicator */}
      <div className='flex items-start justify-between mb-[46px]'>
        <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
          Create Outline
        </h1>
        <BotIcon />
      </div>

      {/* Main Content */}
      <div className='flex flex-col gap-[30px]'>
        {/* Header Row */}
        <div className='flex items-center justify-between'>
          <h2 className="text-[#050505] font-['Inter',sans-serif] text-[24px] font-medium leading-[32px]">
            Select headings to create your RFp response outline
          </h2>
          <Checkbox checked={selectAll} onChange={handleSelectAll} />
        </div>

        {/* Sections Container */}
        <div className='flex flex-col gap-[36px]'>
          {/* Standard Sections */}
          <div className='flex flex-col gap-[12px]'>
            <h3 className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Standard sections
            </h3>
            <div className='flex flex-wrap gap-[22px]'>
              {standardSections.map(section => (
                <SelectableChip
                  key={section.id}
                  label={section.label}
                  selected={section.selected}
                  onToggle={() => handleStandardToggle(section.id)}
                />
              ))}
            </div>
          </div>

          {/* Additional Sections */}
          <div className='flex flex-col gap-[12px]'>
            <h3 className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
              Additional sections (Please choose as required)
            </h3>
            <div className='flex flex-wrap gap-[22px]'>
              {additionalSections.map(section => (
                <SelectableChip
                  key={section.id}
                  label={section.label}
                  selected={section.selected}
                  onToggle={() => handleAdditionalToggle(section.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create_Outline