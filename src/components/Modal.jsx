import react, { useState } from "react";
import * as Rs from "react-bootstrap";
import HalfRating from "./HalfRating";
import styles from "./modal.module.css";
import axios from "axios";
function Modal(props) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [star, setstar] = useState(0);
  const mystar = (val) => {
    setstar(val);
  };
  const [feedback, setfeedback] = useState("");
  console.log("star", star);
  return (
    <>
      <div className={styles.modalForm}>
        <Rs.Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Rs.Modal.Body>
            <div className={`${styles.modalBody} text-center`}>
              <h3 className={styles.header}>Ratings</h3>
              <HalfRating star={star} mystar={mystar} />
              <form
                className={`${styles.formcontainer} `}
                autoComplete="off"
                method="POST"
              >
                <label htmlFor="mail">
                  <h6 className="mr-auto text-left">FeedBack</h6>
                </label>

                <input
                  type="email"
                  id="mail"
                  name="email"
                  onChange={(e) => {
                    setfeedback(e.target.value);
                  }}
                  placeholder="Your message"
                  required
                  // value={val.email}
                />
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
                    console.log("that button is working");
                    props.onHide();
                    const call = async () => {
                      console.log("cal is working");
                      await axios
                        .post(
                          "https://damp-headland-05751.herokuapp.com/review",
                          {
                            r_stars: star,
                            r_description: feedback,
                          }
                        )
                        .then((res) => console.log(res, "iiii"));
                    };
                    call();
                    setfeedback("");
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </Rs.Modal.Body>
        </Rs.Modal>
      </div>
    </>
  );
}

export default Modal;
