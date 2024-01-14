import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Slider from "./Slider";
import { tmdbImg } from "../../config/Conf";
import { useDispatch } from "react-redux";
import { trailerContext } from "../../hooks/useTrailer";
import { getTrailer } from "../../store/movieSlice";

export default function Carousel({ data }) {

  const {setOpen} = useContext(trailerContext);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  
  const variants = {
    initial: {
      scale: 0.8,
    },
    animate: {
      scale: 1,
      transition: {
        scale: {
          type: "spring",
          stiffness: 500,
          damping: 20,
        },
        duration: "0.2",
      },
    },
  };

  const textVariants = {
    initial: {
      y: 200,
    },
    animate: {
      y: 0,
      transition: {
        scale: {
          type: "spring",
          stiffness: 150,
          damping: 20,
        },
        delay: 0.5,
      },
    },
    exit: {
      y: -200,
    },
  };

  const fetchTrailer = (id)=>{
    dispatch(getTrailer(`/movie/${id}/videos`));
    setOpen(true);
}

  return (
    <div className="w-full h-[520px] overlay overflow-hidden relative ">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] lg:translate-x-0 lg:left-[140px] z-10 lg:translate-y-[-30%]">
        <div className="w-[300px] h-[60px] lg:h-auto lg:w-[522px] overflow-hidden">
          <motion.p
            variants={textVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            key={current}
            className="font-heading  text-[30px] leading-[34px] lg:text-[34px] w-full text-white lg:leading-[56px]"
          >
            {data[current]?.title}
          </motion.p>
        </div>
        <div onClick={()=>fetchTrailer(data[current]?.id)} className="cursor-pointer w-[120px] lg:w-[154px] bg-[#E95E55] h-[38px] text-white mt-5 flex font-para items-center justify-center">
          Watch Trailer
        </div>
      </div>
      <AnimatePresence initial={false}>
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          alt="slides"
          key={current}
          className="w-full h-full object-cover lg:object-top"
          src={`${tmdbImg}${data[current]?.backdrop_path}`}
        />
      </AnimatePresence>
      <Slider data={data} setCurrent={setCurrent}/>
      <div className="flex absolute gap-[10px] bottom-3 lg:bottom-6 left-4 lg:left-auto lg:right-[470px] z-30">
        <button className="flex items-center justify-center w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]  rounded-full border-white border-[2px]">
          <MdOutlineKeyboardArrowLeft className="text-white w-[20px] lg:w-[32px] h-[28px] lg:h-[28px] " />
        </button>
        <button className="flex items-center justify-center w-[20px] lg:w-[30px] h-[20px] lg:h-[30px] rounded-full border-white border-[2px]">
          <MdOutlineKeyboardArrowRight className="text-white w-[20px] lg:w-[29px] h-[18px] lg:h-[26px] " />
        </button>
      </div>
    </div>
  );
}
