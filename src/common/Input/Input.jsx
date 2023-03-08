import React from 'react';

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

export default Input;
