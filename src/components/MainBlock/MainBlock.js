import './MainBlock.css';
import { Note } from '../Note/Note.js';
import React, { useRef } from 'react';

export function MainBlock({ list, addElement, removeElement, editElement }) {
  const inputEl = useRef(null);

  return (
    <div className="MainBlock">
      <div>
        <h1>Add a task</h1>
      </div>
      <input
        className="input"
        ref={inputEl}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            event.preventDefault();
            addElement(inputEl.current.value);
          }
        }}
        type="text"
      />

      <button onClick={() => addElement(inputEl.current.value)}>Add</button>

      <div>
        <h1>Task list</h1>
      </div>

      <div className="list">
        {list.map((item, i) => (
          <Note
            key={i}
            text={item}
            onDelete={() => {
              removeElement(i);
            }}
            onEdit={(value) => {
              editElement(i, value);
            }}
          />
        ))}
      </div>
    </div>
  );
}
