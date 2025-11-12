import React, { useState } from 'react'
import CollaborationHeader from './CollaborationHeader'
import EmailInviteInput from './EmailInviteInput'
import UserAccessList from './UserAccessList'

const CollaborationModal = ({ isOpen, onClose }) => {
  const [emailInput, setEmailInput] = useState('')
  const [permission, setPermission] = useState('needs to approve')
  const [users, setUsers] = useState([
    {
      id: 1,
      initials: 'AM',
      email: 'Andrew.bernard@telstra.com',
      status: 'Awaiting Approval',
      bgColor: '#F18B79'
    },
    {
      id: 2,
      initials: 'KJ',
      email: 'Kelly.jones@telstra.com',
      status: 'Approved',
      bgColor: '#F5C563'
    },
    {
      id: 3,
      initials: 'AA',
      email: 'Alex.anderson@telstra.com',
      permission: 'can edit',
      bgColor: '#7DD3FC'
    },
    {
      id: 4,
      initials: 'KS',
      email: 'Kelsey.smith@telstra.com',
      permission: 'can edit',
      bgColor: '#0D54FF'
    }
  ])

  const handleInvite = () => {
    const email = (emailInput || '').trim()
    if (!email) return
    const isValid = /.+@.+\..+/.test(email)
    if (!isValid) return

    const namePart = email.split('@')[0]
    const parts = namePart.split(/[._-]+/).filter(Boolean)
    const initials = (parts[0]?.[0] || '').toUpperCase() + (parts[1]?.[0] || '').toUpperCase()

    const palette = ['#F18B79','#F5C563','#7DD3FC','#0D54FF','#86EFAC','#FCA5A5']
    const bgColor = palette[(users.length + 1) % palette.length]

    const newUser = {
      id: Date.now(),
      initials: initials || email[0].toUpperCase(),
      email,
      status: 'Awaiting Approval',
      bgColor
    }

    setUsers(prev => [newUser, ...prev])
    setEmailInput('')
    setPermission('needs to approve')
  }

  const handleCopyLink = () => {
    console.log('Copy link clicked')
  }

  const handlePermissionChange = (userId, newPermission) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === userId
          ? { ...user, permission: newPermission }
          : user
      )
    )
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50'>
      <div className='bg-white rounded-[9px] border border-[#D9D9D9] shadow-[0px_4px_16px_2px_rgba(0,0,0,0.08)] w-[874px] flex flex-col'>
        <CollaborationHeader onClose={onClose} onCopyLink={handleCopyLink} />
        
        <div className='w-full h-[2px] bg-[#D9D9D9]' />
        
        <div className='px-[28px] py-[24px] flex flex-col gap-[18px]'>
          <EmailInviteInput
            email={emailInput}
            onEmailChange={setEmailInput}
            permission={permission}
            onPermissionChange={setPermission}
            onInvite={handleInvite}
          />
          
          <UserAccessList
            users={users}
            onPermissionChange={handlePermissionChange}
          />
        </div>
      </div>
    </div>
  )
}

export default CollaborationModal
