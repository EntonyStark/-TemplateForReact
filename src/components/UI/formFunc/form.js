import React from 'react';
import PropTypes from 'prop-types';

export const input = ({
	input: { ...inputProps },
	meta: { touched, error },
	label,
	className,
	classNamelabel,
	errorClass,
	placeholder,
	type,
	disabled,
	id,
	...props
}) => (
	<div className={touched && error ? `${className} ${className + errorClass}` : className}>
		<input
			disabled={disabled}
			autoComplete="off"
			id={id}
			placeholder={placeholder}
			type={type}
			{...inputProps} />
		<label
			className={
				touched && error ? `${classNamelabel} ${classNamelabel + errorClass}` : classNamelabel
			}
			htmlFor={id}
		>
			{label}
		</label>
	</div>
);
input.propTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	errorClass: PropTypes.string,
	classNamelabel: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	meta: PropTypes.object,
	input: PropTypes.object,
};

export const select = ({
	input: { ...inputProps },
	meta: { touched, error },
	options,
	className,
	errorClass,
	...props
}) => (
	<select className={touched && error ? `${className} ${className + errorClass}` : className} {...inputProps} >
		<option value="">Choose delivery method</option>
		{options.map(el => <option key={el.value} value={el.value}>{el.displayValue}</option>)}
	</select>
);
select.propTypes = {
	options: PropTypes.array,
	errorClass: PropTypes.string,
	className: PropTypes.string,
	meta: PropTypes.object,
	input: PropTypes.object,
};
