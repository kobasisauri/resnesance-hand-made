import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import pic0 from "assets/main.JPG";
import pic1 from "assets/1.JPG";
import pic2 from "assets/2.JPG";
import pic3 from "assets/3.JPG";
import pic4 from "assets/6.png";
import pic5 from "assets/5.jpg";
import zIndex from "@mui/material/styles/zIndex";

const items = [pic0, pic1, pic2, pic3, pic4, pic5];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <>
      <Swiper
        style={{ height: "42rem", padding: "1rem 0" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item}
              alt="slide_image"
              style={{ borderRadius: "1rem", height: "38rem", width: "35rem" }}
            />
          </SwiperSlide>
        ))}

        {/* <div
          className="slider-controler"
          style={{
            position: "absolute",
            zIndex: "1",
            width: "100%",
            top: "0",
          }}
        > */}
        <div
          className="swiper-button-prev slider-arrow"
          style={{ left: "3%", color: "white" }}
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div
          className="swiper-button-next slider-arrow"
          style={{ right: "3% ", left: "auto", color: "white" }}
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        {/* <div className="swiper-pagination" style={{ bottom: "-49%" }}></div> */}
        {/* </div> */}
      </Swiper>

      <Swiper
        spaceBetween={100}
        slidesPerView={6}
        initialSlide={slideIndex}
        style={{ height: "200px" }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item}
              alt="slide_image"
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "1rem",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
