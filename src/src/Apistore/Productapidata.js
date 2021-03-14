import axios from "axios";
import { PRODUCTDATA } from "../Dashboard/Reduxstore/Action";
export const Fetchproductdata = () => {
  return async (dispatch, getState) => {
    const id = localStorage.getItem("token");
    console.log(id, "id in api product component");
    const response = await axios.get(
      `https://damp-headland-05751.herokuapp.com/show/products/${id}`
    );
    // console.log(response, "coupon api data");
    // console.log(response, "response");

    const data = await response.data;
    // console.log(data, "product  api data");
    dispatch({ type: PRODUCTDATA, payload: data });
  };
};
