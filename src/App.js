import React,{useState} from 'react';

import './Style.css';

// don't change the Component name "App"
export default function App() {
    const [counter,incCounter]=useState(0);
    const Increment=()=>{
        incCounter((prevCounter)=>{
            return prevCounter+1;
        })
    };
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={Increment}t>Increment</button>
      </div>
    );
}
