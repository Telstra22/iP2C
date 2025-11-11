import React from 'react'
import DocumentSourceHeader from './DocumentSourceHeader'
import DocumentSourceList from './DocumentSourceList'

const DocumentSourceModal = ({ isOpen, onClose }) => {
  const documents = [
    {
      id: 1,
      filename: 'RFP_FY24_6483636278_Main_Scrubbed.docx',
      updatedOn: '19-May-2025',
      externalUse: true,
      verified: true
    },
    {
      id: 2,
      filename: 'RFP_FY25_127478478430_Scrubbed.docx',
      updatedOn: '19-May-2025',
      externalUse: true,
      verified: true
    }
  ]

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50'>
      <div className='bg-white rounded-[9px] border border-[#D9D9D9] shadow-[0px_4px_16px_2px_rgba(0,0,0,0.08)] w-[824px] flex flex-col gap-[21px] pb-[30px]'>
        <DocumentSourceHeader onClose={onClose} />
        
        <div className='w-full h-[2px] bg-[#D9D9D9]' />
        
        <DocumentSourceList documents={documents} />
      </div>
    </div>
  )
}

export default DocumentSourceModal