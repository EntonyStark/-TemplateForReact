import React from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import img from "./../../image/user.png";
import {timeLine} from "./tlfunc";

class FirstAnimation extends React.Component {
	static defaultProps = {
		img: img,
		id: 0,
		text: "hello world",
	};

	static contextTypes = {
		func: PropTypes.func,
	};

	componentDidMount() {
		// timeLine({
		// 		projects: this._projects,
		// 		img: this._projectImage,
		// 		projectTitle: this._projectTitle,
		// 		projectSubTitle: this._projectSubTitle,
		// 		projectPixels: this._projectPixels,
		// 		text: this._text,
		// 		btnContainer: this._buttonContainer,
		// 		pixel: findDOMNode(this._project).getElementsByClassName("pixel"),
		// 		bp: findDOMNode(this._button).getElementsByClassName("bp"),
		// 	})

		this.context.func({
			id: this.props.id,
			obj: {
				projects: this._projects,
				project: this._project,
				img: this._projectImage,
				projectTitle: this._projectTitle,
				projectSubTitle: this._projectSubTitle,
				projectPixels: this._projectPixels,
				text: this._text,
				btnContainer: this._buttonContainer,
				pixel: findDOMNode(this._project).getElementsByClassName("pixel"),
				bp: findDOMNode(this._button).getElementsByClassName("bp"),
			},
		});	

		// this.context.func({
		// 	id: this.props.id,
		// 	obj: {
		// 		projects: this._projects,
		// 		project: this._project,
		// 	},
		// });
	}

	render() {
		const { text, img } = this.props;
		return (
			<div className="wrapper">
				<div className="projects" ref={root => (this._projects = root)}>
					<div className="project" ref={root => (this._project = root)}>
						<div className="project-image" ref={root => (this._projectImage = root)}>
							<img src={img} alt="img" />
							<div className="project-pixels" ref={root => (this._projectPixels = root)}>
								<div className="pixel pixel01 sizeS" />
								<div className="pixel pixel02 sizeXL" />
								<div className="pixel pixel03 sizeL" />
								<div className="pixel pixel04 sizeXL" />
								<div className="pixel pixel05 sizeL" />
								<div className="pixel pixel06 sizeS" />
								<div className="pixel pixel07 sizeL" />
								<div className="pixel pixel08 sizeS" />
								<div className="pixel pixel09 sizeL" />
								<div className="pixel pixel10 sizeS" />
								<div className="pixel pixel11 sizeS" />
								<div className="pixel pixel12 sizeS" />
								<div className="pixel pixel13 sizeXL" />
								<div className="pixel pixel14 sizeL" />
								<div className="pixel pixel15 sizeXL" />
								<div className="pixel pixel16 sizeL" />
								<div className="pixel pixel17 sizeS" />
								<div className="pixel pixel18 sizeL" />
								<div className="pixel pixel19 sizeS" />
								<div className="pixel pixel20 sizeL" />
								<div className="pixel pixel21 sizeS" />
								<div className="pixel pixel22 sizeS" />
							</div>
						</div>
						<h2 className="project-title" ref={root => (this._projectTitle = root)}>
							{text}
						</h2>
						<p className="button-container" ref={root => (this._buttonContainer = root)}>
							<a href="" className="button" ref={root => (this._button = root)}>
								<span className="bp bp-left" />
								<span className="bp bp-mid" />
								<span className="bp bp-right" />
								<span className="bp-text" ref={root => (this._text = root)}>
									View project
								</span>
							</a>
						</p>
						<p className="project-subtitile" ref={root => (this._projectSubTitle = root)}>
							First work in animate
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FirstAnimation;
