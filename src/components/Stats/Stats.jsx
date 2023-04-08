import React, { useState } from 'react'
import { myStats } from '../../constants/main'
import { Circle } from 'rc-progress'
import { softStats } from '../../constants/main'
import './Stats.css'

const Stats = () => {
    return (
        <>
            <div id='stats' className='text-white my-[9rem] flex flex-col justify-center items-center rounded-3xl bg-transparent p-5 mx-10 border-teal-800 border-4'>
                <p className='text-[30px] text-center font-semibold'>PLAYER STATS 🚀</p>
                <div className='flex flex-col lg:flex-row'>
                    {myStats.map((stat, index) => (
                        <div key={stat.id} className='flex flex-col items-center justify-center p-5'>
                            <div className='tracking-widest text-[17px] font-medium'>{stat.title}</div>
                            <Circle percent={stat.amount} strokeColor='teal' strokeWidth={15} trailWidth={12} className='my-2 mx-2 h-20 hover:'  />
                        </div>
                    ))}
                </div>
                <div className='text-[30px] flex flex-col justify-center items-center font-semibold'>
                    MISCELLANEOUS &rarr;
                </div>
                <div>
                    <ul className='flex flex-col lg:flex-row my-2 justify-center items-center font-medium'>
                        {softStats.map((sftstat, index) => (
                            <li id='soft' className={`tracking-wide my-2 mx-5 p-3 border-2 shadow-[2px_4px_1px_rgba(0,0,0,0.25)] hover:translate-x-2 hover:translate-y-2 shadow-white hover:shadow-[3px_4px_1px_rgba(0,0,0,0.25)] hover:bg-teal-900 rounded-xl`}>{sftstat.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Stats