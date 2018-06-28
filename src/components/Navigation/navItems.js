import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './navItem';

const navItems = props => (
	<ul className="nav-ul">
		{props.listItems.map(el => (el.link === '/orders' && !props.user ? null : <NavItem key={el.text} text={el.text} link={el.link} />))}
	</ul>
);
navItems.propTypes = {
	user: PropTypes.string,
	listItems: PropTypes.array,
};

export default navItems;
