import AutoLayout from "./AutoLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageCard from "./card/ImageCard";
import { breakpoints, innerWidth } from "../config/breakpoints";
import { ImageSkeleton } from "./index";
import {Navigation} from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Slider = ({ isPlayer,data = [], items, status, className = "", getTrailer }) => {
  

  return (
    <AutoLayout className={`${className}`}>
      <Swiper
         navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        
        slidesPerView={breakpoints.sm <= innerWidth ? items : 3}
        spaceBetween={breakpoints.sm <= innerWidth ? 20 : 10}
        className="mySwiper w-full"
        modules={[Navigation]}
      >
        {status
          ? Array(6)
              .fill(0)
              .map((_, id) => {
                return (
                  <SwiperSlide key={id} className="">
                    <ImageSkeleton className="w-full" />
                  </SwiperSlide>
                );
              })
          : data?.map((item) => {
              return (
                <SwiperSlide
                  key={item?.id}
                  className="cursor-pointer py-4"
                >
                  <ImageCard className="w-full" getTrailer={getTrailer} movie={item} isPlayer={isPlayer} />
                </SwiperSlide>
              );
            })}
        <div className="flex gap-2 mt-2 px-5 justify-end">
         <button className="prev text-xl flex justify-center items-center w-[40px] h-[40px] border-[1.4px] border-gray-300 rounded-full disabled:cursor-not-allowed" >
         <FaChevronLeft className="text-gray-400" />
         </button>
         <button className="next text-xl flex justify-center items-center w-[40px] h-[40px] border-[1.4px] border-gray-300 rounded-full disabled:cursor-not-allowed" >
         <FaChevronRight className="text-gray-400" />
         </button>
         </div>
      </Swiper>
    </AutoLayout>
  );
};

export default Slider;
