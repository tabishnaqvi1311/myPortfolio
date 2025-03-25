// import Blogs from "./components/Blogs"
import { ContactMe } from "./components/ContactMe"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import Footer from "./components/Footer"
import CodingActivity from "./components/CodingActivity"
import StarPrompt from "./components/StarPrompt"
import { Skills } from "./components/Skills"

const App = () => {

  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000)
  // }, [])

  return (
    <>
      {/* {isLoading ? <Loading /> : ( */}
        <>
          <div className="main">
            <Navbar />
            <Hero />
            {/* <Timeline /> */}
            <CodingActivity />
            <Projects />
            <Skills />
            {/* <Blogs/> */}
            <ContactMe />
            <Footer />
            <StarPrompt/>
            {/* <Cursor/> */}
          </div>
        </>
      {/* ) */}
      {/* } */}
    </>
  )
}

export default App
