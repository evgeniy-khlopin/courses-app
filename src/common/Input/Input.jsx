import React from 'react';

const Input = (props) => {
	return (
		<>
			<label className='form-label'>{props.labelText}</label>
			<input
				type={props.type}
				className={props.className || 'form-control'}
				id={props.id}
				placeholder={props.placeholderText}
				onChange={props.onChange}
				min={props.min}
				max={props.max}
				value={props.value}
				name={props.name}
			></input>
		</>
	);
};

export default Input;
