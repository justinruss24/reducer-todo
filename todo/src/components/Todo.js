import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducers";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, updateNewTodo] = useState("");

  const handleChanges = e => {
    updateNewTodo(e.target.value);
  };

  return (
    <div className="container">
      <div className="todo-page">
        <div className="todo-form">
            <h1>~*Get 'em Done!*~</h1>
          <input
            type="text"
            name="newTodoText"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: newTodo
              })
            }
          >
            Add Item
          </button>
        </div>
        <div className="todo-list">
          <ul>
            {state.map(item => (
              <li>
                <div
                  className={`todo-item ${item.completed ? "done" : ""}`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_COMPLETED",
                      payload: item.id
                    })
                  }
                >
                  {item.item}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() =>
            dispatch({
              type: "CLEAR_DONE"
            })
          }
        >
          Clear Completed Tasks
        </button>
      </div>
    </div>
  );
};

export default Todo;
