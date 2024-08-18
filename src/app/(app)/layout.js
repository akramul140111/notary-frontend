'use client'

import Loading from '@/app/(app)/Loading'
import { useAuth } from '@/hooks/auth'
import Sidebar from './Sidebar'
import TopMenu from './TopMenu'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="flex flex-col font-poppins">
            <div className="flex w-full">
                {/*    Start of Sidebar  */}
                <Sidebar />
                {/*    End of Sidebar  */}
                <div className="flex-1">
                    <div className="min-h-screen">
                        {/*    Start of Header Section  */}
                        <TopMenu />
                        {/*End of Header Section*/}

                        {/*Start of Main Content*/}
                        <div className="w-full">{children}</div>
                        {/*End of Main Content*/}
                    </div>
                </div>
            </div>
        </div>

        // <div className="min-h-screen bg-gray-100">
        //     {/* <Navigation user={user} /> */}
        //     <TopMenu user={user} />
        //     <Sidebar />
        //     <main>{children}</main>
        // </div>
    )
}

export default AppLayout
