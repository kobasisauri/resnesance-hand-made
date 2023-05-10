import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import rame from "assets/5.jpg";
import pic1 from "assets/1.JPG";
import pic2 from "assets/2.JPG";
import pic3 from "assets/3.JPG";
import pic4 from "assets/4.JPG";
import styles from "./Gallery.module.scss";

// --------------------//

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

// --------------------//

// import { ImageGroup, Image } from "react-fullscreen-image";
// import { width } from "@mui/system";

// const images = [pic1, pic2, pic3, pic4];

const items = [pic1, pic2, pic3, pic4, pic1, pic2, pic3];

const Gallery = () => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  // };
  // const settings2 = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 4,
  //   speed: 500,
  // };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={rame} alt="a" className={styles["main-image"]} />
        <p className={styles.text}>
          Art Text and Letters apps are loaded with quickly adjustable text
          design templates. These templates cover all typography trends ranging
          from 2D calligraphy, watercolor and aquarelle to photorealistic 3D
          text, social media graphics and more.
        </p>
      </div>

      {/* <Slider
        {...settings}
        style={{
          display: "grid",
          width: "100%",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {items.map((item, i) => (
          <div key={i}>
            <img
              src={item}
              alt="slider"
              style={{ width: "95%", height: "250px" }}
            />
          </div>
        ))}
      </Slider> */}

      {/* <ImageGroup>
        <ul className={styles.images} style={{ width: "100%" }}>
          {images.map((i) => (
            <li key={i}>
              <Image
                src={i}
                alt="nature"
                style={{
                  position: "static",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </li>
          ))}
        </ul>
      </ImageGroup> */}

      <Box sx={{ flexGrow: 1 }} className={styles.items}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          rowSpacing={{ xs: 1, sm: 2, md: 5 }}
        >
          {/* <ImageGroup>
            <ul className={styles.images} style={{ width: "100%" }}>
              {images.map((i) => (
                <li key={i}>
                  <Image
                    src={i}
                    alt="nature"
                    style={{
                      position: "static",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </li>
              ))}
            </ul>
          </ImageGroup> */}

          {items.map((item, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <div className={styles.item}>
                <img src={item} alt="pic" />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Gallery;
