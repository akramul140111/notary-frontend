'use client'

import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import BdMonoGram from '@/app/assets/appImage/bd-monogram.png'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import GuestLayout from '../GuestLayout'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('admin@mail.com')
    const [password, setPassword] = useState('12121212')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }

        if (Object.keys(errors).length > 0) {
            setIsLoading(false)
        }
    },[errors, router.reset])
    
    const submitForm = async event => {
        event.preventDefault()
        setIsLoading(true)
        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <GuestLayout>
                <AuthSessionStatus className="mb-4" status={status} />
                {/* {(isLoading && status == null) && <div className='z-[99999] top-0 left-0 absolute w-full h-full flex items-center justify-center opacity-30 '>
                                <Loading />
                            </div>} */}
                <div className="bg-white p-8 rounded-lg shadow-xl w-96 h-[400px] relative">
                    <div className="flex items-center justify-center  ">
                        <span>
                            <Image
                                src={BdMonoGram}
                                alt="Government Logo"
                                className="rounded-full"
                                loading='lazy'
                                quality={70}
                            />
                        </span>
                    </div>
                    <form onSubmit={submitForm}>
                        {/* Email Address */}
                        <div>
                            <Label htmlFor="email" className="block">
                                Email
                            </Label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                className="mt-2 h-10 w-full border border-green-400 pl-4 rounded-3xl shadow-sm sm:text-sm"
                                onChange={event => setEmail(event.target.value)}
                                required
                                autoFocus
                            />

                            <InputError
                                messages={errors.email}
                                className="mt-2"
                            />
                        </div>

                        {/* Password */}
                        <div className="mt-4">
                            <Label htmlFor="password">Password</Label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                className="mt-2 h-10 w-full border border-green-400 pl-4 rounded-3xl shadow-sm sm:text-sm"
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                required
                                autoComplete="current-password"
                            />

                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-row justify-between">
                            <div className="">
                                <label className="flex items-center mt-2">
                                    <input
                                        className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                        id="remember_me"
                                        name="remember"
                                        type="checkbox"
                                        onChange={event =>
                                            setShouldRemember(
                                                event.target.checked,
                                            )
                                        }
                                    />

                                    <span className="ml-2 text-sm text-gray-600">
                                        মনে রাখুন
                                    </span>
                                </label>
                            </div>
                            <span className="text-[9px] opacity-60 mt-3">
                                পাসওয়ার্ড ভুলে গেছেন?
                            </span>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                            {isLoading ? (
                                    <button
                                        className="w-full bg-[#929292] text-white py-2 text-[12px] px-4 mt-6 rounded-3xl focus:ring-2 focus:ring-offset-2"
                                        disabled>
                                        Processing...
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="w-full bg-[#009e4d] text-white py-2 text-[12px] px-4 mt-6 rounded-3xl focus:ring-2 focus:ring-offset-2">
                                        লগইন
                                    </button>
                                )}
                        </div>
                    </form>
                </div>
            </GuestLayout>
        </>
    )
}

export default Login
