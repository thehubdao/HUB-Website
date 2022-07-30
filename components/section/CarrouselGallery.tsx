import { useRef } from "react"

const CarrouselGallery = ({ dataCarrousel }: any) => {
  const contentWrapper: any = useRef(null)

  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-row justify-center bg-[#262626] mb-5 py-3 w-60 rounded-md items-center">
        <button
          type="button"
          className="flex relative z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none target"
          onClick={() => {sideScroll(contentWrapper.current, 10, 500, -30)}}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full border group-hover:bg-white/50group-focus:outline-none">
            <svg aria-hidden="true" className="w-3 h-3 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <p className="h-full block text-white text-sm">{dataCarrousel.title}</p>
        <button
            type="button"
            className="flex relative z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            onClick={() => {sideScroll(contentWrapper.current, 10, 500, 30)}}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full border group-focus:outline-none">
              <svg aria-hidden="true" className="w-3 h-3 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7"></path></svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
      </div>
      <div className="flex space-x-5 overflow-x-scroll no-scroll-bar" ref={contentWrapper}>
        {
          dataCarrousel.images.map((imageUrl: string, index: number) =>
            <img key={index} src={imageUrl} className="h-72 w-full object-cover snap-center rounded" />
          )
        }
      </div>
    </div>
  )
}

export default CarrouselGallery