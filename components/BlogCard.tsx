const BlogCard = ({title, article, date, link, classes}: any) => {
    return (
        <a href={link} target="_blank">
        <div className={`${classes} m-auto relative hover:z-50 opacity-100 hover:opacity-100 hover:shadow-black scale-100 flex flex-col p-3 pt-5 h-full xl:h-56 w-full xl:w-3/4 rounded-2xl text-left shadow-colorbottom bg-gray-200 hover:bg-gray-100 bg-opacity-100 transform xl:-translate-y-16 hover:scale-105 transition duration-300 ease-in-out border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer`}>
            
            <p className="text-black text-xl font-semibold">{title}</p>
            <p className="mt-3 text-black font-light">{article}</p>

            <p className="absolute top-1 right-4 text-xs text-gray-700 font-light italic">{date}</p>

        </div>
    </a>
  )
}

export default BlogCard


