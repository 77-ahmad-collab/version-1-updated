import React, { useState, useEffect, useContext } from "react";
import Appstyles from "./header.module.css";
import PhoneInput from "react-phone-number-input";
import styles from "./logIn.module.css";
import logo from "../src/logo.png";
import * as Rs from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Lo from "./loginstyles.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Login from "../Login/Login";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { FoodDataContext } from "./FoodData";
function LogIn(props) {
  const context = useContext(FoodDataContext);
  const { acessid, acess, fcartrerid, cartrerid } = context;
  const [toggle, settoggle] = useState(false);
  const [value, setvalue] = useState({
    email: "",
    password: "",
  });
  const [pass, setpass] = useState(false);
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setvalue((val) => {
      return { ...val, [name]: value };
    });
  };
  // console.log(value);
  // console.log(localStorage.getItem("token"));
  // useEffect(() => {
  //   const local = localStorage.getItem("token");
  //   // if (local !== 401) {
  //   //   console.log("i am authorized");
  //   //   localStorage.setItem("token", acessid);
  //   // } else {
  //   //   console.log("i am not");
  //   // }
  //   console.log(local, "i am local");
  // }, [toggle]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    const tt = setTimeout(() => {
      setshow(false);
    }, 3000);
    return () => clearTimeout(tt);
  }, [show]);
  const [btn, setbtn] = useState(false);
  const handlesubmit = (e) => {
    // console.log("working good");
    e.preventDefault();
    const options = {
      method: "POST",
      data: {
        email: value.email,
        password: value.password,
      },
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
      // },
      // Authorization: {
      //   email: value.email,
      //   password: value.password,
      // },
      url: "https://damp-headland-05751.herokuapp.com/user/login",
    };
    const callme = async () => {
      const response = await axios(options)
        .then((response) => {
          // console.log(response.data);
          fcartrerid(response.data);
          // console.log(cartrerid, "i ma the cartere id");
          localStorage.setItem("token", response.data);
          acessid(response.data);

          // console.log(localStorage.getItem("token"), "i am token");
          setTimeout(() => {
            localStorage.setItem("token", 401);
            // console.log("timeout executed");
            // return () => clearTimeout(tt);
          }, 86400000);
          // localStorage.setItem(response.data);
          // acessid(response.data);
        })
        .catch((error) => {
          console.log(error);
          setshow(true);

          localStorage.setItem("token", 401);
          // console.log(localStorage.getItem("token"), "i am token i error");
          // localStorage.setItem(error.response.status);
          acessid(401);
        });
      settoggle(!toggle);
      // console.log(response.data);
    };
    callme();
  };
  return (
    <div className={styles.modalForm}>
      <Rs.Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Rs.Modal.Body>
          <div className={styles.modalBody}>
            <div className={styles.switchme}>
              {/* <div>Carterer/</div>
              <div
                onClick={() => {
                  props.onuserlog();
                  props.onHide();
                }}
              >
                User
              </div> */}
              <button
                onClick={() => {
                  props.onuserlog();
                  props.onHide();
                }}
                type="button"
                href="#work"
                style={{
                  backgroundColor: "#009E7F",
                  paddingTop: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 10,
                  color: "white",
                  borderRadius: 5,
                  marginTop: "10px",
                }}
              >
                User
              </button>
            </div>
            <h3 className={styles.header}>Welcome Back</h3>
            <span className={styles.subHeader}>
              Login with your email and password
            </span>
            <form
              className={`${styles.formcontainer} `}
              autoComplete="off"
              method="POST"
            >
              {show && (
                <p className="text-danger">*Incorrect Username and password</p>
              )}
              <label htmlFor="mail">
                <h6 className="mr-auto">E-Mail</h6>
              </label>

              <input
                type="email"
                id="mail"
                name="email"
                onChange={handleinput}
                placeholder="someone@gmail.com"
                required
                // value={val.email}
              />
              <label htmlFor="password">
                <h6 className="mr-auto">Password</h6>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleinput}
                name="password"
                // value={val.pass}
                className={`${styles.success}`}
                required
              />

              {/* {pass ? (
                <Link to="/dash">
                  <button type="submit" className={`${styles.btn} button`}>
                    Continue
                  </button>
                </Link>
              ) : (
                <button type="submit" className={`${styles.btn} button`}>
                  Continuettt
                </button>
              )} */}
              {/* <Link to="/dash"> */}

              <button
                type="button"
                onClick={handlesubmit}
                className={`${styles.btn} button`}
              >
                <Link to="/dashboard">
                  <h5
                    className="text-white d-flex justify-content-center align-items-center"
                    style={{
                      textDecoration: "none",
                      // marginTop: "10px",
                      // border: "2px solid red",
                      height: "100%",
                      marginRight: "20px",
                      width: "100%",
                    }}
                  >
                    Continue
                  </h5>
                </Link>
              </button>
            </form>

            {/* <div className={`${styles.or}`}>
              <span>or</span>
            </div>

            <button
              type="button"
              className={`${styles.btn}  ${styles.fbBtn} button`}
            >
              <FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook
            </button>

            <button
              type="button"
              className={`${styles.btn} ${styles.googleBtn} button`}
            >
              <FontAwesomeIcon icon={faGoogle} /> Continue With Google
            </button> */}

            <p className={`${styles.footer} mt-3`}>
              Don't have any account?
              <button
                className={styles.signUp}
                onClick={() => {
                  props.onmyShow();
                  props.onHide();
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </Rs.Modal.Body>

        <p className={styles.reset}>
          Forgot your password?
          <button className={styles.signUp}>Reset It</button>
        </p>
      </Rs.Modal>
    </div>
  );
}
export default LogIn;
