import {motion} from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="absolute top-0 left-0 w-40 h-40 bg-lime-500 bg-opacity-10 rounded-full"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-36 h-36 bg-lime-300 bg-opacity-5 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white bg-opacity-10 rounded-full"></div>
      <motion.h1 className="text-5xl font-black text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>Know My <span className="border-b-4 border-[#84cc14]">Skillset</span></motion.h1>
      <motion.div className="flex justify-center items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-20 my-20">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://img.icons8.com/color/48/000000/javascript.png" /></a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/docker.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/linux.png" className="" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/git.png" /> </a>
          <a href="https://www.python.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" /> </a>
          <a href="https://www.python.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/mongodb.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/officel/48/000000/react.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/mysql.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nodejs.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/typescript.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/python.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nextjs.png" className="bg-white" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/?size=512&id=38561&format=png" width={"48px"} /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="bg-white" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img width="48px" src="https://img.icons8.com/?size=512&id=40669&format=png" /> </a>
        </div>
      </motion.div>
    </section>
  )
}
