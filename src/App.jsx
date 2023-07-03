import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
    {/* <Cube /> */}
      <div className="bg-background overflow-x-hidden ">
      <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
