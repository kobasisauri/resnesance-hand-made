import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h2>CONTACT US</h2>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.items}>
            <h5>E-MAIL</h5>
            <p>contact@renaissancehandmade.com</p>
          </div>

          <div className={styles.items}>
            <h5>RENAISSANCE HANDMADE LLC</h5>
            <p>New York</p>
          </div>
        </div>

        <div>
          <form className={styles.form}>
            <input type="text" name="text" placeholder="NAME*" />
            <input type="email" name="email" placeholder="E-MAIL*" />
            <textarea placeholder="MESSAGE*"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
