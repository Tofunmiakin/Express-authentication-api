import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router";

import { AppContext } from "../context";

import "../style/App.css";

export default function SignUpPage() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      },
      withCredentials: true,
      url: "https://localhost:5000/auth/signup",
    })
      .then(setIsLoggedIn(true))
      .then(navigate("/home"));
  };

  return (
    <div className="register m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="first_name"
            required
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input
            type="email"
            name="email"
            required
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            required
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <span>
            I agree all statements in
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </footer>
    </div>
  );
}
