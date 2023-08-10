import React from 'react';
import BottomNavigation from "./Components/BottomNavigation"
import style from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

function App() {
    return (
        <main>
            <BottomNavigation/>
            <Routes>
                <Route path='/add-todo' element={<AddTodo/>}/>
                <Route path='/todo-list' element={<TodoList/>}/>
                <Route path='/' element={<Navigate to="/add-todo"/>}/>
            </Routes>

        </main>
    );
}

export default App