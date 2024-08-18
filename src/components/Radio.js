const Radio = ({ title, name, value }) => {
    return (
        <div className="inline-flex items-center">
            <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="custom-style1">
                <input
                    name={name}
                    type="radio"
                    value={value}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                    id="custom-style1"
                />
                <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full scale-105">
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </label>
            <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="custom-style1">
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-400">
                    {title}
                </p>
            </label>
        </div>
    )
}

export default Radio
