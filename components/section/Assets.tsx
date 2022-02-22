import Button from "../elements/Button"


const Assets = () => {
    return (
        <div className="min-h-screen w-full py-10">

            <div className="h-screen w-full sticky top-0">
                <img src="/images/collage.jpg" className="object-cover h-full w-full" />
            </div>

            <div className="min-h-screen sticky top-0 flex items-start justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 lg:space-x-20 space-y-10 lg:space-y-0 backdrop-blur-2xl bg-black/80 w-full p-5 sm:p-10">
                    <h2 className="max-w-5xl leading-tight font-normal text-center lg:text-left">A decentralized state within the Open Metaverse</h2>
                    <div className="flex flex-col items-center space-y-10 w-full">
                        <p className="text-lg lg:text-xl max-w-xl text-center">Metaverse design in various metaverses such as The Sandbox, Somnium Space, Decentraland, and Fluf World. Utilizing various Metaverse Assets of the <a href="/treasury" target="_blank" className="text-pink-600">MGH DAO Treasury Portfolio</a>. Development of own Metaverse editor for e.g. Decentraland (<a href="https://dcl-edit.com" target="_blank" className="text-pink-600">dcl-edit</a>).</p>
                        <Button text="View Treasury" link="/treasury" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Assets
