import { Card } from "./Card";
import {motion} from "framer-motion";

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
            id: 1,
            name: "CulinaryCrave",
            desc: "A recipe webite with fully functional CRUD operations and authentication using jwt",
            techUsed: ["react", "tailwind", "mongodb"],
            linkToProject: "https://github.com/tabishnaqvi1311/CulinaryCrave"

        },
        {
            id: 2,
            name: "Attendance Notifier",
            desc: "Discord bot to notify college attendance on lazy mornings!",
            techUsed: ["puppeteer", "discordAPI", "node"],
            linkToProject: "https://github.com/tabishnaqvi1311/erp-crawler"
        },
        {
            id: 3,
            name: "Twitter Bot",
            desc: "Bot that posts memes on twitter built using Tweepy library",
            techUsed: ["twitter", "Twiiter API", "javascript"],
            linkToProject: "https://github.com/tabishnaqvi1311/twitter-bot"
        },

    ]

    return (
        <div className="p-10" id="projects">
            <div className="">
                <span className="uppercase text-[#84cc14]">My Works</span>
                <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>Projects I've Made</motion.h1>
            </div>
            <div className="flex justify-center items-center p-20">
                <motion.div className="flex lg:flex-row flex-col gap-40" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                    {cardDetails.map((card) => (
                        <Card name={card.name} desc={card.desc} techUsed={card.techUsed} linkToProject={card.linkToProject} key={card.id}/>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}