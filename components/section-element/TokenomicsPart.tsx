interface TokenomicsPartProps {
    title: string;
    size: number;
    classes: string;
    borderColor: string
}


const TokenomicsPart = ({ title, size, classes, borderColor }: TokenomicsPartProps) => {


    return (
        <div className={`flex space-x-0 absolute ${classes} w-96`}>
            <div className={`border-8 ${borderColor}`} />
            <div className={`flex space-x-3 pt-1 min-w-max items-center w-full pl-10`}>
                <p className="text-2xl font-medium text-gray-200 min-w-max">{title}</p>
                <p className={`text-lg font-medium`}>{size}%</p>
            </div>
        </div>
    )
}

export default TokenomicsPart
