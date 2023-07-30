import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
    return (
        <div className='flex justify-end'>
            <div className="bg-[url('./assets/bgHeader.png')] h-[40vh] bg-cover w-full">
                <div className='p-10 mt-20 text-white'>
                    <div className='flex flex-row items-center'>
                        <VerifiedIcon htmlColor='#3e91f4'/>
                        <span className='ml-2 text-sm'>Verified Developer</span>
                    </div>
                    <h1 className='text-8xl font-bold my-3 tracking-tighter'>Tabish Naqvi</h1>
                    <span className='text-sm'>372 contributions to open source</span>
                </div>
            </div>
        </div>
    )
}

export default Header
