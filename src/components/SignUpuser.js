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
function SignUpuser(props) {
  const [suc, setsuccess] = useState(true);
  const [val, setval] = useState({
    name: "",
    contactno: "",
    address: "",
    email: "",
    pass: "",
    repass: "",
  });
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(val.pass, "val.pass and >=", val.repass);

    setval((call) => {
      return { ...call, [name]: value };
    });
  };
  const [len, setlen] = useState(true);

  useEffect(() => {
    // console.log("ia m running on every pas change");
    if (val.pass !== val.repass) {
      setsuccess(false);
    } else {
      setsuccess(true);
    }
    if (val.pass.length >= 8) {
      // console.log("length is greater");
      setlen(false);
    } else {
      // console.log("not greater");
      setlen(true);
    }
  }, [val.pass, val.repass]);
  useEffect(() => {
    if (val.pass.length >= 8) {
      // console.log("length is greater");
      setlen(false);
    } else {
      // console.log("not greater");
      setlen(false);
    }
  }, []);
  const [response, setresponse] = useState("");
  const [showme, setshowme] = useState(false);
  const handlesubmit = (e) => {
    const addd = axios
      .post("http://damp-headland-05751.herokuapp.com/user/register/customer", {
        c_name: val.name,
        c_mobileno: val.contactno,
        c_address: val.address,
        c_email: val.email,
        c_password: val.pass,
      })
      .then(
        (response) => {
          // console.log(response.data);
          setresponse(response.data);
        },
        (error) => {
          console.log(error, "i am error ");
        }
      );

    // axios.get("testcarter@example.com"")
    // console.log(addd, "add");
    e.preventDefault();
    console.log(val);
    setval({
      name: "",
      contactno: "",
      address: "",
      email: "",
      pass: "",
      repass: "",
    });
    // props.onHide();
  };
  useEffect(() => {
    if (response === "FAIL") {
      setshowme(true);
    } else {
      setshowme(false);
    }
    // console.log("i am ru");
  }, [response]);
  // console.log(val);
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
                  props.onHide();
                  props.onCatSign();
                  // props.onmycart();
                  // props.onHide();
                }}
              >
                Carterer/
              </div>
              <div
                onClick={() => {
                  // props.onHide();
                  // props.onUser();
                  // props.onuserlog();
                  // props.onHide();
                }}
              >
                User
              </div> */}
              <button
                onClick={() => {
                  props.onHide();
                  props.onCatSign();
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
            <h3 className={`${styles.header} text-center`}>User Sign Up</h3>
            <span className={`${styles.subHeader} text-center`}>
              By signing up, you agree to Pickbazar's
            </span>
            <form
              className={`${styles.formcontainer} `}
              autoComplete="off"
              onSubmit={handlesubmit}
            >
              <label htmlFor="name">
                <h6 className="mr-auto">Name</h6>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleinput}
                value={val.name}
                placeholder="Enter your name"
                required
              />
              <label htmlFor="Contact No">
                <h6 className="mr-auto">Contact No</h6>
              </label>
              <input
                type="tel"
                pattern="[0-9]{11}"
                id="Contact No"
                name="contactno"
                onChange={handleinput}
                placeholder="0321-9878987"
                required
                value={val.contactno}
              />
              <label htmlFor="address">
                <h6 className="mr-auto">Address</h6>
              </label>
              <input
                type="text"
                id="addrres"
                name="address"
                onChange={handleinput}
                placeholder="Enter your Address details"
                required
                value={val.address}
              />
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
                value={val.email}
              />
              <label htmlFor="password">
                <h6 className="mr-auto">Password</h6>
              </label>
              {len ? (
                <p className="text-danger">Minimum length of password is 8</p>
              ) : null}

              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleinput}
                name="pass"
                value={val.pass}
                className={`${suc ? `${styles.success}` : `${styles.fail}`}`}
                required
              />
              <label htmlFor="repassword">
                <h6 className="mr-auto">Confirm Password</h6>
              </label>
              <input
                type="password"
                id="repassword"
                onChange={handleinput}
                name="repass"
                value={val.respass}
                placeholder="Confirm Your password"
                className={`${suc ? `${styles.success}` : `${styles.fail}`}`}
              />
              <p className="text-danger">
                {suc ? "" : `Password doesn't matched`}
              </p>

              <p className={styles.termCond}>
                By signing up, you agree to Pickbazar's{" "}
                <a href="/">Terms & Condtion</a>
              </p>
              {showme ? (
                <p className="text-danger">The email already exists</p>
              ) : (
                ""
              )}
              {suc ? (
                <button
                  type="submit"
                  onSubmit={handlesubmit}
                  className={`${styles.btn} button`}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  onSubmit={(e) => e.preventDefault()}
                  onClick={(e) => e.preventDefault()}
                  className={`${styles.btn} button`}
                >
                  Continuettt
                </button>
              )}
            </form>

            {/* <div className={`${styles.or}`}>
              <span>or</span>
            </div> */}
            {/* <button
              type="button"
              className={`${styles.btn}  ${styles.fbBtn} button`}
            >
              <FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook
            </button> */}

            {/* <button
              type="button"
              className={`${styles.btn} ${styles.googleBtn} button`}
            >
              <FontAwesomeIcon icon={faGoogle} /> Continue With Google
            </button> */}

            <p className={`${styles.footer} ${styles.signupFooter}`}>
              Already have an account?
              <button
                onClick={() => {
                  // props.onmysignup();
                  // props.Lo();
                  props.onHide();
                  props.onLog();
                  console.log("kakak");
                }}
                className={styles.signUp}
              >
                Login
              </button>
            </p>
          </div>
        </Rs.Modal.Body>
      </Rs.Modal>
    </div>
  );
}
export default SignUpuser;
//end of user sign up
