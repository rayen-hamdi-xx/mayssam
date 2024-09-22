
import {ReactComponent as  I_CALENDAR} from "../assets/icons/i_calendar.svg"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from "react"; 
import dayjs from 'dayjs';
import { createTheme, ThemeProvider } from "@mui/material";
import classNames from "classnames";
import { AnimatePresence , motion } from "framer-motion";

export default function DatePicker(props) {
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
    <div className="flex flex-col items-center relative gap-[2rem] h-full max-w-[10.325rem]">
    <div tabIndex={"0"} onClick={()=>{props.setOpen(!props.open)}} className={classNames("flex flex-col cursor-pointer justify-between h-full min-w-[10.325rem] p-[0.5rem]  shadow-input bg-neutral-100 hover:shadow-input_hover_red_50 hover:bg-red-50    rounded-[5px] ",{"bg-red-50":props.open})}>
                    <p className="text-neutral-500 font-normal text-16 ">{props.title}</p>
                    <div className="flex items-center  gap-[0.75rem]">
                        <I_CALENDAR />
                            <p className="font-medium text-20  text-neutral-900">{date.format("ddd")+","+date.format("MMM")+","+date.format("DD")}</p>  
                    </div>
    </div>
    <AnimatePresence>
     {
      props.open && 
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}  className="absolute z-10 top-[5.5rem]  "  >
      <ThemeProvider theme={customTheme}>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateCalendar  disablePast reduceAnimations={true}  value={date}  onChange={(newValue) => {setDate(newValue);props.setOpen(false)}}  sx={{
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
