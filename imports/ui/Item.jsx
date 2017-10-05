import React, { Component } from 'react';

const ItemText = ({text}) => <div>{text}</div>

const ItemQuantity = ({quantity}) => <div>{quantity}</div>

class ItemInBasket extends Component {

	constructor(props){
		super(props)
		this.whenChange = this.whenChange.bind(this);
	}

	whenChange (event){
		this.props.action({_id: this.props._id, inBasket : !this.props.inBasket})
	}

	render(){
		return (
			<input onChange={this.whenChange} checked={this.props.inBasket} type="checkbox"/>
			)
	}
}


// Task component - represents a single todo item
export default class Item extends Component {

	constructor(props){
		super(props)
	}

  render() {
    return (
      <div><li><ItemInBasket {...this.props}/><ItemQuantity {...this.props}/><ItemText {...this.props}/></li></div>
    );
  }
}

// onClick={() => { this.setState({text: "X"}) }}