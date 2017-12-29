import React from 'react';
// import './UserOutput.css';

const userOutput = (props) => {
	return (
	    <div className="UserOutput">
	    <p onClick={props.click}>{props.text}</p>
	    <p>{props.children}</p>
	    </div>   
	)
};

export default userOutput;
