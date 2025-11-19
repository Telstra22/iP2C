import React from 'react'
import { X } from 'lucide-react'

const PreviewTemplate = ({ isOpen, onClose, template }) => {
  if (!isOpen || !template) return null

  // Direct file path (your sample.pdf)
  const srcPath = template.filePath;                  // e.g. "/select_template/sample.pdf"
  const isPdf = srcPath?.toLowerCase().endsWith(".pdf");
  console.log("SRC PATH =", srcPath);
console.log("isPdf =", isPdf);


  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-[1px] flex items-center justify-center z-50'>
      <div className='w-[1288px] h-[836px] bg-white rounded-[9px] overflow-hidden flex flex-col shadow-[0px_4px_16px_rgba(0,0,0,0.15)]'>
        
        {/* Header */}
        <div className='flex items-center justify-between px-[42px] py-[21px] bg-[#0D54FF]'>
          <h2 className="text-white text-[24px] font-semibold">Preview Document</h2>
          <button onClick={onClose} className='hover:opacity-75 transition-opacity'>
            <X width={21} height={21} color='#FFFFFF' />
          </button>
        </div>

        {/* Content Area */}
        <div className='flex-1 flex items-center justify-center bg-[#F6F6F6] p-[40px] overflow-hidden'>
          <div className='relative w-full h-full flex items-center justify-center'>
            
            <div className='w-[821px] h-full bg-white rounded-[4px] shadow-[0_4px_16px_rgba(0,0,0,0.15)] overflow-auto p-[40px]'>

              {/* File Icon */}
              {/* <div className='w-[120px] h-[120px] rounded-full bg-[#0D54FF]/10 flex items-center justify-center mx-auto mb-[20px]'>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="#0D54FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div> */}

              {/* Title */}
              {/* <h3 className="text-[#050505] text-[22px] font-semibold text-center mb-[8px]">
                {template.name}
              </h3>
              <p className="text-[#828282] text-[18px] text-center mb-[20px]">
                {template.description}
              </p> */}

              {/* PDF Preview */}
              {isPdf ? (
                <>
                  {/* <p className="text-[#505050] text-[16px] text-center mb-4">
                    PDF Preview Below
                  </p> */}

                  <iframe
                    title="pdf-preview"
                    src={`${srcPath}#toolbar=0&view=FitH`}
                    className="w-full h-[600px] border-0"
                  />
                </>
              ) : (
                <p className="text-[#505050] text-[16px] text-center">Unsupported file type</p>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PreviewTemplate