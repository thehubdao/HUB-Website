import React from "react";
import { HomeActionButton } from ".";

const HomeIntro = () => {
  return (
    <section className="w-full min-h-screen">
      <video
        loop
        autoPlay
        muted
        className="w-full min-h-screen absolute top-0 object-cover h-overScreen120 2xl:h-overScreen130 object-bottom"
      >
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Bottom */}
      <div className="absolute bottom-12 -translate-x-2/4 left-2/4 md:left-auto md:translate-x-0 w-full">
        {/* Action Buttons and Big Text */}
        <div className="md:pl-14 w-full">
          {/* Action Buttons */}
          <div className="flex flex-col z-30 gap-4 items-center md:flex-row md:justify-start mb-4 md:mb-0 w-max-full">
            <HomeActionButton
              text="Voting"
              link="https://snapshot.org/#/metagamehub.eth"
            />
            <HomeActionButton
              text="Launch App"
              link="https://app.metagamehub.io"
            />
          </div>
          {/* Text Box */}

          <div className="flex flex-col gap-4 md:gap-0 w-full">
            <h1 className="text-4xl xs:text-6xl text-center md:text-left md:text-9xl pb-0 text-gray-200 z-20">
              METAGAMEHUB
            </h1>
            <div className="z-20 flex flex-col md:flex-row gap-4 items-center">
              <h2 className="text-5xl xs:text-7xl md:text-9xl pt-0 z-20">
                DAO
              </h2>
              <div className="text-center md:text-left z-20 md:w-1/2 xl:w-1/3 2xl:w-1/4">
                <h3 className="text-2xl text-pink-reco">
                  Your Homebase in the Open Metaverse
                </h3>
                <p className="m-auto md:m-0 w-full">
                  MetaGameHub DAO develops Infrastructure and Applications to be
                  a Hub for Open Metaverse experiences
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Explore + */}
        <div></div>
      </div>
    </section>
  );
};

export default HomeIntro;
