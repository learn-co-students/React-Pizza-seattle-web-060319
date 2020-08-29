import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    topping: "",
    size: "",
    vegetarian: false,
    id: null,
    pizzas: []
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state} handleToppingChange={this.handleToppingChange} handleSizeChange={this.handleSizeChange} handleVegetarianChange={this.handleVegetarianChange} handleSubmit={this.handleSubmit}/>
        {this.state.pizzas.length === 0 ? this.fetchPizzas() : <PizzaList pizza={this.state} handleEdit={this.handleEdit}/>}
      </Fragment>
    );
  }

  fetchPizzas = () => {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(data => this.handlePizzas(data))
  }

  handlePizzas = (data) => {
    this.setState({
      pizzas: [...this.state.pizzas, ...data]
    })
    return <PizzaList pizza={this.state} handleEdit={this.handleEdit}/>
  }

  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  handleToppingChange = (e) => {
    this.setState({
      topping: e.target.value
    })
  }

  handleVegetarianChange = (e) => {
    let status = false
    if(e.target.value === "Vegetarian"){
      status = true
    }
    this.setState({
      vegetarian: status
    })
  } 

  handleSubmit = () => {
    if(this.state.pizzas.find((pizza) => pizza.id === this.state.id)){
      this.pizzaPatch()
    }
    else{
      this.newPizza()
    }
  }

  handleEdit = (e) => {
    let index = null
    let targetPizza = this.state.pizzas.find((pizza, i) => {
      index = i
      return pizza.id == e.target.id
    })
    this.setState({
      topping: targetPizza.topping,
      size: targetPizza.size,
      vegetarian: targetPizza.vegetarian,
      id: targetPizza.id
    })
  }

  pizzaPatch = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian,
        id: this.state.id
      })
    })
    .then(res => res.json())
    .then(data => {
      let index = null
      let targetPizza = this.state.pizzas.find((pizza, i) => {
        index = i
        return pizza.id == this.state.id
      })
      let newArray = [...this.state.pizzas]
      newArray[index] = data
      this.setState({
        topping: "",
        size: "",
        vegetarian: false, 
        id: null,
        pizzas: [...newArray]
      })
    }
    )
  }
  newPizza = () => {
    fetch(`http://localhost:3000/pizzas`, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian,
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        topping: "",
        size: "",
        id: null,
        vegetarian: false,
        pizzas: [...this.state.pizzas, data]
      })
    })
  }
}

export default App;
