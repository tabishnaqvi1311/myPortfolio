import React from 'react'
import { motion } from 'framer-motion'
import CableIcon from '@mui/icons-material/Cable';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

const Skills = () => {
  return (
    <section className='' id='myExp'>
      <div className='text-text'>
        <motion.h1 className='lg:text-5xl p-10 text-4xl' initial={{opacity: 0}} whileInView={{opacity:1}}>How Experienced Is Tabish?</motion.h1>
        {/* full div */}
        <div className='flex justify-evenly my-20 lg:text-base text-xs text-center'>

          <div className='flex flex-col w-1/3 justify-evenly'>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.7 }} className='flex flex-col items-center'>
              <CableIcon fontSize='large' className='mb-5'/>
              At the age of 17, Tabish developed interest in website development and video editing, and explored various domains with a curious mind.
            </motion.p>
            <motion.p initial={{ opacity: 0}} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 1 }} className='flex flex-col items-center'>
              <CodeIcon className='mb-5' fontSize='large'/>
              Tabish was a student intern at MRIIRS during July 2023 and was responsible for handling the backend for VandeIoT, an Iot based platform. He also freelanced as a video editor and learnt Blender during this time.
            </motion.p>
          </div>

          {/* line */}
          <motion.div className='bg-gradient-to-b from-accent via-yellow-500 to-blue-500 lg:h-[40rem] h-[50rem] w-[2px]'
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
          />
  
          <div className=' w-1/3 flex flex-col justify-evenly'>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9}} className='flex flex-col items-center'>
              <LaptopMacIcon className='mb-5' fontSize='large'/>
              In his fresher year, he dived deep into web development, picked up the MERN stack, contributed to open source, worked on problem solving skills, participated in several hackathons and was part of Microsoft Learn Student Chapter society.
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills