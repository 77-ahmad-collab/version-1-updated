import React, { useContext, useState, useEffect } from "react";
// import { DataContext } from "./CardData.js";
import { CaterersDataContext } from "./Caterers.js";
import { FoodDataContext } from "./FoodData";
import CardN from "./CardN.js";
import { useParams } from "react-router-dom";
import Appstyles from "../App.module.css";
import { connect, useDispatch } from "react-redux";
import { Fetchcardsdata } from "../src/Apistore/Cardsapidata";
const HomeCard = (props) => {
  const { search, filcards, catcards, term } = useContext(FoodDataContext);
  // console.log(props.cardsdata, "i am card list");
  // const value = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // axios
    //   .get("https://damp-headland-05751.herokuapp.com/show/p")
    //   .then((response) => {
    //     console.log(response.data);
    //     setProducts(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // lo_card1(false);
    dispatch(Fetchcardsdata());
    // console.log("fetched");
    setProducts(props.cardsdata);
  }, []);
  useEffect(() => {
    setProducts(props.cardsdata);
  }, [props.cardsdata]);
  // console.log(props.cardsdata);
  const catererValue = useContext(CaterersDataContext);
  // const [products] = value.products;
  // const products = [];
  const [catererproducts] = catererValue.catererProducts;
  const [limit, setLimit] = useState(8);
  const { searchItem } = useParams();
  const { searchCategory } = useParams();
  console.log(filcards, "fillll");
  console.log(catcards, "catcards");
  console.log(term, "term");
  return (
    <div
      className={Appstyles.card}
      style={{ float: "right", width: "100%", textAlign: "center" }}
    >
      <div>
        <br />
        <br />
        {search ? (
          term == "Caterers" ? (
            catcards.length === 0 ? (
              <h2>No item matched</h2>
            ) : (
              catcards.map((val) => {
                return (
                  <CardN
                    key={val.d_caterer_id}
                    isitcaterer={1}
                    incorrectData={"No Search Result"}
                    id={val.d_caterer_id}
                    caterer={val.ca_description}
                    town={val.ca_town}
                    imgsrc={val.ca_image}
                    detail={val.ca_headline}
                    delivery={val.ca_address}
                    time={val.ca_workinghours}
                    price={val.ca_minamount}
                    mname={val.ca_name}
                  />
                );
              })
            )
          ) : filcards.length == 0 ? (
            <h2>No item matched again yes</h2>
          ) : (
            filcards.map((val) => {
              return (
                <CardN
                  key={val.d_caterer_id}
                  isitcaterer={1}
                  incorrectData={"No Search Result"}
                  id={val.d_caterer_id}
                  caterer={val.p_description}
                  town={val.ca_town}
                  feat={val.feat}
                  fill={val.fill}
                  imgsrc={val.image_path}
                  detail={val.p_description}
                  delivery={val.delivery}
                  time={val.time}
                  price={val.p_minamount}
                  mname={val.p_name}
                />
              );
            })
          )
        ) : products.length !== 0 ? (
          products.map((val) => {
            // console.log(val, "val in cds");
            return (
              <CardN
                key={val.d_caterer_id}
                isitcaterer={1}
                incorrectData={"No Search Result"}
                id={val.d_caterer_id}
                caterer={val.p_description}
                town={val.ca_town}
                feat={val.feat}
                fill={val.fill}
                imgsrc={val.image_path}
                detail={val.ca_headline}
                delivery={val.delivery}
                time={val.time}
                price={val.p_minamount}
                mname={val.ca_name}
              />
            );
          })
        ) : (
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
      <br />
      <br />
      <div style={{ marginTop: "0%", textAlign: "center" }}>
        {limit <= 14 ? (
          <button
            className={Appstyles.loadmore}
            onClick={() => setLimit(limit + 4)}
            style={{ marginBottom: "20px" }}
          >
            Load More
          </button>
        ) : (
          <br />
        )}
      </div>
    </div>
  );
};
function mapStateToProps({ fetchdata }) {
  return { cardsdata: fetchdata.cardslist };
}
export default connect(mapStateToProps)(HomeCard);
