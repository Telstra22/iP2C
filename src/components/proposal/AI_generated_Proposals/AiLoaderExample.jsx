import React, { useState } from 'react'
import AiLoader from './AiLoader'

// Example usage of AiLoader component
const AiLoaderExample = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleCancel = () => {
    setIsLoading(false)
    console.log('AI generation cancelled')
    // Add your cancel logic here
  }

  return (
    <div className='w-full h-screen bg-[#F6F6F6]'>
      {/* Your main content here */}
      <div className='p-8'>
        <h1 className='text-2xl font-semibold mb-4'>AI Proposal Generation</h1>
        <button
          onClick={() => setIsLoading(true)}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Show Loader
        </button>
      </div>

      {/* AI Loader Modal */}
      <AiLoader isVisible={isLoading} onCancel={handleCancel} />
    </div>
  )
}

export default AiLoaderExample