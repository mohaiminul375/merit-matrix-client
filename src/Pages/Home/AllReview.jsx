import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { RingLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";
// import Swiper from "swiper";
const AllReview = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get("/home-review");
      return data;
    },
    queryKey: ["home-reviews"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  console.log(reviews);
  return (
    <div className="md:max-w-4xl mx-auto rounded-md mt-32">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={Infinity}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-[#EBF1FA]"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center h-56 rounded-sm">
              <h2 className="text-2xl font-bold text-[#247CFF]">
                {review.university_name}
              </h2>
              <h2 className="text-2xl font-bold text-[#247CFF]">
                {review.applicant_name}
              </h2>
              <p className="font-bold text-base text-[#247CFF] mb-4">
                Review Date: {new Date(review.post_date).toLocaleDateString()}
              </p>
              <p className="flex items-center text-xl font-bold text-[#247CFF]">
                {review.review_point}
                <Rating
                  style={{ maxWidth: 150 }}
                  value={review.review_point}
                  readOnly
                />
              </p>
              <p className="text-xl text-[#247CFF]">{review.review_comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllReview;
