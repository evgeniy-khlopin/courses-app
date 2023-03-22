import React from 'react';

const NotFound = () => (
	<div className='d-flex justify-content-center'>
		<img
			src={`${process.env.PUBLIC_URL}/not_found.jpeg`}
			alt='not_found'
			style={{ height: '250px' }}
		/>
	</div>
);

export default NotFound;
