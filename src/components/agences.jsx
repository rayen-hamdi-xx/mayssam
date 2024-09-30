import {ReactComponent as  I_PIN} from "../assets/icons/i_pin.svg"
import classNames from "classnames"
import {AnimatePresence, motion} from "framer-motion"
import { useRef } from "react";
export default function Agences(props){
    const agences =['Aéroport Carthage, Tunis','Aéroport intl. de Tozeur-Nefta','Aéroport intl. de Tbarka','Aéroport intl. de Sfax','Aéroport intl. Monastir','Aéroport intl. de Gafsa','Aéroport de Gabès',"Aéroport intl. d'Ennfidha",'Aéroport intl. de Djerba','Agence de Menzah 8'];
    const ref=useRef(null);
    return (
        <div  onClick={()=>{ref.current.focus()}}  tabIndex={"0"} className={classNames(" relative flex flex-col items-center cursor-pointer justify-between  min-w-fit desktop2:min-w-[23rem] w-full h-12 tablet:h-16 laptop:h-16 desktop:h-fit desktop2:h-fit shadow-input bg-neutral-100  hover:shadow-input_hover_red_50 hover:bg-red-50 focus-within:shadow-input_hover_red_50 focus-within:bg-red-50   rounded-[5px] ",{"shadow-input_hover_red_50 bg-red-50":props.isSearching})}>
                    <div className="p-[0.5rem] tablet:p-[0.75rem] laptop:p-[0.75rem] desktop:p-[0.75rem] desktop2:p-[0.75rem] w-full">
                    <p className="text-neutral-500 font-normal text-11 tablet:text-14 laptop:text-14 desktop:text-16 desktop2:text-18">Agence de retrait</p>
                    <div className="flex items-center gap-[0.375rem]">
                    <I_PIN className="w-[16px] h-[12px] tablet:w-[21px] tablet:h-[16px] laptop:h-[16px] laptop:w-[21px] desktop:w-[22px] desktop:h-[20px] desktop2:w-[22px] desktop2:h-[20px]"/>
                        <input ref={ref} className=" cursor-pointer font-medium outline-none text-14 tablet:text-18 laptop:text-18 desktop:text-20   desktop2:text-23  text-neutral-900 bg-transparent w-full placeholder:text-neutral-900 focus:placeholder:text-neutral-500"
                         onChange={(e)=>{
                            
                            if(e.target.value===props.value){
                                props.setIsSearching(false);
                            }else{
                                props.setIsSearching(true);
                            }
                            props.setValue(e.target.value);
                        }} 
                          placeholder={props.value} value={props.value}></input>
                    </div>
                    </div>
                    <AnimatePresence>
                    { props.isSearching &&
                   
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className="w-full h-fit z-10  absolute top-[3.5rem] tablet:top-[4.5rem] laptop:top-[4.5rem] desktop:top-[5.5rem] desktop2:top-[5.5] rounded-[5px]  bg-neutral-100  max-h-[13rem] overflow-y-auto drop-shadow-[0_2px_15px_rgba(0,0,0,0.15)]">
                        
                        
                        {agences.map((agence,index)=>{
                            if (agence.toLowerCase().includes(props.value.toLowerCase())){
                            return (<motion.p initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>{props.setValue(agence);props.setIsSearching(false);}} className={classNames("first-of-type:rounded-t-[5px] last-of-type:rounded-b-[5px] text-neutral-800 p-[0.5em] hover:bg-neutral-200 text-14 tablet:text-[18px] laptop:text-[18px] desktop:text-20 desktop2:text-23 truncate ")} key={index}>{agence}</motion.p>);
                         }else return null;
                        })}
                    </motion.div>
                    
                    } 
                    </AnimatePresence>
                </div>
    )
}