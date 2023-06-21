import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    const truck0 = 'what to learn 1'
    const truck1 = 'what to learn 2'
    const truck2 = 100200
    const truck3 = true

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 3, title: "ReactJS", isDone: false},
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    return (
        <div className = "App">

            <Todolist truck = {truck0} truck2 = {truck2} tasks = {tasks1} />
            <Todolist truck = {truck1} truck3 = {truck3} tasks = {tasks2} />
            <Todolist truck = {truck1} truck3 = {truck3} tasks = {tasks2} />

        </div>
    );
}

export default App;
