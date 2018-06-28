import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationContainer } from 'react-notifications';
import { notificationSuccess, notificationFail } from '../utils/notification';

import Post from '../components/Blog/Post';
import HeaderContainer from './HeaderContainer';
import LocalHoc from '../components/HOC/example2';

class BlogContainer extends Component {
	state = {
		post: [],
		selectedPost: null,
		error: false,
	};

	componentDidMount() {
		const { getUsersOk, usersFail } = this.props.lang.blogPage;
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				if (response.ok) return response.json();
				throw new Error(response.status);
			})
			.then((json) => {
				const posts = json.slice(0, 8);
				const updatePosts = posts.map(el => ({ ...el, author: 'Tony' }));
				this.setState({ post: updatePosts, error: false });
			})
			.then(_ => notificationSuccess('GET USERS', getUsersOk))
			.catch((error) => {
				this.setState({ error: true });
				notificationFail('GET USERS', usersFail);
			});
	}

	handleSelect = id => this.setState({ selectedPost: id });

	render() {
		const { errorText } = this.props.lang.blogPage;
		const { selectedPost, post, error } = this.state;
		const posts = post.map(el => (
			<Post
				key={el.id}
				clicked={this.handleSelect.bind(null, el.id)}
				title={el.title}
				author={el.author}
			/>
		));

		const errorMessage = (
			<p style={{ textAlign: 'center', marginTop: '15px' }}>{errorText}</p>
		);

		return (
			<React.Fragment>
				<HeaderContainer />
				<div className="blog-container">
					<section className="posts">{error ? errorMessage : posts}</section>
					{/*     <section>
						<FullPost id={selectedPost} blogPage={this.props.lang.blogPage} />
					</section>
					<section>
						<NewPost blogPage={this.props.lang.blogPage} />
					</section> */}
				</div>
				<NotificationContainer />
			</React.Fragment>
		);
	}
}

BlogContainer.propTypes = {
	lang: PropTypes.object,
};

export default LocalHoc(BlogContainer);
