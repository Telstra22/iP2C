import React from 'react'
import UserAccessItem from './UserAccessItem'

const UserAccessList = ({ users, onPermissionChange }) => {
  return (
    <div className='flex gap-[18px]'>
      <div className='flex-1 flex flex-col gap-[18px]'>
        <h3 className="text-[#505050] font-['Inter',sans-serif] text-[19px] font-semibold leading-normal">
          Who has access
        </h3>
        
        <div className='flex flex-col gap-[21px]'>
          {users.map((user) => (
            <UserAccessItem
              key={user.id}
              user={user}
              onPermissionChange={onPermissionChange}
            />
          ))}
        </div>
      </div>
      
      {/* Scrollbar indicator */}
      <div className='w-[8px] h-[194px] bg-[#D9D9D9] rounded-[30px]' />
    </div>
  )
}

export default UserAccessList