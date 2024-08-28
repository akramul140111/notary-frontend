import A2iLogoSet from '@/app/assets/appImage/a2i-logo-set.png'
import BdMonoGram from '@/app/assets/appImage/bd-monogram.png'
import MyGovLogo from '@/app/assets/appImage/my-gov.png'
import OrangeBdLogo from '@/app/assets/appImage/orangebd-logo.png'
import VectorLogo from '@/app/assets/appImage/vector.png'
import Image from 'next/image'

const GuestLayout = ({ children }) => {
    return (
        <div className="bg-[#f8fafc] min-h-screen  flex justify-between flex-col">
            <header className="min-h-[120px]">
                <div className="flex justify-between mx-4 ">
                    <Image src={MyGovLogo} className="mt-2" alt="" loading='lazy' quality={70} />
                </div>
            </header>
            <div className=" flex justify-center items-center">
                <div className="">{children}</div>
            </div>
            <div className="flex-wrap">
                <div className="">
                    <Image
                        src={VectorLogo}
                        className="bg-cover bg-center w-full h-32 bg-no-repeat"
                        alt=""
                        loading='lazy'
                        quality={70}
                    />
                </div>

                <footer className="border-t border-[#c4c4c7] shadow-[rgba(15,_34,_58,_0.32)_2px_0px_4px] z-[199]">
                    <div className="flex flex-row flex-wrap justify-center sm:justify-between gap-3 px-6 py-2">
                        <div className="flex items-center">
                            <span className="text-[13px] mx-6">
                                পরিকল্পনা বাস্তবায়নে
                            </span>
                            <Image src={A2iLogoSet} className="h-6 " alt="" loading='lazy' quality={70} />
                        </div>
                        <div className="flex items-center">
                            <Image
                                src={BdMonoGram}
                                className="h-8 rounded-2xl"
                                alt=""
                                loading='lazy'
                                quality={70}
                            />
                            <div>
                                <p className="text-[13px] mx-4">
                                    কপিরাইট © ২০২৪ সর্বস্বত্ব সংরক্ষিত
                                </p>
                                <p className="text-[13px] mx-4">
                                    গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <span className="text-[13px]">
                                কারিগরি সহায়তায়
                            </span>
                            <Image
                                src={OrangeBdLogo}
                                alt=""
                                className="h-5 mx-6"
                                loading='lazy'
                                quality={70}
                            />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default GuestLayout
