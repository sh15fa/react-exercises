import React,{useState} from 'react';

// don't change the Component name "App"
export default function App() {
    let [dialog,setDialog] = useState(false);
    const showDialog = ()=>
    {
        setDialog(true);
    }
    
    const disableDialog = ()=>
    {
        setDialog(false);
    }
    
    
    return (
      <div>
        {dialog ?<div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={disableDialog}>Proceed</button>
        </div> :<p></p>}
        <button onClick={showDialog}>Delete</button>
      </div>    
    );
}