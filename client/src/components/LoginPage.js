import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "../context";
import { useNavigate } from 'react-router';
import Axios from 'axios';

import '../style/App.css'

export default function SignInPage() {
	const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		Axios({
			method: "POST",
			data: {
				username: loginUsername,
				password: loginPassword
			},
			withCredentials: true,
			url: "https://express-auth970.herokuapp.com/auth/login"
		})
			.then(response => {
				if (response.status === 200) {
					setIsLoggedIn(true)
					navigate('/home')
				}
			})
	}

	return (
		<div className="sign-in m-5-auto">
			<h2>Sign in to us</h2>
			<form onSubmit={handleSubmit}>
				<p>
					<label>Username or email address</label><br />
					<input
						type="text"
						required
						value={loginUsername}
						onChange={e => setLoginUsername(e.target.value)}
					/>
				</p>
				<p>
					<label>Password</label>
					<Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
					<br />
					<input
						type="password"
						name="password"
						required
						value={loginPassword}
						onChange={e => setLoginPassword(e.target.value)}
					/>
				</p>
				<p>
					<button id="sub_btn" type="submit">Login</button>
				</p>
			</form>
			<footer>
				<p>First time? <Link to="/register">Create an account</Link>.</p>
				<p><Link to="/">Back to Homepage</Link>.</p>
			</footer>
		</div>
	)
}