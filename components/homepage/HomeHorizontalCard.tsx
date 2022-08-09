import React from "react";
import { HomeCard } from "./HomeVerticalCard";

const HomeHorizontalCard = ({
  text,
  link,
  buttonText,
  src,
}: Omit<HomeCard, "title">) => {
  return (
    <div className="p-8 bg-[#292929] rounded-xl h-[320px] w-[320px] lg:h-[340px] lg:w-[400px] xl:h-[400px] xl:w-[500px] relative 2xl:h-[510px] 2xl:w-[650px]">
      <div className="relative bottom-18 lg:bottom-24 xl:bottom-30 2xl:bottom-40">
        <img
          src={src}
          loading="lazy"
          className="rounded z-30 w-full max-w-xs md:max-w-none object-cover mb-4 2xl:mb-8"
        />
        <div className="flex flex-col gap-4 text-center items-center font-medium">
          <p className="2xl:text-xl">{text}</p>
          <a
            role="button"
            href={link}
            className="absolute top-[19rem] lg:relative lg:top-0 text-center block bg-pink-reco w-44 rounded-md py-1 transition-all hover:scale-105 font-medium"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHorizontalCard;
