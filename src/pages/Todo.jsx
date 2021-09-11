import React, { useState, useRef } from 'react'
import Task from '../components/Task'

function Todo() {
    const [todoList, setTodoList] = useState([
        {
            text: "Learn React",
            completed: false,
        },
        {
            text: "Learn PHP",
            completed: true,
        },
    ]);
    const formText = useRef()


    const handleFormSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            text: formText.current.value,
            completed: false
        }
        const tasks = [...todoList, newTask];
        setTodoList(tasks);
        e.currentTarget.reset()
    }
    const deleteTask = (id) => {
        if (window.confirm('Do you want to delete this task?')) {
            const tasks = todoList.filter((_, i) => i !== id)
            setTodoList(tasks)
        }
    }
    const changeStatus = (id) => {
        const tasks = [...todoList];
        tasks[id].completed = !tasks[id].completed
        setTodoList(tasks) 
    }
    return (
        <main className="todo container">
            <h1>TODO</h1>
            <form className="todo__form" onSubmit={handleFormSubmit}>
                <input type="text" ref={formText} />
                <button type="submit">Add</button>
            </form>
            <ul className="todo__tasks">
                {todoList.map(({ id, text, completed }, index) => (
                    <Task
                        key={index}
                        id={index}
                        text={text}
                        completed={completed}
                        changeStatus={changeStatus}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </main>
    )
}

export default Todo
