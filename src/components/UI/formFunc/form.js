import React from "react";

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
		{options.map( el => <option key={el.value} value={el.value}>{el.displayValue}</option>)}
	</select>
);