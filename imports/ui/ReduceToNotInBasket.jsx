import React, { Component } from 'react';

export default class ReduceToNotInBasket extends Component {

	constructor(props){
		super(props)
		this.whenClick = this.whenClick.bind(this);
	}

	whenClick(event){
		// if(confirm('remove CHECKED items?')){
			this.props.action()
		// }
	}

	checkboxStyle = {
		transform: 'scale(2)'
	}

	render(){
		return(
			<button className="m2 flex items-center button button-pill bg-white color-red type-name-monospace px2 py1 type-size-note" onClick={this.whenClick} ><div className="pr2">DELETE</div><input style={this.checkboxStyle} checked="true" className="user-select-none pointer-events-none" type="checkbox"/></button>
		)
	}
}