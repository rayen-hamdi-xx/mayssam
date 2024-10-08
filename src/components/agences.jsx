import {ReactComponent as  I_PIN} from "../assets/icons/i_pin.svg"
import classNames from "classnames"
import {AnimatePresence, motion} from "framer-motion"
import { useRef, useState } from "react";
export default function Agences(props){
    const agences =['Aéroport Carthage, Tunis','Aéroport intl. de Tozeur-Nefta','Aéroport intl. de Tbarka','Aéroport intl. de Sfax','Aéroport intl. Monastir','Aéroport intl. de Gafsa','Aéroport de Gabès',"Aéroport intl. d'Ennfidha",'Aéroport intl. de Djerba','Agence de Menzah 8'];
    const ref=useRef(null); 
    const [searchValue , setSV] = useState(" ");
    return (
        <div  onClick={()=>{ref.current.focus();props.setIsSearching(!props.isSearching)}}  tabIndex={"0"} className={classNames(" relative flex flex-col items-center cursor-pointer justify-between  desktop2:w-[24rem] desktop:w-[24rem] w-full h-full shadow-input bg-neutral-100  hover:shadow-input_hover_red_50 hover:bg-red-50 focus-within:shadow-input_hover_red_50 focus-within:bg-red-50   rounded-[5px] ",{"shadow-input_hover_red_50 bg-red-50":props.isSearching})}>
                    <div  className="flex flex-col justify-between h-full p-[0.5rem]  w-full">
                    <p className="text-neutral-500 font-normal text-11 tablet:text-14 laptop:text-14 desktop:text-14 desktop2:text-14">Agence de retrait</p>
                    <div className="flex items-center gap-[0.375rem]">
                        <I_PIN className="w-[16px] h-[12px] tablet:w-[21px] tablet:h-[16px] laptop:h-[16px] laptop:w-[21px] desktop:w-[18px] desktop:h-[16px] desktop2:w-[18px] desktop2:h-[16px] self-start desktop:mt-1 desktop2:mt-1 laptop:mt-1 tablet:mt-1 mt-[6px]"/>
                        <input onInput={(e)=>{setSV(e.target.value)}} ref={ref} className="text-ellipsis cursor-pointer font-medium outline-none text-16 tablet:text-18 laptop:text-18 desktop:text-18   desktop2:text-18  text-neutral-900 bg-transparent w-full placeholder:text-neutral-900 focus:placeholder:text-neutral-500"
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
                   
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  transition={{duration:0.5}} className="w-full h-fit z-10  absolute top-[3.5rem] tablet:top-[4.5rem] laptop:top-[4.5rem] desktop:top-[5.5rem] desktop2:top-[4rem] rounded-[5px]  bg-neutral-100  max-h-[13rem] overflow-y-auto drop-shadow-[0_2px_15px_rgba(0,0,0,0.15)]">
                        
                        
                        {agences.map((agence,index)=>{
                            if (agence.toLowerCase().includes(searchValue.toLowerCase())){
                            return (<motion.p initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>{props.setValue(agence);props.setIsSearching(false);setSV("")}} className={classNames("first-of-type:rounded-t-[5px] last-of-type:rounded-b-[5px] text-neutral-800 p-[0.5em] hover:bg-neutral-200 text-14 tablet:text-[18px] laptop:text-[18px] desktop:text-20 desktop2:text-20 truncate ")} key={index}>{agence}</motion.p>);
                         }else return null;
                        })}
                    </motion.div>

                    } 
                    </AnimatePresence>
                </div>
    )
}