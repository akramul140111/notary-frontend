import Link from 'next/link'
import React from 'react'
import { FaInfo } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'

const SignatureModal = ({ signatureModalClose }) => {
    return (
        <>
            <div
                className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[999] transition-opacity"
            >
                <div
                    className=" bg-white shadow-md rounded-[0.25rem] w-5/6 md:w-2/6 min-h-[350px] transition ease-in-out overflow-hidden"
                >
                    <div className="flex justify-between items-center px-4 pb-1 pt-2 bg-cyan-500 text-white">
                        <h2 className="text-xl font-bold">স্বাক্ষর </h2>
                        <button id="shakhaModalTopClose" className="p-2">
                            <IoCloseCircleOutline className="text-3xl text-white rounded-lg " onClick={signatureModalClose}/>
                        </button>
                    </div>
                    <hr/>
                    <div className='mt-4 mx-6'>
                        <p className='tex-xs my-2'>অনুমোদনের জন্য স্বাক্ষর প্রয়োজন</p>
                        <p className='tex-xs my-2'>অনুগ্রহ করে আপনার স্বাক্ষর সংযুক্ত করুন </p>

                        <div className='flex justify-center mt-6'>
                            <div className='flex justify-center items-center rounded-full p-4 border border-cyan-700 w-[100px] h-[100px]'>
                                <FaInfo className=" text-cyan-500 text-5xl" />
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-t-gray-200 mt-8'>
                        <Link href="/profile" className="mt-2 mr-3 inline-flex items-center px-2 pt-3 pb-2 leading-3 border border-cyan-500 rounded-[0.25rem]  text-sm text-cyan-700 font-bold uppercase tracking-widest hover:bg-cyan-700 hover:text-white active:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition ease-in-out duration-150 float-right">স্বাক্ষর আপলোড করুন</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignatureModal
