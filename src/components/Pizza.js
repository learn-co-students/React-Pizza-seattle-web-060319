import React from "react"

const Pizza = ({ pie, handleEditPizza }) => {

  return (
    <tr>
      <td>{pie.topping}</td>
      <td>{pie.size}</td>
      <td>{pie.vegetarian && "Yes!"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleEditPizza(pie)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza
