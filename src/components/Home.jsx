import React from 'react';
import Navbar from './home-components/Navbar';
import Intro from './home-components/Intro';

function Home() {
	return (
		<div id="home" className="section dark">
			<div className="bodyArea">
				<Navbar />
				<Intro />
			</div>
		</div>
	);
}

export default Home;
