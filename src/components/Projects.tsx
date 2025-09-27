import { Card } from "./Card";
import { motion } from "framer-motion";

type CardDetails = {
    id: number;
    name: string;
    desc: string;
    techUsed: string[];
    linkToProject: string;
};
const cardDetails: CardDetails[] = [
    {
        id: 69,
        name: "Manav Rachna Sports Academy Website",
        desc: "Built a full stack athlete management and event registration portal for MRSA with coach login via OTP, admin panel, payment gateway in a week's time",
        techUsed: ["nextjs", "fast2sms", "expressjs"],
        linkToProject: "https://mrsa-in.vercel.app",
    },
    {
        id: 1202,
        name: "Faridabad Badminton Association Website",
        desc: "Delivered a website-cum-registration portal for FDBA involving an admin portal, payment gateway, CMS and file upload with a self hosted backend",
        techUsed: ["nextjs", "expressjs", "sanity"],
        linkToProject: "https://fdba.vercel.app",
    },
    {
        id: 2,
        name: "Job board for youtubers",
        desc: "My first startup! A complete end to end PaaS for youtubers to find talent",
        techUsed: ["nextjs", "postgresql"],
        linkToProject: "https://usecrimson.me",
    },
    {
        id: 4,
        name: "Math Concept Visualiser",
        desc: "Tool to render manim code to help you visualize and make learning math fun",
        techUsed: ["geminiAPI", "go"],
        linkToProject: "https://github.com/tabishnaqvi1311/manimbot-backend",
    },
    {
        id: 5,
        name: "File System Routing",
        desc: "Inspired by Nextjs, a functional file based router built from scratch",
        techUsed: ["express", "ts", "node"],
        linkToProject: "https://github.com/tabishnaqvi1311/file-system-router",
    },
    {
        id: 6,
        name: "Multi Step Form",
        desc: "An extremely optimised, concurrent multi step form that logs data to google sheets",
        techUsed: ["go", "nextjs", "googleAPI"],
        linkToProject: "https://github.com/tabishnaqvi1311/innoskill-backend",
    },
    {
        id: 1,
        name: "Piston",
        desc: "ClI tool to compress files using Huffman Encoding",
        techUsed: ["clang++", "cpp"],
        linkToProject: "https://github.com/tabishnaqvi1311/piston",
    },
    {
        id: 3,
        name: "sh-auto",
        desc: "cli to generate shell scripts on the fly with status and timing logs",
        techUsed: ["shell script", "go"],
        linkToProject: "https://github.com/tabishnaqvi1311/sh-auto",
    },
];
export const Projects = () => {
    return (
        <div className="px-10" id="projects">
            <div className="">
                <span className="text-[#84cc14] poppins-regular">My Works</span>
                <motion.h1
                    className="text-5xl bricolage-grotesque-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    Projects I've Made
                </motion.h1>
            </div>
            <div className="flex justify-center items-center lg:p-20 p-5">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 lg:gap-30 gap-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    {cardDetails.map((card) => (
                        <Card
                            name={card.name}
                            desc={card.desc}
                            techUsed={card.techUsed}
                            linkToProject={card.linkToProject}
                            key={card.id}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
