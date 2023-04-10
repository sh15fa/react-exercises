import React,{useState} from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    const [count,setCount]=useState(100);
    const clicked=()=>{
        setCount(75);
    }
    return (
        <div>
            <p>${count}</p>
            <button onClick={clicked}>Apply Discount</button>
        </div>
    );
}