import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Next from "/assets/icon-forward.svg";
import Prev from "/assets/icon-back.svg";

const imgSources: string[] = [
  "/assets/image-mondays.jpg",
  "/assets/image-europian.jpg",
  "/assets/image-market.jpg",
];

export default function Images() {
  const swiperRef = useRef<any>(null);

  return (
    <div style={{ margin: "auto" }} className="w-full relative xl:w-[1180px]">
      <button
        className="absolute left-0 top-[50%]  translate-y-[-50%] cursor-pointer z-10"
        onClick={() => swiperRef.current?.slidePrev()}>
        <img
          className="filter brightness-80 hover:brightness-20"
          src={Prev}
          alt="previous"
        />
      </button>
      <button
        className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer z-10"
        onClick={() => swiperRef.current?.slideNext()}>
        <img
          className="filter brightness-80 hover:brightness-20"
          src={Next}
          alt="next"
        />
      </button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        loop
        navigation
        modules={[Navigation, Autoplay]}>
        {imgSources.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              style={{ margin: "auto" }}
              src={src}
              alt={`slide-${idx}`}
              className="w-[85%] rounded-[10px] cursor-grab"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
