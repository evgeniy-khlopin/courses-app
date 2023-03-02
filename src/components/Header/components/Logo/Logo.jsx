import React from 'react';

const Logo = (props) => {
	return (
		<>
			<img
				src='./logo.webp'
				alt='logo'
				height='50'
				style={{ cursor: 'pointer' }}
				onClick={props.onClick}
			></img>
		</>
	);
};

export default Logo;
