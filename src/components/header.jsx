import { useMediaQuery } from "@mui/material";
import {ReactComponent as  I_LOGIN} from "../assets/icons/i_login.svg"
import {ReactComponent as  I_MENU} from "../assets/icons/i_menu.svg"
import logosrc from "../assets/images/p_logo.png"

import CurrencyMenu from "./currencyMenu";
import Navmodal from "./navmodal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
export default function Header(){
    const isSmallScreen = useMediaQuery("only screen and (max-width : 768px)");
    const [toggleModal,setModal]=useState(false);
    return(
        <>
        <nav className="w-full bg-transparent flex items-center justify-between px-6 py-4 '">
            {
                isSmallScreen ?
                <>
                <I_MENU className="cursor-pointer" onClick={()=>{setModal(true)}}></I_MENU>
                <div className="bg-neutral-100 h-7 w-20 rounded-[4px] text-black">
                <img src={logosrc} alt="Logo Mayssam rent a car"></img>
                </div>
                <div className="bg-red-600  flex items-center rounded-[4px] cursor-pointer py-0.25 pr-2.5 pl-1.5 transition-colors duration-300 hover:bg-red-700 "><I_LOGIN/></div>
                </>
                 : 
                <>
                <div className="bg-neutral-100 rounded-[4px] text-black font-bold h-[5.63vh] w-[6.67vw] ">
                <img src={logosrc} alt="Logo Mayssam rent a car"></img>
            </div>
            <div className="flex items-center gap-12">
            <div className="text-whit  flex items-center gap-[2rem] font-medium  tablet:text-16 laptop:text-18 desktop:text-20  ">
                <p className="hover:text-white  opacity-90 hover:opacity-100 cursor-pointer">Voitures</p>
                <p  className="hover:text-white opacity-90 hover:opacity-100 cursor-pointer">Agences</p>
                <p  className="hover:text-white opacity-90  hover:opacity-100 cursor-pointer">Contact</p>
                <CurrencyMenu/>
                <div className="bg-red-600  flex items-center rounded-[4px] cursor-pointer transition-colors duration-300 hover:bg-red-700 tablet:py-0.25 tablet:pr-4 tablet:pl-3 laptop:pr-5 laptop:pl-4 laptop:py-0.375  desktop:pr-6 desktop:pl-5 desktop:py-0.5"><I_LOGIN/></div>
            </div>
            
            </div>
                
            </>
            }
            

        </nav>
         <AnimatePresence> {isSmallScreen && toggleModal &&  <Navmodal setModal={setModal}></Navmodal>}</AnimatePresence> 
        </>
        
    );
}