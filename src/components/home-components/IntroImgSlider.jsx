import React from 'react';

function IntroImgSlider(props) {
	return (
		<div className={props.classes}>
			<img src={props.source} className="d-block w-100" alt={props.altName} />
		</div>
	);
}

export default IntroImgSlider;
