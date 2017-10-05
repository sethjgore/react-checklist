import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class ItemInput extends Component {

	constructor(props){
		super(props)
		this.state = {text: "", inBasket: true, quantity: 1};

		this.whenChange = this.whenChange.bind(this);
    this.whenSubmit = this.whenSubmit.bind(this);

    this.defaultState = this.state;
	}

	resetState(){
		this.setState(this.defaultState)
	}

	whenChange(event){
		const target = event.target; 
		const key = target.name;
		const value = target.value;
		this.setState({ [key]: value})
	}

	whenSubmit(event){
		event.preventDefault();
		this.props.action(this.state);
		this.resetState()
	}

	render(){
		return (
			<form  onSubmit={this.whenSubmit}>
			<input name="quantity" value={this.state.quantity} type="number" onChange={this.whenChange}/>
			<input name="text" onChange={this.whenChange} type="text" value={this.state.text} />
			<button onClick={this.whenSubmit}>Add</button>
			</form>
	)
	}

}
