import React, { useState } from "react";
import cx from "classnames";
import uncheckImage from "assets/images/checkbox-uncheck.svg";
import checkImage from "assets/images/checkbox-check.svg";

const Tasks = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "Sign a contract with the keynote speaker for the conference",
      completed: true,
    },
    {
      id: 2,
      content: "Send out weekly email updates to the team",
      completed: true,
    },
    {
      id: 3,
      content: "Update the company blog with latest industry news",
      completed: true,
    },
    {
      id: 4,
      content: "Create wireframes for the new product feature",
      completed: false,
    },
    {
      id: 5,
      content: "Review and approve design mockups for the landing page",
      completed: false,
    },
    {
      id: 6,
      content: "Prepare presentation slides for the upcoming investor meeting",
      completed: false,
    },
  ]);

  const toggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="card ">
      <div className="header">
        <h4 className="title">Tasks</h4>
        <p className="category">Backend development</p>
      </div>
      <div className="content">
        <form>
          {todos.map((todo) => (
            <div
              className={cx("todo-item", { completed: todo.completed })}
              key={todo.id}
            >
              <div className="todo-item-wrapper">
                <label
                  className={cx("checkbox", {
                    checked: todo.completed,
                  })}
                >
                  <span className="icons">
                    <img className="first-icon" src={uncheckImage} width={17} />
                    <img className="second-icon" src={checkImage} width={17} />
                  </span>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                </label>
                <div className="todo-content">{todo.content}</div>
                <a onClick={() => deleteTodo(todo.id)}>&times;</a>
              </div>
            </div>
          ))}
        </form>
      </div>
      <div className="footer">
        <hr />
        <div className="stats">
          <i className="fa fa-history"></i> Updated 3 minutes ago
        </div>
      </div>
    </div>
  );
};

export default Tasks;
