import React, { useState } from 'react';
import Button from 'common/Button/Button';
import Input from 'common/Input/Input';

const SearchBar = (props) => {
	// TODO: Think about a better state variable name for the search value
	const [searchQuery, setSearchQuery] = useState('');

	const handleChange = function (event) {
		event.preventDefault();
		// Submit empty form without clicking the search button
		if (event.target.value === '') props.onSearch('');
		setSearchQuery(event.target.value);
	};

	const handleSubmit = function (event) {
		event.preventDefault();
		props.onSearch(searchQuery);
	};

	return (
		<form className='d-flex' onSubmit={handleSubmit}>
			<Input
				className='form-control me-2'
				type='search'
				placeholderText='Search by name or id'
				aria-label='Search'
				onChange={handleChange}
			></Input>
			<Button className='btn btn-success' buttonText='Search'></Button>
		</form>
	);
};

export default SearchBar;
