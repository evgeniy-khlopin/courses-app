import React from 'react';
import Button from 'common/Button/Button';

const AuthorItem = (props) => {
	const handleClick = function () {
		if (!props.handler) return;
		props.handler();
	};

	const buttonText = props.buttonText || 'Add author';

	return (
		<>
			<div className='d-flex'>
				<div className='me-auto'>
					<div>{props.author.name}</div>
				</div>
				<div>
					<Button
						buttonText={buttonText}
						onClick={handleClick}
						className={props.buttonClassName}
					></Button>
				</div>
			</div>
		</>
	);
};

export default AuthorItem;
