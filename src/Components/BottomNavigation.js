import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./BottomNavigation.module.css";

function BottomNavigation() {
  const [add, setAdd] = useState({ className: style.bnItemOn });
  const [todoList, setTodoList] = useState({ className: style.bnItemOff });

  const NavColor = (routeName) => {
    switch (routeName) {
      case "add-todo":
        setAdd({ className: style.bnItemOn });
        setTodoList({ className: style.bnItemOff });
        break;
      case "todo-list":
        setAdd({ className: style.bnItemOff });
        setTodoList({ className: style.bnItemOn });
        break;

      default:
        break;
    }
  };

  const location = useLocation();
  
  useEffect(() => {
    NavColor(location.pathname.replace("/",""))
  }, [location.pathname]);
  return (
    <div className={style.wrapper}>
      <Link to="./add-todo" className={add.className}>
        <span>اضافه کردن</span>
      </Link>
      <Link to="./todo-list" className={todoList.className}>
        <span>لیست کارها</span>
      </Link>
    </div>
  );
}

export default BottomNavigation;
