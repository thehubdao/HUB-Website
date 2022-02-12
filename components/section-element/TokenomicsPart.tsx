interface TokenomicsPartProps {
    title: string;
    size: number;
    color: string;
    distance: number
}

const TokenomicsPart = ({title, size, color, distance}: TokenomicsPartProps) => {
    const distanceClass = `top-[${distance}%]`
    const sizeClass = `h-[${size}%]`
    const textColorClass = `text-${color}`
    const borderColorClass = `border-${color}`

    return (
        <div className={`flex space-x-0 absolute ${distanceClass} ${sizeClass} w-96`}>
            <div className={`border-8 ${borderColorClass}`} />
            <div className={`flex space-x-3 pt-1 bg-blue-00/20 min-w-max items-center w-full pl-10`}>
                <p className="text-2xl font-medium min-w-max">{title}</p>
                <p className={`${textColorClass} text-lg font-medium`}>{size}%</p>
            </div>
        </div>
    )
}

export default TokenomicsPart