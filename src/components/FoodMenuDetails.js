import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FoodDataContext } from "./FoodData.js";
import Appstyles from "./foodmenudetails.module.css";

export default function FoodMenuDetails(props) {
  const value = useContext(FoodDataContext);
  // const { banner } = value;

  const [products] = value.products;
  const addCart = value.addCart;

  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  var check = "";

  useEffect(() => {
    setCart([]);
  }, []);
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.p_minamount * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.map((item) =>
      item.product_id == id
        ? item.count == 1
          ? item.count
          : (item.count -= 1)
        : item.count
    );

    setCart([...cart]);
  };
  const increase = (id) => {
    cart.map((item) => (item.product_id == id ? (item.count += 1) : item));
    setCart([...cart]);
  };
  //ask.piaic.org
  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.map((item, index) => {
        if (item.product_id == id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  return (
    <div
      className={Appstyles.headcard}
      style={{ backgroundColor: "rgb(228, 224, 224)" }}
    >
      <div className={Appstyles.card}>
        {products.map((val, index) =>
          val.dishes.map((a) => {
            if (a.caterer_id == props.cid && check != val.category) {
              check = val.category;
              return (
                <div className={Appstyles.foodnavbar}>
                  <div className={Appstyles.heading} key={index}>
                    <h5
                      style={{
                        borderBottom: " rgba(263, 261, 161, 0.726)",
                        paddingBottom: "20px",
                      }}
                    >
                      <span style={{ color: " rgba(163, 161, 161, 0.726)" }}>
                        . . .{" "}
                      </span>
                      {val.category}
                      <span style={{ color: " rgba(163, 161, 161, 0.726)" }}>
                        {" "}
                        . . .
                      </span>
                    </h5>
                  </div>

                  {val.dishes.map((f, i) => {
                    if (props.cid == f.caterer_id) {
                      let myfoodid = f.product_id;
                      // console.log(f, "i am f");
                      return (
                        <div
                          className={Appstyles.fooddata}
                          key={i}
                          style={{ width: "100%", paddingBottom: "5%" }}
                        >
                          <div className={Appstyles.food12}>
                            <span
                              className={Appstyles.foodname2}
                              style={{ marginBottom: "30px" }}
                            >
                              <strong>{f.p_name}</strong>
                            </span>
                            <br />
                            <span
                              className={Appstyles.foodaddress2}
                              style={{
                                paddingTop: "10px",
                                fontFamily: " Lato, sans-serif",
                                fontSize: "14px",
                                marginTop: "30px",
                                fontWeight: "500",

                                color: "rgb(119, 121, 140)",
                              }}
                            >
                              {f.p_description}shs
                            </span>
                          </div>

                          <div className={Appstyles.food22}>
                            <div
                              className={Appstyles.col22}
                              style={{ fontSize: 12 }}
                            >
                              <span
                                className={Appstyles.col22_child1}
                                name="fromhead"
                              >
                                From
                              </span>
                              <br />
                              {/* <span className={Appstyles.col22_child2}> */}
                              <span className="col22_child2">
                                <strong>PKR:{f.p_minamount}</strong>
                              </span>
                            </div>
                            <div className={Appstyles.col33}>
                              <span className={Appstyles.hidden_price}>
                                <strong>PKR:{f.p_minamount}</strong>
                              </span>
                              <span
                                className={Appstyles.delivery_button2}
                                onClick={() => addCart(myfoodid)}
                                type="button"
                              >
                                <img src="https://img.icons8.com/ios/24/000000/plus-math.png" />
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            }
          })
        )}
      </div>
      <div className={Appstyles.addtocart}>
        <header>🛒 {cart.length} Item</header>
        <hr />

        <div className={Appstyles.cartitems}>
          {cart.map(({ product_id, p_name, count, p_minamount }) => (
            <div>
              <div className={Appstyles.item} key={product_id}>
                <div className={Appstyles.quantity}>
                  <li>
                    <button
                      className={Appstyles.countplus}
                      onClick={() => increase(product_id)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </li>
                  <li>
                    <span> {count} </span>
                  </li>
                  <li>
                    <button
                      className={Appstyles.countminus}
                      onClick={() => reduction(product_id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                  </li>
                </div>

                <div className={Appstyles.itemdetails}>
                  <span className={Appstyles.itemname}>{p_name}</span>
                  <span className={Appstyles.item_price}>
                    PKR:{p_minamount * count}
                  </span>
                  <span>
                    <button
                      className={Appstyles.remove}
                      onClick={() => removeProduct(product_id)}
                    >
                      {" "}
                      X{" "}
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length === 0 ? (
          <div className={Appstyles.checkout_btn}>
            <div className="pl-2 align-align-items-center text-white mt-2">
              {cart.length === 0 ? "Cart is empty" : null}
            </div>
            <div className={Appstyles.p1hide}>🛒 {cart.length} Item</div>
            <div className={Appstyles.p2}>PKR {total}</div>
          </div>
        ) : (
          <NavLink to="/fooddetails/appcheckout">
            <div
              className={Appstyles.checkout_btn}
              onClick={() => {
                console.log(cart[0].d_caterer_id, "i am cart");
                value.caid(cart[0].d_caterer_id);
              }}
            >
              <div className={Appstyles.p1}>Checkout</div>
              <div className={Appstyles.p1hide}>🛒 {cart.length} Item</div>
              <div className={Appstyles.p2}>PKR:{total}</div>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
}
