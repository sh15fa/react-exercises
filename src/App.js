import React, {useState} from 'react';

// don't change the Component name "App"
export default function App() {
    const [isClicked,setIsClicked] = useState(false);
    const clickHandler = ()=>{
        setIsClicked(prev=>!prev)
    }
    return (
        <div>
            <p className={`${isClicked?'active':''}`}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
