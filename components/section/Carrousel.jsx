import { useState, useEffect } from "react";

const dataCarrousel = [
  {
    image: '/images/Carrousel/carrousel1.png',
    title: 'PLAY2EARN IMPLEMENTATIONS',
    content: 'Metaverse game development, Play2Earn implementations, Engagement Models for communities'
  },
  {
    image: '/images/Carrousel/carrousel2.png',
    title: 'POSSIBILITY TO BUILD IN ANY METAVERSE',
    content: 'Metaverse design in various metaverses such as Decentraland, The Sandbox and Somnium Space. Development of tools for Metaverses like an editor for Decentraland (dcl-edit).'
  },
  {
    image: '/images/Carrousel/carrousel3.png',
    title: 'MODELLING OF UNIQUE ASSETS FOR CUSTOM EXPERIENCES',
    content: 'We have expert modellers working with state-of-the art tools like Blender and Fusion 360 that are able to create 3D models for Metaverses like Decentraland and Somnium Space.'
  },
  {
    image: '/images/Carrousel/carrousel4.png',
    title: 'MODERN 3D ENGINES',
    content: 'We have Unity 3D developers and programmers with years of experience in App development and game development. We can leverage these skills for any Metaverse project that allows for coding custom complex logic like Decentraland.'
  }
]

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const handleOnNextClick = () => {
    const nextSlide = (currentSlide + 1) % dataCarrousel.length
    setCurrentSlide(nextSlide)
  }

  const handleOnPrevClick = () => {
    const prevSlide = ((currentSlide + dataCarrousel.length - 1) % dataCarrousel.length)
    setCurrentSlide(prevSlide)
  }

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="w-full relative select-none">
        <div>
          <img src={dataCarrousel[currentSlide].image} className="rounded-md" alt="" />
          <div className="absolute top-4 w-full p-16">
            <h1 className="text-center">{dataCarrousel[currentSlide].title}</h1>
            <p className="text-center text-[#060606]">{dataCarrousel[currentSlide].content}</p>
          </div>
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={handleOnPrevClick}>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-slate-500 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={handleOnNextClick}>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-slate-500 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel

{/* <div id="indicators-carousel" class="relative" data-carousel="static">

    <div class="overflow-hidden relative h-56 rounded-lg md:h-96">
        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
            <p>Something</p>
            <img src="" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <img src="" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
        <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <img src="" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
    </div>
    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}