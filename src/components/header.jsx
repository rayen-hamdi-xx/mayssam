import {ReactComponent as  I_LOGIN} from "../assets/icons/i_login.svg"
import logosrc from "../assets/images/p_logo.png"

import CurrencyMenu from "./currencyMenu";
export default function Header(){
    return(
        <div className="w-[100%] h-[9.26vh] bg-transparent px-[8rem]  py-[2rem] flex items-center justify-between '">
            <div className="bg-neutral-100 rounded-[4px] text-black font-bold  w-[6.67vw] ">
                <img src={logosrc} alt="Logo Mayssam rent a car"></img>
            </div>
            <div className="flex items-center gap-12">
            <div className="text-whit  flex items-center gap-[2rem] font-medium text-18  ">
                <p className="hover:text-white  opacity-90 hover:opacity-100 cursor-pointer">Voitures</p>
                <p  className="hover:text-white opacity-90 hover:opacity-100 cursor-pointer">Agences</p>
                <p  className="hover:text-white opacity-90  hover:opacity-100 cursor-pointer">Contact</p>
                <CurrencyMenu/>
            </div>
            <div className="bg-red-600 py-[0.25rem] pr-[2.1875rem] pl-[1.75rem] flex items-center rounded-[4px] cursor-pointer transition-colors duration-300 hover:bg-red-700 "><I_LOGIN/></div>
            </div>
        </div>
    );
}