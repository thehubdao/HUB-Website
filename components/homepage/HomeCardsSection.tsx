import React from "react";
import JoinUs from "../section/JoinUs";
import HomeHorizontalCard from "./HomeHorizontalCard";
import HomeVerticalCard, { HomeCard } from "./HomeVerticalCard";

const HomeCardsSection = () => {
  const verticalCards: HomeCard[] = [
    {
      text: "Find undervalued Metaverse LAND with our AI supported valuation tools.",
      title: "INVEST",
      link: "https://app.metagamehub.io/valuation",
      buttonText: "Valuation Tool",
      src: "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/HomeCards/INVESTPNG.png",
    },
    {
      text: "Leverage our game development group to create your metaverse experiences.",
      title: "BUILD",
      link: "/build",
      buttonText: "Game Dev",
      src: "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/HomeCards/BUILDPNG.png",
    },
    {
      text: "Explore a variety of tools for a convenient journey through the Open Metaverse.",
      title: "USE",
      link: "/tools",
      buttonText: "Metaverse Tools",
      src: "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/HomeCards/USEPNG.png",
    },
  ];

  const horizontalCards: Omit<HomeCard, "title">[] = [
    {
      text: "Evaluate Metaverse LANDs",
      link: "https://app.metagamehub.io/valuation",
      buttonText: "Evaluate LANDs",
      src: "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/HomeCards/EVALUATELANDSPNG.png",
    },
    {
      text: "Build your experience in the Metaverse with us",
      link: "/build",
      buttonText: "Build with us",
      src: "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/HomeCards/BUILDWITHUSPNG.png",
    },
  ];

  return (
    <section className="p-20 min-h-screen w-full">
      {/* Horizontal Cards */}
      <ul className="flex flex-col md:flex-row w-full items-center xl:justify-center md:justify-around gap-16 xl:gap-8 mb-16 sm:mb-0">
        {horizontalCards.map(({ text, buttonText, link, src }) => (
          <li key={text}>
            <HomeHorizontalCard
              src={src}
              text={text}
              buttonText={buttonText}
              link={link}
            />
          </li>
        ))}
      </ul>
      <JoinUs />
      {/* Vertical Cards */}
      <ul className="flex flex-col md:flex-row md:flex-wrap w-full items-center xl:justify-center md:justify-around gap-16 xl:gap-8 mb-16 sm:mb-0">
        {verticalCards.map(({ title, text, buttonText, link, src }) => (
          <li key={title}>
            <HomeVerticalCard
              src={src}
              title={title}
              text={text}
              buttonText={buttonText}
              link={link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeCardsSection;
