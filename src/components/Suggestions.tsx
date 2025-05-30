import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Next from "/assets/icon-forward.svg";
import Prev from "/assets/icon-back.svg";
import SuggestionsData from "../suggestions.json";

export default function Suggestions() {
  const swiperRef = useRef<any>(null);
  return (
    <>
      <section style={{ padding: "20px" }} className="relative">
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
          style={{ padding: "20px" }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          slidesPerView={1}
          loop
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay]}>
          {SuggestionsData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={{ margin: "auto" }}
                className="suggestion flex flex-col justify-between gap-5 w-[90%] bg-[#ebebeb] rounded-[15px] drop-shadow-md xl:min-h-[620px] cursor-grab">
                <div className="flex flex-col gap-5">
                  <img
                    className="rounded-[10px]"
                    src={item.image}
                    alt="suggestion image"
                  />
                  <h2 className="text-[15px] text-cente font-semibold text-[#DC3F37] xl:text-[18px]">
                    {item.suggestionTitle}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[12px] xl:text-[14px]">
                    {item.textContent}
                  </p>
                </div>
                <button
                  style={{ padding: "5px" }}
                  className="bg-[#DC3F37] text-white rounded-[10px] cursor-pointer hover:bg-[#dc3f37c5] transition-[0.2s]">
                  სრულად
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
