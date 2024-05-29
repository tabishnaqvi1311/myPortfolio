import { FaGithub } from "react-icons/fa"
import "../styles/Card.css"

type CardProps = {
    name: string,
    desc: string,
    techUsed: string[],
    linkToProject: string
}

export const Card = ({ name, desc, techUsed, linkToProject }: CardProps) => {
    return (
        <div className="card" style={{backgroundColor: "#eff5ec"}}>
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

            <div className="text-black flex flex-col p-5 gap-5 h-60 justify-around" >
                <h1 className="text-xl text-center font-bold border-b-4 w-fit border-[#84cc14]">{name}</h1>
                <p className="text-lime-600 font-semibold text-center capitalize">{desc}</p>
                <div className="flex items-center justify-between">
                    <a href={linkToProject} className="bg-black hover:bg-gray-700 text-white rounded-xl p-2 w-fit text-xs">
                        <FaGithub size={30} />
                    </a>
                    <div className="flex gap-1">
                        {
                            techUsed.map((tech) => (
                                <span className="hover:text-[#88b442] text-xs transition-all duration-200" key={tech}>#{tech}</span>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}