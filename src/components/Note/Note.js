import React, { useState } from 'react';

export function Note({ text, onDelete, onEdit }) {
  const [isEdit, setState] = useState(false);

  return (
    <div>
      {isEdit ? (
        <input
          defaultValue={text}
          onChange={(event) => onEdit(event.target.value)}
          onKeyUp={function (event) {
            if (event.keyCode === 13) {
              event.preventDefault();
              setState(!isEdit);
            }
          }}
        />
      ) : (
        text
      )}
      <button onClick={onDelete}>X</button>
      <button
        onClick={() => {
          setState(!isEdit);
        }}
      >
        ✎
      </button>
    </div>
  );
}
