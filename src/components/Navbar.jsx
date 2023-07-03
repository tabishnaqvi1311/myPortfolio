import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import { useState } from 'react'
import React from 'react'
import { navLinks } from '../constants'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='flex'>
            {/* for larger devices */}
            <nav className='w-full flex p-6 justify-between mx-5'>
                <motion.ul className='list-none sm:flex hidden justify-end items-center flex-1' initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ delay: 0.5, damping: 15, type: 'spring' }}>

                    {
                        navLinks.map((nav) => (
                            <li key={nav.id} className={`text-[16px] uppercase text-text hover:text-accent tracking-widest mx-6 my-2`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))
                    }
                </motion.ul>
                {/* for mobile */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt='img' className='w-[28px] h-[28px]' onClick={() => setToggle((prev) => !prev)} />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-text absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
                        <ul className='list-none flex flex-col items-center'>

                            {
                                navLinks.map((nav) => (
                                    <li key={nav.id} className={`text-accent text-[16px] uppercase tracking-widest my-5 mx-5 p-3`}>
                                        <a href={`#${nav.id}`}>
                                            {nav.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
