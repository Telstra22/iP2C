import React from 'react'
import VerifiedBadgeIcon from '../../../../assets/icons/VerifiedBadgeIcon'

const DocumentSourceItem = ({ document }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-[11px]'>
        {document.verified && (
          <VerifiedBadgeIcon width={28} height={28} color='#56A72B' />
        )}
        
        <div className='flex flex-col gap-[-6px]'>
          <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[19px] font-medium leading-normal">
            {document.filename}
          </span>
          <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[18px] font-normal leading-normal">
            Updated On: {document.updatedOn}
          </span>
        </div>
      </div>
      
      {document.externalUse && (
        <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-semibold leading-normal">
          External Use
        </span>
      )}
    </div>
  )
}

export default DocumentSourceItem