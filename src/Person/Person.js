import React from 'react';

const person = (props) => {
	return  (
        <div>
	        <p>I am {props.name}, I am {props.age} year old person</p>
	        <p>{props.children}</p>
	    </div>
    )
};

export default person;