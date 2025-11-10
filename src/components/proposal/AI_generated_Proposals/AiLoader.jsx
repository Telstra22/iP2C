import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CircularLoader from '../../../assets/icons/CircularLoader'
import AiSparkleIcon from '../../../assets/icons/AiSparkleIcon'
import OrchestratorSidebar from './OrchestratorSidebar'
import Header from '../../Header'
import Breadcrumb from '../upload_document/Breadcrumb'
import { Check } from 'lucide-react'

const AiLoader = ({ onCancel, isVisible = true }) => {
  const navigate = useNavigate()
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (isVisible && !isCompleted) {
      // Simulate AI generation time (3.5 seconds)
      const timer = setTimeout(() => {
        setIsCompleted(true)
      }, 3500)

      return () => clearTimeout(timer)
    }
  }, [isVisible, isCompleted])

  const handleDone = () => {
    navigate('/ai-proposal_page')
  }

  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-[#F6F6F6] flex flex-col z-50'>
      {/* Header */}
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb current="Ai Generated Proposal" />
      
      {/* Main Content Area */}
      <div className='flex-1 flex overflow-hidden'>
        {/* Left Side - Loader Content */}
        <div className='flex-1 flex items-center justify-center'>
          {/* Modal Card */}
          <div className='relative w-[690px] bg-white rounded-[12px] border border-[#CFCFCF] shadow-[0px_4px_8px_2px_rgba(0,0,0,0.07)] flex flex-col items-center gap-[22px] px-[50px] py-[53px]'>
            {!isCompleted ? (
              <>
                {/* Loading State */}
                {/* Header with AI Icon and Text */}
                <div className='flex items-center gap-[10px]'>
                  <AiSparkleIcon width={33} height={33} />
                  <h2 className="text-[#39393A] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px]">
                    AI is generating your Proposal...
                  </h2>
                </div>

                {/* Circular Loader and Wait Time */}
                <div className='flex flex-col items-center gap-[32px]'>
                  <CircularLoader size={119} strokeWidth={8} progress={65} animated={true} />
                  <p className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                    Estimated wait time 3-5 minutes
                  </p>
                </div>

                {/* Cancel Button */}
                <div className='w-full flex justify-end'>
                  <button
                    type='button'
                    onClick={onCancel}
                    className="text-[#0D54FF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px] bg-transparent border-none cursor-pointer hover:text-[#0040D9] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Completed State */}
                {/* Header with AI Icon and Text */}
                <div className='flex items-center gap-[10px]'>
                  <AiSparkleIcon width={33} height={33} />
                  <h2 className="text-[#39393A] font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px]">
                    AI Generated Proposal Ready!
                  </h2>
                </div>

                {/* Checkmark Icon */}
                <Check
                  className='inline-flex w-[96px] h-[96px] p-[19.2px] items-center justify-center rounded-[48px] ring-[4.8px] ring-[#0D54FF] text-[#0D54FF]'
                  
                />

                {/* Done Button */}
                <div className='w-full flex justify-end'>
                  <button
                    type='button'
                    onClick={handleDone}
                    className="text-[#0D54FF] font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px] bg-transparent border-none cursor-pointer hover:text-[#0040D9] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Orchestrator Sidebar */}
        <OrchestratorSidebar isCompleted={isCompleted} />
      </div>
    </div>
  )
}

export default AiLoader