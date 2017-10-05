import React, { Component } from 'react';

const ItemText = ({text}) => <div>{text}</div>

const ItemQuantity = ({quantity}) => <div>{quantity}</div>

const ItemInBasket = ({inBasket}) => {
	return(
		<input onChange={action} checked={inBasket} type="checkbox"/>
		)
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