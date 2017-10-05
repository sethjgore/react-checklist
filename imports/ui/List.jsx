import React, { Component } from 'react';
import uuid from 'uuid/v1';
import Item from './Item.jsx';
import ItemInput from './Input.jsx';

// App component - represents the whole app
export default class List extends Component {

	constructor(props){
		super()
		this.state = {
			list: [],
			mode: ['shop', 'edit']
		}
	}

  getItemsLocalStorage() {
    let list = JSON.parse(localStorage.getItem(state))
  }

	addItem(value){
  	localStorage.setItem(uuid(), value)
  }

	actionAdd = (dataIN) => {

		//immutablity: get CURRENT list's data
		const dataCURRENT = this.state.list;

		dataOUT = { _id: uuid(), ...dataIN }

		//immutablity: flatten CURRENT and IN dataz
		let dataIMMUTABLE = [...dataCURRENT, dataOUT]

		//immutability: force change in dataCURRENT
		this.setState({list: dataIMMUTABLE})

	}

	actionLocateAndCreateImmutable({_id, ...dataIN}){

		//immutablity: get CURRENT list's data
		const dataCURRENT = [...this.state.list]

		//finds the data LOCATION index
		const dataLOCATION = this.state.list.findIndex(obj => obj._id == _id);
		
		const dataOBJECT = dataCURRENT[dataLOCATION]

		//immutablity: flatten CURRENT and IN data
		const dataOUT = Object.assign({}, dataOBJECT, dataIN);

		let dataIMMUTABLE = function(){

		 dataCURRENT[dataLOCATION] = dataOUT

		 return dataCURRENT;

		 }
	
		return dataIMMUTABLE();
	}

	actionEdit = ({_id, ...dataIN}) => {

		let dataIMMUTABLE = this.actionLocateAndCreateImmutable({_id, ...dataIN})

		// localStorage.setItem({'list', JSON.stringify})
		this.setState({list: dataIMMUTABLE})
		console.log(this.state.list)
	}

	actionRemoveInBasket(props){
	}

  renderItems() {
    return this.state.list.map((item) => (
      <Item {...item} action={this.actionEdit} key={item._id} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Roomate Shopping List</h1>
          <ItemInput action={this.actionAdd} submit={this.addItem}/>
        </header>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

