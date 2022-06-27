import React, { useState } from 'react';

function Navbar() {
	// const [navDisplay, setNavDisplay] = useState(true);

	return (
		<nav className="nav">
			<div className="brand">
				<img src="/images/logo.svg" alt="Logo" className="brandLogo" />
				<p className="brandName">Robin Wafula</p>
			</div>

			<div className="navLinks">
				<a href="#home" className="active">
					Home
				</a>
				<a href="#about">About me</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>

			<i className="fa-solid fa-bars" />
		</nav>
	);
}

export default Navbar;
