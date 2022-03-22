import React, { useState } from "react";
import "./Note.css";

interface INote {
  text: string;
  onDelete: () => void;
  onEdit: (value: string) => void;
}

const splitTag = (text: string) =>
  text.split(" ").map((item, i) =>
    item[0] == "#" ? (
      <span key={i} className="colorTegsInList">
        {item}{" "}
      </span>
    ) : (
      <span key={i}>{item} </span>
    )
  );

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
        splitTag(text)
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
};
