import React from 'react';
import './home.css';
import Par from "./components/Paragraph";
import Resp from "./ResponsiveImage";

function App() { 
    return(
        <div className="app">
            <h1>Happy Programming</h1>
            <Par text="lets get started!"/>
            <Resp />
        </div>
    );
}

export default App;
