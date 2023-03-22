import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ onClick }) => (
	<img
		src={`${process.env.PUBLIC_URL}/logo.webp`}
		alt='logo'
		height='50'
		style={{ cursor: 'pointer' }}
		onClick={onClick}
	/>
);

Logo.propTypes = {
	onClick: PropTypes.func,
};

export default Logo;
