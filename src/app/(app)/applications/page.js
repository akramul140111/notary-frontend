'use client'
import ApplicationCreateModal from '@/components/Applications/ApplicationCreateModal'
import ApplicationUpdateModal from '@/components/Applications/ApplicationUpdateModal'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import Loading from '../Loading'

const ApplicationList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [applicationList, setApplicationList] = useState([])
    const [applicationModal, setApplicationModal] = useState(false)
    const [applicationUpdateModal, setApplicationUpdateModal] = useState(false)
    const [applicationId, setApplicationId] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('/api/application-list').then(response => {
            setApplicationList(response.data)
        })
        setIsLoading(false)
    }, [])

    const openApplicationModal = () => {
        setApplicationModal(true)
        setTimeout(() => {
            document.getElementById('content').classList.remove('scale-75')
        }, 60)
    }

    const openApplicationUpdateModal = e => {
        setApplicationUpdateModal(true)
        setApplicationId(e)
        setTimeout(() => {
            document.getElementById('content').classList.remove('scale-75')
        }, 60)
    }

    const closeApplicationCreateModal = () => {
        document.getElementById('content').classList.add('scale-75')
        setTimeout(() => {
            setApplicationModal(false)
        }, 100)
    }

    const closeApplicationUpdateModal = () => {
        document.getElementById('content').classList.add('scale-75')
        setTimeout(() => {
            setApplicationUpdateModal(false)
        }, 100)
    }

    const updateApplicationList = application => {
        setApplicationList(application)
    }

    return (
        <>
            <div className="w-full px-6">
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-white p-2 rounded-md shadow-md flex gap-2 items-center border border-gray-[2px]"
                        onClick={openApplicationModal}>
                        <span>
                            <FaPlusCircle className="text-[#33893C]" />
                        </span>
                        <span>New Application</span>
                    </button>
                </div>

                <div className="bg-white py-4 rounded-[0.25rem] shadow-md border border-gray-[2px] mt-4">
                    {isLoading && (
                        <div className="z-[99999] absolute w-full h-full flex items-center justify-center opacity-60 bg-gray-500">
                            <Loading />
                        </div>
                    )}
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
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Mobile
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 "
                                    id="actionName">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicationList?.data?.map((application, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-gray-200">
                                    <td className="px-6 py-2 text-center">
                                        {++idx}
                                    </td>
                                    <td className="px-6 py-2">
                                        {application.name}
                                    </td>

                                    <td className="px-2 py-2 text-center h-full">
                                        {application.mobile}
                                    </td>
                                    <td className="px-2 py-2 text-center h-full">
                                        {application.gender}
                                    </td>
                                    <td className="px-2 py-2 text-center h-full">
                                        {application.email}
                                    </td>
                                    <td className="rounded-lg text-center">
                                        <button
                                            onClick={() =>
                                                openApplicationUpdateModal(
                                                    application.id,
                                                )
                                            }>
                                            <FaPencil />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {applicationUpdateModal && (
                <ApplicationUpdateModal
                    closeApplicationUpdateModal={closeApplicationUpdateModal}
                    applicationId={applicationId}
                />
            )}

            {applicationModal && (
                <ApplicationCreateModal
                    updateApplicationList={updateApplicationList}
                    applicationList={applicationList}
                    closeApplicationCreateModal={closeApplicationCreateModal}
                />
            )}
        </>
    )
}

export default ApplicationList
