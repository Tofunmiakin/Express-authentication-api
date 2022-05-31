import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from '../components/LandingPage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import ForgetPasswordPage from '../components/ForgetPasswordPage'
import HomePage from '../components/HomePage'

import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/forget-password" element={<ForgetPasswordPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>Coded by <a href="https://github.com/Tofunmiakin" target="_blank" rel="noopener noreferrer">Tofunmi</a></p>
  )
}

const FooterStyle = {
  fontSize: "1rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5",
}
