import React from 'react';

function ProjectItem(props) {
	return (
		<div className={props.projectClass}>
			<div className="project">
				<div className="projectDetails">
					<h3>{props.projectName}</h3>

					<p className="projectDescription">
						{props.projectDescription}
					</p>
					<div className="techStack">
						{props.projectStack.map((stack, index) => {
							return <span key={index}>{stack}</span>;
						})}
					</div>
					<a
						href={props.projectLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						View project
					</a>
				</div>

				<div className="projectImage">
					<img
						src={props.projectImg}
						alt={`${props.projectName} screenshot`}
					/>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
