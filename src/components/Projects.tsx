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
      id: 5,
      name: "File System Routing",
      desc: "Inspired by Nextjs, a functional file based router built from scratch",
      techUsed: ["express", "ts", "node"],
      linkToProject: "https://github.com/tabishnaqvi1311/3dGame"
    },
    {
      id: 2,
      name: "Attendance Notifier",
      desc: "Discord bot to notify college attendance on lazy mornings!",
      techUsed: ["puppeteer", "discordAPI", "node"],
      linkToProject: "https://github.com/tabishnaqvi1311/erp-crawler"
    },
    {
      id: 4,
      name: "EZ:Ticket",
      desc: "dApp for college event ticket distribution through NFTs",
      techUsed: ["solidity", "etherjs", "metamask"],
      linkToProject: "https://github.com/tabishnaqvi1311/ezticket-website"
    },
    {
      id: 6,
      name: "Splyrics",
      desc: "Chrome extension that brings back paywalled spotify lyrics",
      techUsed: ["javascript", "chromeAPI"],
      linkToProject: "https://github.com/tabishnaqvi1311/splyrics"
      
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
      name: "Twitter Bot",
      desc: "Bot that posts memes on twitter built using Tweepy library",
      techUsed: ["Twiter API", "python"],
      linkToProject: "https://github.com/tabishnaqvi1311/twitter-bot"
    },
  ]

  return (
    <div className="p-10" id="projects">
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
