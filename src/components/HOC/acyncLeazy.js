import React, { Component } from 'react';

const acyncComponent = inpComponet => class extends Component {
		state ={
			component: null,
		}

		componentDidMount() {
			inpComponet()
				.then((el) => {
					this.setState({ component: el.default });
				});
		}

		render() {
			const C = this.state.component;
			return C ? <C {...this.props}/> : null;
		}
};

export default acyncComponent;
