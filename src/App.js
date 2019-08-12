import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

URL = 'http://localhost:3001/pizzas'

class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      editPie: {}
    }
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  fetchPizzas = () => {
    return fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        let newState = { pizzas: data }
        this.setState(newState)
      })
  }

  handleEditPizza = (pie) => {
    this.setState({ editPie: pie })
  }

  handleUpdatePizza = (e) => {
    e.persist()
    this.setState(prevState => {
      let oldPie = prevState.editPie
      if (e.target.name === 'vegetarian') {
        e.target.value === 'Vegetarian'
          ? oldPie[e.target.name] = true
          : oldPie[e.target.name] = false
      } else {
        oldPie[e.target.name] = e.target.value
      }
      return oldPie
    })
  }

  handleSubmitPizza = () => {
    console.log('save my pizzah', this.state.editPie)
    return fetch(URL + `/${this.state.editPie.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.editPie)
    })
      .then(resp => resp.json())
      .then(data => console.log('submit done', data))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          editPie={this.state.editPie}
          handleUpdatePizza={this.handleUpdatePizza}
          handleSubmitPizza={this.handleSubmitPizza} />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditPizza={this.handleEditPizza}
        />
      </Fragment>
    );
  }
}

export default App;
