import {ReactComponent as Shield} from "../assets//icons/i_shield.svg"
import {ReactComponent as Bolt} from "../assets//icons/i_bolt.svg"
import {ReactComponent as Clients} from "../assets//icons/i_clients.svg"
import {ReactComponent as Flexible} from "../assets//icons/i_flexible.svg"
import { useMediaQuery } from "@mui/material";
export default function KeyPoints(){
    const isSmallMobile = useMediaQuery("only screen and (max-width : 700px)");
    const isBigMobile = useMediaQuery("only screen and (max-width : 800px) and (min-width :701px)");
    const isTablet = useMediaQuery("only screen and (max-width : 1024px) and (min-width :801px)");
    const isLaptop = useMediaQuery("only screen and (max-width : 1365px) and (min-width :1024px)");
    const isDesktop = useMediaQuery("only screen and (min-width :1366px)");
    
    return ( 
        <div className="flex flex-col  items-center  w-full mt-[14rem] tablet:mt-[12rem] laptop:mt-[10rem] desktop:mt-[8rem] desktop2:mt-[8rem]">
            {isSmallMobile &&
            <div className="w-fit flex flex-col gap-8">
            <div className="flex items-center   gap-12 " >
                <Shield className="w-[48px] h-[48px]"></Shield>
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Fiabilité et Honnêteté</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Service transparent avec des contrats clairs<br></br> et des tarifs sans surprises.</p>
                </div>
            </div>
            <div className="flex items-center  gap-12 " >
                <Bolt className="w-[48px] h-[48px]"></Bolt>
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Location Facile</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Notre agence propose des voitures <br></br> disponibles rapidement pour tous vos <br></br> besoins.</p>
                </div>
            </div>

            <div className="flex items-center  gap-12 " >
                <Flexible className="w-[48px] h-[48px]"></Flexible>
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Flexibilité</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Que ce soit pour une journée ou plusieurs <br></br> mois, nous avons une solution de location<br></br> pour vous.</p>
                </div>
            </div>

            <div className="flex items-center  gap-12 " >
                <Clients className="w-[48px] h-[48px]"></Clients    >
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Satisfaction Garantie</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Votre satisfaction est notre priorité, avec <br></br> des services sur mesure pour répondre à <br></br> vos attentes.   </p>
                </div>
            </div>

            </div>
            }

            {
                isBigMobile && 
            <div className="w-full px-4  flex items-center justify-between">
            <div className="flex flex-col gap-8"> 
                <div className="flex items-center   gap-8 " >
                <Shield className="w-[48px] h-[48px]"></Shield>
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Fiabilité et Honnêteté</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Service transparent avec des contrats clairs<br></br> et des tarifs sans surprises.</p>
                </div>
               
            </div>
            <div className="flex items-center  gap-8 " >
                <Bolt className="w-[48px] h-[48px] "></Bolt>
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Location Facile</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Notre agence propose des voitures <br></br> disponibles rapidement pour tous vos <br></br> besoins.</p>
                </div>
            </div>
            </div> 

            <div className="flex flex-col gap-8"> 
                <div className="flex items-center   gap-8 " >
                <Flexible className="w-[48px] h-[48px] "></Flexible>
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Flexibilité</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Que ce soit pour une journée ou plusieurs <br></br> mois, nous avons une solution de location<br></br> pour vous.</p>
                </div>
               
            </div>
            <div className="flex items-center  gap-8 " >
            <Clients className="w-[48px] h-[48px]"></Clients    >
                <div className="flex flex-col gap-[0.375rem]">
                    <p className="font-bold text-14 text-neutral-800 ">Satisfaction Garantie</p>
                    <p className="font-normal text-[12px] text-neutral-500 ">Votre satisfaction est notre priorité, avec <br></br> des services sur mesure pour répondre à <br></br> vos attentes.   </p>
                </div>
            </div>
            </div>

            </div>
            }


            {
                (isTablet) && 
                <div className="w-full px-4  flex items-center justify-center gap-20">
                <div className="flex flex-col   gap-8"> 
                    <div className="flex items-center   gap-8 " >
                    <Shield className="w-[64px] h-[64px]"></Shield>
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Fiabilité et Honnêteté</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Service transparent avec des contrats clairs<br></br> et des tarifs sans surprises.<br></br><span className=" invisible">&nbsp;</span></p>
                    </div>
                   
                    </div>
                <div className="flex items-center  gap-8 " >
                    <Bolt className="w-[64px] h-[64px]"></Bolt>
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Location Facile</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Notre agence propose des voitures <br></br> disponibles rapidement pour tous vos <br></br> besoins.</p>
                    </div>
                    </div>
                </div> 
    
                <div className="flex flex-col gap-8"> 
                    <div className="flex items-center   gap-8 " >
                    <Flexible className="w-[64px] h-[64px]"></Flexible>
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Flexibilité</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Que ce soit pour une journée ou plusieurs <br></br> mois, nous avons une solution de location<br></br> pour vous.</p>
                    </div>
                   
                </div>
                <div className="flex items-center  gap-8 " >
                <Clients className="w-[64px] h-[64px]"></Clients    >
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Satisfaction Garantie</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Votre satisfaction est notre priorité, avec <br></br> des services sur mesure pour répondre à <br></br> vos attentes.   </p>
                    </div>
                </div>
                </div>
    
                </div>

            }

            {
                (isLaptop) && 
                <div className="w-full px-4  flex items-center justify-center gap-28">
                <div className="flex flex-col gap-12"> 
                    <div className="flex items-center   gap-8 " >
                    <Shield className="w-[72px] h-[72px]"></Shield>
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Fiabilité et Honnêteté</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Service transparent avec des contrats clairs<br></br> et des tarifs sans surprises.<br></br><span className=" invisible">&nbsp;</span></p>
                    </div>
                   
                </div>
                <div className="flex items-center  gap-8 " >
                    <Bolt className="w-[72px] h-[72px]"></Bolt>
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Location Facile</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Notre agence propose des voitures <br></br> disponibles rapidement pour tous vos <br></br> besoins.</p>
                    </div>
                </div>
                </div> 
    
                <div className="flex flex-col gap-12"> 
                    <div className="flex items-center   gap-8 " >
                    <Flexible className="w-[72px] h-[72px]"></Flexible>
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Flexibilité</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Que ce soit pour une journée ou plusieurs <br></br> mois, nous avons une solution de location<br></br> pour vous.</p>
                    </div>
                   
                </div>
                <div className="flex items-center  gap-8 " >
                <Clients className="w-[72px] h-[72px]"></Clients    >
                    <div className="flex flex-col gap-[0.375rem]">
                        <p className="font-bold text-14 text-neutral-800 ">Satisfaction Garantie</p>
                        <p className="font-normal text-[12px] text-neutral-500 ">Votre satisfaction est notre priorité, avec <br></br> des services sur mesure pour répondre à <br></br> vos attentes.   </p>
                    </div>
                </div>
                </div>
    
                </div>

            }

            {
                (isDesktop) && 

                <div className="flex gap-28">
                    <div className="flex flex-col items-center   gap-8 " >
                    <Shield className="w-[80px] h-[80px]"></Shield>
                    <div className="flex flex-col items-center gap-[0.375rem]">
                        <p className="font-bold text-20 text-neutral-800 ">Fiabilité et Honnêteté</p>
                        <p className="font-normal text-14  text-center text-neutral-500 ">Service transparent avec des <br></br>contrats clairs et des tarifs<br></br> sans surprises.</p>
                    </div>
                    </div>

                    <div className="flex flex-col items-center   gap-8 " >
                    <Bolt className="w-[80px] h-[80px]"></Bolt>
                    <div className="flex flex-col items-center gap-[0.375rem]">
                        <p className="font-bold text-20 text-neutral-800 ">Location Facile</p>
                        <p className="font-normal text-14  text-center text-neutral-500 ">Notre agence propose des voitures <br></br> disponibles rapidement pour tous vos<br></br> besoins.</p>
                    </div>
                    </div>


                    <div className="flex flex-col items-center   gap-8 " >
                    <Flexible className="w-[80px] h-[80px]"></Flexible>
                    <div className="flex flex-col items-center gap-[0.375rem]">
                        <p className="font-bold text-20 text-neutral-800 ">Flexibilité</p>
                        <p className="font-normal text-14  text-center text-neutral-500 ">Que ce soit pour une journée ou <br></br> plusieurs mois, nous avons une <br></br> solution de location pour vous.</p>
                    </div>
                    </div>

                   
                    
                    <div className="flex flex-col items-center   gap-8 " >
                    <Clients className="w-[80px] h-[80px]"></Clients>
                    <div className="flex flex-col items-center gap-[0.375rem]">
                        <p className="font-bold text-20 text-neutral-800 ">Satisfaction Garantie</p>
                        <p className="font-normal text-14  text-center text-neutral-500 ">Votre satisfaction est notre priorité,<br></br> avec des services sur mesure pour <br></br> répondre à vos attentes.</p>
                    </div>
                    </div>
                   
                </div>
            }
        </div>
    );
}