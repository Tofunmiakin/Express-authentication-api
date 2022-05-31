import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../containers/App.css'

export default function SignInPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="sign-in m-5-auto">
			<h2>Sign in to us</h2>
			<form action="/home">
				<p>
					<label>Username or email address</label><br />
					<input
						type="text"
						required
						value={username}
						onChange={e => setUsername(e.target.value)}
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
						value={password}
						onChange={e => setPassword(e.target.value)}
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