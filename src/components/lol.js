import React from 'react';

import ArrowIcon from "./ArrowIcon";
import "./style.css";
import DefaultValComponent from "./DefaultValComponent";

class Main extends React.Component {
	static defaultProps = {
		valComponent: DefaultValComponent,
		iconComponent: ArrowIcon,
		items: [],
		onChange: () => {}
	}

	state = {
		itemContainerBox: {},
		opened: false
	}

	componentDidMount() {
		window.addEventListener('scroll', this.setItemsContainerBox)
	}

	componentWillUnMount() {
		window.removeEventListener('scroll', this.setItemsContainerBox)
	}

	getItemsContainerBox = () => {
		if (!this.rootElement || !this.itemsContainerElement) {
			return;
		}
		const rootElementBoundery = this.rootElement.getBoundingClientRect();
		const itemsContainerElementBoundery = this.itemsContainerElement.getBoundingClientRect();
		const left = rootElementBoundery.left;
		const bottom = rootElementBoundery.top + this.itemsContainerElement.offsetHeight
		const top = bottom > window.innerHeight ? rootElementBoundery.bottom - this.itemsContainerElement.offsetHeight : rootElementBoundery.top;
		return {
			width: `${this.rootElement.offsetWidth}px`,
			left: `${left}px`,
			top: `${top}px` 
		}
	}
	
	setItemsContainerBox = () => {
		const itemContainerBox = this.getItemsContainerBox();
		this.setState({itemContainerBox})
	}	

	closeItemsContainer = () => {
		this.setState({opened: false})
	}
	
	openItemsContainer = () => {
		this.setState(state => ({
			opened: true,
			}),
			this.setItemsContainerBox
		)
	}

	renderItemsContaier = () => (
		<div className="renderItemsContaierWrapper" onClick={ this.closeItemsContainer }>
			<div 
				className="renderItemsContaier"
				ref={ itemsContainer => {
					this.itemsContainerElement = itemsContainer;
				}}
				style={ this.state.itemContainerBox }
			>
				<ul className="renderItemsContaier-ul">
					{
						this.props.items.map( (el, index) => <li 
							className={`renderItemsContaier-li ${el.name === this.props.value ? 'active' : ''}`} 
							onClick={ () => this.props.onChange(el.name) }
							key={index}>
								{ el.name }
							</li>)
					}
				</ul>
			</div>
		</div>
	)

	render = () => {
		const { style, value, items, valComponent: ValComponent, iconComponent: IconComponent } =this.props
		const { opened } = this.state
		return (		
		<React.Fragment>
			<div 
				className="root" 
				style={style} 
				ref={root => {
					this.rootElement = root;
				}}
			>
				<div className="value" onClick={ this.openItemsContainer }>
					<span className="select-value">{value || "choose sports"}</span>
					<ValComponent items={ items } />
				</div>
				<button className="arrow-button" onClick={ this.openItemsContainer }>
					<IconComponent />
				</button>
			</div>
			{opened && this.renderItemsContaier()}
		</React.Fragment>
		)
	}
}

export default Main