import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type mouseState = {
    x: number,
    y: number
}

export default function Cursor() {

    const [mousePos, setMousePos] = useState<mouseState>({ x: 0, y: 0 });


    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePos.x - 7, y: mousePos.y - 7
        }
    }

    return (
        <motion.div className="bg-white h-[15px] w-[15px] rounded-full fixed top-0 left-0 z-30 lg:block hidden" variants={variants} animate={"default"}>
        </motion.div>
    )
}