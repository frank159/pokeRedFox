import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalContextState";
import {BASE_URL} from "../constants/Url";

export const GlobalState = (props) => {
  const [poke, setPoke] = useState([]);
  const [actualPage, setActualPage] = useState("");
  const [back, setBack] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPoke();
  }, []);

  const getPoke = () => {
    axios
      .get(`${BASE_URL}/get`)
      .then((res) => {
        setPoke(res.data.pokeRedFox);
        setLoading(false)
      })
      .catch((error) => {
        window.alert(error.message)
      });
  };

  const requests = {poke, setPoke, getPoke, loading, setLoading };

  return (
    <GlobalStateContext.Provider value={{ requests, back, setBack, actualPage, setActualPage }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;