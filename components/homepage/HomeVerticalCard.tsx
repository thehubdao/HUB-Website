import React from 'react'
import Image from 'next/image'

export interface HomeCard {
  title: string
  text: string
  link: string
  buttonText: string
  src: string
}

const HomeVerticalCard = ({ title, text, link, buttonText, src }: HomeCard) => {
  return (
    <div className='w-[350px] h-[550px] md:h-[500px] md:w-[290px] 2xl:w-[440px] 2xl:h-[680px] xl:h-[550px] xl:w-[350px] p-8 bg-gray-700 rounded-xl'>
      <div className='relative bottom-36 2xl:bottom-40 md:bottom-24 xl:bottom-34 '>
        <img
          placeholder='blur'
          src={src}
          loading='lazy'
          className='rounded z-30 w-full mb-8 '
        />
        <div className='flex flex-col gap-4 items-center text-center'>
          <h3 className='md:text-3xl lg:text-4xl 2xl:text-6xl font-anton'>
            {title}
          </h3>
          <p>{text}</p>
          <a
            role='button'
            href={link}
            className='text-center block bg-red-400 w-44 rounded-md py-1 hover:scale-105 transition-all font-medium'
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeVerticalCard
