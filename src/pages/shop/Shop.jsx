import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import useOnClickOutside from "hooks/useOnClickOutside";
import mainImg from "assets/1.JPG";
import styles from "./Shop.module.scss";
import { data } from "data";

const closeClass = "close-class";

const Toggle = React.forwardRef(
  ({ selected, handelMouseDown, clear, visible }, ref) => {
    const className = `d-flex ${styles["extended-select"]} ${
      visible ? styles.visible : ""
    } ${selected ? styles.selected : ""} `;

    return (
      <div onMouseDown={handelMouseDown} ref={ref} className={className}>
        <input
          type="text"
          className="w-100"
          placeholder={selected || "materials"}
          autoComplete="off"
          readOnly
        />

        <div className={`d-flex align-items-center ${styles.actions}`}>
          <div className={styles.action} onClick={clear}>
            {selected ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    );
  }
);

const Shop = () => {
  const navigate = useNavigate();
  const nodeRef = useRef();
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState([]);
  const [fileredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data.length) {
      let x = [];

      data.map((item) => {
        item.tags.map((i) => {
          if (!x.includes(i.toLowerCase())) {
            x.push(i.toLowerCase());
          }
        });
      });

      setFilters(x);
    }
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredData(data.filter((item) => item.tags.includes(filter)));
    }
  }, [filter]);

  const handelMouseDown = (e) => {
    const isCloseEl = e.target.classList.contains(closeClass);

    if (!isCloseEl) {
      setVisible(!visible);
    } else {
      setFilter(null);
    }
  };

  const onClickOutside = useCallback(() => {
    if (visible) {
      setVisible(false);
    }
  }, [visible]);

  useOnClickOutside(nodeRef, onClickOutside);

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

      <div className="row">
        <div className="col-md-4">
          <h5 className="mb-2">Chooese material:</h5>

          <Dropdown ref={nodeRef} show={visible} className="mb-4">
            <Dropdown.Toggle
              as={Toggle}
              visible={visible}
              selected={filter}
              handelMouseDown={handelMouseDown}
              clear={() => setFilter("")}
            />

            <Dropdown.Menu
              className={`light-scroll ${styles["dropdown-menu"]}`}
              popperConfig={{
                modifiers: [{ name: "offset", options: { offset: [0, 10] } }],
              }}
            >
              <div className="position-relative">
                {filters.length &&
                  filters.map((item) => (
                    <div
                      value={item}
                      key={item}
                      className={styles.item}
                      onClick={() => {
                        setFilter(item);
                        setVisible(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className={styles["content-container"]}>
        <div className="row">
          {fileredData.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} col-md-6 col-lg-4 col-xl-3`}
            >
              <div
                onClick={() =>
                  navigate(`/shop/${item.id}`, {
                    state: {
                      ...item,
                    },
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <div className={styles["image-container"]}>
                  <img src={item.images[0] || ""} alt="item" />
                </div>

                <div className={styles["item-body"]}>
                  <div className={styles["item-title"]}>
                    {item.name}
                    <span>{item.price ? `${item.price}$` : ""}</span>
                  </div>
                  <div className={styles["item-description"]}>
                    {item.tags.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
