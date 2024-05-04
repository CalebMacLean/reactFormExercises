// Imports
import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

/** BoxList Component 
 * 
 * Props:
 * State:
 * - boxes: An array of objects that represent boxes
 * Renders: All box components and the NewBoxForm component
*/
const BoxList = () => {
    const [boxes, setBoxes] = useState([{id: uuid(), width: 100, height: 100, backgroundColor: 'red'}]);
    console.log("boxes: ",boxes);

    function addBox(box) {
        setBoxes(boxes => [...boxes, {...box, id: uuid()}]);
    };

    function removeBox(id) {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div className='BoxList'>
            <div className='BoxList-boxes'>
                {boxes.map(box => (
                    <Box
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={() => removeBox(box.id)}
                    />
                ))}
            </div>
            <div className='BoxList-form'>
                <NewBoxForm addBox={addBox} />
            </div>
        </div>
    )
};

// Exports
export default BoxList;