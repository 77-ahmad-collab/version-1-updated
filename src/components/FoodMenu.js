import React, { useContext } from "react";
import Appstyles from "./foodmenu.module.css";
import { FoodDataContext } from "./FoodData.js";

export default function FoodMenu(props) {
  const value = useContext(FoodDataContext);
  const [products] = value.products;
  var check = "";
  return (
    <div className={Appstyles.foodchoice} style={{ width: "100%" }}>
      {/* {products.map((val, index) =>
        val.dishes.map((a) => {
          if (a.caterer_id == props.cid && check != val.category) {
            check = val.category;
            return (
              <ul className={Appstyles.foodchoice}>
                <li><a href="#home">{val.category}</a></li>
              </ul>
            );
          }
        })
      )} */}
    </div>
  );
}
