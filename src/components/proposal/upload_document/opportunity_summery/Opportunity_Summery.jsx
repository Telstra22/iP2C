import React, { useEffect, useMemo, useState } from 'react'
import IP2CLogoIcon from '../../../../assets/icons/IP2CLogoIcon'
import CircularLoader from '../../../../assets/icons/CircularLoader'
import ProgressBarItem from './ProgressBarItem'
import CompletionModal from './CompletionModal'
import FormField from './FormField'
import CollapsibleSection from './CollapsibleSection'
import EditableTextArea from './EditableTextArea'
import { Check } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  INITIAL_FORM_DATA,
  OPPORTUNITY_BRIEF,
  PROBLEM_STATEMENT,
  SCOPE_OF_WORK,
  PROGRESS_ITEMS,
  SECTION_CONTENT,
  customers,
  businessUnit,
  industries,
  newRenewal,
  services,
  productHierarchies,
  hierarchyToProducts,
  productToSubProducts,
  archetype
} from './mockData'

const OpportunitySummery = () => {
  const [showLoadingModal, setShowLoadingModal] = useState(true)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [progress, setProgress] = useState(0)
  const [expandAll, setExpandAll] = useState(true)
  const [activeEditable, setActiveEditable] = useState(null)
  const [sectionStates, setSectionStates] = useState({
    opportunityBrief: true,
    problemStatement: true,
    scopeOfWork: true,
    technicalRequirements: true,
    functionalRequirements: true,
    vendorQuestions: true,
    termsConditions: true
  })

  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  // Local editable content for each collapsible section (initialized from mock data)
  const [sectionContentState, setSectionContentState] = useState({
    opportunityBrief: OPPORTUNITY_BRIEF,
    problemStatement: PROBLEM_STATEMENT,
    scopeOfWork: SCOPE_OF_WORK,
    ...SECTION_CONTENT
  })

  // Static texts (opportunityBrief/problemStatement/scopeOfWork are now in sectionContentState)

  const handleFieldChange = field => e => {
    const { value } = e.target
    setFormData(prev => {
      const next = { ...prev, [field]: value }
      if (field === 'productHierarchy') {
        next.product = ''
        next.subProduct = ''
      }
      if (field === 'product') {
        next.subProduct = ''
      }
      return next
    })
  }

  const handleOpportunityBriefSave = value => {
    setSectionContentState(prev => ({ ...prev, opportunityBrief: value }))
  }

  const handleOpportunityBriefDiscard = () => {
    // reset to original
    setSectionContentState(prev => ({
      ...prev,
      opportunityBrief: OPPORTUNITY_BRIEF
    }))
  }

  const handleProblemStatementSave = value => {
    setSectionContentState(prev => ({ ...prev, problemStatement: value }))
  }

  const handleProblemStatementDiscard = () => {
    setSectionContentState(prev => ({
      ...prev,
      problemStatement: PROBLEM_STATEMENT
    }))
  }

  const handleScopeSave = value => {
    setSectionContentState(prev => ({ ...prev, scopeOfWork: value }))
  }

  const handleScopeDiscard = () => {
    setSectionContentState(prev => ({ ...prev, scopeOfWork: SCOPE_OF_WORK }))
  }

  const handleGenericSave = key => value => {
    setSectionContentState(prev => ({ ...prev, [key]: value }))
  }

  const handleGenericDiscard = (key, original) => () => {
    setSectionContentState(prev => ({ ...prev, [key]: original }))
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

  // Show react-toastify success when completion modal appears
  useEffect(() => {
    if (!showCompletionModal) return
    toast.success(
      (
        <span className="whitespace-nowrap text-[var(--black-80,#505050)] font-['Inter',sans-serif] text-[18px] font-semibold leading-[134.1%]">Agent Huddle Ended | Go to <a href="#" className="text-[var(--Primary-Blue,#0D54FF)] font-['Inter',sans-serif] text-[18px] font-normal leading-[134.1%] underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]">Opportunity Summary</a> page to review your content</span>
      ),
      {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        className: 'bg-white shadow-[0_4px_6px_1px_rgba(0,0,0,0.09)] w-auto h-[76px] inline-flex items-center',
        progressStyle: { background: '#22C55E' }
      }
    )
  }, [showCompletionModal])

  const handleDone = () => {
    setShowCompletionModal(false)
  }

  const handleExpandAllToggle = () => {
    const newExpandAll = !expandAll
    setExpandAll(newExpandAll)
    // Update all section states
    setSectionStates({
      opportunityBrief: newExpandAll,
      problemStatement: newExpandAll,
      scopeOfWork: newExpandAll,
      technicalRequirements: newExpandAll,
      functionalRequirements: newExpandAll,
      vendorQuestions: newExpandAll,
      termsConditions: newExpandAll
    })
    // When expanding all, disable editing for all sections until one is clicked
    if (newExpandAll) {
      setActiveEditable(null)
    }
  }

  const toggleSection = sectionKey => {
    setSectionStates(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }))
    // Make only the clicked section editable
    setActiveEditable(sectionKey)
  }

  // Build field configs dynamically from mock lists and dependency maps
  const productOptions = useMemo(
    () =>
      formData.productHierarchy
        ? hierarchyToProducts[formData.productHierarchy] || []
        : [],
    [formData.productHierarchy]
  )

  const subProductOptions = useMemo(
    () =>
      formData.product ? productToSubProducts[formData.product] || [] : [],
    [formData.product]
  )

  const fieldConfigs = useMemo(
    () => [
      {
        label: 'Customer',
        field: 'customer',
        options: customers,
        type: 'dropdown'
      },
      {
        label: 'Business Unit',
        field: 'businessUnit',
        options: businessUnit,
        type: 'dropdown'
      },
      {
        label: 'Archetype',
        field: 'archetype',
        options: archetype,
        type: 'dropdown'
      },
      {
        label: 'Industry',
        field: 'industry',
        options: industries,
        type: 'dropdown'
      },
      {
        label: 'New/ Renewal',
        field: 'newRenewal',
        options: newRenewal,
        type: 'dropdown'
      },
      {
        label: 'Services',
        field: 'services',
        options: services,
        type: 'dropdown'
      },
      {
        label: 'Product Hierarchy',
        field: 'productHierarchy',
        options: productHierarchies,
        type: 'dropdown'
      },
      {
        label: 'Product',
        field: 'product',
        options: productOptions,
        type: 'dropdown'
      },
      {
        label: 'Sub Product',
        field: 'subProduct',
        options: subProductOptions,
        type: 'dropdown'
      },
      { label: 'Submission Date', field: 'submissionDate', type: 'datetime' },
      {
        label: 'Customer Estimated Budget',
        field: 'budget',
        type: 'text',
        placeholder: '$'
      }
    ],
    [
      customers,
      businessUnit,
      industries,
      newRenewal,
      services,
      productHierarchies,
      productOptions,
      subProductOptions,
      archetype
    ]
  )
  //const progressItems = PROGRESS_ITEMS

  return (
      <div className='w-full max-w-[1330px] bg-white rounded-[9px] px-[37px] py-[37px] mt-[37px] pt-0 pb-[37px] relative'>
        <ToastContainer position="top-right" theme="light" hideProgressBar={false} />
        <div
          aria-hidden={showLoadingModal}
          className={showLoadingModal ? 'invisible pointer-events-none' : ''}
        >
          {/* Header */}
          <div className="flex flex-col -ml-[35px] -mr-[35px] items-start self-stretch bg-[var(--blacks-0,#FFF)] shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] mb-[40px]">
              <div className="flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] self-stretch border-l-[12px] border-[#0D54FF]">
                <h1 className="text-[#050505] font-['Inter',sans-serif] text-[26px] font-semibold leading-[35px]">
                  AI Generate Opportunity Summary
                </h1>
              </div>
            </div>

          {/* Form Fields Grid */}
          <div className='flex flex-wrap gap-x-[40px] gap-y-[40px] mb-[30px]'>
            {fieldConfigs.map(cfg => (
              <div key={cfg.field} className='w-[calc(33.333%-27px)]'>
                <FormField
                  label={cfg.label}
                  value={formData[cfg.field]}
                  onChange={handleFieldChange(cfg.field)}
                  type={cfg.type || 'dropdown'}
                  options={cfg.options || []}
                  placeholder={cfg.placeholder || ''}
                />
              </div>
            ))}
          </div>

          {/* Expand All Control */}
          <div className='flex items-center justify-end gap-[17px] mb-[30px]'>
            <button
              onClick={handleExpandAllToggle}
              className='flex items-center gap-[17px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity'
            >
              {expandAll ? (
                <div className='flex w-[28px] h-[28px] p-[2.97px] justify-center items-center rounded-[2.545px] bg-[var(--Primary-Blue,#0D54FF)]'>
                  <Check
                    width={22.061}
                    height={22.061}
                    color='#FFFFFF'
                    className='w-[22.061px] h-[22.061px] flex-shrink-0 aspect-[22.06/22.06]'
                  />
                </div>
              ) : (
                <div className='flex w-[28px] h-[28px] p-[2.97px] justify-center items-center rounded-[2.545px] bg-white border-2 border-[#0D54FF]'>
                  {/* empty box when not expanded */}
                </div>
              )}
              <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                Expand all
              </span>
            </button>
          </div>

          {/* Collapsible Sections */}
          <div className='flex flex-col gap-[30px]'>
            {/* Opportunity Brief - Editable */}
            <CollapsibleSection
              title='Opportunity Brief'
              isExpanded={sectionStates.opportunityBrief}
              onToggle={() => toggleSection('opportunityBrief')}
            >
              <EditableTextArea
                initialValue={sectionContentState.opportunityBrief}
                onSave={handleOpportunityBriefSave}
                onDiscard={handleOpportunityBriefDiscard}
                showActionsInitially={true}
                readOnly={activeEditable !== 'opportunityBrief'}
                onRequestEdit={() => setActiveEditable('opportunityBrief')}
              />
            </CollapsibleSection>

            {/* Problem Statement - Read-only */}
            <CollapsibleSection
              title='Problem Statement'
              isExpanded={sectionStates.problemStatement}
              onToggle={() => toggleSection('problemStatement')}
            >
              <EditableTextArea
                initialValue={sectionContentState.problemStatement}
                onSave={handleProblemStatementSave}
                onDiscard={handleProblemStatementDiscard}
                showActionsInitially={true}
                readOnly={activeEditable !== 'problemStatement'}
                onRequestEdit={() => setActiveEditable('problemStatement')}
              />
            </CollapsibleSection>

            {/* Scope of Work - Read-only */}
            <CollapsibleSection
              title='Scope of Work'
              isExpanded={sectionStates.scopeOfWork}
              onToggle={() => toggleSection('scopeOfWork')}
            >
              <EditableTextArea
                initialValue={sectionContentState.scopeOfWork}
                onSave={handleScopeSave}
                onDiscard={handleScopeDiscard}
                showActionsInitially={true}
                readOnly={activeEditable !== 'scopeOfWork'}
                onRequestEdit={() => setActiveEditable('scopeOfWork')}
              />
            </CollapsibleSection>

            {/* Technical Requirements */}
            <CollapsibleSection
              title='Technical Requirements'
              isExpanded={sectionStates.technicalRequirements}
              onToggle={() => toggleSection('technicalRequirements')}
            >
              <EditableTextArea
                initialValue={sectionContentState.technicalRequirements}
                onSave={handleGenericSave('technicalRequirements')}
                onDiscard={handleGenericDiscard(
                  'technicalRequirements',
                  SECTION_CONTENT.technicalRequirements
                )}
                showActionsInitially={true}
                readOnly={activeEditable !== 'technicalRequirements'}
                onRequestEdit={() => setActiveEditable('technicalRequirements')}
              />
            </CollapsibleSection>

            {/* Functional Requirements */}
            <CollapsibleSection
              title='Functional Requirements'
              isExpanded={sectionStates.functionalRequirements}
              onToggle={() => toggleSection('functionalRequirements')}
            >
              <EditableTextArea
                initialValue={sectionContentState.functionalRequirements}
                onSave={handleGenericSave('functionalRequirements')}
                onDiscard={handleGenericDiscard(
                  'functionalRequirements',
                  SECTION_CONTENT.functionalRequirements
                )}
                showActionsInitially={true}
                readOnly={activeEditable !== 'functionalRequirements'}
                onRequestEdit={() => setActiveEditable('functionalRequirements')}
              />
            </CollapsibleSection>

            {/* Vendor Questions */}
            <CollapsibleSection
              title='Vendor Questions'
              isExpanded={sectionStates.vendorQuestions}
              onToggle={() => toggleSection('vendorQuestions')}
              hasSpecialIcon={true}
            >
              <EditableTextArea
                initialValue={sectionContentState.vendorQuestions}
                onSave={handleGenericSave('vendorQuestions')}
                onDiscard={handleGenericDiscard(
                  'vendorQuestions',
                  SECTION_CONTENT.vendorQuestions
                )}
                showActionsInitially={true}
                readOnly={activeEditable !== 'vendorQuestions'}
                onRequestEdit={() => setActiveEditable('vendorQuestions')}
              />
            </CollapsibleSection>

            {/* Terms & Conditions */}
            <CollapsibleSection
              title='Terms & Conditions'
              isExpanded={sectionStates.termsConditions}
              onToggle={() => toggleSection('termsConditions')}
              hasSpecialIcon={true}
            >
              <EditableTextArea
                initialValue={sectionContentState.terms}
                onSave={handleGenericSave('terms')}
                onDiscard={handleGenericDiscard('terms', SECTION_CONTENT.terms)}
                showActionsInitially={true}
                readOnly={activeEditable !== 'termsConditions'}
                onRequestEdit={() => setActiveEditable('termsConditions')}
              />
            </CollapsibleSection>
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
                <CircularLoader
                  size={119}
                  strokeWidth={8}
                  progress={progress}
                />

                {/* Estimated wait time */}
                <p className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                  Estimated wait time 3-5 minutes
                </p>

                {/* Progress bars */}
                {/* <div className='flex flex-col gap-[26px] w-[566px]'>
                  {progressItems.map(item => (
                    <ProgressBarItem
                      key={item.label}
                      label={item.label}
                      progress={item.value(progress)}
                      barColor={item.barColor}
                    />
                  ))}
                </div> */}
                <div className="w-[584px] text-[var(--blacks-80,#505050)] font-['Inter',sans-serif] text-[20px] font-normal leading-[134.1%]">
                  Please resume with other sections. You will be notified once the huddle has ended
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
