import React, { Component } from 'react';

class ItemForm extends Component {
    state = { name: ''}
    handleNameChange = event => {
        let { name } = this.state
        name = event.target.value
        this.setState({ name })
    }

    handleSubmit = event => {
        const { name } = this.state
        event.preventDefault()
        this.props.addGroceries( name )
    }
    render() {
        const { name } = this.state
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Grocery Name" value={name} onChange={this.handleNameChange} />
                <input type="submit" value="Add Grocery" />
            </form>
        )
    }
}

export default ItemForm 