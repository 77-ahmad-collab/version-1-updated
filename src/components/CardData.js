import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://damp-headland-05751.herokuapp.com/show/p")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const value = {
    products: [products, setProducts],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
