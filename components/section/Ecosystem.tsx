import Issue from "../section-element/Problem"


const Ecosystem = () => {
    return (
        <div className="min-h-screen w-full py-10 px-10 flex flex-col">
            <div className="min-h-screen w-full flex items-center justify-between space-x-20">
                <img src="/images/ecosystem.png" className="max-w-1/2" />
                <h2 className="text-left max-w-xl leading-tight font-normal">Building a <span className="text-blue-500 font-medium text-8l">holistic ecosystem</span> for profound Metaverse experiences</h2>
            </div>

            <div className="min-h-screen w-full relative flex flex-col space-y-20 items-center justify-start -mt-20">
                <h1 className="text-right font-normal text-[15rem] self-end pr-72 text-gray-500">&</h1>

                <div className="w-full sticky top-10 min-h-screen z-50">
                    <h2 className="w-full text-center leading-tight font-normal bg-black -mt-10 py-10 pb-44">Solving <span className="text-pink-600 font-medium text-8l">key issues</span> within the Metaverse</h2>
                </div>

                <div className="flex flex-col min-h-screen">
                    <Issue problem="Centralized LAND Ownership" solution_title="DAO Governed LANDs" solution_text="MGH DAO collaboratively acquires, populates and monetizes LANDs and respective in-game assets" />
                    <Issue problem="Intransparent Asset Valuation" solution_title="Valuation Algorithm" solution_text="Our Valuation Algorithm allows fair pricing for LANDs and will be gradually adopted to more Metaverse Assets" />
                    <Issue problem="Lack of Data Utilization" solution_title="Dataverse Tools" solution_text="MGH DAO is developing intuitive data tools which can be leveraged by users and ecosystems alike" />
                    <Issue problem="Limited access to the Metaverse and MetaFI" solution_title="Intuitive Metaverse dApps" solution_text="Use MGH DAO’s tools to navigate through the Metaverse and leverage MetaFi" />
                </div>
            </div>
        </div>
    )
}

export default Ecosystem
