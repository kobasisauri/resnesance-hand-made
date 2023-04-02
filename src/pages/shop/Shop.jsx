import mainImg from "assets/1.JPG";
import styles from "./Shop.module.scss";
import { data } from "data";

const Shop = () => {
  return (
    <>
      <div className={styles["shop-heading"]}>
        <div className={styles["image-container"]}>
          <img src={mainImg} alt="shop-head" />
        </div>

        <div className={styles.description}>
          <h3>HOW TO CHOOSE</h3>
          <p>
            We have already created quite broad range of different designs and
            are constantly working on new ones. New design can be performed
            according to your specifications and taste giving you an unique
            chance to create your own product. Our products are highly
            customizable, it’s up to you select materials, number and width of
            every line, color, overall breadth and length of final product.
            Price may vary, depending on materials, details or finishes used in
            particular case. Make your choice and contact us for more details on
            contact@renaissancehandmade.com
          </p>
        </div>
      </div>

      <div className={styles["content-container"]}>
        <div className="row">
          {data.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} col-md-6 col-lg-4 col-xl-3`}
            >
              <a href=".">
                <img src={item.images[0] || ""} alt="item" />

                <div className={styles["item-body"]}>
                  <div className={styles["item-title"]}>{item.name}</div>
                  <div className={styles["item-description"]}>
                    {item.tags.join(" ")}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
