import { TimelineCard } from "./TimelineCard";
import { FiActivity } from "react-icons/fi"
import { AiOutlineLaptop } from "react-icons/ai";
import { HiCode } from "react-icons/hi";

import { motion } from "framer-motion";

export const Timeline = () => {

  return (

    <section id="about">
      <div className=" text-white lg:py-8 py-20 lg:mt-0 mt-20">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <motion.div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <p className="ml-2 text-[#83cb15] uppercase tracking-loose">About Me</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-black">My Journey in Tech</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Hey, I'm a computer science student and a self-taught full stack developer who's into tech, startups and building projects that really matter. When I'm not coding, I'm either brainstorming my next project, reading or out with friends.
            </p>
            <p>Doing Currently: <span className="text-accent">Machine Learning</span></p>
          </motion.div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ right: "50%", border: "2px solid #83cb15", borderRadius: "1%" }}></div>
                <div className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ left: "50%", border: "2px solid #83cb15", borderRadius: "1%" }}></div>
                <TimelineCard
                  content={"At the age of 17, Tabish developed interest in web development and explored various other domains with a curious mind."}
                  isEven={false}
                  icon={<FiActivity size={25} color="black" />}
                />
                <TimelineCard
                  content={"In his fresher year, he dived deep into full stack development, contributed to open source, worked on problem solving skills, participated in several hackathons and was part of Microsoft Learn Student Chapter, TIET"} isEven={true}
                  icon={<AiOutlineLaptop size={25} color="black" />}
                />
                <TimelineCard
                  content={"As a sophomore, Tabish refined his skills through freelancing, exploring machine learning and data science. He was also a grand finalist at the Smart India Hackathon 2023 "}
                  isEven={false}
                  icon={<HiCode size={25} color="black" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
