import React from "react";
import JoinUs from "../section/JoinUs";
import HomeHorizontalCard from "./HomeHorizontalCard";
import HomeVerticalCard, { HomeCard } from "./HomeVerticalCard";

//data imports
import verticalCardsData from "../../data/Cards/verticalCards.json"
import horizontalCardsData from "../../data/Cards/horizontalCards.json"

const HomeCardsSection = () => {
  const verticalCards: HomeCard[] = verticalCardsData
  const horizontalCards: Omit<HomeCard, "title">[] = horizontalCardsData

  return (
    <section className="p-10 min-h-screen w-full">
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
