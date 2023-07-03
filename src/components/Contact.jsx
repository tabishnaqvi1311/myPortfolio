import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');

  const handleSubmit = async (event) => {
    console.log(`handlesubmit ran`);
    event.preventDefault();
    try {
      console.log(clientName)
      console.log(clientEmail)
      console.log(clientMessage)
      setClientEmail('')
      setClientName('')
      setClientMessage('')
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <section id='contactme' className=''>
      <div className='p-10 my-10'>
        <h3 className='text-5xl text-text font-bold inline'>Contact Me</h3>
        <div className='lg:w-1/2 my-20'>

          <motion.form className='flex flex-col text-text lg:text-base text-sm' autoComplete='off' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1}} onSubmit={handleSubmit}>
            <div className='flex lg:flex-row flex-col justify-between lg:my-20'>
              <motion.input type='text' placeholder="What's Your Name?" name='name' className='p-5 lg:w-1/3 bg-transparent focus:outline-none border-b-2 ' value={clientName} onChange={e => setClientName(e.target.value)} required initial={{borderBottomColor: '#d3f1fd'}} whileFocus={{borderBottomColor: '#ea4a0b'}}/>

              <motion.input type='email' placeholder="What's Your Email?" name='email' className='p-5 lg:w-1/2 bg-transparent focus:outline-none border-b-2' value={clientEmail} onChange={e => setClientEmail(e.target.value)} required initial={{borderBottomColor: '#d3f1fd'}} whileFocus={{borderBottomColor: '#ea4a0b'}}/>
            </div>

            <motion.textarea type='text-area' rows={1} name='message' placeholder="What's Your Message?" className='my-10 p-5 bg-transparent focus:outline-none border-b-2' value={clientMessage} onChange={e => setClientMessage(e.target.value)} required initial={{borderBottomColor: '#d3f1fd'}} whileFocus={{borderBottomColor: '#ea4a0b'}}/>

            <button type='submit' className='border my-5 p-2 bg-text text-background hover:text-accent lg:text-lg'>Send</button>

          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contact