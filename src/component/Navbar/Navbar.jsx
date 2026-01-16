import React from 'react'
import { RiMenu2Line, RiCloseLine } from "react-icons/ri"
import { useState } from 'react'

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);


  return (
    <nav className={`w-full bg-[#0f172a] text-white px-8 py-4 flex items-center justify-between shadow-lg`}>
      <span className='text-xl font-bold tracking-wide'>Portfolio</span>
 <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href='#About'>
        <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out">About</li>
        </a>
        <a href='#Experience'>
        <li className={`cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out`}>Experience</li>
        </a>
        <a href='#Projects'>
        <li className={`cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out`}>Project</li>
        </a>
        <a href='#Footer'>
        <li className={`cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out`} >Contact</li>
        </a>
      </ul>

  {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}


       </nav>
  )
}

export default Navbar
