import React, { useState } from 'react'
import { Check } from 'lucide-react'
import FileUploadZone from '../add_opportunity-details/FileUploadZone.jsx'
import { useNavigate } from 'react-router-dom'
import FooterNav from '../FooterNav.jsx'
import Breadcrumb from '../Breadcrumb.jsx'
import Sidebar from '../Sidebar.jsx'

// Reusable Checkbox Component
const Checkbox = ({ checked, onChange, label, size = 'default' }) => {
  const boxSize = size === 'large' ? 'w-[28px] h-[28px]' : 'w-[18px] h-[18px]'
  const gapSize = size === 'large' ? 'gap-[17px]' : 'gap-[14px]'

  return (
    <button
      type='button'
      onClick={onChange}
      className={`flex items-center ${gapSize} cursor-pointer group`}
    >
      <div
        className={`${boxSize} rounded-[3px] border-[1.5px] flex items-center justify-center transition-colors flex-shrink-0 ${
          checked
            ? 'bg-[#FFFFFF] border-[#0D54FF]'
            : 'border-[#0D54FF] bg-white group-hover:border-[#0D54FF]'
        }`}
      >
        {checked && (
          <Check
            width={size === 'large' ? 22 : 11}
            height={size === 'large' ? 22 : 8}
            color='#0D54FF'
          />
        )}
      </div>
      <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
        {label}
      </span>
    </button>
  )
}

const Source_Connection = () => {
  const navigate = useNavigate()
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
    <div className='w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden'>
      {/* Breadcrumb */}
      <Breadcrumb current={'Upload Historical Proposal'} />

      {/* Main content area */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar */}
        <Sidebar
          activeStep={2}
          completedSteps={[0,1]}
          onStepClick={(idx) => {
            if (idx === 1) navigate('/opportunity_summary')
            if (idx === 2) navigate('/upload_historical_proposal')
            if (idx === 3) navigate('/create_outline')
            if (idx === 4) navigate('/select_template')
          }}
        />

        {/* Center content */}
        <div className='flex-1 overflow-y-auto overflow-x-hidden pl-[30px] pr-[37px] pt-0 pb-[37px]'>
    <div className='w-full bg-white rounded-[9px] px-[37px] py-[37px] mt-[37px] pt-0 pb-[37px]'>
      {/* Header with Status Indicator */}
      <div className='flex flex-col -ml-[35px] -mr-[35px] items-start self-stretch bg-[var(--blacks-0,#FFF)] shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] mb-[40px]'>
        <div className='flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] self-stretch border-l-[12px] border-[#0D54FF]'>
          <div className='flex flex-col gap-[8px]'>
            <h1 className="text-[#050505] font-['Inter',sans-serif] text-[26px] font-semibold leading-[35px]">
              Upload Historical Proposals (optional)
            </h1>
            <span className="overflow-hidden text-ellipsis font-['Inter',sans-serif] text-[22px] font-normal leading-[134.1%] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] text-[var(--black-80,#505050)]">
              Upload any relevant past proposals to be referenced
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* Upload Reference Documents Section */}
        <div className='flex flex-col gap-[20px]'>
          {/* <div className='flex flex-col gap-[8px]'>
            <label className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-medium leading-[30px]">
              Upload relevant opportunity documents<span className="text-[#FF0000]">*</span>
            </label>
            <p className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
              Select a maximum of 5 files to upload. File format must be .ppt,
              .doc, .xlsx or .pdf. Total file size maximum: 10 MB.
            </p>
          </div> */}
          <div className='flex flex-col gap-[15px]'>
            <FileUploadZone showUploadGuidelines />
          </div>
        </div>
      <div className='flex flex-col gap-[46px]'>
        {/* Source Selection Section */}
        <div className='bg-[#FFFFFF] rounded-[8px] px-[37px] py-[37px] flex flex-col gap-[26px]'>

          {/* Select All Checkbox */}
          {/* <Checkbox
            checked={selectAll}
            onChange={handleSelectAll}
            label='Select all'
            size='large'
          /> */}

          {/* Source List - indented 40px from Select all */}
          {/* <div className='flex flex-col gap-[26px] pl-[40px]'>
            {sources.map(source => (
              <Checkbox
                key={source.id}
                checked={source.checked}
                onChange={() => handleSourceToggle(source.id)}
                label={source.name}
                size='large'
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
        </div>
      </div>
      <div className='flex-shrink-0'>
      <FooterNav
        activeStep={2}
        onPrevious={() => navigate('/opportunity_summary')}
        onNext={() => navigate('/create_outline')}
      />
    </div>
    </div>
  )
}

export default Source_Connection
