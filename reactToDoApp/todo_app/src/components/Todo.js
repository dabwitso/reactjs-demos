import React from "react";
import "../App.css";

const Todo=({task})=>{
    return(
        <div className="todos">
            <p>{task}</p>
        </div>
    );
}

export default Todo;
