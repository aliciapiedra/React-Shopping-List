import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import groceriesList from './data/GroceriesList';
import Items from './components/Items';
import ItemForm from './components/ItemForm';


class App extends Component {
  state = { groceryList: groceriesList }

  handleChange = id => {
    const { groceryList } = this.state;
    groceryList[id].inCart = !groceryList[id].inCart
    this.setState({ groceryList })
  }

  addGroceries = name => {
    const {  groceryList } = this.state
    let unique = true
    groceryList.forEach((grocery) => {
      if (grocery.name.toLowerCase() === name.toLowerCase()) {
        unique = false
      } 
    })
    if (unique){
      groceryList.push({ name: name, id: groceryList.length })
      this.setState({ groceryList })
    } else {
      alert('That item is already on the list!')
    }
  }

  render() {
    const { groceryList } = this.state
    const needToBuy = groceryList.filter(item => !item.inCart)
    const inCart = groceryList.filter(item => item.inCart)
    return (
      <div className="App">
        <Header title="Shopping List"/>
        <Items needToBuy={needToBuy} inCart={inCart} handleChange={this.handleChange}/>
        <ItemForm addGroceries={this.addGroceries}/>
      </div>
    );
  }
}

export default App;
