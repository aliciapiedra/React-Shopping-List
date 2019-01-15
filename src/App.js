import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import groceriesList from './data/GroceriesList';
import Items from './components/Items';
import ItemForm from './components/ItemForm';

class App extends Component {
  state = { groceries: groceriesList }

  addGroceries = name => {
    const { players } = this.state
    groceriesList.push({ name: name, id: groceriesList.length })
    this.setState({ groceriesList })
  }

  render() {
    const { groceries } = this.state
    return (
      <div className="App">
        <Header title="Shopping List"/>
        <Items list={groceries}/>
        <ItemForm />
      </div>
    );
  }
}

export default App;
