import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"

const StarPrompt = () => {

    const [seenCount, setSeenCount] = useState<number>(0);
    const effectRef = useRef<boolean>(false);

    const [toggle, setToggle] = useState<boolean>(true);

    useEffect(() => {
        if (effectRef.current) return;
        let seenCount: number = parseInt(localStorage.getItem("seenCount") || "0", 10);
        if (seenCount < 4) seenCount++;
        localStorage.setItem("seenCount", seenCount.toString());
        setSeenCount(seenCount)
        effectRef.current = true;
    }, []);

    const modalVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <AnimatePresence>
            {
                seenCount >= 3 && toggle && (
                    <motion.div className=" bottom-7 p-4 z-10  rounded-full fixed right-7 bg-[#eff5ec] text-black text-xs inline-block hover:bg-[#d2e1cb] transition-all duration-200" onClick={() => setToggle(false)} initial="hidden" animate="visible" exit="hidden" variants={modalVariants}>
                        <a href="https://github.com/tabishnaqvi1311/myPortfolio" target="_blank">👋 If you enjoyed my portfolio, consider starring it!</a>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default StarPrompt