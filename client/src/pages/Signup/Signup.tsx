import React from "react";
import "./Signup.css";

const Signup: React.FC = () => {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-left">
                    <div className="signup-header">
                        <div className="signup-logo-row">
                            <div className="signup-logo-square" />
                            <h1 className="signup-title">Coffee Brew</h1>
                        </div>
                    </div>
                    <div className="signup-image-wrapper">
                        <img
                            className="signup-image"
                            src="../../public/images/signup-image.jpg"
                            alt="Coffee cups with latte art and plants"
                        />
                    </div>
                </div>
                <div className="signup-right">
                    <div className="signup-header">
                        <h2 className="signup-form-title">Sign up</h2>
                    </div>
                    <div className="signup-form-container">
                        <form className="signup-form">
                            <div className="signup-form-group">
                                <label className="signup-label">First Name</label>
                                <input className="signup-input" type="text" />
                            </div>
                            <div className="signup-form-group">
                                <label className="signup-label">Last Name</label>
                                <input className="signup-input" type="text" />
                            </div>
                            <div className="signup-form-group">
                                <label className="signup-label">Email</label>
                                <input className="signup-input" type="email" />
                            </div>
                            <div className="signup-form-group">
                                <label className="signup-label">Password</label>
                                <input className="signup-input" type="password" />
                            </div>
                            <div className="signup-form-group">
                                <label className="signup-label">Confirm Password</label>
                                <input className="signup-input" type="password" />
                            </div>
                            <button className="signup-btn" type="submit">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;