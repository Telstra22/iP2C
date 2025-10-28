import React, { useState } from 'react'
import { Check } from 'lucide-react'
import BotIcon from '../BotIcon.jsx'

// Reusable Checkbox Component
function Checkbox ({ checked, onChange, label, size = 'default' }) {
  const boxSize = size === 'large' ? 'w-[28px] h-[28px]' : 'w-[18px] h-[18px]'
  const gapSize = size === 'large' ? 'gap-[17px]' : 'gap-[14px]'

  return (
    <button
      onClick={onChange}
      className={`flex items-center ${gapSize} cursor-pointer group`}
    >
      <div
        className={`${boxSize} rounded-[3px] border-[1.5px] flex items-center justify-center transition-colors flex-shrink-0 ${
          checked
            ? 'bg-[#0D54FF] border-[#0D54FF]'
            : 'border-[#050505] bg-white group-hover:border-[#0D54FF]'
        }`}
      >
        {checked && (
          <Check
            width={size === 'large' ? 30 : 11}
            height={size === 'large' ? 30 : 8}
            color='#FFFFFF'
          />
        )}
      </div>
      <span className="text-[#050505] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px]">
        {label}
      </span>
    </button>
  )
}

// Status Indicator Component
function StatusIndicator () {
  return <BotIcon />
}

function Source_Connection () {
  const [sources, setSources] = useState([
    { id: 'phoenix', name: 'Phoenix', checked: true },
    { id: 'seismic', name: 'Seismic', checked: true },
    { id: 'comet', name: 'COMET', checked: false },
    { id: 'sage', name: 'SAGE', checked: false }
  ])

  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    setSources(sources.map(source => ({ ...source, checked: newSelectAll })))
  }

  const handleSourceToggle = id => {
    const updatedSources = sources.map(source =>
      source.id === id ? { ...source, checked: !source.checked } : source
    )
    setSources(updatedSources)

    // Update selectAll state based on whether all sources are checked
    const allChecked = updatedSources.every(source => source.checked)
    setSelectAll(allChecked)
  }

  return (
    <div className='w-full bg-white rounded-[9px] px-[37px] py-[37px]'>
      {/* Header with Status Indicator */}
      <div className='flex items-start justify-between mb-[46px]'>
        <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
          Select Source Connection
        </h1>
        <StatusIndicator />
      </div>

      {/* Main Content */}
      <div className='bg-[#F5F5F5] rounded-[8px] px-[37px] py-[37px] flex flex-col gap-[26px]'>
        {/* Instructions */}
        <p className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
          Select the sources to generate your proposal in the order you would
          like them prioritized
        </p>

        {/* Select All Checkbox */}
        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          label='Select all'
          size='large'
        />

        {/* Source List - indented 40px from Select all */}
        <div className='flex flex-col gap-[26px] pl-[40px]'>
          {sources.map(source => (
            <Checkbox
              key={source.id}
              checked={source.checked}
              onChange={() => handleSourceToggle(source.id)}
              label={source.name}
              size='large'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Source_Connection
