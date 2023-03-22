import React from 'react'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const About = () => {
  return (
    <section  id='aboutMe' className='lg:w-1/2'>
      <div className='p-10 lg:ml-40'>
        <p className='my-3 text-[#686e7f] text-xl'>KNOW MORE</p>
        <h2 className='text-6xl text-white flex font-bold'><span className='border-b-8 border-accents '>Abo</span>ut Me</h2>
        <p className='py-10 text-white text-left lg:mr-40 text-lg'>
        I'm Tabish Naqvi, a 19-year-old MERN stack web developer with a passion for coding and problem-solving. My experience includes developing robust, efficient, and user-friendly web applications using MongoDB, Express, React, and Node.js. I'm eager to learn and improve my skills in competitive programming and DSA to create better solutions for complex problems. My hobbies, such as reading, video editing and playing video games keep me creative, grounded, and focused, providing a fresh perspective to my work.
        </p>
        <p className='text-white flex flex-row'>
          <FiMail size={20} color='white'/>
          <span className='ml-3'>tabish.naqvi2003@gmail.com</span>
        </p>
        <div className='flex flex-row mt-2 text-white'>
          <a href='https://github.com/tabishnaqvi1311' target='_blank' rel="noreferrer"><FaGithub  className='mr-4 cursor-pointer' color='white' size={18}/></a>|
          <a href='https://www.linkedin.com/in/tabish-naqvi-a4a723103/' target='_blank' rel="noreferrer"><FaLinkedin  className='mx-4 cursor-pointer' color='white' size={18}/></a>|
          <a href='https://twitter.com/gunhawke23' target='_blank' rel="noreferrer"><FaTwitter className='mx-4  cursor-pointer' color='white' size={18}/></a>|
          <a href='https://leetcode.com/tabishnaqvi1311/' target='_blank' rel="noreferrer"><SiLeetcode  className='mx-4 cursor-pointer' color='white' size={18}/></a>
        </div>
      </div>
    </section>
  )
}

export default About