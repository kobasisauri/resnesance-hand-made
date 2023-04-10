import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import styles from "./ShopItem.module.scss";

import { Zoom, FreeMode, Navigation, Thumbs } from "swiper";
// import { height } from "@mui/system";

function ShopItem() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useLocation();
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  // const [activeImage, setActiveImage] = useState();

  useEffect(() => {
    setData(params.state);

    const items = [data?.images?.map((item) => item)];
    setImages(items[0]);
  }, [data?.images, params.state]);

  const fullscreenHandler = () => {
    // var elem = document.getElementById("myvideo");

    // if (elem.requestFullscreen) {
    //   elem.requestFullscreen();
    //   elem.style.height = "480px";
    // }

    if (imageRef.current && imageRef.current.requestFullscreen) {
      imageRef.current.requestFullscreen();
      imageRef.current.style.height = "480px";
    }
  };

  // useEffect(() => {
  //   var elem = document.getElementById("myvideo");

  //   document.exitFullscreen();
  //   // elem.style.height = "550px";
  // }, []);

  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles.inner}>
        {images?.length && (
          <div className={styles["slider-container"]}>
            <Swiper
              zoom={true}
              style={{
                // height: "32rem",
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Zoom, FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
              ref={ref}
              // controller={{
              //   control: new Swiper(".gallery-thumbs", {
              //     spaceBetween: 10,
              //     centeredSlides: true,
              //     slidesPerView: "auto",
              //     touchRatio: 0.2,
              //     slideToClickedSlide: true,
              //   }),
              // }}
              onInit={(ev) => {
                console.log(ev);
              }}
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={item}
                    alt="slide_image"
                    id="myvideo"
                    ref={imageRef}
                    onClick={() => fullscreenHandler()}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper1"
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={item}
                    alt="slide_image"
                    // style={{
                    //   height: "100px",
                    //   // width: "220px",
                    // }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className={styles.description}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "end",
              height: "100%",
              width: "100%",
            }}
            onClick={() => {
              ref.current.swiper.zoom.in();
            }}
          >
            <div style={{ width: "100%" }}>
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
      </div>
    </div>
  );
}

export default ShopItem;
