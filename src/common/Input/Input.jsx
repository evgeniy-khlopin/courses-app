import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
	labelText,
	type,
	className,
	id,
	placeholderText,
	onChange,
	min,
	max,
	value,
	name,
}) => (
	<>
		<label className='form-label'>{labelText}</label>
		<input
			type={type}
			className={className || 'form-control'}
			id={id}
			placeholder={placeholderText}
			onChange={onChange}
			min={min}
			max={max}
			value={value}
			name={name}
		/>
	</>
);

Input.propTypes = {
	labelText: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	placeholderText: PropTypes.string,
	onChange: PropTypes.func,
	min: PropTypes.string,
	max: PropTypes.string,
	value: PropTypes.string,
	name: PropTypes.string,
};

export default Input;
