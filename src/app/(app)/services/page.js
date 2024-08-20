'use client'
import axios from '@/lib/axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [serviceList, setServiceList] = useState([])
    useEffect(() => {
        axios.get('/api/service-list').then(response => {
            setServiceList(response.data.services)
        })
    }, [])

    return (
        <>
            <div className="w-full px-6">
                <div className="bg-white py-4 rounded-[0.25rem] shadow-md border border-gray-[2px] mt-4">
                    <table
                        className="w-full text-sm text-gray-500"
                        id="applicationList">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr className="border-b">
                                <th scope="col" className="px-6 py-3 ">
                                    SL
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left ">
                                    Service Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left ">
                                    Total Application
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceList?.map((service, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-gray-200">
                                    <td className="px-6 py-2 text-center">
                                        {++idx}
                                    </td>
                                    <td className="px-6 py-2">
                                        <Link href={`/services/${service.sid}`}>{service.name}</Link>
                                    </td>
                                    <td className="px-6 py-2">
                                        {service.application_count}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 px-4 flex justify-end">Pagination</div>
                </div>
            </div>
        </>
    )
}

export default page
