import React from "react";
import { HomeActionButton } from ".";

const HomeIntro = () => {
  return (
    <section className="w-full min-h-screen">
      <video
        loop
        autoPlay
        muted
        className="w-full min-h-screen absolute top-0 object-cover h-screen object-center"
      >
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Bottom */}
      <div className="absolute bottom-12 -translate-x-2/4 left-2/4 md:left-auto md:translate-x-0 w-full">
        {/* Action Buttons and Big Text */}
        <div className="md:pl-10 xl:pl-14 w-full">

          {/* Text Box */}
          <div className="flex flex-col gap-4 md:gap-0 w-full">
            <h1 className="text-5xl xs:text-6xl text-center md:text-left md:text-9xl pb-0 text-gray-200 z-20">
              METAGAMEHUB<span className="md:hidden"> DAO</span>
            </h1>
            <div className="z-20 flex flex-col md:flex-row gap-4 items-center">
              <h2 className="hidden md:block text-5xl xs:text-7xl md:text-9xl pt-0 z-20">
                DAO
              </h2>
              <div className="text-center md:text-left z-20 lg:w-2/3 xl:w-2/4 2xl:w-1/4">
                <h3 className="text-xl md:text-3xl text-pink-reco font-semibold">
                  Navigating through the Open Metaverse together
                </h3>
                <p className="m-auto md:m-0 w-full text-md md:text-xl">
                  MetaGameHub DAO is building the Homebase within the Open Metaverse to foster and intuitive, aggregated user experience
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex z-30 gap-4 items-center justify-center flex-row md:justify-start mb-4 md:mb-0 w-max-full">
            <HomeActionButton
              text="Voting"
              link="https://snapshot.org/#/metagamehub.eth"
            />
            <HomeActionButton
              text="Launch App"
              link="https://app.metagamehub.io"
            />
          </div>

        </div>
        {/* Right Explore + */}
        <div></div>
      </div>
    </section>
  );
};

export default HomeIntro;
