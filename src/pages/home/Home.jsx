import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, FreeMode, Thumbs } from "swiper";

import pic0 from "assets/main.JPG";
import pic1 from "assets/1.JPG";
import pic2 from "assets/2.JPG";
import pic3 from "assets/3.JPG";
import pic4 from "assets/6.png";
import pic5 from "assets/5.jpg";
import styles from "./Home.module.scss";

const items = [pic0, pic1, pic2, pic3, pic4, pic5];

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles["home-wrapper"]}>
      {thumbsSwiper?.__swiper__ && (
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
          style={{
            height: "42rem",
            padding: "1rem 0",
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          effect={"coverflow"}
          className="swiper_container"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item}
                alt="slide_image"
                style={{
                  height: "38rem",
                  width: "35rem",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item}
              alt="slide_image"
              style={{
                height: "200px",
                width: "200px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
