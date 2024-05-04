// Imports
import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

/** NewBoxForm Component
 * This component renders a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When
 * the form is submitted, clear the input values.
 * 
 * Props:
 * - addBox: Function that adds a new box to the BoxList state.
 * 
 * State:
 * - formData: Object that represents the form data.
 */

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {width: '', height: '', backgroundColor: ''};
    const [formData, setFormData] = useState(INITIAL_STATE);
    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        formData.id = uuid();
        addBox(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form className='NewBoxForm' onSubmit={handleSubmit}>
            <label htmlFor='width'>Width:</label>
            <input 
                id='width'
                name='width'
                type='text'
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor='height'>Height:</label>
            <input 
                id='height'
                name='height'
                type='text'
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor='backgroundColor'>Background Color:</label>
            <input 
                id='backgroundColor'
                name='backgroundColor'
                type='text'
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button>Add a new box!</button>
        </form>
    )
};

// Exports
export default NewBoxForm;