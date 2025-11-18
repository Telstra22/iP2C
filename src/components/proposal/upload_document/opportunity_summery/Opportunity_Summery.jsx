import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from './FormField'
import CollapsibleSection from './CollapsibleSection'
import EditableTextArea from './EditableTextArea'
import CheckboxCheckedIcon from '../../../../assets/icons/CheckboxCheckedIcon.svg?react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Breadcrumb from '../Breadcrumb'
import Sidebar from '../Sidebar'
import FooterNav from '../FooterNav'

import {
  INITIAL_FORM_DATA,
  OPPORTUNITY_BRIEF,
  PROBLEM_STATEMENT,
  KEY_DLIVERABLES,
  SECTION_CONTENT,
  customers,
  businessUnit,
  partner,
  industries,
  newRenewal,
  productHierarchies,
  hierarchyToProducts,
  productToSubProducts,
  archetype
} from './mockData'
import { UI_STRINGS } from './mockData'

const OpportunitySummery = () => {
  const navigate = useNavigate()
  const [showLoadingModal, setShowLoadingModal] = useState(false)
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

  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA, cidn: '8856342637' })

  // Local editable content for each collapsible section (initialized from mock data)
  const [sectionContentState, setSectionContentState] = useState({
    ...SECTION_CONTENT,
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
    setActiveEditable(null)
  }

  const handleOpportunityBriefDiscard = () => {
    // reset to original
    setSectionContentState(prev => ({
      ...prev,
      opportunityBrief: SECTION_CONTENT.opportunityBrief
    }))
    setActiveEditable(null)
  }

  const handleProblemStatementSave = value => {
    setSectionContentState(prev => ({ ...prev, problemStatement: value }))
    setActiveEditable(null)
  }

  const handleProblemStatementDiscard = () => {
    setSectionContentState(prev => ({
      ...prev,
      problemStatement: SECTION_CONTENT.problemStatement
    }))
    setActiveEditable(null)
  }

  const handleScopeSave = value => {
    setSectionContentState(prev => ({ ...prev, scopeOfWork: value }))
    setActiveEditable(null)
  }

  const handleScopeDiscard = () => {
    setSectionContentState(prev => ({ ...prev, scopeOfWork: SECTION_CONTENT.scopeOfWork }))
    setActiveEditable(null)
  }

  const handleGenericSave = key => value => {
    setSectionContentState(prev => ({ ...prev, [key]: value }))
    setActiveEditable(null)
  }

  const handleGenericDiscard = (key, original) => () => {
    setSectionContentState(prev => ({ ...prev, [key]: original }))
    setActiveEditable(null)
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
    toast.success(UI_STRINGS.toastSuccess, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      className: 'bg-white shadow-[0_4px_6px_1px_rgba(0,0,0,0.09)] w-auto h-[76px] inline-flex items-center',
      progressStyle: { background: '#22C55E' }
    })
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
        type: 'dropdown',
        disabled: true
      },
      {
        label: 'Business Unit',
        field: 'businessUnit',
        options: businessUnit,
        type: 'dropdown'
      },
      {
        label: 'Partner',
        field: 'partner',
        options: partner,
        type: 'dropdown',
        disabled: true
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
        label: 'CIDN',
        field: 'cidn',
        type: 'text'
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
      // {
      //   label: 'Sub Product',
      //   field: 'subProduct',
      //   options: subProductOptions,
      //   type: 'dropdown'
      // },
      {
        label: 'Submission Date',
        field: 'submissionDate',
        type: 'datetime',
        tooltip: 'The displayed submission date is based on your client\'s location and timezone'
      },
      {
        label: 'Customer Estimated Budget',
        field: 'budget',
        type: 'number'
      }
    ],
    [
      customers,
      businessUnit,
      partner,
      industries,
      newRenewal,
      productHierarchies,
      productOptions,
      subProductOptions,
      archetype
    ]
  )

  const handleSendMessage = (message) => {
    console.log('Message sent to orchestrator:', message)
  }

  return (
    <div className='w-full h-full bg-[#F6F6F6] flex flex-col overflow-hidden'>
      {/* Breadcrumb */}
      <Breadcrumb current={'Opportunity Summary'} />

      {/* Main content area */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar */}
        <Sidebar
          activeStep={1}
          completedSteps={[0]}
          onStepClick={() => navigate('/add_opportunity-details')}
        />

        {/* Center content */}
        <div className='flex-1 overflow-y-auto overflow-x-hidden pl-[30px] pr-[37px] pt-0 pb-[37px]'>
          <div className='w-full max-w-[1330px] mx-auto pt-[37px] pb-[0px] relative'>
            <ToastContainer position="top-right" theme="light" hideProgressBar={false} />
            {/* Header */}
            <div className="flex flex-col items-start self-stretch bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.07)] mb-[2px]">
              <div className="flex h-[120px] py-[0px] px-[41px] items-center gap-[25px] self-stretch border-l-[12px] border-[#0D54FF]">
                <h1 className="text-[#050505] font-['Inter',sans-serif] text-[26px] font-semibold leading-[35px]">
                  AI Generated Opportunity Summary
                </h1>
              </div>
            </div>

            {/* Input Fields Section - Separate Container */}
            <div className='bg-white rounded-[9px] shadow-[0px_4px_7px_rgba(0,0,0,0.09)] px-[37px] py-[40px] mb-[24px]'>
              {/* Form Fields Grid */}
              <div className='flex flex-wrap gap-x-[40px] gap-y-[40px]'>
                {fieldConfigs.map(cfg => (
                  <div key={cfg.field} className='w-[calc(33.333%-27px)]'>
                    <FormField
                      label={cfg.label}
                      value={formData[cfg.field]}
                      onChange={handleFieldChange(cfg.field)}
                      type={cfg.type || 'dropdown'}
                      options={cfg.options || []}
                      placeholder={cfg.placeholder || ''}
                      tooltip={cfg.tooltip || ''}
                      disabled={!!cfg.disabled}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Review and Edit Content with Expand All Control - Outside Container */}
            <div className='flex items-center justify-between mb-[24px] mt-[59px]'>
              <span className="text-[#050505] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px]">
                Review and edit content (If necessary) 
              </span>
              <button
                onClick={handleExpandAllToggle}
                className='flex items-center gap-[17px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity'
              >
                {expandAll ? (
                  <CheckboxCheckedIcon width={13} height={10} className='text-[#0D54FF]' />
                ) : (
                  <div className='flex w-[13px] h-[10px] justify-center items-center border border-[#0D54FF] rounded-[2px]'>
                    {/* empty box when not expanded */}
                  </div>
                )}
                <span className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px]">
                  Expand all
                </span>
              </button>
            </div>

            {/* Collapsible Sections Container - Separate White Container */}
            <div className='bg-white rounded-[9px] shadow-[0px_4px_7px_rgba(0,0,0,0.09)] px-[14px] py-[40px]'>
              <div className='flex flex-col'>
                {/* Opportunity Brief - Editable */}
                <div className='px-[23px]'>
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
                </div>
                <div className='border-t border-[#D9D9D9] my-[24px]' />

                {/* Problem Statement - Read-only */}
                <div className='px-[23px]'>
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
                </div>
                <div className='border-t border-[#D9D9D9] my-[24px]' />

                {/* Scope of Work - Read-only */}
                <div className='px-[23px]'>
                  <CollapsibleSection
                    title='Key Deliverables'
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
                </div>
                <div className='border-t border-[#D9D9D9] my-[24px]' />

                {/* Technical Requirements */}
                <div className='px-[23px]'>
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
                </div>
                <div className='border-t border-[#D9D9D9] my-[24px]' />

                {/* Functional Requirements */}
                <div className='px-[23px]'>
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
                </div>
                <div className='border-t border-[#D9D9D9] my-[24px]' />

                {/* Vendor Questions */}
                <div className='px-[23px]'>
                  <CollapsibleSection
                    title='Vendor Questions'
                    isExpanded={sectionStates.vendorQuestions}
                    onToggle={() => toggleSection('vendorQuestions')}
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
                </div>
                <div className='border-t border-[#D9D9D9] my-[24px]' />

                {/* Terms & Conditions */}
                <div className='px-[23px]'>
                  <CollapsibleSection
                    title='Terms & Conditions'
                    isExpanded={sectionStates.termsConditions}
                    onToggle={() => toggleSection('termsConditions')}
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
            </div>
          </div>

        </div>
      </div>
      {/* Footer Navigation */}
      <div className='flex-shrink-0'>
        <FooterNav
          activeStep={1}
          onPrevious={() => navigate('/add_opportunity-details')}
          onNext={() => navigate('/upload_historical_proposal')}
        />
      </div>
    </div>
  )
}

export default OpportunitySummery