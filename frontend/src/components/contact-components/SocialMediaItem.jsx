import React from 'react';

function SocialMediaItem(props) {
	return (
		<a href={props.mediaLink} target="_blank" rel="noopener noreferrer">
			<i className={props.classString} />
		</a>
	);
}

export default SocialMediaItem;
