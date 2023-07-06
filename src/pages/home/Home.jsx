import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
// import { TextField } from "@mui/material";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import ContactImage from "../../assets/contact-us.png";
import { Autoplay, EffectFade, Pagination } from "swiper";
import Logo from "assets/logo.png";
import HandMade from "assets/handmade.jpg";
import Test from "assets/1.png";

import pic0 from "assets/9.jpeg";
import pic1 from "assets/1.jpeg";
import pic2 from "assets/2.jpeg";
import pic3 from "assets/3.jpeg";
import pic4 from "assets/6.png";
import pic5 from "assets/5.jpeg";
// import pic8 from "assets/8.jpg";
import styles from "./Home.module.scss";

import knobs from "assets/shop/LOOP/1.jpeg";
import pulls from "assets/shop/LANGARD_P/1.jpeg";
import bigHandles from "assets/shop/HEX_R/4.jpeg";
import kitchen from "assets/shop/QUAD_WG/1.jpeg";
import vanity from "assets/shop/ANG_L_KNOB/1.jpeg";
import bar from "assets/shop/ARES/1.jpeg";
import closet from "assets/shop/ARES_MIX/1.jpeg";
import wineRoom from "assets/shop/HEX_R/1.jpeg";
import library from "assets/shop/ASSIMETRIC_ART/1.jpeg";
import movieTheatre from "assets/1.jpeg";
import signature from "assets/shop/ASSIMETRIC_AW/1.jpeg";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [smallImage, setSmallImage] = useState(false);
  const items = [
    // smallImage ? HandMade : Test,
    pic0,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
  ];
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if (width < 1000) {
      setSmallImage(true);
    } else {
      setSmallImage(false);
    }
  }, [width]);

  return (
    <div className={styles["home-wrapper"]}>
      <img src={smallImage ? HandMade : Test} alt="main" />
      <div
        style={{
          height: "32px",
          width: "100%",
          backgroundColor: "rgb(40,40,40)",
        }}
      />

      <Swiper
        loop={true}
        spaceBetween={10}
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect="fade"
        style={
          {
            // height: "50rem",
            // "--swiper-navigation-color": "#fff",
            // "--swiper-pagination-color": "#fff",
          }
        }
        className="swiper_container"
        arrows={false}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} style={{ height: "100%" }}>
            <img
              src={item}
              alt="slide_image"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        style={{
          height: "32px",
          width: "100%",
          backgroundColor: "rgb(40,40,40)",
        }}
      />

      <div className={styles.section5}>
        <div className={styles.wrapper5}>
          <div className={styles.innerWrapper}>
            <h1>
              RENAISSANCE <br />
              HANDMADE
            </h1>
            <img
              src={Logo}
              alt="logo"
              style={{ widows: "84px", height: "84px" }}
            />

            <div className={styles.text5}>
              Let us introduce you our vision of hardware – mix of various
              materials and different worlds such as furniture, knives, jewelry
              making, art and passion. <br />
              <br />
              We mix materials that are not commonly mixed in hardware, it is
              challenging, but we like it.
              <br />
              <br />
              Our goal is to get high end product.
              <br />
              <br />
              We have already created quite broad range of different designs and
              are constantly working on new ones.
              <br />
              <br />
              New design can be performed according to your specifications and
              taste giving you an unique chance to create one of a kind product.
              <br />
              <br />
              Design is highly customizable, it’s up to you select materials,
              number and width of every line, color, overall breadth and length
              of final product.
              <br />
              <br />
              We use broad range of materials, including as stainless steel,
              Damascus steel, brass, bronze, nickel, aluminum, copper, silver,
              beautiful and precious exotic sorts of hardwood, carbon fiber,
              acrylic polymers, leather, constantly experimenting with new
              ideas.
            </div>
          </div>

          <div className={`row`} style={{ marginTop: "5rem" }}>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=knobs" style={{ cursor: "pointer" }}>
                <img src={knobs} alt="category-pic" width="100%" />
              </Link>
              <h4>KNOBS</h4>
              {/* <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p> */}
            </div>{" "}
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=pulls" style={{ cursor: "pointer" }}>
                <img src={pulls} alt="category-pic" width="100%" />
              </Link>
              <h4>PULLS</h4>
              {/* <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p> */}
            </div>{" "}
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link
                to="/shop?category=big-handles"
                style={{ cursor: "pointer" }}
              >
                <img src={bigHandles} alt="category-pic" width="100%" />
              </Link>
              <h4>BIG HANDLES</h4>
              {/* <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=kitchen" style={{ cursor: "pointer" }}>
                <img src={kitchen} alt="category-pic" width="100%" />
              </Link>
              <h4>KITCHEN</h4>
              {/* <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=vanity" style={{ cursor: "pointer" }}>
                <img src={vanity} alt="category-pic" width="100%" />
              </Link>

              <h4>VANITY</h4>
              {/* <p>
                Live edge dining tables. Pick your natural edge <br /> slab and
                we custom fit a base to match your piece.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=bar" style={{ cursor: "pointer" }}>
                <img src={bar} alt="category-pic" width="100%" />
              </Link>

              <h4>BAR</h4>
              {/* <p>
                Custom made seating and storage bench designs <br /> made from
                live edge natural tree slabs.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=closet" style={{ cursor: "pointer" }}>
                <img src={closet} alt="category-pic" width="100%" />
              </Link>

              <h4>CLOSET</h4>
              {/* <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=wine-room" style={{ cursor: "pointer" }}>
                <img src={wineRoom} alt="category-pic" width="100%" />
              </Link>

              <h4>WINE ROOM</h4>
              {/* <p>
                Live edge dining tables. Pick your natural edge <br /> slab and
                we custom fit a base to match your piece.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link
                to="/shop?category=night-stand"
                style={{ cursor: "pointer" }}
              >
                <img src={pic0} alt="category-pic" width="100%" />
              </Link>

              <h4>NIGHT STAND</h4>
              {/* <p>
                Custom made seating and storage bench designs <br /> made from
                live edge natural tree slabs.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=library" style={{ cursor: "pointer" }}>
                <img src={library} alt="category-pic" width="100%" />
              </Link>

              <h4>LIBRARY</h4>
              {/* <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link
                to="/shop?category=movie-theatre"
                style={{ cursor: "pointer" }}
              >
                <img src={movieTheatre} alt="category-pic" width="100%" />
              </Link>

              <h4>MOVIE THEATRE</h4>
              {/* <p>
                Live edge dining tables. Pick your natural edge <br /> slab and
                we custom fit a base to match your piece.
              </p> */}
            </div>
            <div className={`${styles.item} col-md-6 col-lg-4 `}>
              <Link to="/shop?category=signature" style={{ cursor: "pointer" }}>
                <img src={signature} alt="category-pic" width="100%" />
              </Link>

              <h4>SIGNATURE</h4>
              {/* <p>
                Custom made seating and storage bench designs <br /> made from
                live edge natural tree slabs.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
