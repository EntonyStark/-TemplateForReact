import React from 'react';
import PropTypes from 'prop-types';

const backdrop = ({ showBackdrop, cliked }) => (
	showBackdrop ? <div className="backdrop" onClick={cliked}></div> : null
);
backdrop.propTypes = {
	showBackdrop: PropTypes.bool,
	cliked: PropTypes.func,
};

export default backdrop;
