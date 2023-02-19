import React from 'react';
import Button from 'common/Button/Button';

const SearchBar = (props) => {
	return (
		<form className='d-flex' role='search'>
			<input
				className='form-control me-2'
				type='search'
				placeholder='Search'
				aria-label='Search'
			></input>
			<Button className='btn btn-outline-success' buttonText='Search'></Button>
		</form>
	);
};

export default SearchBar;
