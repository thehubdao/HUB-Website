import React from 'react'

interface Props {
  link: string
  text: string
}

const HomeActionButton = ({ link, text }: Props) => {
  return (
    <a
      href={link}
      target='_blank'
      role='button'
      className='w-40 md:w-56 py-2 cursor-pointer bg-gray-800 rounded-lg text-center hover:bg-pink-400 hover:text-gray-800 transition-all font-medium'
    >
      {text}
    </a>
  )
}

export default HomeActionButton
