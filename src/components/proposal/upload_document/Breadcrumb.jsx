import React from 'react'
import BreadcrumbChevronIcon from '../../../assets/icons/BreadcrumbChevronIcon'

const Breadcrumb = ({ current }) => {
  return (
    <div className='w-full bg-white border-b border-[#E5E5E5]'>
      <div className='px-[66px] py-[19px]'>
        <div className='flex items-center gap-[13px]'>
          <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
            Home
          </span>
          <BreadcrumbChevronIcon width={11} height={18} color='#E2E1E0' />
          <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
            Manage proposals
          </span>
          <BreadcrumbChevronIcon width={11} height={18} color='#E2E1E0' />
          <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
            Create New Proposal
          </span>
          {current && (
            <>
              <BreadcrumbChevronIcon width={11} height={18} color='#E2E1E0' />
              <span className="text-[#000000] font-['Inter',sans-serif] text-[18px] font-medium leading-[24px]">
                {current}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
