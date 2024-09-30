
import {ReactComponent as  I_CALENDAR} from "../assets/icons/i_calendar.svg"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from "react"; 
import dayjs from 'dayjs';
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import { AnimatePresence , motion } from "framer-motion";


export default function DatePicker(props) {
  const isMobile = useMediaQuery("only screen and (max-width : 767px)");
  const isTablet = useMediaQuery("only screen and (max-width : 1024px) and (min-width :768px)");
  const isLaptop = useMediaQuery("only screen and (max-width : 1366px)");
  const isDesktop = useMediaQuery("only screen and (max-width : 1442px)");
  const scale = useState(isMobile ? 0.8 : isTablet ? 0.85 : isLaptop ? 0.9 : isDesktop ? 0.9 : 1 )
  const [date, setDate] = useState(props.start === 0 ? dayjs():dayjs().add(props.start, 'month'));
  const customTheme = createTheme({
    typography: {
      fontFamily: "'Metropolis', sans-serif", // Global font family
    },
    components: {  
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            backgroundColor: '#f5f5f5', // Custom background color
            boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)', // Custom shadow
            borderRadius: '10px', // Rounded corners
            padding: '2px', // Extra padding to make space
          },
        },
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            fontSize: '16px', // Day number size
            fontWeight: '500',// Make the text bold for all days
            '&:hover': {
              backgroundColor: '#e5e5e5', // Hover effect for non-selected days
            },
          },
        },
      },
    },
  });
  
  return (
    <div className="flex flex-col relative gap-[2rem] h-12 tablet:h-16 laptop:h-16 desktop:h-full desktop2:h-full w-full min-w-[12rem]">
    <div tabIndex={"0"} onClick={()=>{props.setOpen(!props.open)}} className={classNames("flex flex-col cursor-pointer justify-between h-full min-w-[12rem] p-[0.5rem] desktop2:p-[0.75rem]  shadow-input bg-neutral-100 hover:shadow-input_hover_red_50 hover:bg-red-50    rounded-[5px] ",{"bg-red-50":props.open})}>
                    <p className="text-neutral-500 font-normal text-11 tablet:text-14 laptop:text-14 desktop:text-16 desktop2:text-18 ">{props.title}</p>
                    <div className="flex items-center  gap-[0.375rem] desktop:gap-[0.5rem] desktop2:gap-[0.5rem]" >
                        <I_CALENDAR className="h-[13px] w-[10px] tablet:h-[18px] tablet:w-[17px] laptop:w-[21px] laptop:h-[23px]"/>
                            <p className="font-medium text-14 tablet:text-18 laptop:text-18 desktop:text-20 desktop2:text-23   text-neutral-900">{date.format("ddd")+","+date.format("MMM")+","+date.format("DD")}</p>  
                    </div>
    </div>
    <AnimatePresence>
     {
      props.open && 
      
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}  className="absolute self-center z-10  top-[1.5rem] tablet:top-[2.5rem] laptop:top-[2.5rem]  desktop2:top-[3rem] desktop:top-[3rem] "  >
      <ThemeProvider theme={customTheme}>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateCalendar  disablePast reduceAnimations={true}  value={date}  onChange={(newValue) => {setDate(newValue);props.setOpen(false)}}  sx={{

            scale:scale,
            '& .Mui-selected': {
              backgroundColor: '#262626 !important', // Override selected day background color directly
              color: '#fff !important', // Override selected day text color
            },
            '& .Mui-selected:hover': {
              backgroundColor: '#333 !important', // Ensure hover works on selected day
            }, 
            
          }}></DateCalendar>
     </LocalizationProvider></ThemeProvider>
     </motion.div>
    }
    </AnimatePresence>
    </div>
  );
}
