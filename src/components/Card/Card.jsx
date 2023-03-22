import React from 'react'
// import {projects} from '../../constants/main'
import { FaGithub } from "react-icons/fa";


export const projects = [
    {
        id: '0',
        name: 'CulinaryCrave',
        description: 'A Recipe Web App with Countless Recipes',
        gitURL: 'https://github.com/tabishnaqvi1311/CulinaryCrave'
    },
    {
        id: '1',
        name: 'Twitter Bot',
        description: 'Twitter Bot made in Python',
        gitURL: 'https://github.com/tabishnaqvi1311/twitter-bot'
    },
    {
        id: '2',
        name: 'Counter App',
        description: 'Mobile App Powered by Flutter',
        gitURL: 'https://github.com/tabishnaqvi1311/flutter-app-demo'
    },
]


const Card = ({ name, description, gitURL }) => {
    return (
        
        <div className='bg-gradient-to-br from-gray-800 to-black text-white w-[16rem] rounded-lg overflow-hidden mx-1 my-4 shadow-[0_1px_85px_-20px_rgba(0,0,0,0.3)] shadow-black'>
            <div className='p-5 flex flex-col justify-between h-[260px]'>
                <h2 className='text-2xl font-semibold mb-3'>{name}</h2>
                <p className='text-white'>{description}</p>
                <div className='flex items-center my-2'>
                    <FaGithub size={21}/>
                    <a href={gitURL} target='_blank' rel="noreferrer" className='bg-accents text-gray-100 hover:bg-other rounded-full py-3 px-4 text-sm font-semibold mx-3'>
                        View On GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card