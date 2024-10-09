import { currencyContext } from "./hooks/contexts/useCurrency";
import { useContext, useRef} from "react";
import {ReactComponent as Chevron} from "../assets//icons/i_chevron.svg"
import { useMediaQuery } from "@mui/material";

export default function HomeCars(){
    const cars = [{"id":"47102","marque":"Škoda Fabia" , "prix":45},
                  {"id":"46962","marque":" Classe A" , "prix":1045},
                  {"id":"47049","marque":"Peugeot 2008" , "prix":45},
                  {"id":"47129","marque":"MG One" , "prix":45},
                  {"id":"47139","marque":"Renault Clio" , "prix":45},
                  {"id":"46924","marque":"Škoda Kushaq" , "prix":45},
                  

    ];
    const isSmallMobile = useMediaQuery("only screen and (max-width : 768px)");
    const isTablet = useMediaQuery("only screen and (max-width : 1024px) and (min-width :768px)");
    const isLaptop = useMediaQuery("only screen and (max-width : 1365px) and (min-width :1024px)");
    const isDesktop = useMediaQuery("only screen and (min-width :1366px) and (max-width : 1640px)");
    const isDesktop2= useMediaQuery("only screen and (min-width :1640px)")
    const {symb,factor}=useContext(currencyContext);

    const scrollContainerRef = useRef(null);
    const scrollLeft = (size) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: 0,
                left: -size, // Adjust this value to set the scroll distance
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = (size) => {
        if (scrollContainerRef.current ) {
            scrollContainerRef.current.scrollBy({
                top: 0,
                left: size, // Adjust this value to set the scroll distance
                behavior: 'smooth'
            });
        }
        
    };

    return(
        <div className="h-fit  relative  flex flex-col items-center  gap-24 w-full mt-[15rem] tablet:mt-[10.5rem] laptop:mt-[10.5rem] desktop:mt-[7rem] desktop2:mt-[7rem] mb-32">
            <h2 className="flex items-center justify-center font-bold text-29 text-neutral-800">Explorez Notre Flotte</h2>
            <div ref={scrollContainerRef} className=" flex gap-16 no-scrollbar  overflow-x-auto  w-[316px] tablet:w-[696px] laptop:w-[696px] desktop:w-[1076px] desktop2:w-[calc(100%-160px)]">
                {cars.map(
                    (car,index)=>(
                        <div key={index} className="flex  items-center flex-col">
                        <img src={require(`../assets/images/cars/${car['id']}.webp`)} className="desktop2:h-28 w-auto shrink-0 max-w-none max-h-none" alt={car['marque']}></img>
                        <h3 className="text-20 w-full text-pretty text-center mt-4 font-normal text-neutral-700 ">{car["marque"]}</h3>
                        <p className="text-18  font-light text-neutral-950">A partir de <span className="font-medium text-20 text-red-700">{car["prix"]*factor+symb}</span></p>
                    </div>)
                )}
                
            </div>
           <div onClick={()=>scrollRight(isDesktop2 ? 300 : 380)} className="top-1/2 px-4 py-4 flex items-center laptop:right-6 desktop:right-6  right-1 desktop2:right-6 tablet:right-[0.25rem] absolute rounded-full cursor-pointer group"> <Chevron index={0} className="group-hover:scale-125 hover:scale-125 transition-all ease-in-out cursor-pointer duration-300  h-6 tablet:h-6 desktop:h-4 desktop2:h-4 laptop:h-4  "></Chevron></div>
           <div onClick={()=>scrollLeft(isDesktop2 ? 300 : 380)} className="top-1/2 px-4 py-4 flex items-center laptop:left-6 desktop:left-6  left-1 desktop2:left-6 tablet:left-[0.25rem] absolute rounded-full cursor-pointer group"><Chevron index={1} className=" group-hover:scale-125 hover:scale-125 transition-all ease-in-out cursor-pointer duration-300 h-6 tablet:h-6 desktop:h-4 desktop2:h-4 laptop:h-4  rotate-180"></Chevron></div> 
        </div>
    )
}