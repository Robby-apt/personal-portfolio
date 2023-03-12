import React from 'react';

function Navbar(props) {
	return (
		<nav>
			<div className="brand" onClick={props.handleResNavClick}>
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
				{props.isResponsiveNavVisible ? (
					<i
						className="fa-solid fa-xmark"
						onClick={() => {
							props.setIsResponsiveNavVisible(false);
						}}
					/>
				) : (
					<i
						className="fa-solid fa-bars"
						onClick={() => {
							props.setIsResponsiveNavVisible(true);
						}}
					/>
				)}
			</div>

			{props.isResponsiveNavVisible ? (
				<div className="navLinksResponsive">
					<a href="#home" onClick={props.handleResNavClick}>
						Home
					</a>
					<a href="#projects" onClick={props.handleResNavClick}>
						Projects
					</a>
					<a href="#contact" onClick={props.handleResNavClick}>
						Contact
					</a>
				</div>
			) : null}
		</nav>
	);
}

export default Navbar;
