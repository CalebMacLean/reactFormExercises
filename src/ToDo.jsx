// Imports
import React from 'react';

/** ToDo Component
 * 
 * This component should render a div with the task of the todo.
 * 
 * State:
 * - None
 * 
 * Props:
 * - task: a string
 * - removeToDo: a function that removes a to-do from the to-do list
 * - id: a unique identifier for the to-do
 */
const ToDo = ({task, id, removeToDo}) => {
    // Handle click
    const handleClick = () => {
        removeToDo(id);
    };

    return (
        <div 
            className='ToDo' 
            key={id}>
                {task}
                
                <button 
                onClick={handleClick}
                className='ToDo-button'>X</button>
        </div>
    );
};

export default ToDo;