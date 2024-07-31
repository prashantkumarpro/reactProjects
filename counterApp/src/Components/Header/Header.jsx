
import { NavLink, useNavigate } from "react-router-dom";
import { RiMoonFill, RiSearchLine, RiSunFill } from "@remixicon/react";
import { useState } from "react";



const Header = () => {
    const [theme, setTheme] = useState('dark')
    const [isDark, setIsDark] = useState(false)
    const [query, setQuery] = useState('')

    const navigate = useNavigate()

    const handleTheme = () => {
        setIsDark(!isDark)
        document.body.classList.toggle(theme)
    }

    const handleQuery = (e) => {
        const userInput = e.target.value.toLowerCase()
        setQuery(userInput)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setQuery('')
            navigate(`/Result/${query}`)
        }
    }






    return (
        <header className={`${isDark ? 'header_dark' : ''} w-full h-20 bg-white  text-gray-600 flex items-center justify-between fixed top-0 left-0 z-50`}>
            <NavLink to="/" className="text-xl font-semibold" >🎦Movies4U
            </NavLink>
            <div className='flex items-center relative'>
                <RiSearchLine
                    size={20} // set custom `width` and `height`
                    color="rgb(75 85 99)" // set `fill` color
                    className="my-icon absolute left-4 cursor-pointer" // add custom class name
                />
                <input type="text"
                    className='px-10 py-2 rounded-full bg-[#E5E7EB] indent-2 focus:outline-none'
                    placeholder='Search for movies or web series'
                    value={query}
                    onChange={handleQuery}
                    onKeyDown={handleKeyDown}
                />
            </div>


            <nav id="navbar" className='flex items-center gap-5'>
                <div className="theme cursor-pointer"
                    onClick={handleTheme}
                >
                    <RiSunFill
                        size={24}
                        className={isDark ? 'hidden' : 'block'}

                    />
                    <RiMoonFill
                        size={20}
                        style={{ backgroundColor: "", color: "white" }}
                        className={isDark ? 'block' : 'hidden'}

                    />
                </div>
                <ul className='flex items-center justify-between gap-5 font-semibold'>
                    <li> <NavLink to="/">HOME</NavLink></li>
                    <li> <NavLink to="/tranding"  >TRENDING</NavLink></li>
                    <li><NavLink to="/browseall" >BROWSE ALL</NavLink></li>
                </ul>
            </nav>

        </header >
    )
}

export default Header