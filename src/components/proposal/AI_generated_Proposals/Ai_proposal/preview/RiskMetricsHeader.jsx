import React from 'react'
import MetricsIcon from '../../../../../assets/icons/MetricsIcon'

export const RiskMetricsHeader = () => (
  <div className='flex items-center gap-[10px] px-[20px] py-[24px] border-b border-[#DDDDDD] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
    <MetricsIcon width={35} height={32} color='#050505' />
    <h2 className="text-[#050505] font-['Inter',sans-serif] text-[22px] font-semibold leading-[34px]">
      Proposal Evaluation Metrics
    </h2>
  </div>
)