import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>{props.children}</p>
            <input type="text"/>
        </div>
    )
};

export default userInput;