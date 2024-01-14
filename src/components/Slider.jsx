import AutoLayout from "./AutoLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageCard from "./card/ImageCard";
import { breakpoints, innerWidth } from "../config/breakpoints";
import { ImageSkeleton } from "./index";


const Slider = ({ isPlayer,data = [], items, status, className = "", getTrailer }) => {
  return (
    <AutoLayout className={`${className}`}>
      <Swiper
        slidesPerView={breakpoints.sm <= innerWidth ? items : 3}
        spaceBetween={breakpoints.sm <= innerWidth ? 20 : 10}
        className="mySwiper w-full"
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
                  className="cursor-grab"
                >
                  <ImageCard className="w-full " getTrailer={getTrailer} movie={item} isPlayer={isPlayer} />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </AutoLayout>
  );
};

export default Slider;
