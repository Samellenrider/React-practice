import React from 'react';
import './Person.css';

const person = (props) => {
	return (
        <div className="Person">
	        <p onClick={props.click}>I am {props.name}, I am a {props.age} year old person</p>
	        <p>{props.children}</p>
	        <input type="text" onChange={props.changed} value={props.name} />
	        <input type="text" onChange={props.change} value={props.age} />
	    </div>
    )
};

export default person;