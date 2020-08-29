import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian === true ? "True" : "False"}</td>
      <td><button id={props.pizza.id} type="button" onClick={props.handleEdit} className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
