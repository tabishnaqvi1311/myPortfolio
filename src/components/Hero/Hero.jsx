import React from 'react'
import { useState, useEffect } from 'react'
import { mySkills } from '../../constants/main';
import Stats from '../Stats/Stats';
import './Hero.css'

const Hero = () => {


    const [myName, setName] = useState(mySkills[0].title);
    const [index, setIndex] = useState(0);

    // eslint-disable-next-line
    const glitch = async () => {
        let textTobeGlitched = document.getElementById("glitchText");
        textTobeGlitched.style.textShadow = '10px 0px teal'
        textTobeGlitched.style.color = 'teal'
        textTobeGlitched.style.transform = 'translateY(5px)'
        await new Promise(resolve => setTimeout(resolve, 80));
        textTobeGlitched.style.textShadow = '0px -15px pink'
        textTobeGlitched.style.color = 'pink'
        textTobeGlitched.style.transform = 'translateX(10px)'
        await new Promise(resolve => setTimeout(resolve, 80));
        textTobeGlitched.style.textShadow = '10px 0px green'
        textTobeGlitched.style.transform = 'translateX(-10px)'
        textTobeGlitched.style.color = 'teal'
        textTobeGlitched.style.transform = 'translateY(-5px)'
        await new Promise(resolve => setTimeout(resolve, 80));
        textTobeGlitched.style.color = 'white'
        textTobeGlitched.style.textShadow = '0px 0px white'
        // console.log("glitch fired");
    }


    useEffect(() => {
        const interValId = setInterval(() => {
            setIndex((index) => (index + 1) % mySkills.length);
            glitch();
        }, 3000);
        return () => clearInterval(interValId);
    }, []);

    useEffect(() => {
        setName(mySkills[index].title)
    }, [index]);

    return (
        <section id='home' className={`flex md:flex-row flex-col bg-background `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16`}>
                <div className='flex flex-col justify-around items-center text-white '>
                    <p id='glitchText' className={`font-semibold absolute top-[100px] z-0 text-4xl lg:text-7xl xl:text-8xl uppercase text-center  py-10 px-2 w-90 tracking-normal glitch`}>{myName}</p>
                </div>
                <p id='glowy' className='my-10 relative top-[120px] z-0 font-medium  sm:text-base md:text-2xl text-[#9c9c9c] text-center '>I Enjoy Creating Unique User Experiences</p>
                <Stats />
            </div>
        </section>

    )
}


export default Hero