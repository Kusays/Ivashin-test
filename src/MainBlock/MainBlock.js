import './MainBlock.css';
import { Note } from '../Note/Note.js';
import { useState, useRef, useEffect } from 'react';

export function MainBlock() {
    const [state, setState] = useState([]);
    const inputEl = useRef(null);

    

    return (
        <div className="MainBlock">
            <input
                ref={inputEl}
                onKeyUp={function(event) {
                    if (event.keyCode === 13) {
                        event.preventDefault();
                        setState([...state, inputEl.current.value]);
                    }
                }}
                type="text" />
            <button onClick={() => setState([...state, inputEl.current.value])}>Добавить</button>

            <div className='list'>
                {state.map((item) => (
                    <Note text={item} />
                ))}
            </div>
        </div>
    )
    
};