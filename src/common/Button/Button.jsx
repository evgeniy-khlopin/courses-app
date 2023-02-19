import React from 'react';

const Button = (props) => {
	const className = props.className || 'btn btn-primary';

	return (
		<div>
			<button className={className} onClick={props.onClick}>
				{props.buttonText}
			</button>
		</div>
	);
};

export default Button;
