import React, { useState } from 'react'
import { Star } from 'lucide-react'
const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (starIndex) => {
    onRatingChange(starIndex)
  }

  const handleMouseEnter = (starIndex) => {
    setHoverRating(starIndex)
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  const getStarColor = (starIndex) => {
    const activeRating = hoverRating || rating
    return starIndex <= activeRating ? '#FF8A00' : '#D9D9D9'
  }

  return (
    <div className='flex items-center gap-[13px]'>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <button
          key={starIndex}
          onClick={() => handleClick(starIndex)}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
          className='cursor-pointer hover:scale-110 transition-transform'
        >
          <Star
            width={57.36}
            height={51.36}
            color={getStarColor(starIndex)}
            fill={getStarColor(starIndex)}
            strokeWidth={2}
          />
        </button>
      ))}
    </div>
  )
}

export default StarRating
