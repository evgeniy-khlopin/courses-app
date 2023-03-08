import React from 'react';
import Button from 'common/Button/Button';

const AuthorItem = ({
	handleClick,
	author,
	buttonClassName,
	buttonText = 'Add author',
}) => (
	<div className='d-flex'>
		<div className='me-auto'>
			<div>{author.name}</div>
		</div>
		<div>
			<Button
				buttonText={buttonText}
				onClick={handleClick}
				className={buttonClassName}
			/>
		</div>
	</div>
);

export default AuthorItem;
