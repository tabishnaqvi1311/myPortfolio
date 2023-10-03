import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { SiLeetcode, SiHashnode } from "react-icons/si"
import { motion } from "framer-motion";

export const ContactMe = () => {
    return (
        <section id="contact" className="relative">

            <div className="absolute bottom-1/2 right-1/4 w-48 h-48 bg-lime-300 bg-opacity-10 rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-gray-200 bg-opacity-5 rounded-full"></div>
            <motion.div className="flex lg:flex-row flex-col justify-center items-center lg:gap-40 gap-20 lg:py-40 py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div>
                    <span className="text-[#83cb15]">Contact Me</span>
                    <h1 className="text-5xl font-black">Get In Touch</h1>
                    <a href="mailto:tabish.naqvi2003@gmail.com " className="text-sm text-[#83cb15]">tabish.naqvi2003@gmail.com</a>
                </div>
                <div className="flex gap-10">
                    <a href="https://github.com/tabishnaqvi1311">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://linkedin.com/in/tabish-naqvi-a4a723103/">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://twitter.com/gunhawke23">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://leetcode.com/tabishnaqvi1311/">
                        <SiLeetcode size={30} />
                    </a>
                    <a href="https://gunhawke.hashnode.dev/">
                        <SiHashnode size={30} />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}