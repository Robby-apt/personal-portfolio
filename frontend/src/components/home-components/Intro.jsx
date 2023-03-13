import React from 'react';

function Intro(props) {
	return (
		<div className="homeIntro" onClick={props.hideResNav}>
			<div className="introGraphic">
				<img src="/images/code.svg" alt="Code illustration" />
			</div>

			<div className="introMessage">
				<div className="greeting">
					<h2>Hi, I'm Robin Khaoya</h2>
					<h1>Web developer, UI/UX designer and 3D artist</h1>
				</div>

				<div className="aboutMe">
					<p>
						I'm based in Kenya and have a passion for design and
						development.
						<br />
						<br />
						I have worked on full-stack development projects before
						but I tend to
						<br />
						focus mainly on front-end development as I enjoy the
						creative process
						<br />
						of designing and developing user interfaces.
						<br />
						<br />
						I also do 3D modelling and animation as hobby and have
						participated in
						<br />a few art competitions.
					</p>

					<div className="callToAction">
						<a href="#projects">
							Have a look at some of my projects
						</a>
						<a
							href="/Robin_Khaoya_resume.pdf"
							target="_blank"
							rel="noopener norefer"
						>
							Have a look at my CV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
