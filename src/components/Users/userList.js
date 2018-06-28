import React from 'react';
import PropTypes from 'prop-types';
import HOCcomponent from '../HOC/example1';
import LocalHOC from '../HOC/example2';
import Profile from '../../image/user.png';

const userListComponent = ({ lang }) => {
	const { users } = lang;
	return <div className="delay">
		{
			users.map((el, index) => <div key={index} className="delay-main">
				<div className="delay-img-blok">
					<img src={Profile} alt={el.name} className="delay-img"/>
				</div>
				<div className="delay-text-block">
					<span className="delay-name">{el.name}</span>
					<span className="delay-job">{el.job}</span>
				</div>
			</div>)
		}
	</div>;
};
userListComponent.propTypes = {
	lang: PropTypes.object,
};

export default LocalHOC(HOCcomponent(userListComponent));
