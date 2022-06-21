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
        <source src='/images/SPACEBG.MP4' type='video/mp4' />
      </video>

      {/* Bottom */}
      <div className='pt-[45vh]'>
        {/* Action Buttons and Big Text */}
        <div className='pl-14'>
          {/* Action Buttons */}
          <div className='flex gap-4'>
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

          <h1 className='text-9xl'>METAGAMEHUB</h1>
          <div className='flex gap-4'>
            <h2 className='text-9xl'>DAO</h2>
            <div>
              <h3 className='text-2xl text-pink-400'>
                Your Homebase in the Open Metaverse
              </h3>
              <p className='w-96'>
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
