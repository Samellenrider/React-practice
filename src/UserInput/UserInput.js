import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.text}/>
        </div>
    )
};
 
export default userInput;