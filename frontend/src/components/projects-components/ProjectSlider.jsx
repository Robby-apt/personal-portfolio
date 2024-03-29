import React from 'react';
import ProjectItem from './ProjectItem';
import webProjects from '../../webProjects';

function ProjectSlider() {
	return (
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
				<img
					className="nextProject"
					src="/images/slider-navi.svg"
					alt="Next project"
				/>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default ProjectSlider;
