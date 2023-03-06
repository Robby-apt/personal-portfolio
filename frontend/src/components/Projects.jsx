import React from 'react';
import ProjectItem from './projects-components/ProjectItem';
import webProjects from '../webProjects';

function Projects() {
	return (
		<div id="projects" className="section darkSection">
			<h1 className="sectionTitle">Projects</h1>
			<h2 className="sectionSub">Design and Development</h2>

			<div
				id="carouselExampleFade"
				className="carousel slide carousel-fade slider"
			>
				<div className="carousel-inner">
					{webProjects.map((item, index) => {
						return (
							<ProjectItem
								key={index}
								projectName={item.projectName}
								projectStack={item.projectStack}
								projectDescription={item.projectDescription}
								projectLink={item.projectLink}
								projectImg={item.projectImg}
								projectClass={item.projectClass}
							/>
						);
					})}
				</div>

				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="prev"
				>
					{/* <span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span> */}
					<img
						className="prevProject"
						src="/images/slider-navi.svg"
						alt="Previous project"
					/>
					<span className="visually-hidden">Previous</span>
				</button>

				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="next"
				>
					{/* <span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span> */}
					<img
						className="nextProject"
						src="/images/slider-navi.svg"
						alt="Next project"
					/>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default Projects;
