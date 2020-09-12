import React from 'react';
import './App.css';

export default function paragraph(props){
    return(
        <div className="para">
            <h3>{props.header}</h3>
            <p>{props.pelm}</p>
        </div>
    );
}
