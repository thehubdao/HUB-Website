import Issue from "../section-element/Problem"


const Issues = () => {
    return (
        <div className="min-h-screen w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-start">

                <div className="w-screen sticky top-0 min-h-screen z-50">
                    <h2 className="w-full text-center leading-tight font-normal bg-black px-5 pt-5 lg:pt-10 pb-20 xl:pb-36">Solving <span className="text-pink-600 font-medium">key issues</span> within the Metaverse</h2>
                </div>

                <div className="flex flex-col min-h-screen">
                    <Issue problem="Centralized LAND Ownership" solution_title="DAO Governed LANDs" solution_text="MGH DAO collaboratively acquires, populates and monetizes LANDs and respective in-game assets" />
                    <Issue problem="Intransparent Asset Valuation" solution_title="Valuation Algorithm" solution_text="Our Valuation Algorithm allows fair pricing for LANDs and will be gradually adopted to more Metaverse Assets" />
                    <Issue problem="Lack of Data Utilization" solution_title="Dataverse Tools" solution_text="MGH DAO is developing intuitive data tools which can be leveraged by users and ecosystems alike" />
                    <Issue problem="Limited access to the Metaverse and MetaFI" solution_title="Intuitive Metaverse dApps" solution_text="Use MGH DAO’s tools to navigate through the Metaverse and leverage MetaFi" />
                </div>
  
        </div>
    )
}

export default Issues
