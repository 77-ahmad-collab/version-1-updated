import axios from "axios";

export const Fetchcardsdata = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://www.deghjee.com/show/p");
    // console.log(response, "cards api data");
    // console.log(response, "response");

    const data = await response.data;
    // console.log(data, "order  api data");
    dispatch({ type: "CARDSDATA", payload: data });
  };
};
