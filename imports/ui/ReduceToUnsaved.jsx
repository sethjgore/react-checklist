import React, { Component } from 'react';

export default class ReduceToUnsaved extends Component {

	constructor(props){
		super(props)
		this.whenClick = this.whenClick.bind(this);
	}

	whenClick(event){
		// if(confirm('remove all unsaved items?')){
			this.props.action()
		// }
	}

	render(){
		return(
			<button className="m2 flex items-center button button-pill bg-white color-red type-name-monospace px2 py1 type-size-note" onClick={this.whenClick} ><div className="pr2">DELETE</div> <div class="button button-pill color-white px2 bg-green">Pinned</div></button>
		)
	}
}