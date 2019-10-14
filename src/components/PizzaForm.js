import React from "react";

const PizzaForm = ({
  pizza: { topping = "", size, vegetarian },
  setVegetarian,
  setTopping,
  setSize,
  handleSubmit
}) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={topping}
          onChange={setTopping}
        />
      </div>
      <div className="col">
        <select value={size} className="form-control" onChange={setSize}>
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
            value={true}
            checked={vegetarian === true}
            onChange={setVegetarian}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={false}
            checked={vegetarian === false}
            onChange={setVegetarian}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
