import myGov from '@/app/assets/appImage/my-gov.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

const Sidebar = () => {

    return (
        <div className="min-w-[70px] z-[99]">
            <div className="sticky top-0 flex flex-row">
                <div className="bg-[#f3f3f9] w-[70px] z-50 min-h-screen shadow-[rgba(15,_34,_58,_0.32)_0px_2px_4px]">
                    <div className="flex flex-col items-center pt-6">
                        <div className="hover:cursor-pointer flex flex-col gap-3 text-[#7c7f90]">
                            <ul>
                                <li className="mb-2 text-center">
                                    <div className="flex">
                                        <div>
                                            <Link
                                                className="p-2 rounded-md hover:rounded-sm bg-[rgba(64,_81,_137,_0.15)] hover:bg-[rgba(64,_81,_137,_0.15)] flex justify-center"
                                                href="/dashboard">
                                                <MdDashboard className="text-[24px]" loading="lazy" />
                                            </Link>
                                            <span className="text-[11px]">
                                                ড্যাশবোর্ড
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-2 text-center">
                                    <div className="flex">
                                        <div>
                                            <Link
                                                className="p-2 rounded-md hover:rounded-sm hover:bg-[rgba(64,_81,_137,_0.15)] flex justify-center"
                                                href="/services">
                                                <FaBook className="text-[24px]" loading='lazy' />
                                            </Link>
                                            <span className="text-[11px]">
                                                আবেদন
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-[#FFFFFF] w-[220px] min-h-screen shadow-[rgba(15,_34,_58,_0.32)_0px_2px_4px] hidden md:block"
                    id="sideExpand">
                    <div className="px-5 flex flex-col justify-center items-center min-h-[70px]">
                        <Link href="/">
                            <Image
                                src={myGov}
                                className="mt-2"
                                alt=""
                                width="120"
                                loading='lazy'
                                quality={70}
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col text-[#7c7f90] text-sm cursor-pointer">
                        <ul>
                            <li className="">
                                <Link
                                    href="#"
                                    className="block p-2 pl-4 text-black font-bold hover:text-black">
                                    <span>- </span>ড্যাশবোর্ড
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
