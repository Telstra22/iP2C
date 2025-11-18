import React from 'react';
import telstraLogo from '../assets/images/telstra-logo.png';
import { Bell, Grip, UserRound } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  if (isLoginPage) {
    return (
      <>
        {/* Header (Pre-login variant) */}
        <header className="w-full h-24 bg-white shadow-[0_4px_9px_1px_rgba(0,0,0,0.07)] relative">
          <div className="flex justify-between items-center h-full px-[66px] max-lg:px-5 max-sm:px-4">
            {/* Left: Logo section */}
            <div className="flex items-center gap-1.5 max-sm:gap-1">
              <div className="text-[#191919] text-[20px] font-medium font-['Graphik'] leading-normal max-sm:text-lg" style={{ fontStyle: 'normal' }}>
                iP2C
              </div>
              <div className="text-black text-xl font-normal max-sm:text-lg">|</div>
              <img
                src={telstraLogo}
                alt="Telstra Logo"
                className="w-[58px] h-[33px] aspect-[58/33] max-sm:w-[45px] max-sm:h-[25px]"
              />
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-[84px] max-lg:gap-5 max-sm:gap-4">
              <button className="p-1 shrink-0" aria-label="Notifications">
                <Bell width={22} height={24} color="#0D54FF" />
              </button>
              <button className="p-1 shrink-0" aria-label="Account">
                <UserRound width={18} height={18} color="#0D54FF" />
              </button>
            </div>
          </div>
        </header>
      </>
    );
  }

  return (
    <header className="w-full h-24 bg-(--color-background-white) shadow-[0_4px_9px_1px_rgba(0,0,0,0.07)] relative">
      <div className="flex justify-between items-center h-full px-[66px] max-lg:px-5 max-sm:px-4">
        {/* Left: Logo section */}
        <div className="flex items-center gap-1.5 max-sm:gap-1">
          <div 
            className="text-[#191919] text-[20px] font-medium leading-normal max-sm:text-lg" 
            style={{ fontFamily: 'Graphik, sans-serif', fontStyle: 'normal' }}
          >
            iP2C
          </div>
          <div className="text-black text-xl font-normal max-sm:text-lg">|</div>
          <img
            src="/src/assets/images/telstra-logo.png"
            alt="Telstra Logo"
            className="w-[58px] h-[33px] aspect-[58/33] max-sm:w-[45px] max-sm:h-[25px]"
          />
        </div>
        
        {/* Right: User section */}
        <div className="flex items-center gap-[33px] max-lg:gap-5 max-sm:gap-4">
          <button className="p-1 shrink-0" aria-label="Notifications">
            <Bell width={30} height={30} color="#0D54FF" />
          </button>
          <button className="p-1 shrink-0" aria-label="Apps menu">
            <Grip width={25} height={25} color="#050505" />
          </button>
          <div className="w-px h-[59px] bg-(--color-border-gray) max-sm:h-10" />
          <div className="flex items-center gap-[15px] max-sm:gap-2">
            <span 
              className="text-[#191919] text-[20px] font-medium leading-normal max-sm:text-base whitespace-nowrap"
              style={{ fontFamily: 'Graphik, sans-serif' }}
            >
              Alex Anderson
            </span>
            <img
              src="/alex-anderson-profile.png"
              alt="Alex Anderson profile"
              className="w-[38px] h-[39px] rounded-full object-cover max-sm:w-8 max-sm:h-8"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;