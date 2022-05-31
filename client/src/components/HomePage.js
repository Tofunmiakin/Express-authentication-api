import React from 'react'
import { Link } from 'react-router-dom'
import '../containers/App.css'

export default function HomePage() {
    return (
        <div className="home">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}