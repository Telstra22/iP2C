import React from 'react'
import BreadcrumbChevronIcon from '../../../assets/icons/BreadcrumbChevronIcon'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = ({ current }) => {
  const location = useLocation()

  // For later steps in the create proposal flow, show:
  // Manage proposals > Create proposal > [current]
  // For the initial create proposal step, just show:
  // Manage proposals > [current]
  const path = location.pathname || ''

  const isCreateFlowStep =
    path.includes('ai_loader') ||
    path.includes('ai_proposal_page') ||
    path.includes('preview-proposal')

  const showCreateProposalMiddle = isCreateFlowStep && current !== 'Create proposal'

  return (
    <div className='w-full bg-white'>
      <div className='px-[66px] py-[19px]'>
        <div className='flex items-center gap-[13px]'>
          <Link
            to="/manage_proposals"
            className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] hover:underline"
          >
            Manage proposals
          </Link>
          <BreadcrumbChevronIcon width={11} height={18} color='#E2E1E0' />

          {showCreateProposalMiddle && (
            <>
              <Link
                to="/add_opportunity-details"
                className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] hover:underline"
              >
                Create proposal
              </Link>
              <BreadcrumbChevronIcon width={11} height={18} color='#E2E1E0' />
            </>
          )}

          <span className="text-[#000000] font-['Inter',sans-serif] text-[18px] font-medium leading-[24px]">
            {current}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
