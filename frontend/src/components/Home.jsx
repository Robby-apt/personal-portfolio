import React, { useState } from 'react';
import Navbar from './home-components/Navbar';
import Intro from './home-components/Intro';

function Home() {
	const [isResponsiveNavVisible, setIsResponsiveNavVisible] = useState(false);

    function handleResNavClick() {
		setIsResponsiveNavVisible(false);
	}

	return (
		<div id="home" className="section darkSection">
			<Navbar
				isResponsiveNavVisible={isResponsiveNavVisible}
				setIsResponsiveNavVisible={setIsResponsiveNavVisible}
				handleResNavClick={handleResNavClick}
			/>
			<Intro
				isResponsiveNavVisible={isResponsiveNavVisible}
				setIsResponsiveNavVisible={setIsResponsiveNavVisible}
				handleResNavClick={handleResNavClick}
			/>
		</div>
	);
}

export default Home;
