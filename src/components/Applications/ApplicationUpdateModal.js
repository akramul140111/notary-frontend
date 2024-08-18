import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5'
import Radio from '../Radio'

const ApplicationUpdateModal = ({
    closeApplicationUpdateModal,
    applicationId,
}) => {
    const [applicationData, setApplicationData] = useState({})
    const [applicationFile, setApplicationFile] = useState()

    useEffect(() => {
        axios.get('/api/application-edit/' + applicationId).then(response => {
            setApplicationData(response?.data?.data)
        })
    }, [])

    const handleFileChange = e => {
        setApplicationFile(e.target.files[0])
    }

    const applicationDataChange = e => {
        const name = e.target.name
        const value = e.target.value
        setApplicationData(values => ({ ...values, [name]: value }))
    }

    const submit = e => {
        e.preventDefault()
        let allApplicationData = {
            ...applicationData,
            scan_copy: applicationFile,
        }
        axios
            .post('/api/application-store', allApplicationData)
            .then(response => {
                console.log(response)
            })
    }
    return (
        <>
            <div
                id="shakhaCreateModal"
                className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[999] transition-opacity">
                <div
                    id="content"
                    className="bg-white shadow-md rounded-[0.25rem] w-2/6 min-h-[580px] transition ease-in-out scale-75">
                    <div className="flex justify-between items-center px-4 pb-2 pt-4">
                        <h2 className="text-xl font-bold">
                            New Application Create
                        </h2>
                        <button
                            onClick={closeApplicationUpdateModal}
                            className="p-2">
                            <IoCloseCircle className="text-2xl text-red-600" />
                        </button>
                    </div>
                    <hr />

                    <div className="" id="">
                        <form
                            id="formMethod"
                            action=""
                            method="POST"
                            onSubmit={submit}>
                            <div className="flex flex-col items-center px-6 min-h-[460px]">
                                <div className="items-center w-full mt-8">
                                    <label
                                        htmlFor=""
                                        className="block mb-2 text-sm font-bold text-gray-900 min-w-[150px]">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={applicationData?.name || ''}
                                        onChange={applicationDataChange}
                                        className="bg-whtie border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="Enter your Name"
                                    />
                                </div>

                                <div className="items-center w-full mt-4">
                                    <label
                                        htmlFor=""
                                        className="block mb-2 text-sm font-bold text-gray-900 min-w-[150px]">
                                        Mobile
                                    </label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={applicationData?.mobile || ''}
                                        onChange={applicationDataChange}
                                        className="bg-whtie border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="Enter your Mobile"
                                    />
                                </div>

                                <div className="items-center w-full mt-4">
                                    <label
                                        htmlFor=""
                                        className="block text-sm font-bold text-gray-900 min-w-[150px]">
                                        Gender
                                    </label>
                                    <Radio
                                        title="Male"
                                        name="gender"
                                        onChange={applicationDataChange}
                                        value="1"
                                    />
                                    <Radio
                                        title="Female"
                                        name="gender"
                                        onChange={applicationDataChange}
                                        value="2"
                                    />
                                </div>

                                <div className="items-center w-full mt-4">
                                    <label
                                        htmlFor=""
                                        className="block mb-2 text-sm font-bold text-gray-900 min-w-[150px]">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={applicationData?.email || ''}
                                        onChange={applicationDataChange}
                                        className="bg-whtie border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="Enter your Email"
                                    />
                                </div>

                                <div className="items-center w-full mt-4">
                                    <label
                                        htmlFor=""
                                        className="block mb-2 text-sm font-bold text-gray-900 min-w-[150px]">
                                        Scan Copy
                                    </label>
                                    <input
                                        type="file"
                                        name="scan_copy"
                                        onChange={handleFileChange}
                                        className="bg-whtie border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-end px-4 py-3">
                                <div className="flex gap-1">
                                    <button
                                        id="shakhaModalClose"
                                        type="button"
                                        onClick={closeApplicationUpdateModal}
                                        className="inline-flex items-center px-2 pt-3 pb-2 leading-3 border border-transparent rounded-[0.25rem] bg-red-700 text-sm text-white uppercase tracking-widest active:bg-g ray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ms-3 float-righttbg-red-800 hover:bg-red-700 focus:bg-red-700 active:bg-red-900">
                                        Close
                                    </button>
                                    <button className="inline-flex items-center px-2 pt-3 pb-2 leading-3 bg-[#405189] border border-transparent rounded-[0.25rem]  text-sm text-white uppercase tracking-widest hover:bg-[#364574] focus:bg-[#364574] active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-3 float-rightt">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplicationUpdateModal
