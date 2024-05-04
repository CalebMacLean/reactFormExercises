// Imports
import React, {useState} from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuid } from "uuid";

/** ToDoList Component
 * 
 * State:
 * - toDos: an array of objects with id and task properties
 * 
 * Props:
 * - None
 * 
 * Renders:
 * - NewToDoForm Component
 * - A list of ToDo components
 */
const ToDoList = () => {
    // Set up state
    const [toDos, setToDos] = React.useState([]);

    // Add a new to-do function to be passed down to NewToDoForm
    const addToDo = (task) => {
        const id = uuid();
        console.log("ID", id);
        setToDos(toDos => [...toDos, { id, task }]);
        console.log("ToDos", toDos);
    };

    // Remove a to-do function to be passed down to ToDo
    const removeToDo = (id) => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    };

    // Render
    return (
        <div className="ToDoList">
            <NewToDoForm addToDo={addToDo} />
            {toDos.map(toDo => (
                <ToDo id={toDo.id} task={toDo.task} removeToDo={removeToDo}/>
            ))}
        </div>
    );
};

export default ToDoList;