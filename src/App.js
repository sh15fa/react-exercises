import React from 'react';

import Todo from './Todo';
import './Style.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
        <ul>
          {DUMMY_TODOS.map(e=><Todo text={e}/>)}
        </ul>
    );
}
