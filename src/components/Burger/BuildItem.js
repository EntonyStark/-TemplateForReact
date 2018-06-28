import React from 'react';
import PropTypes from 'prop-types';

const item = ({
	more, less, disabled, added, label, removed,
}) => (
	<div className="burger-control">
		<div className="burger-control-label">{label}</div>
		<button disabled={disabled} onClick={removed} className="burger-control-less">
			{less}
		</button>
		<button onClick={added} className="burger-control-more">
			{more}
		</button>
	</div>
);
item.propTypes = {
	more: PropTypes.string,
	less: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	added: PropTypes.func,
	removed: PropTypes.func,
};

export default item;
