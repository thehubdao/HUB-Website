import Button from "../general/Button"

const Assets = () => {
    return (
        <div className="min-h-screen w-full py-10 -10">
            <div className="h-screen sticky top-0 flex flex-col items-center justify-center w-screen">
                <img src="/images/Assets/flufworld_177.png" className="object-cover h-full w-full" />
            </div>
            <div className="min-h-screen sticky top-0 flex items-start justify-center">
                <div className="flex flex-col items-center justify-center space-y-10 backdrop-blur-2xl bg-black/80 w-full p-10">
                    <h2 className="text-center w-full font-normal">Metaverse Assets & Development</h2>
                    <div className="flex flex-col items-center space-y-10 w-full">
                        <p className="text-xl max-w-xl text-center">Metaverse design in various metaverses such as The Sandbox, Somnium Space, Decentraland, and Fluf World. Utilizing various Metaverse Assets of the <a href="/treasury" target="_blank" className="text-pink-600">MGH DAO Treasury Portfolio</a>. Development of own Metaverse editor for e.g. Decentraland <a href="https://dcl-edit.com" target="_blank" className="text-pink-600">(dcl-edit)</a>.</p>
                        <Button text="View Treasury" link="/treasury" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Assets