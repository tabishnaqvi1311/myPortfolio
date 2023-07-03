import { buttons } from '../constants';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <section id='home' className='h-[100vh]'>
            <div className='sm:flex'>
                <div className='sm:p-20 p-10 inline-flex flex-col'>
                    <div className='lg:text-7xl text-5xl '>
                        <motion.p className='text-text leading-tight font-bold lg:w-full w-60 text' initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: 1, type: 'spring', damping: 15 }}>Hey, my name is <br />
                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-500 to-blue-500'>Tabish</span> Naqvi
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                        <p className='text-text my-7 text-lg'>A 19-year-old MERN stack web developer with a passion <br className={`lg:block hidden`} />for coding and problem-solving. </p>
                    </motion.div>

                    <div className='flex flex-col w-full'>
                        {buttons.map((button) => (
                            <a href={button.linkTo} className='lg:w-1/3'>
                                <motion.button key={button.id} id='button' className={`${button.name === 'Contact Me' ? 'text-text bg-accent' : `bg-text text-accent`} px-6 py-2 rounded-xl my-3 hover:pr-10`} transition={{ delay: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    {button.name === 'Contact Me' ? <ConnectWithoutContactRoundedIcon /> : <DownloadRoundedIcon />}{button.name}
                                </motion.button>
                                {/* change the link of the download button */}
                            </a>
                        ))}
                    </div>
                </div>

                {/* rotating three dimension cube  */}
                {/* <motion.div className='lg:max-h-[90vh] max-h-[50vh] sm:m-10 -mt-40 mb-20' initial={{ x: 1000, opacity: 0 }} animate={{ x: -100, opacity: 1 }} transition={{ delay: 1, type: 'spring', damping: 15 }}>
                    <Cube />
                </motion.div> */}

            </div>
        </section>
    )
}

export default Hero
