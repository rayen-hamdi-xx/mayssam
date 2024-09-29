import dayjs from "dayjs"
import {ReactComponent as  I_CLOCK} from "../assets/icons/i_clock.svg"
import { useState } from "react";
import classNames from "classnames";
import { AnimatePresence,motion } from "framer-motion";
export default function TimePicker(props){
    const [time,setTime]=useState(dayjs());
    return (
        <div onClick={()=>props.setOpen(!props.open)} tabIndex={"0"} className={classNames("flex flex-col cursor-pointer justify-between w-fit min-w-[6.5rem]  h-12  shadow-input bg-neutral-100 hover:shadow-input_hover_red_50 hover:bg-red-50    rounded-[5px] ",{" p-[0.5rem]":!props.open})}>
                   <AnimatePresence>
                    {
                     !props.open ?
                     <>
                    <p className="text-neutral-500 font-normal  text-11 ">Heure</p> 
                    <div className="flex  items-center gap-[0.5rem] ">
                        <I_CLOCK className="h-[12px] w-[12px] "/>
                        <p className="font-medium text-14  text-neutral-900">
                                {time.format("HH:00")}  
                        </p>
                    </div>
                    </>
                     : 

                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}  className="flex flex-col absolute z-10 font-medium text-11  text-neutral-900 bg-neutral-100 drop-shadow-[0_2px_15px_rgba(0,0,0,0.15)] w-[6.5rem] h-[6rem]  rounded-[5px]  overflow-y-scroll">
                    {Array.from({length:24}).map((_,index)=><p className={classNames("p-[0.25rem] hover:bg-neutral-200",{"text-white bg-neutral-800":time.add(index-3,'hour').format("HH:00")===time.format("HH:00")})} onClick={()=>{setTime(time.add(index-3,'hour'));props.setOpen(false)}} key={index}>{time.add(index-3,'hour').format("HH:00")}</p>)}
                     </motion.div>
                    }
                    </AnimatePresence>  
         </div>

    )
}