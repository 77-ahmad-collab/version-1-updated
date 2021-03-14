import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FoodDataContext = createContext();

export const FoodDataProvider = (props) => {
  const [banner, setbanner] = useState(false);
  const [dateofdel, setdateofdel] = useState("");
  const [deltime, setdeltime] = useState("");
  const [log, setlog] = useState(false);
  const [proceed, setproceed] = useState(false);
  const proc = (val) => {
    setproceed(val);
  };
  const login = () => {
    setlog(true);
  };
  const logout = () => {
    setlog(false);
  };
  const getdeltime = (val) => {
    setdeltime(val);
  };
  const deldate = (e) => {
    setdateofdel(e);
  };
  const close = () => {
    setbanner(false);
  };
  const open = () => {
    setbanner(true);
  };
  const [catid, setcatid] = useState(-1);
  const getcatid = (val) => {
    setcatid(val);
  };
  const [foodproducts, setFoodProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [mytotal, setTotal] = useState(0);
  //state for address dont remove
  const [myaddress, setmyaddress] = useState("");
  const [contact, setcontact] = useState("");
  const [time, settime] = useState(0);

  useEffect(() => {
    axios
      .get("http://damp-headland-05751.herokuapp.com/show/card/caterer_id")
      .then((response) => {
        console.log(response.data);
        setFoodProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // const [cart, setCart] = useState([])
  const [mytotal, setmyTotal] = useState(0);

  const addCart = (product_id) => {
    const itemIndex = cart.findIndex((item) => item.product_id === product_id);

    if (itemIndex === -1) {
      // Food item not found, add to cart
      const getItemByFid = (product_id) =>
        foodproducts.reduce((data, { id, category, dishes }) => {
          const foodIndex = dishes.findIndex(
            (item) => item.product_id === product_id
          );
          if (foodIndex !== -1) {
            return {
              id,
              category,
              ...dishes[foodIndex],
              count: 1,
            };
          }
          return data;
        }, {});

      setCart((cart) => [...cart, getItemByFid(product_id)]);
    } else {
      // Food item found, update item count in cart
      setCart((cart) =>
        cart.map((item) =>
          item.product_id === product_id
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        )
      );
    }
  };
  console.log(cart);
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.p_minamount * item.count;
      }, 0);
      setmyTotal(res);
    };
    getTotal();
  }, [cart]);

  const [payment, setpayment] = useState("");
  const getcashmethod = (cash) => {
    setpayment(cash);
    console.log("cailing");
  };
  const getvalue = (valuep) => {
    setmyaddress(valuep);
  };
  const getcontact = (add) => {
    setcontact(add);
  };
  const gettime = (time) => {
    settime(time);
  };
  const [acess, setacess] = useState(401);
  const acessid = (val) => {
    setacess(val);
  };
  const [cartrerid, setcatrerid] = useState(1);
  const fcartrerid = (val) => {
    setcatrerid(val);
  };
  const [loader, setloader] = useState(true);
  const setloa = (val) => {
    setloader(val);
  };
  const [emailid, setemailid] = useState("");
  const email = (val) => {
    setemailid(val);
  };
  const [ca_id, setca_id] = useState(-1);
  const caid = (val) => {
    setca_id(val);
  };
  const [lo_card, setlo_card] = useState(false);
  const lo_card1 = (value) => {
    setlo_card(value);
  };
  const [filcards, setfilcards] = useState([]);
  const fil = (val) => {
    setfilcards(val);
  };
  const [search, setsearch] = useState(false);
  const setsear = (val) => {
    setsearch(val);
  };
  const [term, setterm] = useState("");
  const ter = (val) => {
    setterm(val);
  };
  const [catcards, setcatcards] = useState([]);
  const cad = (val) => {
    setcatcards(val);
  };
  const value = {
    products: [foodproducts, setFoodProducts],
    cart: [cart, setCart],
    addCart: addCart,
    total: mytotal,
    getvalue: getvalue,
    myaddress: myaddress,
    banner: banner,
    open: open,
    close: close,
    contact: contact,
    getcontact: getcontact,
    gettime: gettime,
    time: time,
    payment: payment,
    getcashmethod: getcashmethod,
    date: dateofdel,
    deldate: deldate,
    deltime: deltime,
    getdeltime: getdeltime,
    log: log,
    login: login,
    logout: logout,
    getcatid: getcatid,
    catid: catid,
    acess: acess,
    acessid: acessid,
    cartrerid: cartrerid,
    fcartrerid: fcartrerid,
    loader: loader,
    setloa: setloa,
    proceed: proceed,
    proc: proc,
    emailid: emailid,
    email: email,
    ca_id: ca_id,
    caid: caid,
    lo_card: lo_card,
    lo_card1: lo_card1,
    fil: fil,
    filcards: filcards,
    search: search,
    setsear: setsear,
    term: term,
    ter: ter,
    catcards: catcards,
    cad: cad,
  };

  return (
    <FoodDataContext.Provider value={value}>
      {props.children}
    </FoodDataContext.Provider>
  );
};
