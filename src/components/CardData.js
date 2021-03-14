import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { Fetchcardsdata } from "../src/Apistore/Cardsapidata";
import { FoodDataContext } from "./FoodData";
export const DataContext = createContext();

const DataProvider = (props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  // const vaal = useContext(FoodDataContext);
  // console.log(vaal, "value of food data ");
  // useEffect(() => {
  //   // axios
  //   //   .get("https://damp-headland-05751.herokuapp.com/show/p")
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //     setProducts(response.data);
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.log(error);
  //   //   });
  //   // lo_card1(false);
  //   dispatch(Fetchcardsdata);
  //   console.log("fetched");
  //   setProducts(props.cardsdata);
  // }, []);
  // useEffect(() => {
  //   setProducts(props.cardsdata);
  // }, [props.cardsdata]);

  const value = {
    products: [products, setProducts],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
function mapStateToProps({ fetchdata }) {
  return { cardsdata: fetchdata.cardsdata };
}
export default connect(mapStateToProps)(DataProvider);
