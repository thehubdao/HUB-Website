const GovernanceIllustration = () => {
    return (
        <div className="relative flex items-center justify-center h-80 w-96 transform scale-75 sm:scale-100 lg:-translate-x-9 lg:scale-125">
            <div className="absolute -bottom-8 h-60 w-60 border border-blue-400 rounded-full"/>
            <div className="absolute top-0 -left-2 h-60 w-60 border border-blue-400 rounded-full"/>
            <div className="absolute top-0 -right-2 h-60 w-60 border border-blue-400 rounded-full"/>
            <span className="text-gray-200 absolute top-32 font-semibold text-center">MGH<br/> DAO</span>
            <span className="text-gray-200 absolute bottom-10">NFTs</span>
            <span className="text-gray-200 absolute right-6 top-24">Metaverse</span>
            <span className="text-gray-200 absolute left-6 top-24">Community</span>
            <span className="text-gray-400 absolute top-20 text-xs">MetaFi</span>
            <span className="text-gray-400 absolute left-22 bottom-28 text-xs">Development</span>
            <span className="text-gray-400 absolute right-22 bottom-28 text-xs">Gouvernance</span>
        </div>
    )
}

export default GovernanceIllustration


