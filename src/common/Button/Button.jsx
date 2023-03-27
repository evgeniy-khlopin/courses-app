import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
	buttonText,
	onClick,
	className = 'btn btn-primary',
	children,
}) => (
	<button className={className} onClick={onClick}>
		{buttonText || children}
	</button>
);

Button.propTypes = {
	buttonText: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Button;
