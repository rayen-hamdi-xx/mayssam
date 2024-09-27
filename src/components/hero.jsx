import p_hero from "../assets/images/p-hero2.png"
import Header from "./header"
import {ReactComponent as  I_VERTICAL} from "../assets/icons/I_VERTICAL.svg"
import Search from "./search"
export default function Hero(){
    return(
        <div className="w-[100vw] h-[50vh]  bg-center shadow-inner_hero" style={{backgroundImage:`url(${p_hero})`,backgroundRepeat:"no-repeat" , backgroundSize:"cover",backgroundPosition:"bottom"}}>
            <Header></Header>
                  
        </div>
    )
}