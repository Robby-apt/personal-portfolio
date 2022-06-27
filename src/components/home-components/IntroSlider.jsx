import React from 'react';
import IntroImgSlider from './IntroImgSlider';
import introImgs from '../../introImgs';

function IntroSlider() {
	return (
		<div className="slideArea">
			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					{introImgs.map((introImg) => {
						return (
							<IntroImgSlider
								classes={introImg.classes}
								source={introImg.src}
								altName={introImg.alt}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default IntroSlider;
