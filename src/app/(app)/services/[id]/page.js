'use client'
import ApplicationCreateModal from '@/components/Applications/ApplicationCreateModal'
import ApplicationUpdateModal from '@/components/Applications/ApplicationUpdateModal'
import axios from '@/lib/axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import Loading from '../../Loading'
import ApplicationLoader from '../../ApplicationLoader'

const ApplicationList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [applicationList, setApplicationList] = useState([])
    const [applicationModal, setApplicationModal] = useState(false)
    const [applicationUpdateModal, setApplicationUpdateModal] = useState(false)
    const [applicationId, setApplicationId] = useState(false)
    const serviceId = useParams()
    const [pageNumber, setPageNumber] = useState(1)
    const [pageLoading, setPageLoading] = useState(false)
    const [serviceName, setServiceName] = useState({})
    const [serviceMainId, setServiceMainId] = useState({})
    const [totalPage, setTotalPage] = useState()
    
    const getApplication = () => {
        axios.get(`/api/application-list/${serviceId.id}?page=${pageNumber}`).then(response => {
            setApplicationList((previousApplication) => {
                const newApplications = response.data.data.data.filter(application => 
                    !previousApplication.some(existingApp => existingApp.id === application.id)
                )
                const serviceNameFind = response.data.services.find(service => service.sid == serviceId.id) 
                setServiceName(serviceNameFind.name)
                setServiceMainId(serviceNameFind.id)
                return [...previousApplication, ...newApplications]
            })
            setTotalPage(response.data.data.last_page)
            setPageLoading(false)
            setIsLoading(false)
        }).catch(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getApplication()
    }, [pageNumber])

    const infinityScroll = async () => {
        try {
          if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setPageLoading(true)
            setPageNumber(prevState => prevState + 1)
          }
        } catch (() => {
            console.log("error");
        })
      }

      useEffect(() => {
        window.addEventListener("scroll", infinityScroll)
        return () => window.removeEventListener("scroll", infinityScroll)
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

    const updateApplicationList = (application) => {
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
                    {isLoading && <div className='z-[99999] top-0 left-0 absolute w-full h-full flex items-center justify-center opacity-50 '>
                            <Loading />
                        </div>}
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
                            {applicationList?.map((application, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-gray-200">
                                    <td className="px-6 py-2 text-center py-4">
                                        {++idx}
                                    </td>
                                    <td className="px-6 py-2">
                                        {application.name}
                                    </td>
                                    
                                    <td className="px-2 py-2 text-center h-full py-4">
                                        {application.mobile}
                                    </td>
                                    <td className="px-2 py-2 text-center h-full py-4">
                                        {application.gender == "1" ? "Male" : "Female"}
                                    </td>
                                    <td className="px-2 py-2 text-center h-full py-4">
                                        {application.email}
                                    </td>
                                    <td className="rounded-lg text-center py-4">
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
                            <div className='w-full'>
                            {(pageLoading && totalPage > pageNumber) && <ApplicationLoader />}
                            </div>

                </div>
            </div>

            {applicationUpdateModal && (
                <ApplicationUpdateModal
                    service_id = {serviceId.id}
                    closeApplicationUpdateModal={closeApplicationUpdateModal}
                    applicationId={applicationId}
                />
            )}

            {applicationModal && (
                <ApplicationCreateModal
                    service_id      = {serviceId.id}
                    serviceName     = {serviceName}
                    serviceMainId   = {serviceMainId}
                    updateApplicationList={updateApplicationList}
                    closeApplicationCreateModal={closeApplicationCreateModal}
                />
            )}
        </>
    )
}

export default ApplicationList
