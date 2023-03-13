import React from 'react';
import ProjectSlider from './projects-components/ProjectSlider';

function Projects() {
	return (
		<div id="projects" className="section lightSection">
			<div className="sectionContainer fullSizeContainer">
				<h1 className="sectionTitle">Projects</h1>

				<ProjectSlider />
			</div>
		</div>
	);
}

export default Projects;
