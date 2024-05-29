import { ReactElement } from "react"
import {motion} from "framer-motion"

type TimelineCardProps = {
    content: string,
    isEven: boolean,
    icon: ReactElement
}

export const TimelineCard = ({ content, isEven, icon }: TimelineCardProps) => {
    return (
        <>
            <motion.div className={`mb-8 flex justify-between items-center w-full ${isEven ? "right-timeline": "left-timeline flex-row-reverse"}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-3 font-bold text-lg md:text-2x bg-[#83cb15] inline-flex p-2 rounded-xl">{icon}</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 hover:text-accent transition-all duration-200">
                        {content}
                    </p>
                </div>
            </motion.div>
        </>
    )
}
