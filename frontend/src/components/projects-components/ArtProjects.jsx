import React from 'react'

function ArtProjects() {
  return (
		<div className="artProjects">
			<div className="topRow">
				<img
					src="/images/cg-projects/discovered-in-ice.png"
					alt="Discovered in ice"
				/>
				<img src="/images/cg-projects/chess.png" alt="Chess" />
			</div>
			<div className="bottomRow">
				<img src="/images/cg-projects/setup.png" alt="Computer setup" />
			</div>
		</div>
  );
}

export default ArtProjects