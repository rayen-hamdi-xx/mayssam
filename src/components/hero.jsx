import p_hero from "../assets/images/p-hero2.png"
import Header from "./header"
import {ReactComponent as  I_VERTICAL} from "../assets/icons/I_VERTICAL.svg"
import Search from "./search"
import { useMediaQuery } from "@mui/material"
export default function Hero(){
    const isSmallScreen = useMediaQuery("only screen and (max-width : 768px)");
    return(
        <div className="w-[100vw] h-[50vh] flex flex-col items-center gap-6 tablet:gap-8 laptop:gap-10 desktop:gap-12 desktop2:gap-12 bg-center shadow-inner_hero" style={{backgroundImage:`url(${p_hero})`,backgroundRepeat:"no-repeat" , backgroundSize:"cover",backgroundPosition:"bottom"}}>
            <Header></Header>
            <h1 className="font-extrabold text-whit text-23 px-6 tablet:text-29 laptop:text-29 desktop:text-32 desktop2:text-41 text-center"><span className="text-red-600">Rapide</span>, <span className="text-red-600">Simple</span> et <span className="text-red-600">Abordable</span> – Votre Location Vous Attend</h1>
            <div className=" flex flex-col items-center gap-4 desktop2:gap-8" >
            {   
                        !isSmallScreen && 
                <div className="font-bold h-fit text-20 text-whit flex items-center tablet:gap-6 laptop:tablet:gap-6 desktop:gap-8 ">
                    
                    <h2> <span className="text-red-500">8</span> Agences réparties </h2>
                    <div className="h-6 w-[2px] rounded-sm bg-whit"></div>
                    <h2> <span className="text-red-500">120+</span> Voitures </h2>
                    <div className="h-6 w-[2px] rounded-sm bg-whit"></div>
                    <h2> <span className="text-red-500">Assisstance</span> 24/24 </h2>
                </div>

            }
            <Search></Search>
            </div>
        </div>
    )
}