import Button from "../elements/Button"
import Image from "next/image"
import AssetImage from "../section-element/AssetImage"

const Assets = () => {
    return (
        <div className="min-h-screen w-full py-10 -10">

            <div className="h-screen w-screen sticky top-0">

                <AssetImage link="/images/Lands/1_-89.jpg" size="h-1/4 w-1/4" position="top-0 left-1/2" />
                <AssetImage link="/images/Lands/medium_world.png" size="h-1/4 w-1/4" position="top-0 left-1/4" />
                <AssetImage link="/images/Assets/xone.png" size="h-1/4 w-1/4" position="top-0 left-0" />
                <AssetImage link="/images/Lands/66_-48.png" size="h-1/4 w-1/4" position="top-1/4 left-0" />
                <AssetImage link="/images/Assets/snoop_dogg_car.png" size="h-1/4 w-1/4" position="top-1/4 left-1/4" />
                <AssetImage link="/images/Assets/partybear_1001.png" size="h-1/4 w-1/4" position="top-1/4 left-1/2" />
                <AssetImage link="/images/Assets/flufworld_177.png" size="h-1/4 w-1/4" position="top-1/2 left-0" />
                <AssetImage link="/images/Assets/burrows_2118.png" size="h-1/4 w-1/4" position="top-1/2 left-1/4" />
                <AssetImage link="/images/Assets/brains_6012.jpg" size="h-1/4 w-1/4" position="top-1/2 left-1/2" />
                <AssetImage link="/images/Assets/all-stars_24048.jpg" size="h-1/4 w-1/4" position="bottom-0 left-0" />


                <AssetImage link="/images/Development/benfica-stadium.png" size="h-1/4 w-1/4" position="bottom-0 left-1/4" />
                <AssetImage link="/images/Development/BenficaHome-BroadStand.png" size="h-1/4 w-1/4" position="top-0 right-1/4" />
                <AssetImage link="/images/Development/dcl-edit.png" size="h-1/4 w-1/4" position="top-1/4 right-1/4" />
                <AssetImage link="/images/Development/decsketch.jpg" size="h-1/4 w-1/4" position="top-1/4 right-0" />
                <AssetImage link="/images/Development/SnoopDog03.jpg" size="h-1/4 w-1/4" position="top-0 right-0" />
                <AssetImage link="/images/Development/SnoopDog04.jpg" size="h-1/4 w-1/4" position="top-1/2 right-0" />
                <AssetImage link="/images/Development/SnoopDog08.jpg" size="h-1/4 w-1/4" position="bottom-0 right-0" />
                <AssetImage link="/images/Development/SnoopDog11.jpg" size="h-1/4 w-1/4" position="bottom-0 right-1/4" />
                <AssetImage link="/images/Development/vip-lounge-interior.png" size="h-1/4 w-1/4" position="bottom-1/4 right-0" />

            </div>

            <div className="min-h-screen sticky top-0 flex items-start justify-center">
                <div className="flex flex-cl items-center justify-between space-x-20 backdrop-blur-2xl bg-black/80 w-full p-10">
                    <h2 className="text- max-w-5xl leading-tight font-normal">A decentralized state within the Open Metaverse</h2>
                    <div className="flex flex-col items-center space-y-10 w-full">
                        <p className="text-xl max-w-xl text-center">Metaverse design in various metaverses such as The Sandbox, Somnium Space, Decentraland, and Fluf World. Utilizing various Metaverse Assets of the <a href="/treasury" target="_blank" className="text-pink-600">MGH DAO Treasury Portfolio</a>. Development of own Metaverse editor for e.g. Decentraland (<a href="https://dcl-edit.com" target="_blank" className="text-pink-600">dcl-edit</a>).</p>
                        <Button text="View Treasury" link="/treasury" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Assets