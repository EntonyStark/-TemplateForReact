import React from "react";
import img from "./../../image/user.png";

import {TweenMax, Power2, TimelineLite} from "gsap";

const FirstAnimation = props => {
	return (
		<div className="wrapper">
			<div className="projects">

				<div className="project">
					<div className="project-image">
						<img src={img} alt="img"/>
						<div className="project-pixels">
							<div className="pixel pixel01 sizeS"></div>
							<div className="pixel pixel02 sizeXL"></div>
							<div className="pixel pixel03 sizeL"></div>
							<div className="pixel pixel04 sizeXL"></div>
							<div className="pixel pixel05 sizeL"></div>
							<div className="pixel pixel06 sizeS"></div>
							<div className="pixel pixel07 sizeL"></div>
							<div className="pixel pixel08 sizeS"></div>
							<div className="pixel pixel09 sizeL"></div>
							<div className="pixel pixel10 sizeS"></div>
							<div className="pixel pixel11 sizeS"></div>
							<div className="pixel pixel12 sizeS"></div>
							<div className="pixel pixel13 sizeXL"></div>
							<div className="pixel pixel14 sizeL"></div>
							<div className="pixel pixel15 sizeXL"></div>
							<div className="pixel pixel16 sizeL"></div>
							<div className="pixel pixel17 sizeS"></div>
							<div className="pixel pixel18 sizeL"></div>
							<div className="pixel pixel19 sizeS"></div>
							<div className="pixel pixel20 sizeL"></div>
							<div className="pixel pixel21 sizeS"></div>
							<div className="pixel pixel22 sizeS"></div>
						</div>
					</div>
					<h2 className="project-title">Merry Cristmallax</h2>
					<p className="button-container">
						<a href="#" className="button">
							<span className="bp bp-left"></span>
							<span className="bp bp-mid"></span>
							<span className="bp bp-right"></span>
							<span className="bp-text">View project</span>
						</a>
					</p>
					{/*<p className="project-subtitile">Scroll in action</p>*/}
				</div>

			</div>
		</div>
	)
}

export default FirstAnimation