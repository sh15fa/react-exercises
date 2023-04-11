import React,{useState} from 'react';

import './Style.css';

// don't change the Component name "App"
export default function App() {
    const[enteredVal,setMsg]=useState("Invalid");
    const showMsg=(event)=>{
        
            if(event.target.value.trim().length>=3){
            setMsg("Valid");
        }
    };
    return (
        <form>
        <label class="label">Your message</label>
        <input type="text" class="input" onChange={showMsg}  />
        <p>{enteredVal} message</p>
    </form>
    );
}