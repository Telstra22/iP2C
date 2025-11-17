import React from 'react'
import { X } from 'lucide-react'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'

const PreviewTemplate = ({ isOpen, onClose, template }) => {
  if (!isOpen || !template) return null

  // Map template types to their document files
  const getDocumentPath = (documentType) => {
    switch (documentType) {
      case 'word':
        return '/select_template/Telstra-Standard-Proposal-Template_v3 1.docx'
      case 'excel':
        return '/select_template/Excel Based RFP Response.xlsx'
      case 'powerpoint':
        return '/select_template/Control Centre  - Customer Presentation_2306.pptx'
      default:
        return null
    }
  }

  const documentPath = getDocumentPath(template.documentType)
  
  // Prepare document for DocViewer
  const docs = documentPath ? [
    {
      uri: documentPath,
      fileName: documentPath.split('/').pop()
    }
  ] : []

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-[1px] flex items-center justify-center z-50'>
      <div className='w-[1288px] h-[836px] bg-white rounded-[9px] overflow-hidden flex flex-col shadow-[0px_4px_16px_rgba(0,0,0,0.15)]'>
        {/* Header */}
        <div className='flex items-center justify-between px-[42px] py-[21px] bg-[#0D54FF]'>
          <h2 className="text-white font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px]">
            Preview Document
          </h2>
          <button
            onClick={onClose}
            className='hover:opacity-80 transition-opacity'
            aria-label='Close preview'
          >
            <X width={21} height={21} color='#FFFFFF' />
          </button>
        </div>

        {/* Preview Content Area */}
        <div className='flex-1 flex items-center justify-center bg-[#F6F6F6] p-[40px] overflow-hidden'>
          <div className='relative w-full h-full flex items-center justify-center'>
            {/* Document Preview Container */}
            <div className='w-[821px] h-full bg-white rounded-[4px] shadow-[0px_4px_16px_rgba(0,0,0,0.15)] overflow-hidden'>
              {docs.length > 0 ? (
                <DocViewer
                  documents={docs}
                  pluginRenderers={DocViewerRenderers}
                  config={{
                    header: {
                      disableHeader: true,
                      disableFileName: true,
                      retainURLParams: false
                    },
                    csvDelimiter: ',',
                    pdfZoom: {
                      defaultZoom: 1.0,
                      zoomJump: 0.1
                    },
                    pdfVerticalScrollByDefault: true
                  }}
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              ) : (
                <div className='w-full h-full flex flex-col items-center justify-center gap-[20px] p-[40px]'>
                  <div className='w-[120px] h-[120px] rounded-full bg-[#0D54FF]/10 flex items-center justify-center'>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H8" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H8" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H9H8" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className='text-center'>
                    <h3 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px] mb-[8px]">
                      {template.name}
                    </h3>
                    <p className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px]">
                      {template.description}
                    </p>
                  </div>
                  <div className='mt-[20px] text-center'>
                    <p className="text-[#505050] font-['Inter',sans-serif] text-[16px] font-normal leading-[22px]">
                      Document preview unavailable
                    </p>
                    <p className="text-[#A0A0A0] font-['Inter',sans-serif] text-[14px] font-normal leading-[20px] mt-[8px]">
                      Template: {template.documentType === 'word' ? 'Word Document' : template.documentType === 'excel' ? 'Excel Spreadsheet' : 'PowerPoint Presentation'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewTemplate