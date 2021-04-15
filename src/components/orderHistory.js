import React, { useState } from "react";
import * as Rs from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Orders from "./orderDetails";
import { Button } from "react-bootstrap";
import styles from "./orderHistory.module.css";
import HalfRating from "./HalfRating";
import Modal from "./Modal";
export default function OrderHistory() {
  const myLists = { Orders };
  const [modalShowuser, setModalShowuser] = React.useState(false);
  return (
    <div className={styles.container}>
      <Rs.Card className={`${styles.orderHistory} shadow p-4 bg-white rounded`}>
        <Rs.Card.Header className={styles.orderHeading}>
          Order History
        </Rs.Card.Header>
        <Rs.Card.Body className={styles.cardBody}>
          <ul className={styles.listStyle}>
            {/* <li> */}
            {Orders.length !== 0 ? (
              Orders.map((val, index) => {
                const {
                  id,
                  orderId,
                  name,
                  cost,
                  quantity,
                  deliveryDate,
                  address,
                  status,
                } = val;
                return (
                  <>
                    <li key={id} className={styles.listItems}>
                      <div className={styles.rightCol}>
                        <div className={styles.left}>
                          <span className={styles.orderId}>
                            Order Id: {orderId}
                          </span>
                          <br></br>
                          <span className={styles.itemName}>{name}</span>
                          <br></br>
                          <span>Quantity: {quantity}</span>
                          <br></br>
                          <span>Cost ${cost}</span>
                          <br></br>
                          <span>Delivery Date: {deliveryDate}</span>
                          <br></br>
                          <span>Delivery Address: {address}</span>
                          <br></br>
                        </div>
                        <div className={styles.rightStatus}>
                          {/*  Regular: */}
                          {/* <span>
                          {status === "Pending" ? (
                            <FontAwesomeIcon
                              icon={"clock"}
                              className={`${styles.statusYellow} fa-lg`}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={"clock"}
                              className={`${styles.statusGreen} fa-lg`}
                            />
                          )}
                        </span> */}
                          <h5 className={styles.Status}>Status</h5>

                          <span className="mt-3">{status}</span>
                        </div>
                        <div className={styles.rate}>
                          <h4 className="text-center">Rating</h4>
                          <h6 onClick={() => console.log(index)}>
                            <button
                              onClick={() => {
                                setModalShowuser(true);
                                // props.onHide();
                                // props.onUser();
                                // props.onuserlog();
                                // props.onHide();
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
                              Click here to rate
                            </button>
                          </h6>
                        </div>
                      </div>
                      <hr />
                    </li>
                    {/* {<HalfRating ind={index} />} */}
                  </>
                );
              })
            ) : (
              <div>No Order History</div>
            )}
          </ul>
        </Rs.Card.Body>
      </Rs.Card>
      <Modal
        show={modalShowuser}
        onHide={() => setModalShowuser(false)}
        onmycart={() => setModalShowuser(true)}
        // onSignupuser={() => setSignUpuser(true)}
      />
    </div>
  );
}
