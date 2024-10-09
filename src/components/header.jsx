import { useMediaQuery } from "@mui/material";
import {ReactComponent as  I_LOGIN} from "../assets/icons/i_login.svg"
import {ReactComponent as  I_MENU} from "../assets/icons/i_menu.svg"
import logosrc from "../assets/images/p_logo.png"
import {ReactComponent as I_LOGO} from "../assets/icons/i_logo.svg"

import CurrencyMenu from "./currencyMenu";
import Navmodal from "./navmodal";
import { useEffect, useState } from "react";
import { AnimatePresence ,motion } from "framer-motion";
import classNames from "classnames";
export default function Header(){
    const isSmallScreen = useMediaQuery("only screen and (max-width : 768px)");
    const [toggleModal,setModal]=useState(false);
    const [isPast50vh, setIsPast50vh] = useState(false);
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      const viewportHeight = window.innerHeight; // Height of the viewport

      // Check if scroll position is past 50% of the viewport height
      if (scrollY >= viewportHeight / 2) {
          setIsPast50vh(true);
      } else {
          setIsPast50vh(false);
      }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    useEffect(() => {
        if (toggleModal) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset"; 
        }
        return () => {
          document.body.style.overflow = "unset";
        };
      }, [toggleModal]);
    return(
        <>
        <motion.nav  className={classNames("w-full z-40 flex items-center h-[10vh] justify-between px-6 laptop:px-12 desktop:px-16 desktop2:px-20 py-4 transition-all duration-300 ease-in-out ",{"bg-transparent":!isPast50vh,"bg-neutral-900 fixed  ":isPast50vh})}>
            {
                isSmallScreen ?
                <>
                <I_MENU className="cursor-pointer" onClick={()=>{setModal(true)}}></I_MENU>
                <div className="bg-transparent h-10 w-fit rounded-[4px] text-black">
                {/*<img src={logosrc} className="h-10 " alt="Logo Mayssam rent a car"></img>*/}
                <I_LOGO className="h-10 " alt="Logo Mayssam rent a car"></I_LOGO>
                </div>
                <div className="bg-red-600  flex items-center rounded-[4px] cursor-pointer py-0.5 pr-3 pl-2 transition-colors duration-300 hover:bg-red-700 "><I_LOGIN className="h-6"/></div>
                </>
                 : 
                <>
                <div className="bg-transoarent       rounded-[4px]  text-black font-bold h-12 w-fit  ">
                {/*<img src={logosrc} className="h-12"  alt="Logo Mayssam rent a car"></img>*/}
                <I_LOGO className="h-12 " alt="Logo Mayssam rent a car"></I_LOGO>
            </div>
            <div className="flex items-center gap-12">
            <div className="text-whit  flex items-center gap-[2rem] font-medium  tablet:text-14 laptop:text-16 desktop:text-16 desktop2:text-16  ">
                <p className="hover:text-white  opacity-90 hover:opacity-100 cursor-pointer">Voitures</p>
                <p  className="hover:text-white opacity-90 hover:opacity-100 cursor-pointer">Agences</p>
                <p  className="hover:text-white opacity-90  hover:opacity-100 cursor-pointer">Contactez-Nous</p>
                <CurrencyMenu/>
                <div className="bg-red-600  flex items-center rounded-[4px] cursor-pointer transition-colors duration-300 hover:bg-red-700 tablet:py-0.25 tablet:pr-4 tablet:pl-3 laptop:pr-5 laptop:pl-4 laptop:py-0.375  desktop:pr-6 desktop:pl-5 desktop:py-0.5"><I_LOGIN/></div>
            </div>
            
            </div>
                
            </>
            }
            

        </motion.nav>
         <AnimatePresence> {isSmallScreen && toggleModal &&  <Navmodal setModal={setModal}></Navmodal>}</AnimatePresence> 
        </>
        
    );
}