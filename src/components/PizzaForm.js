import React from "react"

const PizzaForm = ({ editPie, handleUpdatePizza, handleSubmitPizza }) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          name='topping'
          className="form-control"
          placeholder="Pizza Topping"
          value={editPie.topping}
          onChange={(e) => handleUpdatePizza(e)} />
      </div>
      <div className="col">
        <select
          value={editPie.size}
          name="size"
          className="form-control"
          onChange={(e) => handleUpdatePizza(e)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            name="vegetarian"
            checked={editPie.vegetarian}
            onChange={(e) => handleUpdatePizza(e)} />
          <label className="form-check-label">
            Vegetarian
            </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            name="vegetarian"
            checked={!editPie.vegetarian} onChange={(e) => handleUpdatePizza(e)} />
          <label className="form-check-label">
            Not Vegetarian
            </label>
        </div>
      </div>

      <div className="col">
        <button type="submit" className="btn btn-success" onClick={handleSubmitPizza}>Submit</button>
      </div>
    </div>

  )
}

export default PizzaForm
