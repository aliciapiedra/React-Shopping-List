import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import groceriesList from './data/GroceriesList';
import Items from './components/Items';
import ItemForm from './components/ItemForm';

class App extends Component {
  state = { groceries: groceriesList }

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
        <Items list={groceries}/>
        <ItemForm addGroceries={this.addGroceries}/>
      </div>
    );
  }
}

export default App;
