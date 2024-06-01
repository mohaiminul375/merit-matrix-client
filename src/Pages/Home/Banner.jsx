import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px]">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[500px]">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide className="h-[500px]">
          {" "}
          <div className="h-[500px]">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
