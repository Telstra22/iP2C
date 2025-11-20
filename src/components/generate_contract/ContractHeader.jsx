import React, { useState, useRef, useEffect } from 'react';
import { Bell, Grip, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ContractHeader() {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!profileRef.current) return;
      if (!profileRef.current.contains(e.target)) setShowProfileMenu(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

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
            src="/telstra-logo.png"
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
          <div ref={profileRef} className="relative flex items-center gap-[15px] max-sm:gap-2">
            <span 
              className="text-[#191919] text-[20px] font-medium leading-normal max-sm:text-base whitespace-nowrap"
              style={{ fontFamily: 'Graphik, sans-serif' }}
            >
              Kelly Jones
            </span>
            <button type="button" onClick={() => setShowProfileMenu(v => !v)} aria-haspopup="menu" aria-expanded={showProfileMenu}>
              <img
                src="/kelly-jones-avatar.png"
                alt="Kelly Jones profile"
                className="w-[43px] h-[43px] rounded-full object-cover max-sm:w-8 max-sm:h-8"
              />
            </button>
            {showProfileMenu && (
              <div role="menu" className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[180px] rounded-[8px] border border-[#E5E5E5] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                <button
                  type="button"
                  onClick={() => { setShowProfileMenu(false); navigate('/'); }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F6F6F6] text-left"
                >
                  <LogOut width={18} height={18} color="#050505" />
                  <span className="text-[#050505] text-[16px] leading-[22px]">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default ContractHeader;