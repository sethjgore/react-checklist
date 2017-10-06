import React, { Component } from 'react';

export default class ReduceToSaved extends Component {

	constructor(props){
		super(props)
		this.whenClick = this.whenClick.bind(this);
	}

	whenClick(event){
		if(confirm('remove all unsaved items?')){
			this.props.action()
		}
	}

	checkboxStyle = {
		transform: 'scale(2)'
	}

	render(){
		return(
			<button className="m2 flex items-center button button-pill bg-cloudy color-red type-name-monospace px2 py1 type-size-note" onClick={this.whenClick} ><div className="pr2">delete</div><span className="color-blue">UNSAVED</span></button>
		)
	}
}