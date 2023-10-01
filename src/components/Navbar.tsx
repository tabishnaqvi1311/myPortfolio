import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { motion } from "framer-motion"

type NavLink = {
    id: number,
    title: string
}

export const Navbar = () => {


    const [toggle, setToggle] = useState<Boolean>(false);



    const navLinks: NavLink[] = [
        {
            id: 3,
            title: 'about'
        },
        {
            id: 1,
            title: "skills"
        },
        {
            id: 2,
            title: 'projects',
        },
        {
            id: 4,
            title: 'contact',
        },
    ];


    return (
        <div className=''>
            {/* for large devices */}
            <nav className="flex justify-end ">
                <motion.ul className="sm:flex hidden gap-10" initial={{ opacity: '0' }} animate={{opacity: 100}} transition={{ delay: 0.5}}>
                    {
                        navLinks.map((nav) => (
                            <li key={nav.id} className={"p-7 uppercase tracking-widest"} >
                                <a href={`#${nav.title}`} className="hover:text-[#85cb15]">
                                    {nav.title}
                                </a>
                            </li>
                        ))
                    }
                </motion.ul>
                {/* for mobile */}
                <div className="sm:hidden flex m-10">
                    <span className='' onClick={() => setToggle((prev) => !prev)}>
                        {toggle ? <CgClose size={50} /> : <GiHamburgerMenu size={50} />}
                    </span>
                    <div className={`${toggle ? 'flex' : 'hidden'} absolute top-28 right-7 bg-white p-2 text-black z-10 rounded-xl`}>
                        <ul className='flex gap-7 flex-col p-4'>
                            {
                                navLinks.map((nav) => (
                                    <li key={nav.id} className={``}>
                                        <a href={`#${nav.id}`} className="uppercase tracking-widest">
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