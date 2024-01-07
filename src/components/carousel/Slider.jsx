import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { tmdbImg } from "../../config/Conf";
import { breakpoints, innerWidth } from "../../config/breakpoints";

const Slider = ({data,setCurrent}) => {
  return (
    <div className="absolute w-full px-4 lg:px-0 lg:w-[54%]  h-auto overflow-hidden bottom-10 lg:bottom-[80px] right:0 lg:right-[-130px]">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={data?.length - 1}
          spaceBetween={breakpoints.sm<=innerWidth?20:10}
          loop={true}
          onSlideChange={(e) => setCurrent(e.realIndex)}
          modules={[Autoplay]}
          className="mySwiper w-full"
        >
          {data?.map((item) => {
            return (
              <SwiperSlide key={item?.id} className="shadow-custom cursor-grab">
                <img
                  src={`${tmdbImg}${item?.poster_path}`}
                  className="w-full rounded-lg object-cover"
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
  )
}

export default Slider
