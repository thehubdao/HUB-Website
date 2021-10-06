const Solutions = () => {

    return (

        <div className="relative flex flex-col w-full h-full space-y-12 justify-center items-center p-8">
            <span className={`py-1 text-4xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-gray-200  to-blue-500`}>Providing NFT Infrastructure</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                    <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">Accessibility</span>
                    <span className="text-gray-400 z-10">By implementing state-of-the-art NFT pools while allowing NFT stakers to keep ownership over their assets</span>
                </div>
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                    <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">Fractionalization</span>
                    <span className="text-gray-400 z-10">NFT Pool Tokens allow community members to diversify their holdings and gain exposure to multiple virtual worlds</span>
                </div>
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                    <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">Data Driven</span>
                    <span className="text-gray-400 z-10">Fostering the development of the Data economy through NFT Datasets on the Ocean marketplace</span>
                </div>
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl" />
                    <span className="text-white text-xl mb-3 z-10 border-b border-blue-500 max-w-max">AI Price Oracle</span>
                    <span className="text-gray-400 z-10">Providing transparent and fair NFT valuation through AI and Chaninlink’s oracle infrastructure</span>
                </div>
            </div>

        </div>
    )
}

export default Solutions