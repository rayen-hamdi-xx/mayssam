import { currencyContext } from "./hooks/contexts/useCurrency";
import { useContext, useRef, useState } from "react";
import classNames from "classnames";
import {ReactComponent as I_POLY} from "../assets/icons/i_polygon.svg"
import { AnimatePresence, motion } from "framer-motion";

export default function CurrencyMenu(){
    const menuRef = useRef(null)
    /*najem nbadel el currencies w facteur mteehom mel array hedha */
    const currencies = [["TND (DT)","DT",1],["USD ($)","$",4],["EUR (€)","€",3],["GBP (£)","£",5]];
    const {currency,setCurrency,symb,setSymb,setFactor}=useContext(currencyContext);
    const [isEnabled,setIsEnabled] = useState(false);

    return (
        <div className="flex flex-col items-center relative min-w-14 "> 
                    <button onClick={()=>{setIsEnabled(!isEnabled);}} className={classNames("flex text-whit   w-fit  items-center gap-[0.25rem] cursor-pointer text-23 tablet:text-14 laptop:text-16 desktop:text-16 desktop2:text-16   font-medium",{"text-white opacity-100": isEnabled,"opacity-90 hover:text-white hover:opacity-100":!isEnabled})}>{currency}<I_POLY className={classNames("transition-transform duration-100 ease-in-out",{"rotate-180":isEnabled})} /></button>
                   
                   <AnimatePresence>
                   { 
                   isEnabled && 
                   
                   <motion.ul initial={ {opacity:0,y:-10}} exit={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.2,type:"spring"}}  ref={menuRef} className="bg-whit text-neutral-900 rounded-[0.25rem] text-nowrap absolute top-[2rem]">
                        {currencies.map((curr,index)=>
                           ( <li onClick={()=>{setSymb(curr[1]);setFactor(curr[2]);setCurrency(curr[0].slice(0, curr[0].indexOf(" ")));setIsEnabled(false)}} key={index} className={classNames("py-[0.125rem]  active:bg-neutral-800 active:text-white text-semibold text-23 tablet:text-14 laptop:text-16 desktop:text-18 cursor-pointer px-[0.5rem]",{"bg-neutral-800 text-white":curr[0].slice(0,curr[0].indexOf(" "))===currency," hover:bg-neutral-300":curr[0].slice(0,curr[0].indexOf(" "))!==currency,"rounded-t-[0.25rem]":index===0,"rounded-b-[0.25rem]":index===currencies.length-1})}>{curr[0]}</li>)
                    
                    )}
                   </motion.ul>
                   
                    } 
                     </AnimatePresence>
        </div>
    )
}