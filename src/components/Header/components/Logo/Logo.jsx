import React from 'react';

const Logo = (props) => {
	return (
		<div>
			<img
				src='/logo.png'
				alt='logo'
				height='50'
				style={{ cursor: 'pointer' }}
				onClick={props.onClick}
			></img>
		</div>
	);
};

export default Logo;
