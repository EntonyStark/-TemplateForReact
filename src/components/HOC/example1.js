import React from 'react';

const HOCcomponent = (Component) => {
	return class extends React.Component {
		state = {
			show: false
		}

		componentDidMount() {
			setTimeout( () =>  this.setState({show: true}), 3000 )
	  }

		render() {
			return this.state.show === false ? <div className="loader"></div> : <Component {...this.props} />
		}
	}
}

export default HOCcomponent;