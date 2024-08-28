import { ResponsiveNavButton } from '@/components/ResponsiveNavLink'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
const TopMenu = ({ user }) => {
    const { logout } = useAuth()
    const [logoutSection, setLogoutSection] = useState(false)
    const logoutPanel = () => {
        setLogoutSection(!logoutSection)
    }

    return (
        <>
            <div className="sticky top-0 bg-white min-h-[70px] z-50 border-b border-b-gray-300 flex justify-between items-center px-5 gap-4">
                <div className="flex justify-between">
                    <div className="w-[180px] md:w-[200px] lg:w-[260px] mx-auto flex gap-1">
                        <div className="right-0">
                            <div className="flex items-center">
                                <button
                                    id="toogleLeftMenu"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                    >
                                    <FaBars className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="bg-[#fff] w-full">
                    <div className="h-full">
                        <div className="flex justify-end h-16 items-center">
                            <div className="hidden sm:flex sm:items-center bg-[#F1F4F9] p-2">
                                <div className="hidden md:block mx-2 w-[40px] h-[40px] rounded-full overflow-hidden">
                                    <FaUser
                                        className="text-[33px] text-gray-600"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    width="48"
                                    className="relative">
                                    <div className="relative">
                                        <div>
                                            <div name="trigger">
                                                <button
                                                    id="headerProfileViewButton"
                                                    onClick={logoutPanel}
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                    <div>
                                                        <p className="font-bold text-left">
                                                            {user?.name}
                                                        </p>
                                                        <p className="text-[10px] hidden lg:block">
                                                            মাইগভ টিম, ইয়ং
                                                            প্রফেসনাল
                                                        </p>
                                                    </div>
                                                    <div className="ms-1">
                                                        <svg
                                                            className="fill-current h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative right-0">
                                <div className="-me-2 flex items-center sm:hidden">
                                    <button
                                        id="hamburgerHeaderMenu"
                                        onClick={logoutPanel}
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <path
                                                className="inline-flex"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className="hidden"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {logoutSection && (
                                    <div
                                        id="headerProfileViewResponsive"
                                        className="right-0 absolute shadow-lg w-[140px] p-4 translate-x-0 translate-y-[30px] bg-white">
                                        <div className="text-left flex flex-col">
                                            <Link
                                                href="/profile"
                                                className="w-full my-1">
                                                Profile
                                            </Link>
                                            <Link
                                                href=""
                                                className="w-full my-1">
                                                Dashboard
                                            </Link>
                                        </div>
                                        <ResponsiveNavButton onClick={logout}>
                                            Logout
                                        </ResponsiveNavButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default TopMenu
