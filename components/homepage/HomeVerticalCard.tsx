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
    <div className='2xl:w-[440px] 2xl:h-[680px] xl:h-500 xl:w-300 p-8 2xl:bg-gray-700 rounded-xl  '>
      <div className='relative bottom-40'>
        <img
          placeholder='blur'
          src={src}
          loading='lazy'
          className='rounded z-30 w-full mb-8 '
        />
        <div className='flex flex-col gap-4 items-center text-center'>
          <h3>{title}</h3>
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
