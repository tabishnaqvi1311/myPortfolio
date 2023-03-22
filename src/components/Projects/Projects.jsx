import React from 'react'
import Card from '../Card/Card'
import { projects } from '../Card/Card'
// import { motion, useScroll } from 'framer-motion'


const Projects = ({ isVisible }) => {

    return (
        <section id='myProjects' className='bg-slate-300'>
            <div className='flex lg:justify-center'>
                <h2 id="headingproj" className='text-6xl my-7 font-bold mx-5 tracking-tighter'><span className='border-b-8 border-accents'>My Pro</span>jects</h2>
            </div>
            <div className='flex flex-wrap flex-row justify-center'>
                <div className=' lg:hover:px-5'>
                    <Card {...projects[1]} />
                </div>
                <div className=' -mx-5 lg:py-10 lg:hover:px-5'>
                    <Card {...projects[0]} />
                </div>
                <div className=' lg:hover:px-5'>
                    <Card {...projects[2]} />
                </div>
            </div>
        </section>
    )
}

export default Projects