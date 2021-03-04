import React from "react";

const person = (props) => {
    return(
        <div className='person-item'>
            <input onChange={props.myChange} value={props.name}/>
            <p>name: {props.name}</p>
        </div>
    )
}

export default person;