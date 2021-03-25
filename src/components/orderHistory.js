import React from "react";
import * as Rs from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Orders from "./orderDetails";
import styles from "./orderHistory.module.css";
import HalfRating from "./HalfRating";

export default function OrderHistory() {
  const myLists = { Orders };

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
                          <span className={styles.Status}>Status</span>

                          <span className="mt-3">{status}</span>
                        </div>
                        <div>
                          <h6 onClick={() => console.log(index)}>Rating</h6>
                        </div>
                      </div>
                      <hr />
                    </li>
                    {<HalfRating ind={index} />}
                  </>
                );
              })
            ) : (
              <div>No Order History</div>
            )}
          </ul>
        </Rs.Card.Body>
      </Rs.Card>
    </div>
  );
}
