import { Card } from "./Card";
import { motion } from "framer-motion";

type CardDetails = {
  id: number,
  name: string,
  desc: string,
  techUsed: string[],
  linkToProject: string
}

export const Projects = () => {

  const cardDetails: CardDetails[] = [
    {
      id: 2,
      name: "Job board for youtubers",
      desc: "My first startup! A complete end to end PaaS for youtubers to find talent",
      techUsed: ["nextjs", "postgresql"],
      linkToProject: "https://usecrimson.me"
    },
    {
      id: 4,
      name: "ManimBot",
      desc: "Render manim code to help you visualize and make learning math more fun",
      techUsed: ["geminiAPI", "go"],
      linkToProject: "https://github.com/tabishnaqvi1311/manimbot-backend"
    },
    {
      id: 5,
      name: "File System Routing",
      desc: "Inspired by Nextjs, a functional file based router built from scratch",
      techUsed: ["express", "ts", "node"],
      linkToProject: "https://github.com/tabishnaqvi1311/file-system-router"
    },
    {
      id: 6,
      name: "Multi Step Form",
      desc: "An extremely optimised, concurrent multi step form that logs data to googel sheets",
      techUsed: ["go", "nextjs", "googleAPI"],
      linkToProject: "https://github.com/tabishnaqvi1311/innoskill-backend"
    },
    {
      id: 1,
      name: "Piston",
      desc: "ClI tool to compress files using Huffman Encoding",
      techUsed: ["clang++", "cpp"],
      linkToProject: "https://github.com/tabishnaqvi1311/piston"
    },
    {
      id: 3,
      name: "sh-auto",
      desc: "cli to generate shell scripts on the fly with status and timing logs",
      techUsed: ["shell script", "go"],
      linkToProject: "https://github.com/tabishnaqvi1311/sh-auto"
    },
  ]

  return (
    <div className="px-10" id="projects">
      <div className="">
        <span className="uppercase text-[#84cc14]">My Works</span>
        <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>Projects I've Made</motion.h1>
      </div>
      <div className="flex justify-center items-center lg:p-20 p-5">
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-40 gap-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          {cardDetails.map((card) => (
            <Card name={card.name} desc={card.desc} techUsed={card.techUsed} linkToProject={card.linkToProject} key={card.id} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
