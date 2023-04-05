import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, FreeMode, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ShopItem.module.scss";

function ShopItem() {
  const params = useLocation();
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    setData(params.state);

    const items = [data?.images?.map((item) => item)];
    setImages(items[0]);
  }, [data?.images, params.state]);

  return (
    images?.length && (
      <div className={styles["home-wrapper"]}>
        {thumbsSwiper?.__swiper__ && (
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
            style={{
              height: "32rem",

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
            {images.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  src={item}
                  alt="slide_image"
                  style={{
                    height: "30rem",
                    width: "35rem",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={15}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          // style={{ width: "200px" }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i} style={{ width: "220px" }}>
              <img
                src={item}
                alt="slide_image"
                style={{
                  height: "200px",
                  width: "220px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.description}>
          <div>
            <p>Name: {data?.name}</p>
            <p>Description: {data?.description}</p>
            <p> Materials: {data?.innerTitle}</p>
            <p>
              Price: <span>{data?.price}$</span>
            </p>
          </div>
          <Link to="../shop">Back to shop</Link>
        </div>
      </div>
    )
  );
}

export default ShopItem;
