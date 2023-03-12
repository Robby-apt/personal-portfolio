import React, { useState } from 'react';

function Navbar() {
	const [isResponsiveNavVisible, setIsResponsiveNavVisible] = useState(false);

	return (
		<nav>
			<div className="brand">
				<img
					src="/images/personal-logo-light.svg"
					alt="Logo"
					className="brandLogo"
				/>
				<p className="brandName">Robin Khaoya</p>
			</div>

			<div className="navLinks">
				<a href="#home">Home</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>

			<div className="navIcons">
				{isResponsiveNavVisible ? (
					<i
						className="fa-solid fa-xmark"
						onClick={() => {
							setIsResponsiveNavVisible(false);
						}}
					/>
				) : (
					<i
						className="fa-solid fa-bars"
						onClick={() => {
							setIsResponsiveNavVisible(true);
						}}
					/>
				)}
			</div>

			<div className="navLinksResponsive">
				<a href="#home">Home</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	);
}

export default Navbar;
