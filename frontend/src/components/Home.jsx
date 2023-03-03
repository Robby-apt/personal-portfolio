import React from 'react';
import Navbar from './home-components/Navbar';
import Intro from './home-components/Intro';

function Home() {
	return (
		<div id="home" className="section darkSection">
			<Navbar />
			<Intro />
		</div>
	);
}

export default Home;
