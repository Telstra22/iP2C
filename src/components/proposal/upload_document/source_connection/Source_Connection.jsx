import React, { useState } from 'react'
import { Check } from 'lucide-react'
import BotIcon from '../BotIcon.jsx'
import FileUploadZone from '../add_opportunity-details/FileUploadZone.jsx'

// Reusable Checkbox Component
const Checkbox = ({ checked, onChange, label, size = 'default' }) => {
  const boxSize = size === 'large' ? 'w-[28px] h-[28px]' : 'w-[18px] h-[18px]'
  const gapSize = size === 'large' ? 'gap-[17px]' : 'gap-[14px]'

  return (
    <button
      type="button"
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
            width={size === 'large' ? 22 : 11}
            height={size === 'large' ? 22 : 8}
            color='#FFFFFF'
          />
        )}
      </div>
      <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
        {label}
      </span>
    </button>
  )
}

// Status Indicator Component
const StatusIndicator = () => {
  return 
}

const Source_Connection = () => {
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
    <div><BotIcon />
    <div className='w-full bg-white rounded-[9px] px-[37px] py-[37px] mt-[37px]'>
      {/* Header with Status Indicator */}
      <div className='flex items-start justify-between mb-[46px]'>
        <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
          Select Source Connection
        </h1>
        <StatusIndicator />
      </div>

      {/* Main Content */}
      <div className='flex flex-col gap-[46px]'>
        {/* Source Selection Section */}
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

        {/* Upload Reference Documents Section */}
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[8px]'>
            <label className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-medium leading-[30px]">
              Upload reference documents if any (Optional)
            </label>
            <p className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
              Select a maximum of 5 files to upload. File format must be Word, Excel or PDF. Total file size maximum: 10 MB.
            </p>
          </div>

          <div className='flex flex-col gap-[15px]'>
            <FileUploadZone />
            <p className="text-[#A0A0A0] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
              File name should not contain the following characters: " # % & * : &lt; &gt; ? \ / &#123; &#125; ~ |
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Source_Connection
