import "../styles/Hero.css"
import { Button } from "./Button"
import { motion } from "framer-motion"
import { useScramble } from "use-scramble"

export const Hero = () => {

  const {ref, replay} = useScramble({
    text: "Tabish Naqvi",
    speed: 0.9,
    tick: 2,
    step: 1,
    scramble: 3,
    seed: 0,
    overdrive: false 
  })

  const resumeLink = "https://drive.google.com/file/d/18OA8cEbdEEdlo_TkQ8xw1s-gm9hQh3YY/view?usp=sharing";

  return (
    <motion.section className=" h-screen `" id="home" initial={{ opacity: '0' }} animate={{ opacity: 100 }} transition={{ delay: 0.1 }}>

      <div className="flex lg:flex-row flex-col items-center justify-evenly lg:py-40 p-10 text-center lg:text-start ">
        <div className="flex flex-col items-center gap-8 mb-10">
          <h1 className="lg:text-7xl text-5xl text-center poppins-medium" onMouseOver={replay}>Hey, My name is <br />
          <span className="text-lime-500" ref={ref}>Tabish Naqvi.</span></h1>
          <p className="text-lg text-center space-grotesk-400 text-gray-300">I'm a full stack developer who's into tech and startups. <br /> I love building things and am always open to learn</p>
          <a href={resumeLink} target="_blank">
            <Button content="R E S U M E" />
          </a>
        </div>

        <div className='absolute xs:bottom-10 bottom-10 w-full lg:flex hidden justify-center items-center'>
          <a href='#about'>
            <div className='w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 3.0,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-white mb-1'
              />
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  )
}
