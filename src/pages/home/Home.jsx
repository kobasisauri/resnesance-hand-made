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

const items = [pic0, pic1, pic2, pic3, pic4, pic5];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <>
      <Swiper
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
            <img src={item} alt="slide_image" />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <Swiper spaceBetween={100} slidesPerView={3} initialSlide={slideIndex}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item} alt="slide_image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
