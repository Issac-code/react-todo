import React from "react";
import emptyList from "../assets/img/empty-todo.png";
import { Link } from "react-router-dom";

function TodoList() {
  const todos = [];
  return (
    <div>
      {todos.length ? (
        console.log("ok")
      ) : (
        <div>
          <img src={emptyList} />
          <p>لیست کارهات خالیه دوست من</p>
          <Link to="/add-todo">
            <button>اضافه کردن کار جدید</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TodoList;
