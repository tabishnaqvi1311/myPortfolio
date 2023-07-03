import React from 'react'
import { myProjects } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className='text-text' id='myProjects'>
      <h1 className='text-5xl p-10 mt-40 mb-10'>Projects I've Worked On</h1>
      <div className='flex lg:flex-row flex-col justify-evenly items-center'>
        {myProjects.map((item) => (
          <motion.div className='lg:w-1/4 w-[80%] rounded-lg bg-gradient-to-r from-accent via-yellow-500 to-blue-500 p-[3px] my-10'
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}
          >
            <div className='bg-background h-full w-full'>
              <p className='flex justify-center pt-10 tracking-widest lg:text-xl text-base'>{item.title}</p>
              <ul className='flex justify-center p-2'>
                {item.used.map((tech) => (
                  <li className='mx-1 lg:text-sm text-xs text-gray-400'>
                    #{tech}
                  </li>
                ))}
              </ul>
              <div className='flex justify-center p-10'>
                <a className='border rounded-xl py-1 px-3 bg-text hover:text-accent text-background lg:text-base sm:text-sm text-xs' href={item.github}>View On Github</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
