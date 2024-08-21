import React from 'react'
import "@/app/assets/css/loading.css"

const Loading = () => {
  return (
    // <div className="w-12 h-12 rounded-full animate-spin
    //                 border-4 border-dashed border-green-500 border-t-transparent"></div>
    <>
      <div className='flex justify-center items-center m-0 bg-gray-500 w-full h-[100vh]'>
        <div className='w-[300px] h-[120px] rounded-[10px] shadow-sm flex flex-col justify-center items-center gap-4'>
          <h1 className='text-3xl shadow-md m-0 text-white font-bold'>Loading....</h1>
          <div className="loading-wrapper">
            <div className="loader bg-green-600"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading