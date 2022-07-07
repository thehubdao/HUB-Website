import { AiOutlineTrophy } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const Achievements = () => {
  return (
    <>
      <div className="w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">
        <h2 className={`text-pink- font-normal`}>ACHIEVEMENTS</h2>

        <div className="relative my-16 w-full grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center max-w-max">
          <a
            href="https://port.oceanprotocol.com/t/mgh-dao-bringing-nft-valuation-data-for-axie-infinity-to-the-ocean-marketplace/1189"
            target="_blank"
            className="flex flex-col items-center justify-evenly text-center space-y-3 h-40 w-56 p-4"
          >
            <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-48 py-24 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
              <img
                src="/images/Logos/Cryptos/svgs/OCEAN_PROTOCOL.svg"
                className="w-auto h-30"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Grant by Ocean Protocol
              <p className="text-pink-500 text-lg">$9000</p>
            </p>
          </a>

          <a
            href="https://governance.decentraland.org/proposal/?id=0cb35ba0-7e05-11ec-9447-6b730f00647d"
            target="_blank"
            className="flex flex-col items-center justify-evenly text-center space-y-3 h-40 w-56 p-4"
          >
            <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-48 py-24 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
              <img
                src="/images/Logos/Cryptos/svgs/DECENTRALAND.svg"
                className="w-auto h-30"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Ocean by Decentraland
              <p className="text-pink-500 text-lg">$5000</p>
            </p>
          </a>

          <a
            href="https://port.oceanprotocol.com/t/round-10-proposal-mgh-unleash-nft-market-data/966"
            target="_blank"
            className="flex flex-col items-center justify-evenly text-center space-y-3 h-40 w-56 p-4"
          >
            <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-48 py-24 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
              <img
                src="/images/Logos/Cryptos/svgs/OCEAN_PROTOCOL.svg"
                className="w-auto h-30"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Grant by Ocean Protocol
              <p className="text-pink-500 text-lg">$9000</p>
            </p>
          </a>
        </div>

        <div className="relative mt-10 w-full grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center max-w-max">
          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <p className="text-3xl text-pink-500 font-medium ">30+</p>
            <p className="text-gray-400">
              Core contributors from all over the world
            </p>
          </div>

          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <p className="text-3xl text-pink-500 font-medium">$1.6 Mio</p>
            <p className="text-gray-400">Decentralized community fundraise</p>
          </div>

          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <p className="text-3xl text-pink-500 font-medium">160,000+</p>
            <p className="text-gray-400">
              Average monthly requests on valuation tool
            </p>
          </div>

          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <div className="flex space-x-2">
              <img
                src="/images/Logos/Cryptos/webp/SAND.webp"
                className="w-auto h-7"
              />
              <img
                src="/images/Logos/Cryptos/webp/MANA.webp"
                className="w-auto h-7"
              />
              <img
                src="/images/Logos/webp/xone-logo.webp"
                className="w-auto h-7"
              />
              <img
                src="/images/Logos/webp/somnium-space-logo.webp"
                className="w-auto h-7"
              />
            </div>
            <p className="text-gray-400">
              Building & Investing across various Metaverses
            </p>
          </div>

          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <img
              src="/images/Logos/Cryptos/webp/MANA.webp"
              className="w-auto h-12"
            />
            <p className="text-gray-400">
              DCL-Edit launch with Decentraland Team
            </p>
          </div>

          {/* <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
                        <AiOutlineTrophy className="text-blue-400 text-5xl " />
                        <p className="text-gray-400">Grants from Decentraland and Ocean Protocol</p>
                    </div> */}

          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <img
              src="/images/Logos/Cryptos/webp/MATIC.webp"
              className="w-auto h-12"
            />
            <p className="text-gray-400">
              Polygon Migration (ca. 1,000 members already)
            </p>
          </div>

          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <IoShareSocialOutline className="text-blue-400 text-5xl " />
            <p className="text-gray-400">
              10,000+ organic members in groups across channels
            </p>
          </div>

          <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-[#262626] h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5 rounded-md">
            <FaUniversity className="text-blue-400 text-5xl " />
            <p className="text-gray-400 text-xs">
              University collaborations and internships with Aachen, Frankfurt,
              Cologne, Buenos Aires, Bogota and South Korea
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
