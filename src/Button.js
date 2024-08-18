import React, { useState } from 'react';

const Button = () => { 
    const [clicks, setClicks] = useState(0);

    const handleAddClick = () => { 
        setClicks(clicks + 1); 
    };

    const handleSubtractClick = () => {
        if (clicks > 0) {
            setClicks(clicks - 1);
        }
    };

    return ( 
        <div> 
            <button onClick={handleAddClick}>Add</button>
            <button onClick={handleSubtractClick}>Subtract</button>
            <p>Total: {clicks}</p> 
        </div>
    );
}; 

export default Button;