// import Blogs from "./components/Blogs"
import { useEffect, useState } from "react"
import { ContactMe } from "./components/ContactMe"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Timeline } from "./components/Timeline"
import { Loading } from "./components/Loading"
import Footer from "./components/Footer"

const App = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      {isLoading ? <Loading /> : (
        <div className="main">
          <Navbar />
          <Hero />
          <Timeline />
          <Skills />
          <Projects />
          {/* <Blogs/> */}
          <ContactMe />
          <Footer/>
        </div>
      )
      }
    </>
  )
}

export default App
