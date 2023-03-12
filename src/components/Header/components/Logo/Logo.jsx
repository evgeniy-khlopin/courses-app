import React from 'react';

const Logo = ({ onClick }) => (
	<img
		src={`${process.env.PUBLIC_URL}/logo.webp`}
		alt='logo'
		height='50'
		style={{ cursor: 'pointer' }}
		onClick={onClick}
	/>
);

export default Logo;
