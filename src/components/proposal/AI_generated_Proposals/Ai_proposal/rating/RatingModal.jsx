import React, { useEffect, useState } from 'react'

import RatingHeader from './RatingHeader'
import StarRating from './StarRating'

const RatingModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(2)

  // Ensure default 2 stars whenever the modal is opened
  useEffect(() => {
    if (isOpen) setRating(2)
  }, [isOpen])

  const handleRatingChange = (newRating) => {
    setRating(newRating)
    console.log('Rating selected:', newRating)
    // Add logic to save rating
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50'>
      <div className='bg-white rounded-[9px] border border-[#D9D9D9] shadow-[0px_4px_16px_2px_rgba(0,0,0,0.08)] w-[474px] flex flex-col gap-[21px] pb-[30px]'>
        <RatingHeader onClose={onClose} />
        
        <div className='w-full h-[2px] bg-[#D9D9D9]' />
        
        <div className='px-[28px] flex justify-center'>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
        </div>
      </div>
    </div>
  )
}

export default RatingModal
