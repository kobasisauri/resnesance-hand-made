// import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
// import WhiteLogo from "../../assets/whiteLogo.png";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  // let color = JSON.parse(localStorage.getItem("theme"));

  // const [theme, setTheme] = useState(false);

  // useEffect(() => {
  //   if (color === "light") {
  //     setTheme(true);
  //   } else if (color === "dark") {
  //     setTheme(false);
  //   }
  // }, [color]);

  return (
    <div className={styles.container}>
      <div className={styles.innerwrapper}>
        {/* {!theme ? (
          <img src={WhiteLogo} alt="logo" className={styles.image} />
        ) : (
          <img src={Logo} alt="logo" className={styles.image} />
        )} */}
        <img src={Logo} alt="logo" className={styles.image} />
      </div>
      <div className={styles.innerwrapper}>
        <h2>RENAISSANCE HANDMADE</h2>
        <div style={{ marginTop: "2rem" }}>
          {/* <h6>What is it ?</h6> */}
          <p>
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
            number and width of every line, color, overall breadth and length of
            final product.
            <br />
            <br />
            We use broad range of materials, including as stainless steel,
            Damascus steel, brass, bronze, nickel, aluminum, copper, beautiful
            and precious exotic sorts of hardwood, carbon fiber, acrylic
            polymers, leather, constantly experimenting with new ideas.
          </p>
        </div>
        {/* <div>
          <h6>HANDMADE</h6>
          <p>
            I use modern technologies such as computer designing or laser
            cutting metals and other technologies to enhance precision and
            quality, but handwork gives to the products final shine, I hand
            assemble carefully, sand and polish. It takes so much afford to
            achieve results I am aiming for.
          </p>
        </div>
        <div>
          <h6>DESIGN</h6>
          <p>
            I have already created quite broad range of different designs and
            are constantly working on new ones. New design can be performed
            according to your specifications and taste giving you an unique
            chance to create your own product. The products are highly
            customizable, it’s up to you select materials, number and width of
            every line, color, overall breadth and length of final product.
          </p>
        </div>
        <div>
          <h6>MATERIALS</h6>
          <p>
            Ie use broad range of materials, including as stainless steel,
            Damascus steel, brass, bronze, nickel, aluminum, copper, beautiful
            and precious exotic sorts of hardwood, carbon fiber, acrylic
            polymers, leather, constantly experimenting with new ideas.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
