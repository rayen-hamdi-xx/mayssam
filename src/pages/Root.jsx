import UseCurrency from "../components/hooks/contexts/useCurrency";
import Home from "./Home";
export default function Root(){
    return (
        <div className="font-metro">
            <UseCurrency>
            <Home/>
            </UseCurrency>
        </div>
    );
}