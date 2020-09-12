import React from 'react';
import '../Paragraph.css';
const Paragraph=({text})=>{
    return(
        <div className='paragraph'>
            <p style={{fontSize:"2vw"}}>{text}</p>
        </div>
    );
}

export default Paragraph;
