import React, { Component } from 'react';
import uuid from 'uuid/v1';
import Item from './Item.jsx';
import ItemInput from './Input.jsx';
import ReduceToNotInBasket from './ReduceToNotInBasket.jsx'
import ReduceToInBasket from './ReduceToInBasket.jsx'
import ReduceToUnsaved from './ReduceToUnsaved.jsx'


const AppTitle = () => <div><div class="flex items-center color-white type-name-monospace type-size-note px2 button button-pill"><AppLogo/><div>Check List</div></div></div>

const AppLogo = () => <img src="/logo.svg" class="type-size-title height-three pr2"/>

const SideMargin = () => <div className="flex-auto fb-03"></div>

// App component - represents the whole app
export default class List extends Component {

	constructor(props){
		super()
		this.state = {
			list: [],
			mode: ['shop', 'edit'],
			who: ['Sammy', "Ali", "Crystal"]
		}

		this.getItemsNotInBasket = this.getItemsNotInBasket.bind(this);
		this.getItemsInBasket = this.getItemsInBasket.bind(this);
		this.getItemsUnsaved = this.getItemsUnsaved.bind(this);
	}

  getItemsLocalStorage() {
    let list = JSON.parse(localStorage.getItem(state))
  }

	addItem(value){
  	localStorage.setItem(uuid(), value)
  }

	actionAdd = (dataIN) => {

		dataOUT = { _id: uuid(), ...dataIN }

		//immutablity: flatten CURRENT and IN data
		let dataIMMUTABLE = [...this.state.list, dataOUT]

		//immutability: force change in dataCURRENT
		this.setState({list: dataIMMUTABLE})

	}

	actionLocateAndCreateImmutable({_id, ...dataIN}){

		//get an immutable COPY of list state
		const dataCURRENT = [...this.state.list]

		//finds the data LOCATION index
		const dataLOCATION = this.state.list.findIndex(obj => obj._id == _id);
		
		const dataOBJECT = this.state.list[dataLOCATION]

		//immutablity: flatten CURRENT and IN data
		const dataOUT = Object.assign({}, dataOBJECT, dataIN);

		//set new object to the COPY of list state
		let dataIMMUTABLE = function(){

		 dataCURRENT[dataLOCATION] = dataOUT

		 return dataCURRENT;

		 }
	
		//return modified COPY of list state
		return dataIMMUTABLE();
	}

		actionEdit = ({_id, ...dataIN}) => {

		let dataIMMUTABLE = this.actionLocateAndCreateImmutable({_id, ...dataIN})

		// localStorage.setItem({'list', JSON.stringify})
		this.setState({list: dataIMMUTABLE})	
	}

	//returns items that are saved or unchecked
	getItemsNotInBasket(){ return this.state.list.filter(function(el){ return el.inBasket == false || el.saved == true })}//

	//returns items that are saved or checked
	getItemsInBasket(){ return this.state.list.filter(function(el){ return el.inBasket == true || el.saved == true })}

	//return items that are unsaved
	getItemsUnsaved(){ return this.state.list.filter(function(el){ return el.saved == false})}


	actionReduceTo(dataIN){
		let dataIMMUTABLE = dataIN
		this.setState({list: dataIMMUTABLE})
	}

  renderItems() {
    return this.state.list.map((item) => (
      <Item {...item} action={this.actionEdit} key={item._id} />
    ));
  }

  renderHeader(){
  	return (
  		 <div>
        <header className="flex-auto bg-black flex flex-column items-center fb-1">
         	<div className="flex width-full justify-between items-center">
         	 <div><AppTitle/></div>
         	<div className="flex">
         	<ReduceToNotInBasket action={() => this.actionReduceTo(this.getItemsNotInBasket())}/>

         	<ReduceToInBasket action={() => this.actionReduceTo(this.getItemsInBasket())}/>
         	
         	<ReduceToUnsaved action={() => this.actionReduceTo(this.getItemsUnsaved())}/>

         	</div>
         	</div>
          <ItemInput action={this.actionAdd} submit={this.addItem}/>
        </header>
        </div>
  		)
  }

  mainStyle(){
  	return(
  	{
  		background: "linear-gradient(20deg, #c58cd2,teal, #6d6dff)",
  		backgroundSize: "cover"
  	}
  	)
  }

  render() {
    return (
      <div  style={this.mainStyle()} className="p3  height-full-viewport flex-column items-center justify-stretch">
      	
      	{this.renderHeader()}
	        <div class="flex flex-column"><ul className="flex-auto fb-1 m0 p0">
	          {this.renderItems()}
	        </ul></div>
      </div>
      
    );s
  }
}

