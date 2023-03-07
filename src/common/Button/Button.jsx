import React from 'react';

const Button = ({ buttonText, onClick, className = 'btn btn-primary' }) => (
	<button className={className} onClick={onClick}>
		{buttonText}
	</button>
);

export default Button;
