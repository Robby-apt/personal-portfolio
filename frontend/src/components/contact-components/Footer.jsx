import React from 'react';

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p className="footerStatement">Robin Khaoya &#169; {year}</p>
		</footer>
	);
}

export default Footer;
