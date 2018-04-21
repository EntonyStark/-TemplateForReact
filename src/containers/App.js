import React, { Component } from 'react';
import './App.css';

import Main from './../components/select';

const items = [
	{name: "Foo"}, 
	{name: "Doooo"}, 
	{name: "GOOO"}, 
	{name: "CDAAS"}, 
	{name: "sdafda"}, 
]

class App extends Component {
	state = {
		value: null,
	}

	onChooseItem = item => {
		this.setState({value: item})
	}

  render = () => {
  	const { value } = this.state
  	// const { items } = this.props
    return (
      <div className="App">
        <Main
         	items={ items }
         	value={ value } 
         	onChange={ this.onChooseItem }/>
      </div>
    );
  }
}

export default App;
