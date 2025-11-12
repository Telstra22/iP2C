import React from 'react'
import DocumentSourceItem from './DocumentSourceItem'

const DocumentSourceList = ({ documents }) => {
  return (
    <div className='flex gap-[18px] px-[28px]'>
      <div className='flex-1 flex flex-col gap-[21px]'>
        {documents.map((document) => (
          <DocumentSourceItem key={document.id} document={document} />
        ))}
      </div>
      
      {/* Scrollbar indicator */}
      <div className='w-[8px] h-[119px] bg-[#D9D9D9] rounded-[30px]' />
    </div>
  )
}

export default DocumentSourceList
