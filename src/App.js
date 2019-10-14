import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
const API = "http://localhost:3000/pizzas";
const defaultPizza = {
  size: 'Smaill'
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      pizza: {
        ...defaultPizza
      }
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          pizzas: data
        });
      });
  };

  getEditPizza = id => {
    const pizza = this.state.pizzas.filter(pizza => id === pizza.id)[0];
    this.setState({
      pizza: pizza
    });
  };

  setVegetarian = e => {
    const val = e.target.value;
    this.setState(prevState => {
      return {
        pizza: {
          ...prevState.pizza,
          vegetarian: val === "true"
        }
      };
    });
  };

  setTopping = e => {
    const val = e.target.value;
    this.setState(prevState => {
      return {
        pizza: {
          ...prevState.pizza,
          topping: val
        }
      };
    });
  };

  setSize = e => {
    const val = e.target.value;
    this.setState(prevState => {
      return {
        pizza: {
          ...prevState.pizza,
          size: val
        }
      };
    });
  };

  compare = (a, b) => {
    const A = a.id;
    const B = b.id;
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchNewPizza();
    let newPizzas1;
    if (this.state.pizza.id) {
      const newPizzas = [
        ...this.state.pizzas.filter(pizza => pizza.id !== this.state.pizza.id),
        this.state.pizza
      ];
      newPizzas1 = newPizzas.sort(this.compare);
    } else {
      newPizzas1 = [...this.state.pizzas, this.state.pizza]
    }
      this.setState({
        pizzas: newPizzas1,
        pizza: {
          ...defaultPizza
        }
      });
  };

  fetchNewPizza = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...this.state.pizza 
      })
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.pizza}
          setVegetarian={this.setVegetarian}
          setTopping={this.setTopping}
          setSize={this.setSize}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          getEditPizza={this.getEditPizza}
        />
      </Fragment>
    );
  }
}

export default App;
