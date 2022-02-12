import { Zoom, Fade } from "react-awesome-reveal";
import Problems from "../v1.0/Problems"
import Solutions from "../v1.0/Solutions";

const Infrastructure = () => {

    return (
        <div className="text-center w-full" style={{ height: 2000 }}>
            <div className={`sticky top-0 h-screen w-full`}>
                <div className="flex flex-col lg:flex-row justify-around items-start h-screen">
                    <div className="z-10 h-full w-full absolute top-0 left-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-2xl " />
                    <Problems />
                    <Solutions />
                </div>›

                {/* <Zoom fraction={1}> */}
                {/* <div className={` flex flex-row justify-around items-center pt-20`}>
                    <span className={` text-lg sm:text-xl md:text-2xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-500`}>Problems</span>
                    <span className={` text-lg sm:text-xl md:text-2xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-red-700`}>Solutions</span>
                </div> */}
                {/* </Zoom> */}


            </div>
        </div>
    )
}

export default Infrastructure