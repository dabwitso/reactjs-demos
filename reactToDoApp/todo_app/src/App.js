import React, { useState, useEffect } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import { db } from "./firebase";

export default function App(){
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    //useEffect(function, dependencies);
    useEffect(()=>{
        db.collection('todos').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => doc.data().title))
        })
    }, []);



    return(
        <div className="app">
            <h1>To-do App</h1>
            <form>
                <input placeholder="Enter task" value={input} onChange={e=>setInput(e.target.value)}/>
                <button disabled={!input} onClick={e=>{
                    e.preventDefault();
                    db.collection('todos').add({title:input})
                    setInput("");
                    }
                }>Add Task</button>
            </form>
        {
            todos.map((data, i)=>(<Todo task={data} key={i}/>))
        }


        </div>
    );
}
