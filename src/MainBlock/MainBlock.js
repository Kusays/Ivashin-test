import './MainBlock.css';
import { Note } from '../Note/Note.js';
import React, { useState, useRef, useEffect } from 'react';

export function MainBlock() {
  const [state, setState] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    const list = localStorage.getItem('list');

    if (list) {
      setState(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state));
  }, [state]);

  return (
    <div className="MainBlock">
      <div>
        <h1>Add a task</h1>
      </div>
      <input
        className="input"
        ref={inputEl}
        onKeyUp={function (event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            setState([...state, inputEl.current.value]);
          }
        }}
        type="text"
      />
      <button onClick={() => setState([...state, inputEl.current.value])}>
        Add
      </button>

      <div>
        <h1>Task list</h1>
      </div>

      <div className="list">
        {state.map((item, i) => (
          <Note
            key={i}
            text={item}
            onDelete={() => {
              setState(state.filter((_, itemI) => itemI !== i));
            }}
            onEdit={(value) => {
              setState(
                state.map((item, itemI) => {
                  if (itemI === i) {
                    return value;
                  } else {
                    return item;
                  }
                })
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}
