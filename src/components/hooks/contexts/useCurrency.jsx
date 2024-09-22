import { useState } from "react";
import { createContext } from "react";


export const currencyContext = createContext();

export default function UseCurrency (props){
    const [currency,setCurrency] = useState("TND");
    const [factor,setFactor] = useState(1);
    const [symb,setSymb]=useState("DT");
    const context = {
        currency,setCurrency,factor,setFactor,symb,setSymb
    }

    return (
        <currencyContext.Provider value={context} >
            {props.children}
        </currencyContext.Provider>
    )
}