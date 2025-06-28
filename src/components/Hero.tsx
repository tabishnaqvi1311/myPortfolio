import "../styles/Hero.css";
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";

export const Hero = () => {
    const { ref, replay } = useScramble({
        text: "Tabish Naqvi",
        speed: 0.9,
        tick: 2,
        step: 1,
        scramble: 3,
        seed: 0,
        overdrive: false,
    });
    return (
        <motion.section
            className="h-screen"
            id="home"
            initial={{ opacity: "0" }}
            animate={{ opacity: 100 }}
            transition={{ delay: 0.1 }}
        >
            <div className="flex md:flex-row flex-col items-center justify-evenly md:py-24 md:px-10 px-5 text-center">
                <div className="flex flex-col items-center gap-8 mb-10">
                    <h1
                        className="lg:text-7xl text-5xl text-left poppins-medium w-3/4"
                        onMouseOver={replay}
                    >
                        Hey, My name is <br />
                        <span className="text-lime-500" ref={ref}>
                            Tabish Naqvi.
                        </span>
                    </h1>
                    <p className="text-lg text-left space-grotesk-400 text-gray-300 w-3/4">
                        I'm a full-stack developer familiar with JS/TS
                        ecosystems, with additional experience writing Go and
                        Java.
                        <br />
                        <br /> I've delivered multiple freelance projects,
                        interned at a startup, and failed to build my own once.{" "}
                        <br />
                        <br /> I'm open to work or collaborate,{" "}
                        <a href="#contact" className="underline text-lime-500">
                            contact me
                        </a>
                    </p>
                </div>
                <div className="absolute xs:bottom-10 bottom-10 w-full md:flex hidden justify-center items-center">
                    <a href="#about">
                        <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 3.0,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className="w-3 h-3 rounded-full bg-white mb-1"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </motion.section>
    );
};
