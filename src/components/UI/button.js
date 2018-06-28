import React from 'react';
import PropTypes from 'prop-types';

const button = ({
	className, type, onClick, text,
}) => (
	<button className={`${className} ${type}`} onClick={onClick}>{text}</button>
);
button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default button;
