import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { TextField } from "@mui/material";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import ContactImage from "../../assets/contact-us.png";
import { Autoplay, EffectFade, Pagination } from "swiper";
import Logo from "assets/logo.png";
// import WhiteLogo from "../../assets/whiteLogo.png";

import pic0 from "assets/main.JPG";
// import pic1 from "assets/1.JPG";
import pic2 from "assets/2.JPG";
import pic3 from "assets/3.JPG";
import pic4 from "assets/6.png";
import pic5 from "assets/5.jpg";
import pic8 from "assets/8.jpg";
import styles from "./Home.module.scss";

import archeuli1 from "assets/shop/QUAD_WG/1.jpeg";
import archeuli2 from "assets/shop/ANG_L_KNOB/1.jpeg";
import archeuli3 from "assets/shop/ARES/1.jpeg";
import archeuli4 from "assets/shop/ARES_MIX/1.jpeg";
import archeuli5 from "assets/shop/HEX_R/1.jpeg";
import archeuli6 from "assets/shop/ASSIMETRIC_ART/1.jpeg";
import pic1 from "assets/1.JPG";
import archeuli8 from "assets/shop/ASSIMETRIC_AW/1.jpeg";

const items = [pic8, pic0, pic1, pic2, pic3, pic4, pic5];

const Home = () => {
  const [modalOpen, setModalOpen] = useState(null);
  // const [firstSwiper, setFirstSwiper] = useState(null);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   speed: 2000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 520,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className={styles["home-wrapper"]}>
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
              Our goal is to get hi end product.
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
              Damascus steel, brass, bronze, nickel, aluminum, copper, beautiful
              and precious exotic sorts of hardwood, carbon fiber, acrylic
              polymers, leather, constantly experimenting with new ideas.
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.item}>
              <img src={archeuli1} alt="asd" />
              <h4>KITCHEN</h4>
              <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p>
            </div>
            <div className={styles.item}>
              <img src={archeuli2} alt="asd" />
              <h4>VANITY</h4>
              <p>
                Live edge dining tables. Pick your natural edge <br /> slab and
                we custom fit a base to match your piece.
              </p>
            </div>
            <div className={styles.item}>
              <img src={archeuli3} alt="asd" />
              <h4>BAR</h4>
              <p>
                Custom made seating and storage bench designs <br /> made from
                live edge natural tree slabs.
              </p>
            </div>

            <div className={styles.item}>
              <img src={archeuli4} alt="asd" />
              <h4>CLOSET</h4>
              <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p>
            </div>
            <div className={styles.item}>
              <img src={archeuli5} alt="asd" />
              <h4>WINE ROOM</h4>
              <p>
                Live edge dining tables. Pick your natural edge <br /> slab and
                we custom fit a base to match your piece.
              </p>
            </div>
            <div className={styles.item}>
              <img src={pic0} alt="asd" />
              <h4>NIGHT STAND</h4>
              <p>
                Custom made seating and storage bench designs <br /> made from
                live edge natural tree slabs.
              </p>
            </div>

            <div className={styles.item}>
              <img src={archeuli6} alt="asd" />
              <h4>Library</h4>
              <p>
                View the entire collection of live edge natural wood slab
                furniture and reclaimed wood furniture.
              </p>
            </div>
            <div className={styles.item}>
              <img src={pic1} alt="asd" />
              <h4>MOVIE THEATRE</h4>
              <p>
                Live edge dining tables. Pick your natural edge <br /> slab and
                we custom fit a base to match your piece.
              </p>
            </div>
            <div className={styles.item}>
              <img src={archeuli8} alt="asd" />
              <h4>SIGNATURE</h4>
              <p>
                Custom made seating and storage bench designs <br /> made from
                live edge natural tree slabs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.section2}>
        <div className={styles["logo-container"]}>
          <img src={Logo} alt="logo" className={styles.image} />
        </div>

        <div className={styles.description}>
          <h3>RENAISSANCE HANDMADE</h3>

          <p>
            Let us introduce you our vision of hardware – mix of various
            materials and different worlds such as furniture, knives, jewelry
            making, art and passion. We mix materials that are not commonly
            mixed in hardware, it is challenging, but we like it. Our goal is to
            get hi end product. We have already created quite broad range of
            different designs and are constantly working on new ones. New design
            can be performed according to your specifications and taste giving
            you an unique chance to create one of a kind product. Design is
            highly customizable, it’s up to you select materials, number and
            width of every line, color, overall breadth and length of final
            product. We use broad range of materials, including as stainless
            steel, Damascus steel, brass, bronze, nickel, aluminum, copper,
            beautiful and precious exotic sorts of hardwood, carbon fiber,
            acrylic polymers, leather, constantly experimenting with new ideas.
          </p>
        </div>
      </div>

      <div className={styles.section3}>
        <p className={styles.gallery}>GALLERY</p>
        <Slider {...settings}>
          {data.map((item, i) => (
            <div
              key={i}
              style={{ width: "25%", padding: "0 1rem" }}
              className={styles["item-wrapper"]}
              onClick={() => setModalOpen(item.images[0])}
            >
              <img
                src={item.images[0]}
                className={styles["slider-item"]}
                alt="product"
              />
            </div>
          ))}
        </Slider>
      </div> */}

      <div
        className={styles.modal}
        style={{ visibility: !!modalOpen ? "visible" : "hidden" }}
      >
        <div className={styles.close} onClick={() => setModalOpen(null)}>
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

        <img
          src={modalOpen}
          alt="slide_image"
          className={styles["modal-images"]}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />

        {/* {data?.length && (
          <Swiper
            zoom={true}
            style={{
              height: "50rem",
              width: "90%",
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: firstSwiper }}
            modules={[Zoom, FreeMode, Navigation, Thumbs]}
            className="swiper_container modal_swiper_container"
            onSlideChange={(swiper) => setThumbsSwiper(swiper)}
            effect="fade"
            speed={750}
          >
            {data?.length &&
              data.map((item, i) => (
                <SwiperSlide key={i} style={{ height: "100%" }}>
                  <img
                    src={item.images[0]}
                    alt="slide_image"
                    className={styles["modal-images"]}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )} */}
      </div>
      {/* <div style={{ marginTop: "5rem", width: "100%" }}>
        <p className={styles.shop}>Gallery</p>
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
      </div> */}
      {/* <div className={styles.section4}>
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
      </div> */}
    </div>
  );
};

export default Home;
