import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center w-full">
            <div className="animate-bounce">
                <FaArrowCircleDown className="w-12 h-12 shadow-2xl rounded-full" />
            </div>
        </div>
  )
}

export default PageLoading