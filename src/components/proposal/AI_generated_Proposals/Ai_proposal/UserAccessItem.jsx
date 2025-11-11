import React, { useState } from 'react'
import CheckmarkIcon from '../../../../assets/icons/CheckmarkIcon'
import ChevronDownSmallIcon from '../../../../assets/icons/ChevronDownSmallIcon'

const UserAccessItem = ({ user, onPermissionChange }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  
  const permissionOptions = ['can edit', 'can view', 'can comment']

  const handlePermissionSelect = (option) => {
    onPermissionChange(user.id, option)
    setShowDropdown(false)
  }

  return (
    <div className='flex items-center justify-between gap-[21px]'>
      <div className='flex items-center gap-[21px]'>
        <div
          className='w-[38px] h-[38px] rounded-full flex items-center justify-center'
          style={{ backgroundColor: user.bgColor }}
        >
          <span className="text-[#FFFFFF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal">
            {user.initials}
          </span>
        </div>
        
        <span className="text-[#050505] font-['Inter',sans-serif] text-[19px] font-normal leading-normal">
          {user.email}
        </span>
      </div>
      
      {user.status === 'Awaiting Approval' && (
        <span className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal leading-normal">
          {user.status}
        </span>
      )}
      
      {user.status === 'Approved' && (
        <div className='flex items-center gap-[10px]'>
          <span className="text-[#348C05] font-['Inter',sans-serif] text-[18px] font-normal leading-normal">
            {user.status}
          </span>
          <CheckmarkIcon width={14} height={10} color='#348C05' />
        </div>
      )}
      
      {user.permission && (
        <div className='relative'>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className='flex items-center gap-[15px] hover:opacity-70 transition-opacity'
          >
            <span className="text-[#050505] font-['Inter',sans-serif] text-[19px] font-normal leading-normal">
              {user.permission}
            </span>
            <ChevronDownSmallIcon width={16} height={9} color='#050505' />
          </button>
          
          {showDropdown && (
            <div className='absolute top-full right-0 mt-[8px] bg-white rounded-[5px] border border-[#D9D9D9] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] py-[8px] min-w-[150px] z-10'>
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
      )}
    </div>
  )
}

export default UserAccessItem