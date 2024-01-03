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
            name: "Moyaai",
            desc: "A job matching platform for Youtubers and job seekers that puts community building first",
            techUsed: ["youtubeAPI", "mongodb", "react"],
            linkToProject: "https://moyaai.tech"
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
            techUsed: ["twitter", "Twiter API", "python"],
            linkToProject: "https://github.com/tabishnaqvi1311/twitter-bot"
        },
        {
            id: 4,
            name: "CulinaryCrave",
            desc: "A recipe webite built with the Spoonacular API",
            techUsed: ["react", "tailwind", "spoonacular"],
            linkToProject: "https://github.com/tabishnaqvi1311/CulinaryCrave"
        },
        {
            id: 5,
            name: "3-D Platformer",
            desc: "A 3D platformer game built using Unity and C#",
            techUsed: ["unity", "c#", "blender"],
            linkToProject: "https://github.com/tabishnaqvi1311/3dGame"
        },
        {
            id: 6,
            name: "Enliven",
            desc: "A mental health ecosystem (website+game) for children built in Next.js",
            techUsed: ["c#", "unity", "nextjs"],
            linkToProject: "https://github.com/tabishnaqvi1311/enliven-sih"

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
                        <Card name={card.name} desc={card.desc} techUsed={card.techUsed} linkToProject={card.linkToProject} key={card.id}/>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}