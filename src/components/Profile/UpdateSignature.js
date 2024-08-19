
import React, { useEffect, useState } from 'react'
import Label from '../Label'
import InputError from '../InputError'
import Button from '../Button'
import Image from 'next/image'
import axios from '@/lib/axios'

const UpdateSignature = ({ user, profileSignature }) => {
    const [data, setData] = useState(null);
    const appUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [profileDetails, setProfileDetails] = useState()
    const profileImage = appUrl+profileSignature

    const handleFileChange = (e) => {
        setData(e.target.files[0]);
    }

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('signature', data || "");

        try {
            axios.post(`/api/profile-data/${user.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((response)=>{
                
            });
        } catch (error) {
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