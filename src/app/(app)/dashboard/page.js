import DashboardCard from "@/components/Dashboard/DashboardCard"
import ApplicationCollect from "@/app/assets/applications/application.png";
import ApplicationDak from "@/app/assets/applications/dak.png";
import ApplicationNothi from "@/app/assets/applications/nothi.png";
import ApplicationNisponno from "@/app/assets/applications/nisponno.png";
import ApplicationTotal from "@/app/assets/applications/total-applications.png";

export const metadata = {
    title: 'Law Ministry - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <div className="mx-6  rounded-md">
                <div className="py-6">
                    <div className="max-w-full mx-auto ">
                        <div className="overflow-hidden ">
                            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-4">
                                <DashboardCard countLink="#" image={ApplicationCollect} title="অপেক্ষমান" count="1"/>
                                <DashboardCard countLink="#" image={ApplicationDak} title="প্রেরিত" count="4"/>
                                <DashboardCard countLink="#" image={ApplicationNothi} title="অসম্পূর্ণ" count="3"/>
                                <DashboardCard countLink="#" image={ApplicationNisponno} title="নিষ্পত্তিকৃত" count="5"/>
                                <DashboardCard countLink="#" image={ApplicationTotal} title="মোট আবেদন" count="4"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default Dashboard
