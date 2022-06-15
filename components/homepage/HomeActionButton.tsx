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
      className='w-56 py-2 cursor-pointer bg-gray-800 rounded-lg text-center'
    >
      {text}
    </a>
  )
}

export default HomeActionButton
