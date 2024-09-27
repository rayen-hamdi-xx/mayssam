import logosrc from "../assets/images/p_logo.png"
import CurrencyMenu from "./currencyMenu"
import {ReactComponent as  I_LOGIN} from "../assets/icons/i_login.svg"
import {X} from "lucide-react"
import {AnimatePresence, motion} from "framer-motion"
export default function Navmodal(props){
    return (
   
    <motion.div initial={{opacity:0.9,x:"-100vw"}} animate={{opacity:1,x:0}} exit={{x:"-100vw"}} transition={{duration:0.3,type:"tween"}} className="h-[100vh] w-[100vw] flex flex-col py-4 items-center justify-around gap-6  absolute top-0 z-10 bg-neutral-900  text-white">
        <X className="absolute top-3 text-neutral-300 hover:text-neutral-50 cursor-pointer  right-3" onClick={()=>props.setModal(false)}></X>
        <img className="self-center" src={logosrc}/>
        <div className="w-[85%] h-[2px] bg-neutral-400 rounded-[2px]"> </div>
        <div className="text-whit  flex flex-col items-center text-  gap-[1.5rem] font-medium text-23  ">
                <p className="hover:text-white  opacity-90 hover:opacity-100 cursor-pointer">Nos Voitures</p>
                <p  className="hover:text-white opacity-90 hover:opacity-100 cursor-pointer">Nos    Agences</p>
                <p  className="hover:text-white opacity-90  hover:opacity-100 cursor-pointer">Contact</p>
                <CurrencyMenu></CurrencyMenu>
        </div>
        <div className="bg-red-600  rounded-[4px] py-2 px-8  cursor-pointer flex items-center gap-2 text-23 font-medium">S'inscrire<I_LOGIN></I_LOGIN></div>
        
    </motion.div>
    )
}