import React from 'react'
import DownloadIcon from '../../../../../assets/icons/DownloadIcon'
import ExportIcon from '../../../../../assets/icons/ExportIcon'
import EditIcon from '../../../../../assets/icons/EditIcon'
import SaveCheckIcon from '../../../../../assets/icons/SaveCheckIcon'

const PreviewActionButtons = ({ onDownload, onExport, onEditSection, onSaveExit }) => {
  const fullUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className='flex items-center gap-[6px]'>
      {/* Download */}
      <button
        onClick={(e) => onDownload && onDownload(e)}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50 transition-colors'
      >
        <DownloadIcon width={16} height={16} color='#0D54FF' />
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Download
        </span>
      </button>

      {/* Export */}
      <button
        onClick={onExport}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50 transition-colors'
      >
        <ExportIcon width={20} height={18} color='#0D54FF' />
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Export
        </span>
      </button>

      {/* Edit Proposal */}
      <button
        onClick={onEditSection}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] border border-[#C6C6C6] bg-white hover:bg-gray-50 transition-colors'
      >
        <EditIcon width={18} height={18} color='#272727' />
        <span className="text-[#272727] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Edit Proposal
        </span>
      </button>

      {/* Save & Exit */}
      <button
        onClick={onSaveExit}
        className='flex items-center gap-[10px] px-[20px] py-[12px] rounded-[6px] bg-[#0D54FF] hover:bg-[#0040D9] transition-colors'
      >
        <SaveCheckIcon width={17} height={13} color='#FFFFFF' />
        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
          Save & Exit
        </span>
      </button>

      {/* Display current full browser URL: base + navigated path */}
      {/* <span className="ml-[12px] text-[#828282] font-['Inter',sans-serif] text-[14px] font-normal leading-[20px] whitespace-nowrap">
        {fullUrl}
      </span> */}
    </div>
  )
}

export default PreviewActionButtons