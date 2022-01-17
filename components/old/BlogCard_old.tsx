const BlogCard = ({title, article, date}: any) => {
    return (
        <a href="https://opensea.io/assets" target="_blank">
        <div className="relative flex flex-col p-3 pt-5 h-full w-full rounded-2xl text-left filter drop-shadow bg-gray-300 bg-opacity-100 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer">
            
            <p className="text-black text-xl font-semibold">{title}</p>
            <p className="mt-3 text-black font-light">{article}</p>

            <p className="absolute top-1 right-4 text-xs text-gray-700 font-light italic">{date}</p>

        </div>
    </a>
  )
}

export default BlogCard


