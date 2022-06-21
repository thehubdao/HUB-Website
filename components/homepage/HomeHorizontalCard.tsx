import React from 'react'
import Image from 'next/image'
import { HomeCard } from './HomeVerticalCard'

const HomeHorizontalCard = ({
  text,
  link,
  buttonText,
  src,
}: Omit<HomeCard, 'title'>) => {
  return (
    <div className='p-8 bg-gray-700 rounded-xl w-full md:h-[250px] md:w-[350px] lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[500px] relative 2xl:h-[510px] 2xl:w-[650px]'>
      <div className='relative md:bottom-20 xl:bottom-30 2xl:bottom-40'>
        <img
          src={src}
          loading='lazy'
          className='rounded z-30 w-full object-cover mb-4'
        />
        <div className='flex flex-col gap-4 text-center items-center'>
          <p>{text}</p>
          <a
            role='button'
            href={link}
            className='text-center block bg-red-400 w-44 rounded-md py-1 transition-all hover:scale-105 font-medium'
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeHorizontalCard
