import { useState } from "react";
import { motion } from 'framer-motion'

const Carrousel = ({dataCarrousel}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const handleOnNextClick = () => {
    const nextSlide = (currentSlide + 1) % dataCarrousel.length
    setCurrentSlide(nextSlide)
  }

  const handleOnPrevClick = () => {
    const prevSlide = ((currentSlide + dataCarrousel.length - 1) % dataCarrousel.length)
    setCurrentSlide(prevSlide)
  }

  const handleSlide = (index) => {
    const slide = Math.abs((index) % dataCarrousel.length)
    setCurrentSlide(slide)
  }

  const indicatorButtons = dataCarrousel.map((slide, index) => <button key={index} className={`w-3 h-3 rounded-sm border ${(index === currentSlide) ? "w-12 bg-slate-50" : ""}`} onClick={() => handleSlide(index)}></button>)

  return (
    <div className="max-w-screen-2xl m-auto h-full">
      <div className="w-full relative h-full">
        <motion.div
          key={currentSlide}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1  }}
          exit={{ scale: 0.9 }}
          className="flex h-80vh min-h-75vh md:h-auto md:w-80vw items-center animate-fade-in-slow"
        >
          <img src={dataCarrousel[currentSlide].image} className="absolute rounded-3xl object-cover h-full w-full" alt="background image" />
          <div className="relative top-0 w-full p-16 lg:px-44">
            <h1 className="text-center text-2xl md:text-5xl xl:text-7xl text-slate-100 ">{dataCarrousel[currentSlide].title}</h1>
            <p className="text-center font-bold text-md md:text-lg text-[#060606]">{dataCarrousel[currentSlide].content}</p>
          </div>
        </motion.div>

        {/* Slider Lateral Controlers */}
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button 
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none target"
            onClick={handleOnPrevClick}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-slate-50 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 19l-7-7 7-7"></path></svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            onClick={handleOnNextClick}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-slate-50 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7"></path></svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        {/* Slider Buttom Indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {indicatorButtons}
        </div>
      </div>
    </div>
  );
};

export default Carrousel