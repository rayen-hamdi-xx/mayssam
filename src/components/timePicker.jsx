import dayjs from "dayjs"
import {ReactComponent as  I_CLOCK} from "../assets/icons/i_clock.svg"
import { useState } from "react";
import classNames from "classnames";
import { AnimatePresence,motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
export default function TimePicker(props){
    const isMobile = useMediaQuery("only screen and (max-width : 767px)");
    const isTablet = useMediaQuery("only screen and (max-width : 1024px) and (min-width :768px)");
    const isLaptop = useMediaQuery("only screen and (max-width : 1366px)");
    const isDesktop = useMediaQuery("only screen and (max-width : 1442px)");
    const [time,setTime]=useState(dayjs());
    const hours = useState() //hedhi twali depends mel mediaquery
    
    return (
        <div onClick={()=>props.setOpen(!props.open)} tabIndex={"0"} className={classNames("flex flex-col cursor-pointer justify-between w-fit min-w-[6.5rem]  h-12 tablet:h-16 laptop:h-16 desktop2:h-full desktop:h-full p-[0.5rem] desktop2:p-[0.75rem]  shadow-input bg-neutral-100 hover:shadow-input_hover_red_50 hover:bg-red-50    rounded-[5px] ",{" p-[0.5rem]":!props.open})}>
                   <AnimatePresence>
                    {
                     !props.open ?
                     <>
                    <p className="text-neutral-500 font-normal  text-11 tablet:text-14 laptop:text-14 desktop:text-16 desktop2:text-18 ">Heure</p> 
                    <div className="flex  items-center gap-[0.375rem] desktop:gap-[0.5rem] desktop2:gap-[0.5rem] ">
                        <I_CLOCK className="h-[12px] w-[12px] tablet:h-[16px] tablet:w-[16px] laptop:h-[16px] laptop:w-[16px] dekstop:h-[18px] desktop:h-[18px] desktop2:h-[18px] desktop2:w-[18px] "/>
                        <p className="font-medium text-14 tablet:text-18 laptop:text-18 desktop:text-20 desktop2:text-23  text-neutral-900">
                                {time.format("HH:00")}  
                        </p>
                    </div>
                    </>
                     : 

                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}  className="flex flex-col absolute z-10 font-medium text-11 tablet:text-18 laptop:text-18  desktop:text-20 desktop2:text-23  text-neutral-900 bg-neutral-100 drop-shadow-[0_2px_15px_rgba(0,0,0,0.15)] w-[6.5rem] h-[6rem] tablet:h-[9rem] laptop:h-[9rem] desktop:h-[14rem] desktop2:h-[14rem] rounded-[5px]  overflow-y-scroll">
                    {Array.from({length:24}).map((_,index)=><p className={classNames("p-[0.25rem] hover:bg-neutral-200",{"text-white bg-neutral-800":time.add(index-2,'hour').format("HH:00")===time.format("HH:00")})} onClick={()=>{setTime(time.add(index-2,'hour'));props.setOpen(false)}} key={index}>{time.add(index-2,'hour').format("HH:00")}</p>)}
                     </motion.div>
                    }
                    </AnimatePresence>  
         </div>

    )
}