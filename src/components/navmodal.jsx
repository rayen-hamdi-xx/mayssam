import logosrc from "../assets/images/p_logo.png"
import CurrencyMenu from "./currencyMenu"
import {ReactComponent as  I_LOGIN} from "../assets/icons/i_login.svg"
import {X} from "lucide-react"
import {AnimatePresence, motion} from "framer-motion"
export default function Navmodal(props){
    return (
   
    <motion.div initial={{opacity:0.9,x:"-100vw"}} animate={{opacity:1,x:0}} exit={{x:"-100vw"}} transition={{duration:0.3,type:"tween"}} className="h-[100vh] w-[100vw] flex flex-col   items-center py-4 gap-6  absolute top-0 z-10 bg-neutral-900  text-white">
        <div className="flex  w-full px-4 justify-between">
        <img className="h-16 " src={logosrc}/>
        <X size={32} className=" text-neutral-300 hover:text-neutral-50 cursor-pointer  right-3" onClick={()=>props.setModal(false)}></X>
        </div>
        <div className="w-full h-[2px] bg-white  rounded-[2px]"> </div>
        <div className="text-whit  flex flex-col px-4 self-start items-start   gap-[2rem] font-semibold text-23  ">
                <p className="hover:text-white  opacity-90 hover:opacity-100 cursor-pointer">Nos Voitures</p>
                <p  className="hover:text-white opacity-90 hover:opacity-100 cursor-pointer">Nos Agences</p>
                <p  className="hover:text-white opacity-90  hover:opacity-100 cursor-pointer">Contactez-Nous</p>
                <CurrencyMenu></CurrencyMenu>
        </div>
        
    </motion.div>
    )
}