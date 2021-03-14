import React from "react";
import Navbar from "./Navbar.js";
import { useParams } from "react-router-dom";
import Appstyles from "./fooddetails.module.css";
import styles from "./style.module.css";
import FoodNavbar from "./FoodNavbar.js";
import FoodMenuDetails from "./FoodMenuDetails.js";

export default function FoodDetails() {
  const { catererid } = useParams();
  return (
    <div>
      {/* <Navbar /> */}
      <img
        src="https://s3.amazonaws.com/redqteam.com/pickbazar/Food/glazed.jpg"
        className={styles.imgfluid}
        alt="Responsive image"
      />
      <FoodNavbar cid={catererid} />
      <FoodMenuDetails cid={catererid} />
    </div>
  );
}
