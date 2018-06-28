import React from 'react';
import PropTypes from 'prop-types';
import LocalHOC from '../HOC/example2';
import Stringa from './string';

const drugsPage = ({ setDrags, togleDrags, lang }) => (
	<div className="drags">
		<div className="drags-btn-block">
			<button
				onClick={() => togleDrags({ status: 'set' })}
				type="button"
				className="drags-btn"
			>
				{lang.addDrags}
			</button>
			<button
				onClick={() => togleDrags({ status: 'reset' })}
				type="button"
				className="drags-btn"
			>
				{lang.resetDrags}
			</button>
		</div>
		<div className="drags-place">
			{setDrags.map((el, index) => <Stringa el={el} key={index} index={index} />)}
		</div>
	</div>
);
drugsPage.propTypes = {
	lang: PropTypes.object,
	togleDrags: PropTypes.func,
	setDrags: PropTypes.array,
};

export default LocalHOC(drugsPage);
