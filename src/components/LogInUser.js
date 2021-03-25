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

//stat of user sign in
function LogInUser(props) {
  const context = useContext(FoodDataContext);
  const { setide } = context;
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

  const [show, setshow] = useState(false);
  useEffect(() => {
    const tt = setTimeout(() => {
      setshow(false);
    }, 3000);
    return () => clearTimeout(tt);
  }, [show]);
  const [btn, setbtn] = useState(false);
  const handlesubmit = (e) => {
    console.log("working good");
    e.preventDefault();
    const options = {
      method: "POST",
      data: {
        c_email: value.email,
        c_password: value.password,
      },

      url: "https://damp-headland-05751.herokuapp.com/user/login/customer",
    };
    const callme = async () => {
      const response = await axios(options)
        .then((response) => {
          // localStorage.setItem("token", response.data);
          console.log(response.data);
          localStorage.setItem("usertoken", Number(response.data));
          setide(response.data);
          // console.log(localStorage.getItem("token"), "i am token");
          setTimeout(() => {
            // localStorage.setItem("token", 401);
            // console.log("timeout executed");
            // return () => clearTimeout(tt);
          }, 86400000);
          // localStorage.setItem(response.data);
          // acessid(response.data);
        })
        .catch((error) => {
          console.log(error);
          setshow(true);
          setide(500);
          // localStorage.setItem("token", 401);
          // console.log(localStorage.getItem("token"), "i am token i error");
          // localStorage.setItem(error.response.status);
          // acessid(401);
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
              {/* <div
                onClick={() => {
                  props.onmycart();
                  props.onHide();
                }}
              >
                Carterer/
              </div>
              <div
                onClick={() => {
                  // props.onuserlog();
                  // props.onHide();
                }}
              >
                User
              </div> */}
              <button
                onClick={() => {
                  props.onmycart();
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
                Caterer
              </button>
            </div>
            <h3 className={styles.header}>User login</h3>
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
                <Link to="/orderhistory">
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
                  console.log("user signup");
                  props.onSignupuser();
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
export default LogInUser;
