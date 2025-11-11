import React from 'react';
import telstraLogo from '../assets/images/telstra-logo.png';
import BellIcon from '../assets/icons/BellIcon';
import UserProfileIcon from '../assets/icons/UserProfileIcon';

function Header() {
  return (
    <>
    {/* Header */}
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
              className="w-[58px] h-[33px] aspect-[58/33] bg-center bg-cover bg-no-repeat max-sm:w-[45px] max-sm:h-[25px]"
            />
          </div>
          
          {/* Right: Icons */}
          <div className="flex items-center gap-[84px] max-lg:gap-5 max-sm:gap-4">
            <button className="p-1 shrink-0" aria-label="Notifications">
              <BellIcon width={22} height={24} color="#0D54FF" />
            </button>
            <button className="p-1 shrink-0" aria-label="Account">
              <UserProfileIcon width={18} height={18} color="#0D54FF" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
