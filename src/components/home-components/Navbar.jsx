import React from 'react';

function Navbar() {
	return (
		<nav className="nav">
			<div className="brand">
				<img src="/images/logo.svg" alt="Logo" className="brandLogo" />
				<p className="brandName">Robin Wafula</p>
			</div>

			<div className="navLinks">
                <a href="#home" className="active">Home</a>
                <a href="#about">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
		</nav>
	);
}

export default Navbar;
