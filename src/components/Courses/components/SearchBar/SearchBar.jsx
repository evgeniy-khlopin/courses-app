import React, { useState } from 'react';
import Button from 'common/Button/Button';
import Input from 'common/Input/Input';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleChange = (event) => {
		event.preventDefault();
		if (event.target.value === '') onSearch('');
		setSearchQuery(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSearch(searchQuery);
	};

	return (
		<form className='d-flex' onSubmit={handleSubmit}>
			<Input
				className='form-control me-2'
				type='search'
				placeholderText='Search by name or id'
				aria-label='Search'
				onChange={handleChange}
			/>
			<Button className='btn btn-success' buttonText='Search' />
		</form>
	);
};

SearchBar.propTypes = {
	onSearch: PropTypes.func,
};

export default SearchBar;
