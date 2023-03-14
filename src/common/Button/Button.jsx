import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick, className = 'btn btn-primary' }) => (
	<button className={className} onClick={onClick}>
		{buttonText}
	</button>
);

Button.propTypes = {
	buttonText: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Button;
