import React, { useState } from 'react';
import Button from 'common/Button/Button';
import Input from 'common/Input/Input';

const SearchBar = (props) => {
	// TODO: Think about a better state variable name for the search value
	const [value, setValue] = useState('');

	const handleChange = function (event) {
		event.preventDefault();
		// Submit empty form without clicking the search button
		if (event.target.value === '') props.onSearch('');
		setValue(event.target.value);
	};

	const handleSubmit = function (event) {
		event.preventDefault();
		props.onSearch(value);
	};

	return (
		<form className='d-flex' onSubmit={handleSubmit}>
			<Input
				className='form-control me-2'
				type='search'
				placeholder='Search'
				aria-label='Search'
				onChange={handleChange}
			></Input>
			<Button className='btn btn-outline-success' buttonText='Search'></Button>
		</form>
	);
};

export default SearchBar;
