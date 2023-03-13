import React from 'react';

function Navbar(props) {
	return (
		<nav>
			<div className="brand" onClick={props.hideResNav}>
				<img
					src="/images/personal-logo-light.svg"
					alt="Robin Khaoya logo"
				/>
				<h1>Robin Khaoya</h1>
			</div>

			<div className="navLinks">
				<a href="#home">Home</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>

			<div className="resNavIcons">
				{props.isResNavActive ? (
					<i
						className="fa-solid fa-xmark"
						onClick={() => {
							props.setIsResNavActive(false);
						}}
					/>
				) : (
					<i
						className="fa-solid fa-bars"
						onClick={() => {
							props.setIsResNavActive(true);
						}}
					/>
				)}
			</div>

			{props.isResNavActive ? (
				<div className="resNavLinks">
					<a href="#home" onClick={props.hideResNav}>
						Home
					</a>
					<a href="#projects" onClick={props.hideResNav}>
						Projects
					</a>
					<a href="#contact" onClick={props.hideResNav}>
						Contact
					</a>
				</div>
			) : null}
		</nav>
	);
}

export default Navbar;
