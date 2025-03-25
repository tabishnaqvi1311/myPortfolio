import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-center p-10 gap-2 space-grotesk-400">
        <p className="">Designed and Developed By Tabish Naqvi &copy; {new Date().getFullYear()}</p>
        <a href="https://github.com/tabishnaqvi1311/myPortfolio" className="flex items-center justify-center gap-2 text-gray-400 hover:text-accent">
          <LiaExternalLinkAltSolid/>
          View On GitHub
        </a>
    </div>
  )
}

export default Footer
