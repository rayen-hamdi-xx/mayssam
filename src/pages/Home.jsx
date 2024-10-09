import Hero from "../components/hero";
import HomeCars from "../components/homeCars";
import KeyPoints from "../components/keyPoints";


export default function Home(){
    return(
        <div className="flex flex-col items-center ">
        <Hero/>
        <KeyPoints></KeyPoints>
        <HomeCars ></HomeCars>
        </div>
    );
}