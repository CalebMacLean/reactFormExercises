// Imports
import React, {useState} from "react";

/** NewToDoForm Component
 * 
 * This component should render a form with one text input for the task to be created. When this form is submitted, a new to-do should be created and added to the to-do list.
 * 
 * State:
 * - Task: a string
 * 
 * Props:
 * - addToDo: a function that adds a new to-do to the to-do list
 */
const NewToDoForm = ({addToDo}) => {
    // Set up state
    const INITIAL_STATE = "";
    const [formData, setFormData] = useState(INITIAL_STATE);

    // Handle form submission
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addToDo(formData);
        setFormData(INITIAL_STATE);
    };

    // Render
    return (
        <form className="NewToDoForm"  onSubmit={handleSubmit}>
            <label className="NewToDoForm-label" htmlFor="task">Task:</label>
            <input
                className="NewToDoForm-input"
                type="text"
                name="task"
                value={formData}
                onChange={(evt) => setFormData(evt.target.value)}
            />
            <button className="NewToDoForm-button">Add a new to-do</button>
        </form>
    );
};

export default NewToDoForm;