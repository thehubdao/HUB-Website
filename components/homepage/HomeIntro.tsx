import React from 'react'
import { HomeActionButton } from '.'

const HomeIntro = () => {
  return (
    <section className='w-screen h-screen'>
      <video
        loop
        autoPlay
        muted
        className='w-screen min-h-screen absolute top-0 object-cover -z-10'
      >
        <source src='/videos/bgvideo.mp4' type='video/mp4' />
      </video>

      {/* Bottom */}
      <div className='pt-[45vh]'>
        {/* Action Buttons and Big Text */}
        <div className='md:pl-14'>
          {/* Action Buttons */}
          <div className='flex gap-4 justify-center md:justify-start mb-4 md:mb-0'>
            <HomeActionButton
              text='Voting'
              link='https://snapshot.org/#/metagamehub.eth'
            />
            <HomeActionButton
              text='Launch App'
              link='https://app.metagamehub.io'
            />
          </div>
          {/* Text Box */}

          <h1 className='text-4xl xs:text-6xl text-center md:text-left md:text-9xl'>METAGAMEHUB</h1>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <h2 className='text-5xl xs:text-7xl md:text-9xl'>DAO</h2>
            <div className='text-center md:text-left'>
              <h3 className='text-2xl text-pink-400'>
                Your Homebase in the Open Metaverse
              </h3>
              <p className='m-auto md:m-0 w-96'>
                MetaGameHub DAO develops Infrastructure and Applications to be a
                Hub for Open Metaverse experiences
              </p>
            </div>
          </div>
        </div>
        {/* Right Explore + */}
        <div></div>
      </div>
    </section>
  )
}

export default HomeIntro
