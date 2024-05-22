import React, { memo } from "react";
import "./to-do.scss";

const TodosCreate = ({ updateTodos, formData, getValue, createTodos }) => {
  const handleCreateTodos = (e) => {
    e.preventDefault();
    if (formData.id) {
      // update
      updateTodos(formData);
    } else {
      // create
      let date = new Date();
      formData.id = date.getTime();
      formData.time = `${date.getHours()}:${date.getMinutes()}`;
      createTodos(formData);
    }
  };
  return (
    <form className="to-do__create__form" onSubmit={handleCreateTodos}>
      <h2 className="to-do__create__title">Todos Create</h2>
      <label className="to-do__create__label" htmlFor="txt">
        Is it Date
      </label>
      <input
        className="to-do__create__input"
        value={formData.text}
        onChange={(e) => getValue({ text: e.target.value })}
        type="text"
        id="txt"
      />
      <label className="to-do__create__label" htmlFor="nmb">
        Person
      </label>
      <input
        className="to-do__create__input"
        value={formData.price}
        onChange={(e) => getValue({ price: e.target.value })}
        type="text"
        id="nmb"
      />
      <label className="to-do__create__label" htmlFor="nmb">
        Choose
      </label>
      <select
        className="to-do__create__select"
        value={formData.status}
        onChange={(e) => getValue({ status: e.target.value })}
        required
      >
        <option value="" selected disabled hidden>
          Choose on of this
        </option>
        <option selected value="important">
          important
        </option>
        <option value="avarage">average</option>
        <option value="normal">normal</option>
      </select>
      <button className="to-do__create__btn">
        {formData.id ? "Save" : "Create"}
      </button>
    </form>
  );
};

export default memo(TodosCreate);
