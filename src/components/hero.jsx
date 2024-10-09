import p_hero from "../assets/images/p-hero2.webp"
import Header from "./header"
import Search from "./search"
import { useMediaQuery } from "@mui/material"
export default function Hero(){
    const isSmallScreen = useMediaQuery("only screen and (max-width : 768px)");
    const isTablet = useMediaQuery("only screen and (max-width : 1024px) and (min-width :768px)");
    return(
        <div className="w-full relative h-[50vh] flex flex-col items-center bg-center shadow-inner_hero " style={{backgroundImage:`url(${p_hero})`,backgroundRepeat:"no-repeat" , backgroundSize:"cover",backgroundPosition:"bottom"}}>
            <Header></Header>
            <h1 className="font-extrabold mt-[1rem] tablet:mt-[2rem] laptop:mt-[2rem] desktop:mt-[4rem]  desktop2:mt-[4rem] text-whit text-23 px-6 tablet:text-29 laptop:text-29 desktop:text-[36px] desktop2:text-[36px] text-center">
                <span className="text-red-600">Rapide</span>, <span className="text-red-600">Simple</span> et <span className="text-red-600">Abordable</span> – Votre Location Vous Attend
            </h1>
            <div className="flex flex-col absolute tablet:bottom-[7.5rem] laptop:bottom-[7.5rem] desktop:bottom-[4rem] desktop2:bottom-[4rem] items-center " >
            {   
                        !isSmallScreen && !isTablet  && 
                <div className="font-semibold h-fit w-full text-16  text-whit flex items-center gap-6">
                    
                    <h2> <span className="text-red-500">8</span> Agences réparties </h2>
                    <div className="h-5 w-[1.5px] rounded-sm bg-whit"></div>
                    <h2> <span className="text-red-500">120+</span> Voitures </h2>
                    <div className="h-5 w-[1.5px] rounded-sm bg-whit"></div>
                    <h2> <span className="text-red-500">Assisstance</span> 24/24 </h2>
                </div>

            }
        
                
            </div>
            <Search></Search>
        </div>
    )
}