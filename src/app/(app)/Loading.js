import '@/app/assets/css/loading.css'
const Loading = () => {
    return (
            <div className="flex justify-center items-center m-0 bg-gray-600 w-full h-[100vh]">
                <div className="w-[300px] h-[120px] rounded-[10px] flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl m-0 text-white font-bold">
                        Loading....
                    </h1>
                    <div className="loading-wrapper">
                        <div className="loader bg-green-600"></div>
                    </div>
                </div>
            </div>
    )
}

export default Loading
