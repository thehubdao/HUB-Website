import Link from 'next/link'

import Button from '../elements/Button'


const Links = () => {

    return (

        <div className="relative w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

            <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-10 lg:space-y-0 items-center lg:items-stretch mt-10'>

                <div className='flex flex-col space-y- items-center w-full lg:w-1/2 max-w-2xl p-5 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <img src="/images/collage.jpg" />
                    <p className='text-4xl text-blue-500 w-full mt-5 mb-2'>Invest</p>
                    <p className='font-normal text-lg w-full mb-10'>Find undervalued Metaverse LAND with our AI supported valuation tools.</p>
                    <Button text='Valution Tool' link='https://app.metagamehub.io/valuation' />
                </div>

                <div className='flex flex-col space-y- items-center w-full lg:w-1/2 max-w-2xl p-5 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <img src="/images/collage.jpg" />
                    <p className='text-4xl text-blue-500 w-full mt-5 mb-2'>Build</p>
                    <p className='font-normal text-lg w-full mb-10'>Leverage our game development group to create your metaverse experiences.</p>
                    <Button text='Game Dev.' link='/build' sameTab />
                </div>

                <div className='flex flex-col space-y- items-center w-full lg:w-1/2 max-w-2xl p-5 bg-grey-darkest hover:scale-[1.01] transition duration-200 ease-linear border-white border border-opacity-5 rounded'>
                    <img src="/images/collage.jpg" />
                    <p className='text-4xl text-blue-500 w-full mt-5 mb-2'>Use</p>
                    <p className='font-normal text-lg w-full mb-10'>Explore a variety of tools for a convenient journey through the Open Metaverse.</p>
                    <Button text='Metaverse Tools' link='/tools' sameTab />
                </div>

            </div>

        </div>
    )
}

export default Links
