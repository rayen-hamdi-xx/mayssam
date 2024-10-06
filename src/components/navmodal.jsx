import logosrc from "../assets/images/p_logo.png"
import CurrencyMenu from "./currencyMenu"
import {ReactComponent as  I_LOGIN} from "../assets/icons/i_login.svg"
import {X} from "lucide-react"
import {AnimatePresence, motion} from "framer-motion"
import { currencyContext } from "./hooks/contexts/useCurrency";
import { useContext } from "react"
import classNames from "classnames"
export default function Navmodal(props){
    const currencies = [["TND (DT)","DT",1],["USD ($)","$",4],["EUR (€)","€",3],["GBP (£)","£",5]];
    const {currency,setCurrency,symb,setSymb,setFactor}=useContext(currencyContext);
    
    return (
    <motion.div initial={{opacity:0.9,x:"-100vw"}} animate={{opacity:1,x:0}} exit={{x:"-100vw"}} transition={{duration:0.3,type:"tween"}} className="h-[100vh] w-[100vw] flex flex-col   items-center py-4 gap-6  fixed  top-0 z-10 bg-neutral-900  text-white">
        <div className="flex  w-full px-4 justify-between">
        {/*<img className="h-16 " src={logosrc}/>*/}
        <div className="text-26 font-semibold">Mayssam Rent a Car </div>
        <X size={36} className=" text-neutral-300 hover:text-neutral-50 cursor-pointer  right-3" onClick={()=>props.setModal(false)}></X>
        </div>
        <div className="w-full h-[1px] bg-red-700  rounded-[2px]"> </div>
        <div className="text-whit  flex flex-col px-4 self-start items-start   gap-[2rem] font-semibold text-23  ">
                <p className="hover:text-white  opacity-90 hover:opacity-100 cursor-pointer px-4">Nos Voitures</p>
                <p  className="hover:text-white opacity-90 hover:opacity-100 cursor-pointer px-4">Nos Agences</p>
                <p  className="hover:text-white opacity-90  hover:opacity-100 cursor-pointer px-4   ">Contactez-Nous</p>

                <ul  className="flex gap-4 px-4">
                {currencies.map((curr,index)=>
                           ( <li onClick={()=>{setSymb(curr[1]);setFactor(curr[2]);setCurrency(curr[0].slice(0, curr[0].indexOf(" ")))}} key={index} className={classNames("py-[0.125rem] text-center     active:bg-neutral-800 rounded-[4px] active:text-white text-semibold text-23 cursor-pointer px-[0.5rem]",{"bg-red-500 text-white":curr[0].slice(0,curr[0].indexOf(" "))===currency," hover:bg-neutral-300":curr[0].slice(0,curr[0].indexOf(" "))!==currency,"rounded-t-[0.25rem]":index===0,"rounded-b-[0.25rem]":index===currencies.length-1})}>{curr[0].slice(0, curr[0].indexOf(" "))}</li>)
                    
                    )}
                </ul>

        </div>
        
    </motion.div>
    )
}