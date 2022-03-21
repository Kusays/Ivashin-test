import React, { useState } from 'react';

interface INote {
  text: string;
  onDelete: () => void;
  onEdit: (value: string) => void;
}

export const Note = ({ text, onDelete, onEdit }: INote) => {
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
