import React from 'react'
import MailIcon from '@mui/icons-material/Mail';

const BelowHeader = () => {
    return (
        <div className='flex items-center px-10 py-5'>
            <a className='bg-[#1adc61] inline p-5 rounded-full hover:bg-[#18c758]' href='mailto:tabish.naqvi2003@gmail.com'>
                <MailIcon htmlColor='#000' />
            </a>
            <a className='text-white ml-10 text-sm border border-[#6d6d6d] hover:border-white rounded-3xl py-2 px-3' href='https://drive.google.com/file/d/1UW7xliufjd3uT6kqrXDeOZmMdNn0TF5K/view'>Résumé</a>
        </div>
    )
}

export default BelowHeader
