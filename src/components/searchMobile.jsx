import {ReactComponent as  I_SEARCH} from "../assets/icons/i_search.svg"


import DatePicker from "./datePicker.jsx"
import TimePicker from "./timePicker.jsx"
import { useEffect, useState } from "react"
import Agences from "./agences.jsx"
export default function SearchMobile(){
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
        <>
           
        </>
    )
}