import React from 'react';
import PropTypes from 'prop-types';
import ChangePosition from '../HOC/example3';

const stringa = ({ style, index, el }) => <span style={style} className="drags-staff" key={index}>
	{el}
</span>;
stringa.propTypes = {
	style: PropTypes.object,
	index: PropTypes.number,
	el: PropTypes.string,
};

export default ChangePosition(stringa);
