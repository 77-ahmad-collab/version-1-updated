import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function CardN(props) {
  const des = props.detail.slice(0, 80);
  return (
    <Link to={`/show/card/${props.cid}`}>
      <button className="cardhead">
        <Card
          style={{
            width: "19rem",
            padding: "0px",
            float: "left",

            backgroundColor: "white",
            margin: "15px",
          }}
          key={props.id}
        >
          <Card.Img variant="top" src={props.imgsrc} className="cardimg" />
          {props.feat !== "" ? (
            <span className="featuredtrue">{props.feat}</span>
          ) : (
            ""
          )}
          <Card.Body
            style={{
              textAlign: "left",
              padding: "15px",
              backgroundColor: "white",
            }}
          >
            <strong>
              <h3
                style={{
                  paddingTop: "10px",
                  fontFamily: " Lato, sans-serif",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: " rgb(13, 17, 54)",
                }}
              >
                {props.mname}
              </h3>
            </strong>
            {props.detail == "csrd lab item" || props.detail == "abcd" ? (
              <Card.Text style={{ fontSize: "14px" }}>
                {props.detail}{" "}
                <strong style={{ color: "white" }}>
                  it is simply dummy text of the printing and typesetting
                  industry.
                </strong>
              </Card.Text>
            ) : (
              <Card.Text
                style={{
                  paddingTop: "10px",
                  fontFamily: " Lato, sans-serif",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "rgb(119, 121, 140)",
                }}
              >
                {des}...
              </Card.Text>
            )}
            <strong>
              <Card.Text style={{ fontSize: "14px" }}>
                {props.caterer}
              </Card.Text>
            </strong>

            {props.isitcaterer == 1 ? (
              <Card.Text style={{ fontSize: "14px" }}>{props.town}</Card.Text>
            ) : (
              <></>
            )}
          </Card.Body>
          <Card.Footer
            style={{
              textAlign: "left",
              padding: "15px",
              backgroundColor: "white",
            }}
          >
            {props.isitcaterer == 1 ? (
              <>
                <Button
                  className="hello"
                  variant="primary"
                  style={{ float: "right", fontSize: "12px" }}
                >
                  {props.time}
                </Button>

                <Card.Text
                  style={{
                    float: "left",
                    backgroundColor: "white",
                    fontSize: "14px",
                    width: "48%",
                  }}
                >
                  {props.delivery}
                </Card.Text>
              </>
            ) : (
              <>
                {/* <NavLink exact to="/fooddetails"> */}
                <Button
                  className="hello"
                  variant="primary"
                  style={{ float: "right", fontSize: "14px" }}
                >
                  {props.time}
                </Button>
                {/* </NavLink> */}
                <Card.Text style={{ float: "left", backgroundColor: "white" }}>
                  <strong>{props.delivery}</strong>
                </Card.Text>
              </>
            )}
          </Card.Footer>
        </Card>
      </button>
    </Link>
  );
}
