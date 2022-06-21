import Link from 'next/link'

import Button from '../elements/Button'


const CTAs = () => {

    return (

        <div className="relative w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

            <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-10 lg:space-y-0 items-center lg:items-stretch mt-10'>

                <div className='flex flex-col space-y-5 items-center w-full lg:w-1/2 max-w-2xl text-center p-5 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <p className='font-normal text-4xl text-blue-500 h-20'>Evaluate Metaverse LANDs</p>
                    <img src="/images/collage.jpg" />
                    <Button text='Evaluate LANDs' link='https://app.metagamehub.io/valuation' />
                </div>

                <div className='flex flex-col space-y-5 items-center w-full lg:w-1/2 max-w-2xl text-center p-5 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <h3 className='font-normal text-4xl text-blue-500 h-20'>Build your experience in the Metaverse with us</h3>
                    <img src="/images/collage.jpg" />
                    <Button text='Build with us' link='/build' sameTab />
                </div>

            </div>

        </div>
    )
}

export default CTAs
