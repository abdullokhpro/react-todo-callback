import React, { memo, useMemo } from "react";
import "./to-do.scss";

const TodosManage = ({ data, deleteTodos, updateValus }) => {
  console.log(data);

  let total = useMemo(() => {
    return data.length;
  }, []);
  let todosItems = data?.map((el) => (
    <li className="to-do__manage__item" key={el.id}>
      <div className="to-do__manage__spans">
        <span>{el.price}</span>
        <span>{el.text}</span>
        <span>{el.status}</span>
      </div>

      <div className="to-do__manage__btns">
        <div className="to-do__manage__time">
          <p>time:</p>
          <p>{el.time}</p>
        </div>
        <button className="to-do__manage__edit" onClick={() => updateValus(el)}>
          edit
        </button>
        <button
          className="to-do__manage__delete"
          onClick={() => deleteTodos(el.id)}
        >
          delete
        </button>
      </div>
    </li>
  ));
  return (
    <div className="to-do__manage">
      <h2 className="to-do__manage__title">TodosManage {total}</h2>
      <ul className="to-do__manage__list">{todosItems}</ul>
    </div>
  );
};

export default memo(TodosManage);

let initialState = {
  id: null,
  title: "uchrashuv",
  text: "laylo gul",
  status: "juda muhim", // ["muhim", "shart emas", ]
  time: "",
};
