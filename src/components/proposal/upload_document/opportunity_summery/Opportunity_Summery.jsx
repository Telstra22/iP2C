import React, { useEffect, useState } from 'react'
import IP2CLogoIcon from '../../../../assets/icons/IP2CLogoIcon'
import CircularLoader from '../../../../assets/icons/CircularLoader'
import ProgressBarItem from './ProgressBarItem'
import CompletionModal from './CompletionModal'
import FormField from './FormField'
import CollapsibleSection from './CollapsibleSection'
import EditableTextArea from './EditableTextArea'
import BotIcon from '../BotIcon.jsx'
import {
  INITIAL_FORM_DATA,
  FIELD_CONFIGS,
  PROBLEM_STATEMENT,
  SCOPE_OF_WORK,
  PROGRESS_ITEMS,
  SECTION_CONTENT,
  SECTION_CONFIGS,
} from './mockData'


const OpportunitySummery = () => {
  const [showLoadingModal, setShowLoadingModal] = useState(true)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [progress, setProgress] = useState(0)

  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  // Static texts
  const problemStatement = PROBLEM_STATEMENT
  const scopeOfWork = SCOPE_OF_WORK

  const handleFieldChange = field => e => {
    const { value } = e.target
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleScopeSave = value => {
    console.log('Saved scope:', value)
  }

  const handleScopeDiscard = () => {
    console.log('Discarded changes')
  }

  useEffect(() => {
    if (!showLoadingModal) return
    setProgress(0)
    const stepMs = 50
    const inc = 1
    const timer = setInterval(() => {
      setProgress(p => {
        const next = Math.min(100, p + inc)
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setShowLoadingModal(false)
            setShowCompletionModal(true)
          }, 400)
        }
        return next
      })
    }, stepMs)
    return () => clearInterval(timer)
  }, [showLoadingModal])

  const handleDone = () => {
    setShowCompletionModal(false)
  }

  // Configs and static copy from mock data file
  const fieldConfigs = FIELD_CONFIGS
  const progressItems = PROGRESS_ITEMS

  const renderSection = (title, defaultExpanded, content) => (
    <CollapsibleSection title={title} defaultExpanded={defaultExpanded}>
      {content}
    </CollapsibleSection>
  )

  return (
    <div className='w-full max-w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px]'>
      <div aria-hidden={showLoadingModal} className={showLoadingModal ? 'invisible pointer-events-none' : ''}>
      {/* Header */}
      <div className='flex items-start justify-between mb-[46px]'>
        <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
          AI Generate Opportunity Summary
        </h1>
        <BotIcon className='p-[3px]' />
      </div>

      {/* Form Fields Grid */}
      <div className='flex flex-wrap gap-x-[40px] gap-y-[40px] mb-[46px]'>
        {fieldConfigs.map(cfg => (
          <div key={cfg.field} className='w-[calc(33.333%-27px)]'>
            <FormField
              label={cfg.label}
              value={formData[cfg.field]}
              onChange={handleFieldChange(cfg.field)}
              type={cfg.type || 'dropdown'}
              options={cfg.options || []}
            />
          </div>
        ))}
      </div>

      {/* Collapsible Sections */}
      <div className='flex flex-col gap-[30px]'>
        {/* Opportunity Brief - Collapsed */}
        {SECTION_CONFIGS.filter(s => s.title === 'Opportunity Brief').map(s => (
          <React.Fragment key={s.title}>
            {renderSection(
              s.title,
              s.defaultExpanded,
              (
                <div className='px-[38px] pb-[26px]'>
                  <p className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px]">{SECTION_CONTENT[s.contentKey]}</p>
                </div>
              )
            )}
          </React.Fragment>
        ))}

        {/* Problem Statement - Expanded */}
        {renderSection(
          'Problem Statement',
          true,
          (
            <p className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px] line-clamp-3">
              {problemStatement}
            </p>
          )
        )}

        {/* Scope of Work - Expanded with Editable TextArea */}
        {renderSection(
          'Scope of Work',
          true,
          (
            <EditableTextArea
              initialValue={scopeOfWork}
              onSave={handleScopeSave}
              onDiscard={handleScopeDiscard}
            />
          )
        )}

        {/* Simple text sections (excluding Opportunity Brief) */}
        {SECTION_CONFIGS.filter(s => s.title !== 'Opportunity Brief').map(s => (
          <React.Fragment key={s.title}>
            {renderSection(
              s.title,
              s.defaultExpanded,
              (
                <div className='px-[38px] pb-[26px]'>
                  <p className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px]">{SECTION_CONTENT[s.contentKey]}</p>
                </div>
              )
            )}
          </React.Fragment>
        ))}
      </div>
      </div>

      {showLoadingModal && (
        <div className='fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50'>
          <div className='bg-white rounded-[12px] border border-[#CFCFCF] shadow-[0px_4px_8px_2px_rgba(0,0,0,0.07)] inline-flex flex-col items-center px-[62px] pt-[40px] pb-[30px] gap-[32px]'>
            {/* Header with logo and title */}
            <div className='flex items-center gap-[10px]'>
              <IP2CLogoIcon width={42} height={42} />
              <h2 className="text-[#39393A] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px] whitespace-nowrap">
                AI is generating your summary...
              </h2>
            </div>

            {/* Content section */}
            <div className='flex flex-col items-center gap-[32px]'>
              {/* Circular loader */}
              <CircularLoader size={119} strokeWidth={8} progress={progress} />

              {/* Estimated wait time */}
              <p className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                Estimated wait time 3-5 minutes
              </p>

              {/* Progress bars */}
              <div className='flex flex-col gap-[26px] w-[566px]'>
                {progressItems.map(item => (
                  <ProgressBarItem
                    key={item.label}
                    label={item.label}
                    progress={item.value(progress)}
                    barColor={item.barColor}
                  />
                ))}
              </div>
            </div>

            {/* Cancel button */}
            <button
              onClick={() => setShowLoadingModal(false)}
              className="self-end text-[#0D54FF] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showCompletionModal && <CompletionModal onDone={handleDone} />}
    </div>
  )
}

export default OpportunitySummery
