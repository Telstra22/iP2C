import React, { useState } from 'react'

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
          <svg
            width='47'
            height='45'
            viewBox='0 0 47 45'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23.5 0L28.8637 16.9098H46.7658L32.4511 27.3554L37.8147 44.2652L23.5 33.8196L9.18532 44.2652L14.5489 27.3554L0.234192 16.9098H18.1363L23.5 0Z'
              fill={getStarColor(starIndex)}
              stroke={getStarColor(starIndex)}
              strokeWidth='2'
            />
          </svg>
        </button>
      ))}
    </div>
  )
}

export default StarRating