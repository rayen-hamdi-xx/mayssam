import {ReactComponent as  I_SEARCH} from "../assets/icons/i_search.svg"


import DatePicker from "./datePicker.jsx"
import TimePicker from "./timePicker.jsx"
import { useEffect, useState } from "react"
import Agences from "./agences.jsx"
import { useMediaQuery } from "@mui/material"
export default function Search(){
    const isMobile = useMediaQuery("only screen and (max-width : 767px)");
    const isTablet = useMediaQuery("only screen and (max-width : 1024px) and (min-width :768px)");
    const isLaptop = useMediaQuery("only screen and (max-width : 1365px) and (min-width :1024px)");
    const isDesktop = useMediaQuery("only screen and (min-width :1366px)");
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
        <div className=" absolute   w-fit top-[calc(50vh-10rem)]  h-[20rem] px-6  py-6  desktop:h-[7rem] desktop:top-[calc(50vh-3.5rem)] desktop:py-5 desktop:px-4 desktop2:top-[calc(50vh-4rem)] desktop2:h-[8rem] tablet:h-[14rem] tablet:top-[calc(50vh-7rem)] tablet:px-8 tablet:py-8 laptop:px-8 laptop:py-8 laptop:h-[14rem]   bg-white rounded-[10px] shadow-search  desktop2:py-5 desktop2:px-4  ">
          {isDesktop && 
          <div className="flex h-full gap-8">
                <Agences isSearching={isSearching} setIsSearching={setIsSearching} value={value} setValue={setValue}></Agences>
                <DatePicker title="Date de départ" start={0} open={isdep} setOpen={setdep}/>
                
                <TimePicker open={ishdep} setOpen={sethdep}></TimePicker>
                <DatePicker title="Date de retour" start={1} open={isret} setOpen={setret}/>

                <TimePicker open={ishret} setOpen={sethret} ></TimePicker>
                <div  className="w-fit  flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-colors duration-300 px-8 bg-neutral-800 rounded-[10px]"><I_SEARCH/></div>

          </div>
            
            }


             {/* tablet & laptop */ }
             {(isTablet || isLaptop) && <>  
            <div className="flex     gap-12">
                    <div className="flex flex-col justify-between gap-8">
                        <div className="flex items-center justify-between gap-6">
                        <DatePicker title="Date de départ" start={0} open={isdep} setOpen={setdep}/>
                        
                        <TimePicker open={ishdep} setOpen={sethdep}></TimePicker>
                        </div>

                        <div className="flex items-center justify-between gap-6 ">
                        <DatePicker title="Date de retour" start={1} open={isret} setOpen={setret}/>

                        <TimePicker open={ishret} setOpen={sethret} ></TimePicker>
                        </div>
                    </div>

                    <div className="w-full flex flex-col  justify-between gap-8">
                        <Agences isSearching={isSearching} setIsSearching={setIsSearching} value={value} setValue={setValue}></Agences>  
                        <div  className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-colors duration-300   bg-neutral-800 rounded-[5px]"><I_SEARCH className="h-12 w-12"/></div>
                    </div>
            </div>
            </>}

            { isMobile && 
            <div className="flex flex-col gap-6">
            <Agences isSearching={isSearching} setIsSearching={setIsSearching} value={value} setValue={setValue}></Agences>  
            <div className="flex items-center justify-between gap-6  ">
                <DatePicker title="Date de départ" start={0} open={isdep} setOpen={setdep}/>
                
                <TimePicker open={ishdep} setOpen={sethdep}></TimePicker>
            </div>
            <div className="flex items-center justify-between gap-[1.5rem] ">
                <DatePicker title="Date de retour" start={1} open={isret} setOpen={setret}/>

                <TimePicker open={ishret} setOpen={sethret} ></TimePicker>
            </div>
            <div  className="w-full h-10 flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-colors duration-300   bg-neutral-800 rounded-[5px]"><I_SEARCH className="h-6 w-6"/></div>
             </div>
            }

           
        </div>
    )
}