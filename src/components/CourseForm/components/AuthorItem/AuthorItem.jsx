import React from 'react';
import Button from 'common/Button/Button';
import PropTypes from 'prop-types';

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

AuthorItem.propTypes = {
	handleClick: PropTypes.func,
	author: PropTypes.object.isRequired,
	buttonClassName: PropTypes.string,
	buttonText: PropTypes.string,
};

export default AuthorItem;
