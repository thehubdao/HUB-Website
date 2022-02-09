interface TokenomicsPartProps {
    title: string;
    size: number;
    color: string;
    distance: number
}

const TokenomicsPart = ({title, size, color, distance}: TokenomicsPartProps) => {

    return (
        <div className={`flex space-x-0 absolute top-[${distance}%] h-[${size}%] w-96`}>
            <div className={`border-8 border-${color}`} />
            <div className={`flex space-x-3 pt-1 bg-blue-00/20 min-w-max items-center w-full pl-10`}>
                <p className="text-2xl font-medium min-w-max">{title}</p>
                <p className={`text-${color} text-lg font-medium`}>{size}%</p>
            </div>
        </div>
    )
}

export default TokenomicsPart