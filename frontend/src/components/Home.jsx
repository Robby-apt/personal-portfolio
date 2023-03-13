import React, { useState } from 'react';
import Navbar from './home-components/Navbar';
import Intro from './home-components/Intro';

function Home() {
	const [isResNavActive, setIsResNavActive] = useState(false);

	function hideResNav() {
		setIsResNavActive(false);
	}

	return (
		<div id="home" className="section darkSection">
			<div className="sectionContainer fullSizeContainer">
				<Navbar
					isResNavActive={isResNavActive}
					setIsResNavActive={setIsResNavActive}
					hideResNav={hideResNav}
				/>
				<Intro hideResNav={hideResNav} />
			</div>
		</div>
	);
}

export default Home;
