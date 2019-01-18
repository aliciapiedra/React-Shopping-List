import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import groceriesList from './data/GroceriesList';
import Items from './components/Items';
import ItemForm from './components/ItemForm';
import inCart from './data/InCart'; 
import Carts from './components/Carts';

class App extends Component {
  state = { groceries: groceriesList, inCart: [inCart] }

  handleChangeGroceries = name => {
    let { groceries } = this.state
    groceries = groceries.filter(item => item.name !== name )
    let { inCart } = this.state
    inCart.push({name: name, id: inCart.length})
    this.setState ({ groceries, inCart })
  }

  handleReputGroceries = name => {
    let { inCart } = this.state
    inCart = inCart.filter(g => g.name !== name)
    let { groceries } = this.state
    groceries.push({name: name, id: groceries.length})
    this.setState ({ inCart, groceries })
  }

  addGroceries = name => {
    const {  groceries } = this.state
    let unique = true
    groceries.forEach((grocery) => {
      if (grocery.name.toLowerCase() === name.toLowerCase()) {
        unique = false
      } 
    })
    if (unique){
      groceries.push({ name: name, id: groceries.length })
      this.setState({ groceries })
    } else {
      alert('That item is already on the list!')
    }
  }

  render() {
    const { groceries } = this.state
    return (
      <div className="App">
        <Header title="Shopping List"/>
        <Items list={groceries} changeGroceries={this.handleChangeGroceries} reputGrocery={this.handleReputGroceries}/>
        <ItemForm addGroceries={this.addGroceries}/>
        <Carts cartsList={ inCart } />
      </div>
    );
  }
}

export default App;
