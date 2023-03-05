import React from 'react';
import SkillItem from './about-components/SkillItem';
import skills from '../skills';

function About() {
	return (
		<div id="about" className="section lightSection">
			<div className="aboutMe">
				<p>
					I'm based in Kenya and have a passion for design and
					development.
					<br />
					<br />
					I have worked on full-stack development projects before but
					I tend to focus mainly on front-end development as I enjoy
					the creative process of designing and developing user
					interfaces.
					<br />
					<br />I also do 3D modelling and animation as hobby and have
					participated in a few art competitions.
				</p>

				<div className="callToAction">
					<a href="#projects">Have a look at some of my projects</a>
					<a href="www.google.com">Have a look at my CV</a>
				</div>
			</div>

			<div className="skill">
				<p>Here are my skills and the tools I use</p>

				<div className="skillDisplay">
					<h5>Web development</h5>
					<div className="skillContainer">
						{skills.webDev.map((item, index) => {
							return <SkillItem index={index} item={item} />;
						})}
					</div>
				</div>

				<div className="skillDisplay">
					<h5>UI/UX Design</h5>
					<div className="skillContainer">
						{skills.design.map((item, index) => {
							return <SkillItem index={index} item={item} />;
						})}
					</div>
				</div>

				<div className="skillDisplay">
					<h5>3D Art</h5>
					<div className="skillContainer">
						{skills.cgi.map((item, index) => {
							return <SkillItem index={index} item={item} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
