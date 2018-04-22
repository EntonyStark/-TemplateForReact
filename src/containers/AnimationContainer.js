import React from 'react';
import FirstAnimation from "./../components/animation/index";
import NavBar from "./../components/common/navigation";

class Animation extends React.Component {
	render() {
		return <React.Fragment>
		 	<NavBar />
		 	<div className="project1">
		 		<FirstAnimation />
		 	</div>
		 </React.Fragment>
	}
}

export default Animation