import React from 'react';
import PropTypes from 'prop-types';

const post = props => (
	<article className="post" onClick={props.clicked}>
		<h1>{props.title}</h1>
		<div className="info">
			<div className="author">{props.author}</div>
		</div>
	</article>
);
post.propTypes = {
	clicked: PropTypes.func,
	author: PropTypes.string,
	title: PropTypes.string,
};

export default post;
