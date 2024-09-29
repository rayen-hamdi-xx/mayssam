import {ReactComponent as  I_SEARCH} from "../assets/icons/i_search.svg"


import DatePicker from "./datePicker.jsx"
import TimePicker from "./timePicker.jsx"
import { useEffect, useState } from "react"
import Agences from "./agences.jsx"
import { useMediaQuery } from "@mui/material"
import SearchMobile from "./searchMobile.jsx"
export default function Search(){
    const isMobile = useMediaQuery("only screen and (max-width : 768px)");
    const isTablet = useMediaQuery("only screen and (max-width : 1024px)");
    const isLaptop = useMediaQuery("only screen and (max-width : 1366px)");
    const isDesktop = useMediaQuery("only screen and (max-width : 1442px)");
    const [isdep,setdep] = useState(false);
    const [ishdep,sethdep] = useState(false);
    const [isret,setret] = useState(false);
    const [ishret,sethret] = useState(false);
    const [isSearching,setIsSearching] = useState(false);
    const [value,setValue]=useState("Aéroport Carthage, Tunis");
    useEffect(()=>{
        if(isSearching===true){
            setdep(false);
            sethret(false);
            setret(false);
            sethdep(false);
        }
    },[isSearching])
    useEffect(()=>{
        if(isdep===true){
            sethdep(false);
            sethret(false);
            setret(false);
            setIsSearching(false);
        }
    },[isdep]);
    useEffect(()=>{
        if(isret===true){
            setdep(false);
            sethret(false);
            sethdep(false);
            setIsSearching(false);
        }
    },[isret]);
    useEffect(()=>{
        if(ishret===true){
            setdep(false);
            sethdep(false);
            setret(false);
            setIsSearching(false);
        }
    },[ishret]);
    useEffect(()=>{
        if(ishdep===true){
            setdep(false);
            sethret(false);
            setret(false);
            setIsSearching(false);
        }
    },[ishdep]);
    
    return(
        <div className="w-[22rem] h-[20rem] tablet:h-[14rem] tablet:w-[40rem] laptop:h-[14rem] laptop:w-[47.25rem] desktop:w-[77vw] desktop:h-[6rem] bg-white rounded-[10px] shadow-search py-8 flex xl:flex-row sm:flex-col justify-between gap-[2rem] ">
           {/*<div className="w-full h-full sm:flex-wrap xl:flex-nowrap md:flex-wrap  flex gap-[1.5rem]   ">
                <Agences isSearching={isSearching} setIsSearching={setIsSearching} value={value} setValue={setValue}></Agences>
                <DatePicker title="Date de départ" start={0} open={isdep} setOpen={setdep}/>
                
                <TimePicker open={ishdep} setOpen={sethdep}></TimePicker>

                <DatePicker title="Date de retour" start={1} open={isret} setOpen={setret}/>

                <TimePicker open={ishret} setOpen={sethret} ></TimePicker>

            </div>
            <div  className=" 2xl:w-[6vw] xl:w-[6vw] md:w-full lg:w-full sm:w-full px-[0.75rem] py-[0.75rem] h-[5rem] flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-colors duration-300   bg-neutral-800 rounded-[10px]"><I_SEARCH/></div>
            */}
           <div className="w-full h-full  flex flex-col justify-between  flex-wrap px-6   ">
            <Agences isSearching={isSearching} setIsSearching={setIsSearching} value={value} setValue={setValue}></Agences>  
            <div className="flex gap-[1.5rem] ">
                <DatePicker title="Date de départ" start={0} open={isdep} setOpen={setdep}/>
                
                <TimePicker open={ishdep} setOpen={sethdep}></TimePicker>
            </div>
            <div className="flex gap-[1.5rem] ">
                <DatePicker title="Date de retour" start={1} open={isret} setOpen={setret}/>

                <TimePicker open={ishret} setOpen={sethret} ></TimePicker>
            </div>
            <div  className="w-full h-8 flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-colors duration-300   bg-neutral-800 rounded-[5px]"><I_SEARCH className="h-6 w-6"/></div>
            </div>
            
        </div>
    )
}