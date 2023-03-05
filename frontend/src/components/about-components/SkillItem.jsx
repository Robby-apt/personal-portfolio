import React from 'react'

function SkillItem(props) {
  return (
		<div className="skillItem" key={props.index}>
			<img src={props.item.skillIcon} alt={props.item.skillName} />
			<p>{props.item.skillName}</p>
		</div>
  );
}

export default SkillItem