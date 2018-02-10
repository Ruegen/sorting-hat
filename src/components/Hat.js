import React from 'react'
import './Hat.css'
export default function Hat(
    {pickItem, speak}
) {
    return <div className="sorting-hat">
        <button 
            onClick={() => pickItem()} 
            onMouseDown={() => speak()}
            className="sorting-hat-image"
        ></button>
    </div>
}