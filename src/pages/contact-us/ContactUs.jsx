import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import Button from "@mui/material/Button";
import styles from "./ContactUs.module.scss";

const initialFormData = Object.freeze({
  name: "",
  email: "",
  message: "",
});

const ContactUs = () => {
  let color = JSON.parse(localStorage.getItem("theme"));
  const [data, setData] = useState(initialFormData);
  const [theme, setTheme] = useState("#181717");

  useEffect(() => {
    if (color === "light") {
      setTheme("#181717");
    } else if (color === "dark") {
      setTheme("#e3e3e3");
    }
  }, [color]);

  const inputStyle = {
    maxWidth: "360px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: theme },
      "&:hover": {
        "& > fieldset": { borderColor: "#f19666" },
      },
      "&.Mui-focused": {
        "& > fieldset": { borderColor: "#f19666" },
      },
    },
    ".MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-shrink": {
      color: "#ffc857",
    },
  };

  const handleSubmit = (values) => {
    values.preventDefault();

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    fetch("https://rennaisance-backend.herokuapp.com/", {
      method: "POST",
      body: formData,
    })
      .then((res) => console.log(res))
      .then((message) => {
        // console.log(1);
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div className={styles.container}>
      <h2>CONTACT US</h2>
      <div className={styles.wrapper}>
        <div className={styles["inner-wrapper"]}>
          <div className={styles.items}>
            <h5>E-MAIL</h5>
            <p>contact@renaissancehandmade.com</p>
          </div>

          <div className={styles.items}>
            <h5>RENAISSANCE HANDMADE LLC</h5>
            <p>New York</p>
          </div>
        </div>

        <div className={styles["inner-wrapper"]}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              id="outlined-basic"
              label="Name*"
              variant="outlined"
              sx={inputStyle}
              name="name"
              // value={data.name}
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              label="E-Mail*"
              variant="outlined"
              sx={inputStyle}
              name="email"
              // value={data.email}
              onChange={handleChange}
            />

            <TextField
              id="outlined-multiline-static"
              name="message"
              label="Message*"
              multiline
              rows={3}
              sx={inputStyle}
              // value={data.message}
              onChange={handleChange}
            />

            <div className={styles["button-wrrapper"]}>
              <Button type="submit" variant="outlined" sx={{ width: "250px" }}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
