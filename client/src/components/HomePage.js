import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../style/App.css";

import { AppContext } from "../context";

export default function HomePage() {
  // const { userSession } = useContext(AppContext);

  const logOut = () => {
    Axios.delete("http://localhost:5000/auth/logout");
    // return setIsLoggedIn(false);
  };

  return (
    <div className="home">
      <h1 className="main-title home-page-title">Welcome to the home page </h1>
      {/* <Link to="/"> */}
      <button className="primary-button" onClick={logOut}>
        <a href="/">Log out</a>
      </button>
      {/* </Link> */}
    </div>
  );
}
