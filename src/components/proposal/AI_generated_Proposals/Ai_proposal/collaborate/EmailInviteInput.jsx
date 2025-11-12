import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
const EmailInviteInput = ({ email, onEmailChange, permission, onPermissionChange, onInvite }) => {
  const [showPermissionDropdown, setShowPermissionDropdown] = useState(false)
  
  const permissionOptions = [
    'needs to approve',
    'can edit',
    'can view'
  ]

  const handlePermissionSelect = (option) => {
    onPermissionChange(option)
    setShowPermissionDropdown(false)
  }

  return (
    <div className='flex items-center gap-[15px]'>
      <div className='flex-1 bg-[#F5F0F0] rounded-[5px] px-[24px] py-[14px] flex items-center justify-between'>
        <input
          type='text'
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder='Enter email ID'
          className="flex-1 bg-transparent outline-none text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-normal placeholder:text-[#828282]"
        />
        
        <div className='relative'>
          <button
            onClick={() => setShowPermissionDropdown(!showPermissionDropdown)}
            className='flex items-center gap-[15px] hover:opacity-70 transition-opacity'
          >
            <span className="text-[#050505] font-['Inter',sans-serif] text-[19px] font-normal leading-normal">
              {permission}
            </span>
            <ChevronDown width={25} height={25} color='#050505' />
          </button>
          
          {showPermissionDropdown && (
            <div className='absolute top-full right-0 mt-[8px] bg-white rounded-[5px] border border-[#D9D9D9] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] py-[8px] min-w-[180px] z-10'>
              {permissionOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handlePermissionSelect(option)}
                  className="w-full px-[16px] py-[8px] text-left text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal hover:bg-[#F5F0F0] transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <button
        onClick={onInvite}
        className='bg-[#0D54FF] rounded-[6px] px-[32px] py-[14px] hover:bg-[#0040D9] transition-colors'
      >
        <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[20px] font-normal leading-normal">
          Invite
        </span>
      </button>
    </div>
  )
}

export default EmailInviteInput
