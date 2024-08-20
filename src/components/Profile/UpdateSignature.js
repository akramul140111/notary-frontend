
import React, { useEffect, useState } from 'react'
import Label from '../Label'
import InputError from '../InputError'
import Button from '../Button'
import Image from 'next/image'
import axios from '@/lib/axios'
import Loading from '@/app/Loading'

const UpdateSignature = ({ user, profileSignature }) => {
    const [profileSign, setProfileSign] = useState(profileSignature)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const appUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [profileDetails, setProfileDetails] = useState()
    const profileImage = appUrl+profileSign

    const handleFileChange = (e) => {
        setData(e.target.files[0]);
    }

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('signature', data || "");

        try {
            setIsLoading(true)
            axios.post(`/api/profile-data/${user.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((response)=>{
                setIsLoading(false)
                setProfileSign(response?.data?.signature)
            });
        } catch (error) {
            setIsLoading(false)
            console.error('Error updating signature:', error);
        }
    };
  return (
    <section >
            <header>
                <h2 className="text-lg font-medium text-gray-900">Your Signature</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile signature.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6" encType='multipart/form-data'>
                <div>
                    <Label htmlFor="name" value="Name" />
                    {profileDetails !== null ?<Image src={profileImage} alt='' width="50" height="50" />: ''}
                    {isLoading && <Loading />}
                    <input
                        type="file"
                        id="signature"
                        name='signature'
                        className="mt-1 block w-full"
                        onChange={handleFileChange}
                        required
                        isFocused
                        autoComplete="signature"
                    />

                </div>


                <div className="flex items-center gap-4">
                    <Button >Save</Button>
                </div>
            </form>
    </section>
  )
}

export default UpdateSignature