import React from "react";

export interface HomeCard {
  title: string;
  text: string;
  link: string;
  buttonText: string;
  src: string;
}

const HomeVerticalCard = ({ title, text, link, buttonText, src }: HomeCard) => {
  return (
    <div className="w-full h-[450px] xs:h-[500px] xs:w-[290px] 2xl:w-[440px] 2xl:h-[680px] xl:h-[570px] xl:w-[350px] p-8 bg-[#292929] rounded-xl">
      <div className="relative bottom-24 2xl:bottom-40 sm:bottom-24 xl:bottom-34 ">
        <img
          placeholder="blur"
          src={src}
          loading="lazy"
          className="rounded z-30 w-full mb-8 "
        />
        <div className="flex flex-col gap-4 items-center text-center">
          <h3 className="md:text-3xl lg:text-4xl 2xl:text-6xl font-anton">
            {title}
          </h3>
          <p className="text-sm lg:text-base">{text}</p>
          <a
            role="button"
            href={link}
            className="text-center block bg-pink-reco w-44 rounded-md py-1 hover:scale-105 transition-all font-medium"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeVerticalCard;
