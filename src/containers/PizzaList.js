import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.mapPizzas()}
        </tbody>
      </table>
    );
  }

mapPizzas = () => {
  return this.props.pizza.pizzas.map((p) => {
    return <Pizza pizza={p} handleEdit={this.props.handleEdit} key={p.id}/>
  })
}

}

export default PizzaList;
