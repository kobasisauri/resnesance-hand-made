import React from "react";

import { Fade } from "react-reveal";
import styles from "./Gallery.module.scss";
import rame from "assets/5.jpg";
import pic1 from "assets/1.JPG";
import pic2 from "assets/2.JPG";
import pic3 from "assets/3.JPG";
import pic4 from "assets/4.JPG";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <Fade bottom>
        <div className={styles.wrapper}>
          <img src={rame} alt="a" className={styles["main-image"]} />
          <p className={styles.text}>
            Art Text and Letters apps are loaded with quickly adjustable text
            design templates. These templates cover all typography trends
            ranging from 2D calligraphy, watercolor and aquarelle to
            photorealistic 3D text, social media graphics and more.
          </p>
        </div>
      </Fade>

      <div className={styles.items}>
        <Fade bottom>
          <div className={styles.item}>
            <img src={pic1} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic2} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic3} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic4} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic1} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic2} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic1} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic2} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic3} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic4} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic1} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic2} alt="pic" />
          </div>

          <div className={styles.item}>
            <img src={pic1} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic2} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic3} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic4} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic1} alt="pic" />
          </div>
          <div className={styles.item}>
            <img src={pic2} alt="pic" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Gallery;
