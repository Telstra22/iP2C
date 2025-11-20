import React from 'react';
import { Bell, Grip } from 'lucide-react';
import ChevronRightSmallIcon from '../../assets/icons/ChevronRightSmallIcon.svg?react';
import AISparkleGradientIcon from '../../assets/icons/AISparkleGradientIcon.svg?react';
import LoadingSpinnerGradient from '../../assets/icons/LoadingSpinnerGradient.svg?react';

const ContractLoader = () => {
  return (
    <div className="flex flex-col h-screen bg-(--color-background-light)">
      {/* Header */}
      <header className="w-full h-24 bg-(--color-background-white) shadow-[0_4px_9px_1px_rgba(0,0,0,0.07)] relative">
        <div className="flex justify-between items-center h-full px-[66px]">
          {/* Left: Logo section */}
          <div className="flex items-center gap-1.5">
            <div 
              className="text-[#191919] text-[20px] font-medium leading-normal" 
              style={{ fontFamily: 'Graphik, sans-serif', fontStyle: 'normal' }}
            >
              iP2C
            </div>
            <div className="text-black text-xl font-normal">|</div>
            <img
              src="/telstra-logo.png"
              alt="Telstra Logo"
              className="w-[58px] h-[33px] aspect-[58/33]"
            />
          </div>
          
          {/* Right: User section */}
          <div className="flex items-center gap-[33px]">
            <button className="p-1 shrink-0" aria-label="Notifications">
              <Bell width={30} height={30} color="#0D54FF" />
            </button>
            <button className="p-1 shrink-0" aria-label="Apps menu">
              <Grip width={25} height={25} color="#050505" />
            </button>
            <div className="w-px h-[59px] bg-(--color-border-gray)" />
            <div className="flex items-center gap-[15px]">
              <span 
                className="text-[#191919] text-[20px] font-medium leading-normal whitespace-nowrap"
                style={{ fontFamily: 'Graphik, sans-serif' }}
              >
                Alex Anderson
              </span>
              <img
                src="/alex-anderson-avatar.png"
                alt="Alex Anderson profile"
                className="w-[38px] h-[39px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-[66px] pt-4 pb-3">
        <span className="breadcrumb-text">Manage proposals</span>
        <ChevronRightSmallIcon width={11} height={18} className="text-(--color-breadcrumb-separator)" />
        <span className="breadcrumb-active">Generate Contract</span>
      </div>

      {/* Main Content - Centered Loader Card */}
      <div className="flex-1 flex items-center justify-center px-[66px]">
        <div className="w-[690px] bg-white rounded-xl border border-[#cfcfcf] shadow-[0px_4px_8px_2px_rgba(0,0,0,0.07)] px-[60px] py-[53px] flex flex-col items-center gap-[22px]">
          {/* Title with AI Icon */}
          <div className="flex items-center gap-2.5">
            <AISparkleGradientIcon width={33} height={33} />
            <h1 className="text-2xl font-semibold text-[#39393a]" style={{ fontFamily: 'Inter, sans-serif' }}>
              AI is generating your Contract...
            </h1>
          </div>

          {/* Loader and Wait Time */}
          <div className="flex flex-col items-center gap-8">
            {/* Loading Spinner */}
            <div className="animate-spin">
              <LoadingSpinnerGradient width={119} height={119} />
            </div>

            {/* Wait Time Text */}
            <p className="text-xl font-normal text-[#828282]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Estimated wait time 1-2 minutes
            </p>
          </div>

          {/* Cancel Button */}
          <button className="text-[22px] font-semibold text-(--color-primary-blue) hover:underline transition-all mt-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractLoader;