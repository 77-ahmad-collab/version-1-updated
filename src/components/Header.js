import React, { useState, useContext, useEffect } from "react";
import Appstyles from "./header.module.css";
import { DataContext } from "./CardData.js";
import Banner from "../assests/restaurant.png";
import HomeCard from "./HomeCard.js";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { FoodDataContext } from "./FoodData";
import { useDispatch } from "react-redux";
import { Fetchcardsdata } from "../src/Apistore/Cardsapidata";
export default function Header() {
  const dispatch = useDispatch();
  const value = useContext(DataContext);
  const val = useContext(FoodDataContext);
  // console.log(val, "in  header");
  const [searchTerm, setSearhTerm] = useState("");
  const [searchCategory, setSearhCategory] = useState("Caterers");

  // const searchTerm = value.searchTerm;
  useEffect(() => {
    val.acessid(localStorage.getItem("token"));
    // console.log(val.acess, "i am value.acess");
  }, [val.acess]);
  return (
    <>
      <div
        className={Appstyles.bgimg}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <Navbar />
        <div class={Appstyles.centered}>
          <h1>You order we deliver</h1>
          <p>Get your favourite foods in less than an hour</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.scrollTo({
                behavior: "smooth",
                top: 600,
              });
              console.log(searchCategory, "ss", searchTerm);
              axios
                .post("http://damp-headland-05751.herokuapp.com/search", null, {
                  params: { category: searchCategory, search: searchTerm },
                })
                .then((response) => {
                  console.log(response.data, val.term);
                  // val.ter(searchCategory);
                  val.setsear(true);
                  setSearhTerm("");
                  if (response.data == "Sorry, requested data not found") {
                    console.log("nooooooooooooo");
                    val.setsear(true);
                    val.fil([]);
                  } else {
                    console.log("founddddddddddddd");
                    if (val.term == "Caterers") {
                      val.cad(response.data);
                      console.log("caterrerererer");
                    } else {
                      val.fil(response.data);
                      console.log("product");
                      console.log(typeof val.filcards);
                      console.log(val.filcards);
                    }
                  }
                });
              // dispatch(Fetchcardsdata());
              console.log("i ma search");
            }}
          >
            <select
              className={Appstyles.find}
              onChange={(event) => {
                setSearhCategory(event.target.value);
                val.ter(event.target.value);
              }}
            >
              <option
                className={Appstyles.findopt}
                style={{
                  backgroundColor: "white",
                  color: "#009E7F",
                  outline: "none !important",
                }}
                value="Caterers"
              >
                Caterers
              </option>
              <option
                className={Appstyles.findopt}
                style={{
                  backgroundColor: "white",
                  color: "#009E7F",
                  outline: "none !important",
                }}
                value="Product"
              >
                Product
              </option>
              <option
                className={Appstyles.findopt}
                style={{
                  backgroundColor: "white",
                  color: "#009E7F",
                  outline: "none !important",
                }}
                value="Location"
              >
                Location
              </option>
            </select>
            <input
              type="search"
              onChange={(event) => {
                setSearhTerm(event.target.value);
              }}
              value={searchTerm}
              placeholder="Search your products from here"
            />

            <button type="submit">
              {" "}
              {/* <Link
                to={`/product/${searchTerm}/${searchCategory}`}
                style={{ color: "white", textDecoration: "none" }}
              > */}{" "}
              Search
              {/* </Link> */}
            </button>
          </form>
        </div>
      </div>
      {val.lo_card ? (
        <div className={Appstyles.spin}>
          <div
            className="spinner-border text-primary text-center"
            role="status"
          >
            <span className="sr-only text-center ">Loading...</span>
          </div>
        </div>
      ) : (
        <HomeCard />
      )}
    </>
  );
}
