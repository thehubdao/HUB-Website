import Image from 'next/image'


const LandCard = ({ img, title, link, classes }: any) => {
    return (

        <a href={link} target="_blank">
            <div className={`${classes} group w-40 h-40 m-2 text-center hover:scale-105 relative flex flex-col rounded bg-grey-darkest transition duration-200 ease-linear border border-white border-opacity-5 hover:border-opacity0 cursor-pointer`}>

                <div className="relative text-center w-full pb-full">
                    <Image
                        placeholder='blur'
                        blurDataURL={img || '/images/Logos/MGH/mgh_logo.png'}
                        src={img || '/images/Logos/MGH/mgh_logo.png'}
                        layout='fill'
                        loading='lazy'
                        objectFit='contain'
                        className='rounded'
                    />
                </div>

                <div className='absolute flex items-center justify-center p-3 w-full h-full inset-0 opacity-0 group-hover:opacity-100 transition duration-200 ease-linear backdrop-blur-xl bg-black/60 rounded'>
                    <p className="font-medium">{title}</p>
                </div>

            </div>
        </a>
    )
}

export default LandCard


