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
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import LogInUser from "./LogInUser";
import SignUpuser from "./SignUpuser";
export default function Navbar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [signUpShow, setSignUp] = React.useState(false);
  const [modalShowuser, setModalShowuser] = React.useState(false);
  const [signUpShowuser, setSignUpuser] = React.useState(false);
  const [modalShowpop, setModalShowpop] = React.useState(false);
  const { acessid, acess } = useContext(FoodDataContext);
  const [show, setshow] = useState(false);
  useEffect(() => {
    acessid(localStorage.getItem("token"));
  }, [acess, localStorage.getItem("token")]);
  // const [, setlogin] = useState(true);
  return (
    <>
      <nav className={Appstyles.mainnav}>
        {/* <input id="nav-toggle" type="checkbox" /> */}
        <div className={Appstyles.appnav}>
          {/* class={`${Appstyles.logo} ${Appstyles.navbtn}`} */}
          {/* <NavLink to="/"> */}
          <img src={logo} width="200px" alt="myimage" height="50px" />
          {/* </NavLink> */}
          {/* <li>
            {acess == 401 ? (
              <a
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
                  width: "30px",
                }}
                onClick={() => {
                  localStorage.setItem("token", 401);
                  acessid(localStorage.getItem("token"));
                  console.log(localStorage.getItem("token"), "join ");
                  setModalShow(true);
                }}
              >
                Join
              </a>
            ) : (
              <NavLink to="/dashboard">
                <a
                  type="button"
                  href="#work"
                  style={{
                    backgroundColor: "#009E7F",
                    paddingTop: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 5,
                    color: "white",
                    borderRadius: 5,
                    width: "auto",
                  }}
                  // onClick={() => {
                  //   localStorage.setItem("token", 401);
                  //   acessid(localStorage.getItem("token"));
                  //   console.log(localStorage.getItem("token"), "join ");
                  //   setModalShow(true);
                  // }}
                >
                  Dashboard
                </a>
              </NavLink>
            )}
          </li> */}
          {/* {acess == 401 ? (
            ""
          ) : (
            <li>
              <a
                type="button"
                className="hideit"
                href="#work"
                style={{
                  backgroundColor: "#009E7F",
                  paddingTop: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingBottom: 5,
                  color: "white",
                  borderRadius: 5,
                }}
                onClick={() => {
                  localStorage.setItem("token", 401);
                  acessid(localStorage.getItem("token"));
                  // console.log(localStorage.getItem("token"), "join ");
                  axios.post(
                    "http://damp-headland-05751.herokuapp.com/user/logout"
                  );
                  // setModalShow(true);
                }}
              >
                Logout
              </a>
            </li>
          )} */}
        </div>
        <ul className={`${show ? `${Appstyles.shown}` : `${Appstyles.hiden}`}`}>
          {/* 
          <li>
            <a href="#home">Offer</a>
          </li>
          <li>
            <a href="#about">❔ Need Help</a>
          </li> */}

          <li>
            {acess == 401 ? (
              <button
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
                onClick={() => {
                  localStorage.setItem("token", 401);
                  acessid(localStorage.getItem("token"));
                  localStorage.setItem("usertoken", 500);

                  // console.log(localStorage.getItem("token"), "join ");
                  setModalShowuser(true);
                }}
              >
                Join
              </button>
            ) : (
              <NavLink to="/dashboard">
                <button
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
                    margin: "10px",
                  }}
                  // onClick={() => {
                  //   localStorage.setItem("token", 401);
                  //   acessid(localStorage.getItem("token"));
                  //   console.log(localStorage.getItem("token"), "join ");
                  //   setModalShow(true);
                  // }}
                >
                  Dashboard
                </button>
              </NavLink>
            )}
          </li>
          {acess == 401 ? (
            ""
          ) : (
            <li>
              <button
                type="button"
                className={Appstyles.hideit}
                href="#work"
                style={{
                  backgroundColor: "#009E7F",
                  paddingTop: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 10,
                  color: "white",
                  borderRadius: 5,
                }}
                onClick={() => {
                  localStorage.setItem("token", 401);
                  acessid(localStorage.getItem("token"));
                  // console.log(localStorage.getItem("token"), "join ");
                  axios.post(
                    "http://damp-headland-05751.herokuapp.com/user/logout"
                  );
                  // setModalShow(true);
                }}
              >
                Logout
              </button>
            </li>
          )}
          {/* <li>
            <a
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
              }}
              onClick={() => setModalShowpop(true)}
            >
              History
            </a>
          </li> */}
        </ul>
        {/* <label>
          for="nav-toggle" // style={{ border: "2px solid red", zIndex: "1" }}
          className="icon-burger"
          <GiHamburgerMenu />
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label> */}
        <div onClick={() => setshow(!show)} className={Appstyles.tog}>
          {<GiHamburgerMenu />}
        </div>
      </nav>
      <div className={Lo.body_aaa}>
        <LogIn
          show={modalShow}
          onmyShow={() => setSignUp(true)}
          onHide={() => setModalShow(false)}
          onuserlog={() => setModalShowuser(true)}
        />
        <SignUp
          show={signUpShow}
          onmysignup={() => setModalShow(true)}
          onHide={() => setSignUp(false)}
          onUser={() => setSignUpuser(true)}
        />

        <CustomerHistory
          show={modalShowpop}
          onHide={() => setModalShowpop(false)}
        />
        <LogInUser
          show={modalShowuser}
          onHide={() => setModalShowuser(false)}
          onmycart={() => setModalShow(true)}
          onSignupuser={() => setSignUpuser(true)}
        />
        <SignUpuser
          show={signUpShowuser}
          onmysignup={() => setModalShow(true)}
          onHide={() => setSignUpuser(false)}
          onCatSign={() => setSignUp(true)}
          onLog={() => setModalShowuser(true)}
        />
      </div>
    </>
  );
}

//end of user sign in

function CustomerHistory(props) {
  const [value, setvalue] = useState("");
  // console.log(value);
  return (
    <div className={styles.modalForm}>
      <Rs.Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton
      >
        <Rs.Modal.Body>
          <div className={styles.modalBody}>
            <h3 className={styles.header}>Welcome Back</h3>
            <span className={styles.subHeader}>
              See details of your Order by using Tracking Id
            </span>
            <form className={`${styles.formcontainer} `}>
              <input
                type="text"
                placeholder="123456"
                onChange={(e) => setvalue(e.target.value)}
              />

              <button type="button" className={`${styles.btn} button`}>
                Continue
              </button>
            </form>
          </div>
        </Rs.Modal.Body>
      </Rs.Modal>
    </div>
  );
}
///start of user signup
