import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
const Banner = () => {
  return (
    <div>
      <Swiper
        // loop={true}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 5500,
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
          <div
              className=" h-[500px]  w-full bg-cover"
              style={{
                backgroundImage: ` linear-gradient(to right, rgba(0, 0, 0, 0.7  ), rgba(0, 0, 0, 0.7)), url(${banner1})`,
              }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <h2 className="text-6xl font-bold text-[#1a71f5] font-dancing-Script">Merit Matrix</h2>
                <p className="text-[#1a71f5] text-xl">Funding Futures, Inspiring Success.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className=" h-[500px]  w-full bg-cover"
            style={{
              backgroundImage: ` linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${banner2})`,
            }}
          >
             <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#1a71f5]">Get Your Dream Scholarship <br /> With Low Price</h2>
                <p className="text-[#1a71f5] text-xl">
                  Find best scholarship in lowest price
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[500px]">
          {" "}
          <div
            className=" h-[500px]  w-full bg-cover"
            style={{
              backgroundImage: ` linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${banner3})`,
            }}
          >
             <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#1a71f5]">Top Ranking Universities</h2>
                <p className="text-[#1a71f5] text-xl">
                  Find top rated university in our website
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
