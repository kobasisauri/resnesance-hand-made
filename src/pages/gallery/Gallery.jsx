import { GalleryImages } from "../../gallery";
import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import styles from "../shop/ShopItem.module.scss";
import { Zoom, FreeMode, Navigation, Thumbs } from "swiper";

import styled from "../shop/Shop.module.scss";
const Gallery = () => {
  const sliderRef = useRef();
  const [myIndex, setMyIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setImages(GalleryImages);
  }, []);

  useEffect(() => {
    sliderRef?.current?.swiper.slideTo(myIndex);
  }, [myIndex]);

  useEffect(() => {
    sliderRef?.current?.swiper.on("zoomChange", (_, scale) => {
      if (scale > 1) {
        sliderRef.current.swiper.allowSlideNext = false;
        sliderRef.current.swiper.allowSlidePrev = false;
      } else {
        sliderRef.current.swiper.allowSlideNext = true;
        sliderRef.current.swiper.allowSlidePrev = true;
      }
    });
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Gallery</h2>

      <div className={styles["home-wrapper"]}>
        <div className={styled["content-container"]}>
          <div className="row">
            {GalleryImages.map((item, i) => (
              <div
                onClick={() => {
                  setModalOpen(true);
                  setMyIndex(i);
                }}
                key={i}
                className={`${styled.item} col-md-6 col-lg-4 col-xl-3`}
                style={{ minHeight: "200px" }}
              >
                <div style={{ cursor: "pointer" }}>
                  <div
                    className={styled["image-container"]}
                    style={{ height: "200px" }}
                  >
                    <img src={item || ""} alt="item" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.modal}
          style={{ visibility: modalOpen ? "visible" : "hidden" }}
        >
          <div className={styles.close} onClick={() => setModalOpen(false)}>
            <svg
              style={{ fill: "#fff" }}
              height="48"
              viewBox="0 0 512 512"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" />
            </svg>
          </div>

          {images?.length && (
            <Swiper
              ref={sliderRef}
              zoom={true}
              style={{
                // height: "50rem",
                // width: "90%",
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[Zoom, FreeMode, Navigation, Thumbs]}
              className="swiper_container modal_swiper_container"
              effect="fade"
              speed={750}
            >
              {images?.length &&
                images.map((item, i) => (
                  <SwiperSlide
                    key={i}
                    // style={{ height: "100%" }}
                  >
                    <div className="swiper-zoom-container position-relative">
                      <img
                        src={item}
                        alt="slide_image"
                        className={styles["modal-images"]}
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
