import dayjs from "dayjs"
import {ReactComponent as  I_CLOCK} from "../assets/icons/i_clock.svg"
import { useState } from "react";
import classNames from "classnames";
import { AnimatePresence,motion } from "framer-motion";
export default function TimePicker(props){
    const [time,setTime]=useState(dayjs());

    
    
    return (
        <div onClick={()=>props.setOpen(!props.open)} tabIndex={"0"} className={classNames("flex flex-col cursor-pointer justify-between h-full p-[0.5rem] tablet:p-[0.5rem] laptop:p-[0.5rem] desktop2:p-[0.5rem] desktop2:w-[6rem] desktop:p-[0.5rem] desktop:w-[6rem]  shadow-input bg-neutral-100 hover:shadow-input_hover_red_50 hover:bg-red-50 relative   rounded-[5px] ",{" p-[0.5rem]":!props.open})}>
                   <AnimatePresence>
                    
                     <>
                    <p className="text-neutral-500 font-normal  text-11 tablet:text-14 laptop:text-14 desktop:text-14 desktop2:text-14 ">Heure</p> 
                    <div className="flex  items-center gap-[0.375rem] ">
                        <I_CLOCK className="h-[14px] w-[14px] tablet:h-[16px] tablet:w-[16px] laptop:h-[16px] laptop:w-[16px] desktop:w-[18px] desktop:h-[18px] desktop2:h-[18px] desktop2:w-[18px] self-start desktop:mt-[3px] desktop2:mt-[3px] laptop:mt-1 tablet:mt-1 mt-1"/>
                        <p className="font-medium text-16 tablet:text-18 laptop:text-18 desktop:text-18 desktop2:text-18  text-neutral-900">
                                {time.format("HH:00")}  
                        </p>
                    </div>
                    </>
                    {
                     props.open &&
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}  className="flex flex-col absolute left-0 top-0 z-10 w-full font-medium text-11 tablet:text-18 laptop:text-18  desktop:text-20 desktop2:text-23  text-neutral-900 bg-neutral-100 drop-shadow-[0_2px_15px_rgba(0,0,0,0.15)]  h-[8.5rem] tablet:h-[10.5rem] laptop:h-[10.5rem] desktop:h-[12rem] desktop2:h-[14rem] rounded-[5px]  overflow-y-scroll">
                    {Array.from({length:24}).map((_,index)=><p className={classNames("p-[0.25rem] hover:bg-neutral-200",{"text-white bg-neutral-800":time.add(index-2,'hour').format("HH:00")===time.format("HH:00")})} onClick={()=>{setTime(time.add(index-2,'hour'));props.setOpen(false)}} key={index}>{time.add(index-2,'hour').format("HH:00")}</p>)}
                     </motion.div>
                    }
                    </AnimatePresence>  
         </div>

    )
}