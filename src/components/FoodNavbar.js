import React, { useContext } from "react";
import Appstyles from "./fooddetails.module.css";
import { CaterersDataContext } from "./Caterers.js";
import FoodMenu from "./FoodMenu.js";

export default function FoodNavbar(props) {
  const catererValue = useContext(CaterersDataContext);
  const [catererproducts] = catererValue.catererProducts;
  return (
    <div
      className={Appstyles.row1}
      style={{ backgroundColor: "white", position: "sticky", top: "1%" }}
    >
      {catererproducts.map((val, index) => {
        if (props.cid == val.d_caterer_id) {
          return (
            <div className={Appstyles.foodnavbar}>
              <div className={Appstyles.food1}>
                <span className={Appstyles.foodname}>
                  <h6>{val.ca_name}</h6>
                </span>
                <span className={Appstyles.foodaddress}>{val.ca_address}</span>
              </div>
              <div className={Appstyles.food2}>
                <div className={Appstyles.col1}>
                  <span className={Appstyles.col1_child1}>
                    {val.ca_headline}
                  </span>
                  <br />
                  <span className={Appstyles.col1_child2}>
                    <strong>{val.ca_description}</strong>
                  </span>
                </div>
                <div className={Appstyles.col2}>
                  <span className={Appstyles.col2_child1}>Min Order</span>
                  <br />
                  <span className={Appstyles.col2_child1}>
                    <strong>PKR {val.ca_minamount}</strong>
                  </span>
                </div>
                <div className={Appstyles.col3}>
                  <span className={Appstyles.delivery_button} type="button">
                    <strong>
                      Free
                      <br /> Delivery
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className={Appstyles.row2} style={{ marginTop: "5%" }}>
        <FoodMenu cid={props.cid} />
      </div>
    </div>
  );
}
