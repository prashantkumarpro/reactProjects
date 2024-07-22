
import { RiMoonClearFill, RiSearchLine } from "@remixicon/react";



const Header = ({ data, setData }) => {
    

    return (
        <header className="w-full h-20 bg-white dark:bg-black text-gray-600 flex items-center justify-between ">
            <a href='#' className="text-xl font-semibold" to="/" >🎦Movies4U
            </a>
            <div className='flex items-center relative'>
                <RiSearchLine
                    size={20} // set custom `width` and `height`
                    color="rgb(75 85 99)" // set `fill` color
                    className="my-icon absolute left-4 cursor-pointer" // add custom class name
                />
                <input type="text"
                    className='px-10 py-2 rounded-full bg-[#E5E7EB] indent-2 focus:outline-none'
                    placeholder='Search for movies or web series' />
            </div>


            <nav id="navbar" className='flex items-center gap-5'>
                <RiMoonClearFill
                    size={24}
                    className='cursor-pointer '
                />
                <ul className='flex items-center justify-between gap-5 font-semibold'>
                    <li> <a href='#' to="/">HOME</a></li>
                    <li> <a href='#' to="About" >TRENDING</a></li>
                    <li><a href='#' to="Skills">BROWSE ALL</a></li>
                </ul>
            </nav>

        </header >
    )
}

export default Header