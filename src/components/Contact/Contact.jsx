import React from 'react'
// import emailjs from '@emailjs/browser'
import { useState } from 'react'

const Contact = () => {

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');


  const submitMsg = async () => {
    console.log('submitMsg ran');
    const response = await fetch('http://localhost:3001/submit', {

      method:'POST',

      headers: {'Content-type': 'application/json'},

      body: JSON.stringify({
        clientName: clientName,
        clientEmail: clientEmail,
        clientMessage: clientMessage
      })
    });

    const json = await response.json();
    console.log(json);
    setClientName('');
    setClientEmail('');
    setClientMessage('');
    console.log(`resetting values`);
  }

  const handleSubmit = async(event) => {
      console.log(`handlesubmit ran`);
      event.preventDefault();
      await submitMsg();
  }


  return (
    <section id='contactMe' className='lg:w-1/2'>

      <div className='xl:mt-12 xl:flex-row flex-col-reverse overflow-hidden p-10 '>
        <p className='text-xl text-gray-500'>GET IN TOUCH</p>
        <h3 className='text-5xl my-3 text-white font-bold'><span className='border-b-8 border-accents'>Conta</span>ct Me</h3>

        <form className='mt-12 flex flex-col gap-8' onSubmit={handleSubmit}>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' placeholder="What's Your Name?" className='bg-[#1e293b] placeholder:text-gray-200 placeholder:font-light text-white rounded-lg outline-none border-none font font-medium p-4' value={clientName}  onChange={event =>setClientName(event.target.value)} required />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' placeholder="What's Your Email?" className='bg-[#1e293b] placeholder:text-gray-200 placeholder:font-light text-white rounded-lg outline-none border-none font font-medium p-4' value={clientEmail} onChange={event => setClientEmail(event.target.value)} required />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='6' type='text-area' name='name' placeholder="What is Your Message?" className='bg-[#1e293b] placeholder:text-gray-200 placeholder:font-light text-white rounded-lg outline-none border-none font font-medium p-4' value={clientMessage} onChange={event => setClientMessage(event.target.value)} required />
          </label>

          <button type='submit' className='bg-accents hover:bg-other py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#111b30] rounded-xl'
          >
            {/* {loading?'Sending...':'Send'} */}Send
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact