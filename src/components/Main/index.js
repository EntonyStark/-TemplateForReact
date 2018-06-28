import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../../containers/HeaderContainer';
import LocalHOC from '../HOC/example2';

const mainPage = ({ onClickRu, onClickEn, lang }) => {
	const { title, switchLang } = lang.mainPage;
	return (
		<React.Fragment>
			<HeaderContainer />
			<div className="main-container">
				<h1 className="greeting">{`${title} :)`}</h1>
				<div className="toggle-block">
					<span className="toggle-title">{`${switchLang} :`}</span>
					<button className="toggle-btn" type="button" onClick={onClickRu}>RU</button>
					<button className="toggle-btn" type="button" onClick={onClickEn}>EN</button>
				</div>
			</div>
		</React.Fragment>
	);
};
mainPage.propTypes = {
	onClickEn: PropTypes.func,
	onClickRu: PropTypes.func,
	lang: PropTypes.object,
};

export default LocalHOC(mainPage);
