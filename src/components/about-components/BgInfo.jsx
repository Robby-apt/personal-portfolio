import React from 'react';

function BgInfo() {
	return (
		<div className="bgInfo">
			<div className="introStatement">
				<p>
					Hi. I'm Robin Khaoya, a web developer from Kenya.
					<br />I have a passion for design and development.
				</p>

				<p>
					I have worked on fullstack development projects before
					<br />
					but I tend to focus mainly on front-end development as I
					<br />
					enjoy the creative process of designing and developing
					<br />
					user interfaces.
				</p>

				<p>
					I also do 3D modelling and animation as hobby and have
					<br />
					participated in a number of art competitions.
				</p>
			</div>

			<div className="callToAction">
				<button>
					<a href="#projects">Have a look at my projects</a>
				</button>
				<br />
				<br />
				<button>
					<a href="#contact">Feel free to contact me</a>
				</button>
			</div>
		</div>
	);
}

export default BgInfo;
