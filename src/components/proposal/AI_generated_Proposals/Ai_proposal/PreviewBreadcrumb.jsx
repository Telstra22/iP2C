import React from 'react'
import BreadcrumbChevronIcon from '../../../../assets/icons/BreadcrumbChevronIcon'

const PreviewBreadcrumb = ({ breadcrumbPath }) => {
  return (
    <div className='w-full bg-white'>
      <div className='px-[66px] py-[19px]'>
        <div className='flex items-center gap-[13px]'>
          {breadcrumbPath.map((item, index) => (
            <React.Fragment key={index}>
              <span 
                className={`font-['Inter',sans-serif] text-[18px] leading-[24px] ${
                  item.active 
                    ? "text-[#000000] font-medium" 
                    : "text-[#505050] font-normal"
                }`}
              >
                {item.label}
              </span>
              {index < breadcrumbPath.length - 1 && (
                <BreadcrumbChevronIcon width={11} height={18} color='#E2E1E0' />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviewBreadcrumb