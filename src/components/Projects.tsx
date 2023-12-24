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
            name: "Enliven",
            desc: "A mental health platform for underpriviliged youth built in Next.js",
            techUsed: ["nextjs", "openai", "shadcn"],
            linkToProject: "https://github.com/tabishnaqvi1311/enliven-sih"

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
            desc: "A recipe webite with fully functional CRUD operations and authentication using jwt",
            techUsed: ["react", "tailwind", "mongodb"],
            linkToProject: "https://github.com/tabishnaqvi1311/CulinaryCrave"
        },
        {
            id: 5,
            name: "3-D Platformer",
            desc: "A 3D platformer built using Unity and C#",
            techUsed: ["unity", "c#", "blender"],
            linkToProject: "https://github.com/tabishnaqvi1311/3dGame"
        }
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