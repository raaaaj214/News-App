import React from 'react'

// Loading Skeleton Card
const LoadingCard = () => {
  return (
    <div className="w-[400px] border  h-[350px] border-solid rounded-md bg-gray-100">
    <div  className='w-full h-[200px] object-cover rounded-md rounded-b-none bg-gray-200'>
    </div>
    <div className='flex flex-col p-4 gap-4 h-full'>
    </div>
  </div>
  )
}

export default LoadingCard