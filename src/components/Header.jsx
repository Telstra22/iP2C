import React from 'react';
import telstraLogo from '../assets/images/telstra-logo.png';
import { Bell, User } from 'lucide-react';

function Header() {
  return (
    <>
    {/* Header */}
      <header className="w-full h-24 bg-white shadow-[0_4px_9px_1px_rgba(0,0,0,0.07)] relative">
        <div className="flex justify-between items-center h-full px-16 max-lg:px-5 max-sm:px-4">
          {/* Left: Logo section */}
          <div className="flex items-center gap-1.5 max-sm:gap-1">
            <div className="text-[#191919] text-xl font-medium font-['Graphik',-apple-system,Roboto,Helvetica,sans-serif] max-sm:text-lg">
              iP2C
            </div>
            <div className="text-black text-xl font-normal max-sm:text-lg">|</div>
            <img
              src={telstraLogo}
              alt="Telstra Logo"
              className="w-[58px] h-[33px] max-sm:w-[45px] max-sm:h-[25px] object-cover"
            />
          </div>
          
          {/* Right: Icons */}
          <div className="flex items-center gap-20 max-lg:gap-5 max-sm:gap-4">
            <button className="p-1" aria-label="Notifications">
              <Bell size={31} color="#0D54FF" strokeWidth={2} />
            </button>
            <button className="p-1" aria-label="Account">
              <User size={31} color="#0D54FF" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
