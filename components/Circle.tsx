const Circle = () => {

    return (

        <><div className="relative place-self-end flex flex-col z-10 p-2 h-28 w-28 rounded-full bg-gray-400 bg-opacity-10 items-center justify-center">
            <div className="z-0 h-full w-full absolute top-0 left-0 border-4 border-opacity-30 rounded-full" />
            <span className="text-white text-2xl mb-1 z-10">44%</span>
            <span className="text-gray-400 text-xs z-10">Network Rewards</span>

            <svg className="absolute left-0 top-0 h-full w-full progress-ring z-10">
                <circle
                    className="transform -rotate-90 origin-center"
                    style={{ strokeDasharray: "326.7256 326.7256", strokeDashoffset: 182.966336 }}
                    stroke="url(#grad1)"
                    strokeWidth="4"
                    fill="transparent"
                    r="54"
                    cx="56"
                    cy="56" />
            </svg>
        </div>
        <div className="relative flex flex-col z-10 p-2 h-28 w-28 rounded-full bg-gray-400 bg-opacity-10 items-center justify-center">
                <div className="z-0 h-full w-full absolute top-0 left-0 border-4 border-opacity-30 rounded-full" />
                <span className="text-white text-2xl mb-1 z-10">32%</span>
                <span className="text-gray-400 text-xs z-10">Sales</span>

                <svg className="absolute left-0 top-0 h-full w-full progress-ring z-10">
                    <circle
                        className="transform rotate-44 origin-center"
                        style={{ strokeDasharray: "326.7256 326.7256", strokeDashoffset: 222.173408 }}
                        stroke="url(#grad1)"
                        strokeWidth="4"
                        fill="transparent"
                        r="54"
                        cx="56"
                        cy="56" />
                </svg>
            </div>
            <div className="relative place-self-end flex flex-col z-10 p-2 h-28 w-28 rounded-full bg-gray-400 bg-opacity-10 items-center justify-center">
                <div className="z-0 h-full w-full absolute top-0 left-0 border-4 border-opacity-30 rounded-full" />
                <span className="text-white text-2xl mb-1 z-10">12%</span>
                <span className="text-gray-400 text-xs z-10">DAO Treasury</span>

                <svg className="absolute left-0 top-0 h-full w-full progress-ring z-10">
                    <defs>
                        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#EF4444" />
                            <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                    </defs>
                    <circle
                        className="transform rotate-12 origin-center"
                        style={{ strokeDasharray: "326.7256 326.7256", strokeDashoffset: 287.518528 }}
                        stroke="url(#grad1)"
                        strokeWidth="4"
                        fill="transparent"
                        r="54"
                        cx="56"
                        cy="56" />
                </svg>
            </div>
            <div className="relative flex flex-col z-10 p-2 h-28 w-28 rounded-full bg-gray-400 bg-opacity-10 items-center justify-center">
                <div className="z-0 h-full w-full absolute top-0 left-0 border-4 border-opacity-30 rounded-full" />
                <span className="text-white text-2xl mb-1 z-10">12%</span>
                <span className="text-gray-400 text-xs z-10">MGH Initiators</span>

                <svg className="absolute left-0 top-0 h-full w-full progress-ring z-10">
                    <circle
                        className="transform rotate-24 origin-center"
                        style={{ strokeDasharray: "326.7256 326.7256", strokeDashoffset: 287.518528 }}
                        stroke="url(#grad1)"
                        strokeWidth="4"
                        fill="transparent"
                        r="54"
                        cx="56"
                        cy="56" />
                </svg>
            </div></>


    )
}

export default Circle