import React, { useState, useEffect } from "react";
import { Snackbar, TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import styles from "./ContactUs.module.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialFormData = Object.freeze({
  name: "",
  email: "",
  message: "",
});

const ContactUs = () => {
  let color = JSON.parse(localStorage.getItem("theme"));
  const [data, setData] = useState(initialFormData);
  const [theme, setTheme] = useState("#181717");
  const [showNotification, setShowNotification] = useState({
    open: true,
    message: "",
    severity: "success",
  });

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

  const handleSubmit = (e) => {
    // e.preventdefault();
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    fetch("https://rennaisance-backend.herokuapp.com/", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        setShowNotification({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });

        setData(initialFormData);
      } else {
        setShowNotification({
          open: true,
          message: "Message wasn't sent!",
          severity: "error",
        });
      }

      setTimeout(() => {
        setShowNotification({
          open: false,
          message: "",
          severity: "success",
        });
      }, "3000");
    });
  };

  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value.trim(),
  //   });
  // };

  return (
    <>
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
            <form className={styles.form}>
              <TextField
                id="outlined-basic"
                label="Name*"
                variant="outlined"
                sx={inputStyle}
                name="name"
                value={data.name}
                onInput={(e) =>
                  setData((state) => ({ ...state, name: e.target.value }))
                }
              />

              <TextField
                id="outlined-basic"
                label="E-Mail*"
                variant="outlined"
                sx={inputStyle}
                name="email"
                value={data.email}
                onInput={(e) =>
                  setData((state) => ({ ...state, email: e.target.value }))
                }
              />

              <TextField
                id="outlined-multiline-static"
                name="message"
                label="Message*"
                multiline
                rows={3}
                sx={inputStyle}
                value={data.message}
                onInput={(e) =>
                  setData((state) => ({ ...state, message: e.target.value }))
                }
              />

              <div className={styles["button-wrrapper"]}>
                <Button
                  type="button"
                  onClick={handleSubmit}
                  variant="outlined"
                  sx={{ width: "250px" }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Snackbar
        open={showNotification.open}
        message="test"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={showNotification.severity} sx={{ width: "100%" }}>
          {showNotification.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactUs;
