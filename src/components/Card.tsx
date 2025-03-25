import { FaGithub } from "react-icons/fa"
import { LuGlobe } from "react-icons/lu";
import "../styles/Card.css"

type CardProps = {
    name: string,
    desc: string,
    techUsed: string[],
    linkToProject: string
}

export const Card = ({ name, desc, techUsed, linkToProject }: CardProps) => {
    return (
        <div className="card bg-[#eff5ec] hover:bg-[#f0f9eb] border-2 border-transparent hover:border-lime-600 transition-all duration-200">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>

            <div className="text-black flex flex-col p-5 gap-5 h-fit justify-around" >
                <h1 className="text-xl text-center w-fit text-gray-600 poppins-semibold">{name}</h1>
                <p className="text-lime-600 text-center space-grotesk-500">{desc}</p>
                <div className="flex items-center justify-between">
                    <a href={linkToProject} className="bg-black hover:bg-gray-700 text-white rounded-xl p-2 w-fit text-xs">
                        {linkToProject.includes("github.com") 
                        ? <FaGithub size={30} />
                        : <LuGlobe size={30}/>
                    }
                    </a>
                    <div className="flex space-x-4">
                        {
                            techUsed.map((tech) => (
                                <span className="hover:text-[#88b442] text-sm transition-all duration-200 space-grotesk-500" key={tech}>#{tech}</span>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}