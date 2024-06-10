import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { motion } from "framer-motion"
import NavLink from "./NavLink";

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
            <nav className="flex justify-between items-center md:p-4 p-2">
                <div className="px-7 text-3xl">
                    <span className="text-lime-500">{"<"}</span>
                    {'t/'}
                    <span className="text-lime-500">{">"}</span>
                </div>
                <motion.ul className="sm:flex hidden gap-10" initial={{ opacity: '0' }} animate={{opacity: 100}} transition={{ delay: 0.5}}>
                    {
                        navLinks.map((nav) => (
                            <li key={nav.id} className={"p-7 uppercase tracking-widest h-[50px] w-[125px] items-center flex justify-center"} >
                                <NavLink name={nav.title}/>
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
                                        <a href={`#${nav.title}`} className="uppercase tracking-widest">
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