import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Axios from "axios";

import LandingPage from "../components/LandingPage";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import ForgetPasswordPage from "../components/ForgetPasswordPage";
import HomePage from "../components/HomePage";

import "../style/App.css";

import ProtectedRoutes from "./protectedRoutes";
import { AppContext } from "../context";
// import { response } from "express";

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [loading, setLoading] = useState(true);
  const [userSession, setUserSession] = useState(null);
  // const logInValue = useMemo(
  //   () => ({ userSession, setUserSession }),
  //   [userSession, setUserSession]
  // );

  useEffect(() => {
    const data = window.localStorage.getItem("LOGGED_IN");
    if (data !== null) setUserSession(JSON.parse(data));
    console.log(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("LOGGED_IN", JSON.stringify(userSession));
    console.log(userSession);
  }, [userSession]);

  return (
    <AppContext.Provider value={{ userSession, setUserSession }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>
      Coded by{" "}
      <a
        href="https://github.com/Tofunmiakin"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tofunmi
      </a>
    </p>
  );
};

const FooterStyle = {
  fontSize: "1rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5",
};
