import React, { useContext } from "react";
import "./fooddetails.css";
import { CaterersDataContext } from "./Caterers.js";
import FoodMenu from "./FoodMenu.js";

export default function FoodNavbar(props) {
  const catererValue = useContext(CaterersDataContext);
  const [catererproducts] = catererValue.catererProducts;
  return (
    <div
      className="row1"
      style={{ backgroundColor: "white", position: "sticky", top: "1%" }}
    >
      {catererproducts.map((val, index) => {
        if (props.cid == val.d_caterer_id) {
          return (
            <div className="foodnavbar">
              <div className="food1">
                <span className="foodname">
                  <h6>{val.ca_name}</h6>
                </span>
                <span className="foodaddress">{val.ca_address}</span>
              </div>
              <div className="food2">
                <div className="col1">
                  <span className="col1_child1">{val.ca_headline}</span>
                  <br />
                  <span className="col1_child2">
                    <strong>{val.ca_description}</strong>
                  </span>
                </div>
                <div className="col2">
                  <span className="col2_child1">Min Order</span>
                  <br />
                  <span className="col2_child1">
                    <strong>PKR {val.ca_minamount}</strong>
                  </span>
                </div>
                <div className="col3">
                  <span className="delivery_button" type="button">
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
      <div className="row2" style={{ marginTop: "5%" }}>
        <FoodMenu cid={props.cid} />
      </div>
    </div>
  );
}
