import React from 'react'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const About = () => {
  return (
    <section id='aboutMe' className='lg:w-1/2'>
      <div className='p-10 lg:ml-40'>
        <p className='my-3 text-[#686e7f] text-xl'>KNOW MORE</p>
        <h2 className='text-6xl text-white flex font-bold'><span className='border-b-8 border-accents '>Abo</span>ut Me</h2>
        <p className='py-10 text-white text-left lg:mr-40 text-lg'>
          Hello there! My name is Tabish Naqvi, and I'm a MERN stack web developer with a passion for coding and problem-solving. At just 19 years old, I'm excited to be a part of the tech industry and constantly push my limits as a developer.

          I have experience in developing web applications using the MERN stack, which includes MongoDB, Express, React, and Node.js. My goal is to create robust, efficient, and user-friendly applications that can provide a seamless experience to the end-user.

          Although I'm relatively new to competitive programming and DSA, I'm always eager to learn and improve my skills. I believe that the combination of strong coding abilities and knowledge of DSA is essential to create more efficient algorithms and better solutions for complex problems.

          When I'm not coding, you can find me indulging in my hobbies, which include reading, video editing and playing video games. These hobbies help me stay creative, grounded, and focused. I find that my hobbies provide a nice break from the fast-paced world of coding and help me come back to my work with a fresh perspective.
        </p>
        <p className='text-white flex flex-row'>
          <FiMail size={20} color='white' />
          <span className='ml-3'>tabish.naqvi2003@gmail.com</span>
        </p>
        <div className='flex flex-row mt-2 text-white'>
          <a href='https://github.com/tabishnaqvi1311' target='_blank' rel="noreferrer"><FaGithub className='mr-4 cursor-pointer' color='white' size={18} /></a>|
          <a href='https://www.linkedin.com/in/tabish-naqvi-a4a723103/' target='_blank' rel="noreferrer"><FaLinkedin className='mx-4 cursor-pointer' color='white' size={18} /></a>|
          <a href='https://twitter.com/gunhawke23' target='_blank' rel="noreferrer"><FaTwitter className='mx-4  cursor-pointer' color='white' size={18} /></a>|
          <a href='https://leetcode.com/tabishnaqvi1311/' target='_blank' rel="noreferrer"><SiLeetcode className='mx-4 cursor-pointer' color='white' size={18} /></a>
        </div>
      </div>
    </section>
  )
}

export default About