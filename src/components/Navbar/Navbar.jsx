import React from 'react'
import { useState } from 'react'
import { navLinks } from '../../constants/main'
import CirlcleWithLetter from '../Circle/CirlcleWithLetter'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'

const Navbar = () => {

  const [toggle, settoggle] = useState(false)

  return (
    <div className={`flex bg-background`}>
      <nav className='w-full flex py-6 justify-between items-baseline navbar mx-5'>
        <CirlcleWithLetter />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`cursor-pointer text-[16px] uppercase text-white hover:text-accents tracking-widest ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='img' className='w-[28px] h-[28px] object-contain' onClick={() => settoggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-gradient-to-tr from-accents to-gray-700 absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`cursor-pointer text-white text-[16px] uppercase tracking-widest ${index === navLinks.length - 1 ? 'mb-0' : 'mb-2'} my-5 mx-5 p-3`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar