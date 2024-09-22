import p_hero from "../assets/images/p-hero.png"
import Header from "./header"
import {ReactComponent as  I_VERTICAL} from "../assets/icons/I_VERTICAL.svg"
import Search from "./search"
export default function Hero(){
    return(
        <div className="w-[100vw] h-[50vh]  bg-center shadow-inner_hero" style={{backgroundImage:`url(${p_hero})`,backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>
            <Header/>  
            <div className="w-[100vw] h-fit font-metro pt-[4rem]">
                <div className="flex flex-col items-center gap-[2rem] ">
                    <div className="flex flex-col items-center gap-[3rem]">
                    <h1 className="font-extrabold text-center sm:text-26 xl:text-41 text-whit"><span className="text-red-600">Rapide</span>, <span className="text-red-600">Simple</span> et <span className="text-red-600">Abordable</span> – Votre Location Vous Attend</h1>
                    <h2 className="flex items-center gap-[2rem] font-extrabold text-23 text-whit">
                    <p ><span className="text-red-500">8 </span>Agences réparties</p> 
                    <I_VERTICAL></I_VERTICAL>
                    <p><span className="text-red-500">120+ </span>Voitures</p>
                    <I_VERTICAL></I_VERTICAL>
                    <p><span className="text-red-500">Assistance </span>24/24</p>

                    </h2>
                    </div>
                    <Search/>
                </div>
                
                
            </div>          
        </div>
    )
}