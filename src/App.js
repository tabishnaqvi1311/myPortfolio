import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/AboutMe/About';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Projects />
      <div className='flex lg:flex-row flex-col-reverse justify-between items-center bg-background'>
        <Contact />
        <About />
      </div>
    </>
  )
}
export default App