import {motion} from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills" className="relative">
      <motion.h1 className="text-5xl font-black text-center bricolage-grotesque-600" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>Know My <span className="border-b-4 border-[#84cc14]">Skillset</span></motion.h1>
      <motion.div className="flex justify-center items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-20 my-20">
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/typescript.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/golang.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img width="48px" src="https://img.icons8.com/?size=512&id=40669&format=png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/linux.png" className="" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/bash.png" /> </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://img.icons8.com/color/48/000000/chatgpt.png" /></a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nextjs.png" className="bg-white" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/officel/48/000000/react.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nodejs.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="bg-white" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/docker.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/git.png" /> </a>
          <a href="https://www.python.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" /> </a>
          <a href="https://www.python.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/mongodb.png" /> </a>
          <a href="https://git-scm.com/" target="_blank"> <img src="https://img.icons8.com/?size=512&id=38561&format=png" width={"48px"} /> </a>
        </div>
      </motion.div>
    </section>
  )
}
