'use client'

import { useAuth } from '@/hooks/auth'
import Sidebar from './Sidebar'
import TopMenu from './TopMenu'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <div className="flex flex-col font-poppins">
            <div className="flex w-full">
                <Sidebar />
                <div className="flex-1">
                    <div className="min-h-screen">
                        <TopMenu user={user} />
                        <div className="w-full">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppLayout
