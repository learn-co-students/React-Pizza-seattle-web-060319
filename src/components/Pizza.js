import React from "react";

const Pizza = ({ pizza, getEditPizza }) => {
  // console.log(props.pizza.vegetarian)
  const handleClick = () => {
    getEditPizza(pizza.id);
  };

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>
        {typeof pizza.vegetarian !== "undefined"
          ? pizza.vegetarian.toString()
          : ""}
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
