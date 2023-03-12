import React from 'react';
import ProjectSlider from './projects-components/ProjectSlider';
// import ArtProjects from './projects-components/ArtProjects';

function Projects() {
	return (
		<div id="projects" className="section lightSection">
			<h1 className="sectionTitle">Projects</h1>

			<ProjectSlider />

			{/* <h2 className="sectionSub">3D Art Gallery</h2>
 
			<ArtProjects />

			<a href="" class="galleryBtnArea">
				See more artwork
			</a> */}
		</div>
	);
}

export default Projects;
