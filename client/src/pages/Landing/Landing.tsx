import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <div className="logo-container">
                    <div className="logo-square"></div>
                    <h1 className="logo-text">Coffee Brew</h1>
                </div>
                <nav className="nav-menu">
                    <Link to="#about" className="nav-link">About</Link>
                    <Link to="#menu" className="nav-link">Menu</Link>
                    <Link to="#contact" className="nav-link">Contact us</Link>
                    <Link to="/login" className="nav-link">Log in</Link>
                </nav>
            </header>

            <main className="hero-section">
                <div className="hero-content">
                    <h2 className="hero-title">Your Coffee, now at your fingertips.</h2>
                    <p className="hero-subtitle">
                        Create an account, skip the line, and<br />order your coffee online now!
                    </p>
                    <div className="hero-buttons">
                        <Link to='/signup'>
                            <button className="btn btn-primary">Sign up</button>
                        </Link>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="../../public/images/landing-image.jpg"
                        alt="Pouring latte art into coffee cup"
                    />
                </div>
            </main>
        </div>
    );
};

export default Landing;