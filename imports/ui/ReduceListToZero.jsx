import React, { Component } from 'react';

export default class ReduceListToZero extends Component {

	constructor(props){
		super(props)
		this.whenClick = this.whenClick.bind(this);
	}

	whenClick(event){
		if(confirm('Remove Everything?')){
			this.props.action()
		}
	}

	render(){
		return(
			<button className="m2 flex items-center button button-pill bg-cloudy color-red type-name-monospace px2 py1 type-size-note" onClick={this.whenClick} ><div className="pr2">delete <span className="color-blue">ALL</span></div></button>
		)
	}
}