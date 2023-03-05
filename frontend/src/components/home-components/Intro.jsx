import React from 'react';

function Intro() {
	return (
		<div className="intro">
			<div className="introMessage">
				<div className="greeting">
					<h2>Hi, I'm Robin Khaoya</h2>
					<h1>Web developer, UI/UX designer and 3D artist</h1>
				</div>

				<div className="prompt">
					<p>Find out more below</p>

					<a href="#about">
						<img src="/images/next.svg" alt="See more about me" />
					</a>
				</div>
			</div>

			<div className="introGraphic">
				<img
					src="/images/code.svg"
					alt="Illustration of person coding"
				/>
			</div>
		</div>
	);
}

export default Intro;
