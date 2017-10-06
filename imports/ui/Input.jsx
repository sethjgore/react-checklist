import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class ItemInput extends Component {

	constructor(props){
		super(props)
		this.state = {text: "", who: "", inBasket: false, quantity: 1, saved: false};

		this.whenChange = this.whenChange.bind(this);
    this.whenSubmit = this.whenSubmit.bind(this);
    this.whenSave = this.whenSave.bind(this);

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

	whenSave(event){
		this.setState({saved: true});
	}

	whenSubmit(event){
		event.preventDefault();
		this.props.action(this.state);
		this.resetState()
	}

	render(){
		return (
			<form className="flex bg-white width-full p3" onSubmit={this.whenSubmit}>
			<input className="flex-auto fb-02 bg-gray button type-name-monospace type-size-paragraph center width-three" name="quantity" value={this.state.quantity} type="number" onChange={this.whenChange}/>
			<input placeholder="What to buy?" className="px2 flex-auto fb-1 type-name-monospace type-size-paragraph" name="text" onChange={this.whenChange} type="text" value={this.state.text} />
			<button className="button flex type-name-monospace type-size-paragraph button-pill bg-green px2 py2 color-white" onClick={this.whenSubmit}><div className="pr2">Add</div></button>
			<button className="button type-name-monospace type-size-menu button-pill bg-blue px1 py1 color-white" onClick={this.whenSave}>Save</button>
			</form>
	)
	}

}
