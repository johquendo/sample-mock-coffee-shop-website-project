import React from "react";
import "./Login.css";

const Login: React.FC = () => {
	return (
		<div className="login-page">
			<div className="login-container">
				<div className="login-left">
					<div className="login-header">
						<div className="login-logo-row">
							<div className="login-logo-square" />
							<h1 className="login-title">Coffee Brew</h1>
						</div>
					</div>
					<div className="login-image-wrapper">
						<img
							className="login-image"
							src="../../public/images/login-image.jpg"
							alt="A coffee cup"
						/>
					</div>
				</div>
				<div className="login-right">
					<div className="login-header">
						<h2 className="login-form-title">Log in</h2>
					</div>
					<div className="login-form-container">
						<form className="login-form">
							<div className="login-form-group">
								<label className="login-label">Email</label>
								<input className="login-input" type="email" />
							</div>
							<div className="login-form-group">
								<label className="login-label">Password</label>
								<input className="login-input" type="password" />
							</div>
							<div className="login-links">
								<a href="/signup" className="login-link">Don't have an account?</a>
								<a href="/forgot-password" className="login-link">Forgot password?</a>
							</div>
							<button className="login-btn" type="submit">
								Log in
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;