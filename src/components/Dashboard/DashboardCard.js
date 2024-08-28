import Image from "next/image";
import Link from "next/link";

const DashboardCard = ({countLink, image, title, count}) => {
    return (
        <>
            <Link href={countLink ? countLink : '#'}>
                <div
                    id="acceptedHandler"
                    className="col-span-1 bg-white rounded-md shadow-md border border-[#e9ebec] py-6 px-6"
                >
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-500 uppercase font-semibold text-[0.8125rem]">
                            {title}
                        </span>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="text-xl text-green-600"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10 5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001zM12 19.994c-4.41 0-7.999-3.589-8-8 0-4.411 3.589-8 8.001-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8z"></path>
                            <path d="m12.001 8.001-4.005 4.005h3.005V16h2v-3.994h3.004z"></path>
                        </svg>
                    </div>
                    <div className="flex gap-6 justify-between mt-4 text">
                        <Image 
                            src={image}
                            alt=""
                            height="30"
                            width="30"
                            loading="lazy"
                            quality={70}
                        />
                        <h3
                            className="text-3xl font-semibold text-gray-600"
                            id="acceptedApplication"
                        >
                            {count}
                        </h3>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default DashboardCard;