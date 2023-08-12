import React from "react";
import emptyList from "../assets/img/empty-todo.png";
import { Link } from "react-router-dom";
import style from './TodoList.module.css'

function TodoList() {
  const todos = [];
  return (
    <>
      {todos.length ? (
        console.log("ok")
      ) : (
        <div className={style.todoEmpty}>
          <img src={emptyList} />
          <p>لیست کارهات خالیه دوست من</p>
          <Link to="/add-todo">
            <button>اضافه کردن کار جدید</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default TodoList;
