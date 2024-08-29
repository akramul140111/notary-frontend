'use client'
import UpdateSignature from '@/components/Profile/UpdateSignature'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const [profileDetails, setProfileDetails] = useState()
    useEffect(() => {
        axios.get(`/api/profile-data/${user.id}`).then(response => {
            setProfileDetails(response?.data)
        })
    }, [])
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    {profileDetails ? (
                        <UpdateSignature
                            user={user}
                            profileSignature={profileDetails?.signature}
                            className="max-w-xl"
                        />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}

export default page
