import React from 'react'
import HomeHorizontalCard from './HomeHorizontalCard'
import HomeVerticalCard, { HomeCard } from './HomeVerticalCard'

const HomeCardsSection = () => {
  const verticalCards: HomeCard[] = [
    {
      text: 'Find undervalued Metaverse LAND with our AI supported valuation tools.',
      title: 'INVEST',
      link: 'hola',
      buttonText: 'Valuation Tool',
      src: '/images/HomeCards/INVESTPNG.png',
    },
    {
      text: 'Leverage our game development group to create your metaverse experiences.',
      title: 'BUILD',
      link: 'hola',
      buttonText: 'Game Dev',
      src: '/images/HomeCards/BUILDPNG.png',
    },
    {
      text: 'Explore a variety of tools for a convenient journey through the Open Metaverse.',
      title: 'USE',
      link: 'hola',
      buttonText: 'Metaverse Tools',
      src: '/images/HomeCards/USEPNG.png',
    },
  ]
  const horizontalCards: Omit<HomeCard, 'title'>[] = [
    {
      text: 'Evaluate Metaverse LANDs',
      link: 'hola',
      buttonText: 'Evaluate LANDs',
      src: '/images/HomeCards/EVALUATELANDSPNG.png',
    },
    {
      text: 'Build your experience in the Metaverse with us',
      link: 'hola',
      buttonText: 'BUILD WITH US',
      src: '/images/HomeCards/BUILDWITHUSPNG.png',
    },
  ]

  return (
    <section className='p-20 min-h-screen w-full'>
      {/* Vertical Cards */}
      <ul className='flex flex-col md:flex-row justify-around w-full mb-40 xl:mb-80 items-center gap-20 xl:gap-0 flex-wrap '>
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
      {/* Horizontal Cards */}
      <ul className='flex flex-col md:flex-row w-full items-center md:justify-around gap-16 xl:gap-8'>
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
    </section>
  )
}

export default HomeCardsSection
