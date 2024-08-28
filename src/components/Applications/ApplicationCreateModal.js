import axios from '@/lib/axios'
import { useState } from 'react'
import '@/app/assets/css/scrollbar.css'
import {
    IoAddCircleOutline,
    IoCloseCircle,
    IoRemoveCircle,
} from 'react-icons/io5'
import Radio from '../Radio'
import { useAuth } from '@/hooks/auth'
import SignatureModal from './SignatureModal'

const ApplicationCreateModal = ({
    service_id,
    serviceName,
    serviceMainId,
    updateApplicationList,
    closeApplicationCreateModal,
}) => {
    const auth = useAuth()
    const [applicationData, setApplicationData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [openSignatureModal, setOpenSignatureModal] = useState(false)
    const [applicationFile, setApplicationFile] = useState([
        { title: '', appImg: null },
    ])

    const handleTitleChange = (e, index) => {
        const { value } = e.target
        const newList = [...applicationFile]
        newList[index].title = value
        setApplicationFile(newList)
    }

    const handleFileChange = (e, index) => {
        const { name, files } = e.target
        const newList = [...applicationFile]
        newList[index][name] = files ? files[0] : e.target.value
        setApplicationFile(newList)
    }

    const addApplications = () => {
        setApplicationFile([...applicationFile, { title: '', appImg: null }])
    }

    const redirectRemove = index => {
        const list = [...applicationFile]
        list.splice(index, 1)
        setApplicationFile(list)
    }

    const applicationDataChange = e => {
        const name = e.target.name
        const value = e.target.value
        setApplicationData(values => ({ ...values, [name]: value }))
    }

    const signatureModalOpen = () => {
        setOpenSignatureModal(true)
    }

    const signatureModalClose = () => {
        setOpenSignatureModal(false)
    }

    const submit = (e) => {
        e.preventDefault()
        if (auth.user.signature == null) {
            signatureModalOpen()
        } else {
            setIsLoading(true)
            const formData = new FormData()
            formData.append('name', applicationData.name || '')
            formData.append('mobile', applicationData.mobile || '')
            formData.append('gender', applicationData.gender || '')
            formData.append('email', applicationData.email || '')
            formData.append('service_id', service_id || '')
            formData.append('service_name', serviceName || '')
            formData.append('service_main_id', serviceMainId || '')
            formData.append('userId', auth?.user?.id || '')

            applicationFile.forEach((file, index) => {
                if (file.appImg) {
                    formData.append(`scan_copy[${index}][appImg]`, file.appImg)
                    formData.append(`scan_copy[${index}][title]`, file.title)
                }
            })

            axios
                .post('/api/application-store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(response => {
                    updateApplicationList(response.data.data.data)
                    setIsLoading(false)
                    closeApplicationCreateModal()
                })
                .catch(() => {
                    setIsLoading(false)
                })
        }
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
                            onClick={closeApplicationCreateModal}
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
                            onSubmit={submit}
                            encType="multipart/form-data">
                            <div className="flex flex-col items-center px-6 min-h-[460px] max-h-[480px] overflow-y-auto scrollbar">
                                <div className="items-center w-full mt-8">
                                    <label
                                        htmlFor=""
                                        className="block mb-2 text-sm font-bold text-gray-900 min-w-[150px]">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={applicationData.name || ''}
                                        onChange={applicationDataChange}
                                        className="bg-whtie border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="Enter your Name"
                                        required
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
                                        value={applicationData.mobile || ''}
                                        onChange={applicationDataChange}
                                        className="bg-whtie border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="Enter your Mobile"
                                        required
                                    />
                                </div>

                                <div className="items-center w-full mt-4">
                                    <label
                                        htmlFor=""
                                        className="block text-sm font-bold text-gray-900 min-w-[150px]">
                                        Gender
                                    </label>
                                    <Radio
                                        radioId="maleInput"
                                        title="Male"
                                        name="gender"
                                        onChange={applicationDataChange}
                                        value="1"
                                        checked={applicationData.gender == '1'}
                                    />
                                    <Radio
                                        radioId="femaleInput"
                                        title="Female"
                                        name="gender"
                                        onChange={applicationDataChange}
                                        value="2"
                                        checked={applicationData.gender == '2'}
                                    />
                                </div>

                                <div className="items-center w-full mt-4">
                                    <label
                                        htmlFor=""
                                        className="block mb-2 text-sm font-bold text-gray-900 min-w-[150px]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={applicationData.email || ''}
                                        onChange={applicationDataChange}
                                        className="bg-whtie border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="Enter your Email"
                                    />
                                </div>

                                <div
                                    className="w-full mt-4 mb-6 md:mb-0">
                                    <label
                                        className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        htmlFor="grid-first-name">
                                        Scan Copy
                                    </label>
                                    {applicationFile.length > 0 && (
                                        <div className="flex gap-2 w-full">
                                            <div className="flex flex-col gap-2">
                                            {applicationFile.map((app, index) => (
                                                <div key={index} className="flex flex-col gap-2 w-full">
                                                    {index === 0 && (
                                                        <input
                                                            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            type="text"
                                                            name="title"
                                                            value={app.title}
                                                            onChange={e =>
                                                                handleTitleChange(e, index)
                                                            }
                                                            placeholder="Enter Scan Copy title"
                                                            required
                                                        />
                                                    )}
                                                    <div className='flex gap-2'>
                                                    <input
                                                        type="file"
                                                        name="appImg"
                                                        accept="image/*"
                                                        onChange={e =>
                                                            handleFileChange(e, index)
                                                        }
                                                        className="bg-white border border-gray-300 py-2 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                                        required
                                                    />
                                                    {index > 0 && (
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={() => redirectRemove(index)}
                                                                className="flex-shrink-0 bg-[#f06548] hover:bg-[#cc563d] border-[#f06548] hover:border-[#cc563d] text-sm border-4 text-white py-1 px-2 rounded"
                                                                type="button">
                                                                <IoRemoveCircle className="text-2xl" />
                                                            </button>
                                                        </div>
                                                    )}
                                                    {index === applicationFile.length - 1 && (
                                                        <div className="flex items-start">
                                                            <button
                                                                onClick={addApplications}
                                                                className="flex-shrink-0 bg-[#212529] hover:bg-[#424649] border-[#212529] hover:border-[#373b3e] text-sm border-4 text-white py-1 px-2 rounded"
                                                                type="button">
                                                                <IoAddCircleOutline className="text-2xl" />
                                                            </button>
                                                        </div>
                                                    )}
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr />

                            <div className="flex justify-end px-4 py-3">
                                <div className="flex gap-1">
                                    <button
                                        id="shakhaModalClose"
                                        type="button"
                                        onClick={closeApplicationCreateModal}
                                        className="inline-flex items-center px-2 pt-3 pb-2 leading-3 border border-transparent rounded-[0.25rem] bg-red-700 text-sm text-white uppercase tracking-widest active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ms-3 float-rightt bg-red-800 hover:bg-red-700 focus:bg-red-700 active:bg-red-900">
                                        Close
                                    </button>
                                    {isLoading ? (
                                        <button
                                            className="inline-flex items-center px-2 pt-3 pb-2 leading-3 bg-[#929292] border border-transparent rounded-[0.25rem] text-sm text-white uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ms-3 float-rightt"
                                            disabled>
                                            Processing...
                                        </button>
                                    ) : (
                                        <button className="inline-flex items-center px-2 pt-3 pb-2 leading-3 bg-[#405189] border border-transparent rounded-[0.25rem] text-sm text-white uppercase tracking-widest hover:bg-[#364574] focus:bg-[#364574] active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-3 float-rightt">
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {openSignatureModal && (
                <SignatureModal signatureModalClose={signatureModalClose} />
            )}
        </>
    )
}

export default ApplicationCreateModal
