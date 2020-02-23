import React, { createContext, useState } from 'react'
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: 'Read the book', id: 1},
        {title: 'Wash the car', id: 2},
        {title: 'Write some code', id: 3},
    ])


    const addTask = (title) => {
        setTasks([
            ...tasks,
            {title, id: uuid()}
        ])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const clearList = () => {
        setTasks([]);
    }

    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList }}>
            {props.children}
        </TaskListContext.Provider>
    )
};


export default TaskContextProvider;