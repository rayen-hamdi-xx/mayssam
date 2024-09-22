import {ReactComponent as  I_SEARCH} from "../assets/icons/i_search.svg"


import DatePicker from "./datePicker.jsx"
import TimePicker from "./timePicker.jsx"
import { useEffect, useState } from "react"
import Agences from "./agences.jsx"
export default function Search(){
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
        <div className="w-[77vw] h-[6rem] bg-white rounded-[10px] shadow-search p-[0.75em]  flex justify-between gap-[2rem] ">
            <div className="w-full h-full  flex gap-[1.5rem]   ">
                <Agences isSearching={isSearching} setIsSearching={setIsSearching} value={value} setValue={setValue}></Agences>
                <DatePicker title="Date de départ" start={0} open={isdep} setOpen={setdep}/>
                
                <TimePicker open={ishdep} setOpen={sethdep}></TimePicker>

                <DatePicker title="Date de retour" start={1} open={isret} setOpen={setret}/>

                <TimePicker open={ishret} setOpen={sethret} ></TimePicker>

            </div>
            <div  className="w-[6vw] px-[0.75rem] py-[0.75rem] h-21 flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-colors duration-300   bg-neutral-800 rounded-[10px]"><I_SEARCH/></div>
            
        </div>
    )
}