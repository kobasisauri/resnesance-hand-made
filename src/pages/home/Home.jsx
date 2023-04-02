import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ContactImage from "../../assets/contact-us.png";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Logo from "assets/logo.png";
import pic0 from "assets/main.JPG";
import pic1 from "assets/1.JPG";
import pic2 from "assets/2.JPG";
import pic3 from "assets/3.JPG";
import pic4 from "assets/6.png";
import pic5 from "assets/5.jpg";
import styles from "./Home.module.scss";
import { hover } from "@testing-library/user-event/dist/hover";
import { fontSize } from "@mui/system";

const items = [pic0, pic1, pic2, pic3, pic4, pic5, pic5, pic5, pic5, pic5];

const Home = () => {
  let color = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState("#181717");

  useEffect(() => {
    if (color === "light") {
      setTheme("#181717");
    } else if (color === "dark") {
      setTheme("#e3e3e3");
    }
  }, [color]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["home-wrapper"]} style={{ marginTop: "2rem" }}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        style={{
          height: "50rem",

          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        className="swiper_container"
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

      <div className={styles.section2}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ height: "550px", width: "72%" }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <h1 style={{ textAlign: "center" }}>Renaissance Handmade</h1>
          <p
            style={{
              lineHeight: "2rem",
              fontSize: "24px",
              marginTop: "3rem",
              marginRight: "1rem",
            }}
          >
            Let me introduce you my vision of hardware – mix of various
            materials and different worlds such as furniture, knives, jewelry
            making, art and passion. My goal is to create Hi End product and I
            like to enjoy the process. I mix materials that are not commonly
            mixed in hardware, it is challenging, but I like it. I use stainless
            steel, brass, aluminum, bronze, nickel, copper, precious sorts of
            rare and exotic hardwood, acrylic polymers, micarta, carbon fiber
            and more…
          </p>
        </div>
      </div>

      <div style={{ marginTop: "5rem", width: "100%" }}>
        <p className={styles.shop}>Shop</p>
        <div className={styles.section}>
          <p style={{ marginLeft: "1rem", fontSize: "20px" }}>
            Metal products:
          </p>
          <Slider {...settings}>
            <div>
              <img src={pic0} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic1} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic3} alt="crafts" />
              <p>saxeli....</p>
            </div>
            <div>
              <img src={pic4} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic5} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic3} alt="crafts" />
              <p>saxeli...</p>
            </div>
          </Slider>
          <div
            className={styles.link}
            style={{ textAlign: "right", paddingRight: "1rem" }}
          >
            <Link to="/shop">See more</Link>
          </div>
        </div>

        <div className={styles.section}>
          <p style={{ marginLeft: "1rem", fontSize: "20px" }}>Wood products:</p>
          <Slider {...settings}>
            <div>
              <img src={pic0} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic1} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic3} alt="crafts" />
              <p>saxeli....</p>
            </div>
            <div>
              <img src={pic4} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic5} alt="crafts" />
              <p>saxeli...</p>
            </div>
            <div>
              <img src={pic3} alt="crafts" />
              <p>saxeli...</p>
            </div>
          </Slider>
          <div
            className={styles.link}
            style={{ textAlign: "right", paddingRight: "1rem" }}
          >
            <Link to="/shop">See more</Link>
          </div>
        </div>
      </div>

      <div></div>

      <div className={styles.section4}>
        <h3>Contact Us</h3>
        <div className={styles.wrapper}>
          <div className={styles["inner-wrapper"]}>
            <form className={styles.form}>
              <p>Full Name</p>
              <TextField
                id="outlined-basic"
                label="What's your full name?"
                variant="outlined"
                sx={{
                  width: "360px",
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: theme },
                  },
                }}
              />
              <p>Email address</p>
              <TextField
                id="outlined-basic"
                label="example@gmail.com"
                variant="outlined"
                sx={{
                  width: "360px",
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: theme },
                  },
                }}
              />
              <p>Message</p>
              <TextField
                id="outlined-multiline-static"
                label="Write your message for team here"
                multiline
                rows={3}
                sx={{
                  width: "360px",
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: theme },
                  },
                }}
              />

              <div className={styles["button-wrrapper"]}>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ width: "250px" }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
          <div className={styles["contact-image"]}>
            <img src={ContactImage} alt="contact-us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
