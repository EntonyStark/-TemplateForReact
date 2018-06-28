import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const navItem = ({ text, link, match }) => (
	<li className="nav-li">
		<Link
			className={link === match.path ? 'nav-li-a nav-li-a--active' : 'nav-li-a'}
			to={link}
		>
			{text}
		</Link>
	</li>
);
navItem.propTypes = {
	text: PropTypes.string,
	link: PropTypes.string,
	match: PropTypes.object,
};

export default withRouter(navItem);
