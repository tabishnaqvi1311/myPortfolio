import "../styles/Hero.css"
import { Button } from "./Button"
import { motion } from "framer-motion"
import laptop from "../assets/laptop.png"

export const Hero = () => {
    return (
        <motion.section className=" h-screen `" id="home" initial={{ opacity: '0' }} animate={{opacity: 100}} transition={{ delay: 0.5}}>
            <div className="absolute -top-12 left-0 w-40 h-40 bg-lime-500 bg-opacity-10 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-lime-300 bg-opacity-10 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-gray-200 bg-opacity-5 rounded-full"></div>

            <div className="flex lg:flex-row flex-col items-center justify-evenly lg:py-40 p-10">
                <div className="flex flex-col gap-10 mb-10">
                    <h1 className="lg:text-7xl text-5xl font-black">Hey, My name is <br /><span className="text-lime-500">Tabish</span> Naqvi</h1>
                    <p className="text-lg">A 19-year-old self-made full stack developer <br />with passion for problem-solving using code</p>
                    <a href="https://drive.google.com/file/d/1UW7xliufjd3uT6kqrXDeOZmMdNn0TF5K/view?usp=drive_link">
                        <Button content="R E S U M E" />
                    </a>
                </div>
                <div>
                    <img src={laptop} alt="a laptop" />
                </div>

                <div className='absolute xs:bottom-10 bottom-10 w-full lg:flex hidden justify-center items-center'>
                    <a href='#about'>
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
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
