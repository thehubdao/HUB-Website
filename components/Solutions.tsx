const Solutions = () => {

    return (

        <div className="relative flex flex-col w-full h-full space-y-12 justify-center items-center p-8">
            <h2 className={`text-transparent bg-clip-text bg-gradient-to-b z-10 from-blue-300 via-blue-400 to-blue-500`}>MGH provides NFT Infrastructure</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl opacity-80" />
                    <h4 className="border-blue-500">Accessibility</h4>
                    <p className="short-text">By implementing state-of-the-art NFT pools while allowing NFT stakers to keep ownership over their assets</p>
                </div>
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl opacity-80" />
                    <h4 className="border-blue-500">Fractionalization</h4>
                    <p className="short-text">NFT Pool Tokens allow community members to diversify their holdings and gain exposure to multiple virtual worlds</p>
                </div>
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl opacity-80" />
                    <h4 className="border-blue-500">Data Driven</h4>
                    <p className="short-text">Fostering the development of the Data economy through NFT Datasets on the Ocean marketplace</p>
                </div>
                <div className="relative flex flex-col items-center w-full p-2 max-w-xs">
                    <div className="absolute inset-1/4 w-2/4 h-2/4 bg-gradient-to-br from-blue-300 to-blue-900 rounded-full filter blur-2xl opacity-80" />
                    <h4 className="border-blue-500">AI Price Oracle</h4>
                    <p className="short-text">Providing transparent and fair NFT valuation through AI and Chaninlink’s oracle infrastructure</p>
                </div>
            </div>

        </div>
    )
}

export default Solutions