import React, { useState } from 'react'
import LightningIcon from '../../../../../assets/icons/LightningIcon.jsx'
import { Send } from 'lucide-react'
const RiskScoreSidebar = ({ onRiskAssessment, onSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className='w-[491px] h-full flex flex-col border-l border-[#D9D9D9] bg-[#FCFCFC]'>
      {/* Risk Score Assessment Button */}
      <button
        onClick={onRiskAssessment}
        className='flex items-center gap-[10px] px-[20px] py-[24px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:opacity-90 transition-opacity bg-[linear-gradient(83.12deg,_rgba(0,255,225,1)_22.75%,_rgba(13,84,255,1)_32.11%,_rgba(149,36,198,1)_108.54%)]'
      >
        <LightningIcon width={35} height={32} color='#FFFFFF' />
        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[22px] font-semibold leading-normal">
          Risk Score Assessment
        </span>
      </button>

      {/* Spacer */}
      <div className='flex-1' />

      {/* Ask me Anything Input */}
      <div className='bg-[#F9F9F9] px-[24px] py-[30px] flex items-center gap-[16px]'>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Ask me Anything'
          className="flex-1 bg-transparent outline-none text-[#050505] font-['Graphik',sans-serif] text-[20px] font-normal leading-[18px] placeholder:text-[#737373]"
        />
        <button
          onClick={handleSend}
          className='hover:opacity-70 transition-opacity'
        >
          <Send width={24} height={24} color='#050505' />
        </button>
      </div>
    </div>
  )
}

export default RiskScoreSidebar