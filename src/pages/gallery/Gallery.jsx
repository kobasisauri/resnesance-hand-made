import { GalleryImages } from "../../gallery";
import styles from "../shop/Shop.module.scss";
const Gallery = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Gallery</h2>
      <div className={styles["content-container"]}>
        <div className="row">
          {GalleryImages.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} col-md-6 col-lg-4 col-xl-3`}
            >
              <div style={{ cursor: "pointer" }}>
                <div className={styles["image-container"]}>
                  <img src={item || ""} alt="item" />
                </div>

                {/* <div className={styles["item-body"]}>
                  <div className={styles["item-title"]}>
                    {item.name}
                    <span>{item.price ? `${item.price}$` : ""}</span>
                  </div>
                  <div className={styles["item-description"]}>
                    {item.tags.join(", ")}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
