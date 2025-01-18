import React from 'react';
import SocialMediaItem from './SocialMediaItem';
import socials from '../../socials';

function ContactMedia() {
	return (
		<div className="contactMedia">
			<div className="container">
				<p className="contactPrompt">
					Feel free to reach out to me on the
					<br />
					following platforms
				</p>


				<div className="socialMedia">
					{socials.map((social, index) => {
						return (
							<SocialMediaItem
								key={index}
								mediaLink={social.mediaLink}
								classString={social.classString}
							/>
						);
					})}
				</div>

				<p className="contactConclusion">
					Write to me, let's work together.
				</p>
			</div>
		</div>
	);
}

export default ContactMedia;
