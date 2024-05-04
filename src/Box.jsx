// Imports
import React from 'react';

/** Box Component
 * Props:
 * - width: Int that represents the width of the box.
 * - height: Int that represents the height of the box.
 * - backgroundColor: String that represents the background color of the box.
 * - removeBox: Function that removes the box from the BoxList state.
 * 
 * Renders: A div that represents a box with the given width, height, and background color. Div also has a button that removes the box from the BoxList state.
 */
const Box = ({width, height, backgroundColor, id, removeBox}) => {
    return (
        <div 
            className='Box'
            key={id}
            style={{
                width: `${width}px`, 
                height: `${height}px`, 
                backgroundColor: backgroundColor}}>
            <button onClick={removeBox}>X</button>
        </div>
    )
};

// Exports
export default Box;