import React, { Component } from 'react';
import uuid from 'uuid/v1';
import Item from './Item.jsx';
import ItemInput from './Input.jsx';
import ReduceToNotInBasket from './ReduceToNotInBasket.jsx'
import ReduceListToZero from './ReduceListToZero.jsx'
import ReduceToSaved from './ReduceToSaved.jsx'


const AppTitle = () => <div className="type-name-monospace type-size-menu m2 button button-pill bg-red color-white px2 py1">Basket for Tuesdays</div>

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
		this.getItemsSaved = this.getItemsSaved.bind(this);
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

	getItemsNotInBasket(){ return this.state.list.filter(function(el){ return el.inBasket == false || el.saved == true })}

	getItemsSaved(){ return this.state.list.filter(function(el){ return el.saved == true})}

	actionReduceTo(dataIN){
		let dataIMMUTABLE = dataIN
		debugger
		this.setState({list: dataIMMUTABLE})
	}

  renderItems() {
    return this.state.list.map((item) => (
      <Item {...item} action={this.actionEdit} key={item._id} />
    ));
  }

  renderHeader(){
  	return (
  		 <div className="flex">
         <SideMargin />
        <header className="flex-auto bg-white flex flex-column items-center fb-1">
         	<div className="flex width-full justify-between items-center">
         	<div className="flex">
         	<ReduceToNotInBasket action={() => this.actionReduceTo(this.getItemsNotInBasket())}/>
         	<ReduceToSaved action={() => this.actionReduceTo(this.getItemsSaved())}/>
         	<ReduceListToZero action={() => this.actionReduceTo([])}/>
         	</div>
         	<AppTitle/>
         	</div>
          <ItemInput action={this.actionAdd} submit={this.addItem}/>
        </header>
        <SideMargin />
        </div>
  		)
  }


  render() {
    return (
      <div className="min-height-full width-full-viewport height-full-viewport bg-blue flex-column items-center justify-center">
      	{this.renderHeader()}
       	<div className="flex">
        	 <SideMargin />
	        <ul className="flex-auto fb-1 m0 p0">
	          {this.renderItems()}
	        </ul>
	         <SideMargin />
        </div>
      </div>
    );
  }
}

