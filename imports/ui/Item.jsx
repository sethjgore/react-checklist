import React, { Component } from 'react';

const ItemText = ({text}) => <div className="flex-auto fb-1 type-name-monospace pl2 type-size-paragraph">{text}</div>

const ItemQuantity = ({quantity}) => <div className="type-name-monospace pl2 type-size-subtitle color-white">{quantity}</div>

const ItemIsWhose = () => <div className="self-end type-name-monospace px2 py1 type-size-menu bg-white button button-pill button-red color-red">Natasha</div>

const ItemIsSaved = () => <div className="self-end type-name-monospace px2 py1 type-size-menu bg-white button button-pill bg-blue color-white">Saved</div>


//ItemInBasket Component - Button
class ItemInBasket extends Component {

	componentStyle = {
		transform: 'scale(2)'
	}

	constructor(props){
		super(props)
		this.whenChange = this.whenChange.bind(this);
	}

	//change, reverse inBasket boolean
	whenChange (event){
		this.props.action({_id: this.props._id, inBasket : !this.props.inBasket})
	}

	render(){
		return (
			<input style={this.componentStyle} onChange={this.whenChange} checked={this.props.inBasket} type="checkbox"/>
			)
	}
}


//Item Component - Wrapper for various Item Components
export default class Item extends Component {

	constructor(props){
		super(props)
	}

	renderSaved(){
		if(this.props.saved == true){
			return(
				<ItemIsSaved />
				)
		}
	}
  render() {
    return (
      <div className="bg-cloudy items-center flex p2">
      <ItemInBasket {...this.props}/>
      <ItemQuantity {...this.props}/>
      <ItemText {...this.props}/>
      <ItemIsWhose {...this.props}/>
      {this.renderSaved()}

      </div>
    );
  }
}