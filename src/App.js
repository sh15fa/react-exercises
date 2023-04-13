import React from 'react';
import './Style.css';

// don't change the Component name "App"
export default function App() {
    const [isClicked,setIsClicked]=React.useState(false);
    const clichHandler=()=>{
        setIsClicked((prev)=>!prev);
    }
    return (
        <div>
            <p style={{color: isClicked ? "red":"white"}}>Style me!</p>
            <button onClick={clichHandler}>Toggle style</button>
        </div>
    );
}
