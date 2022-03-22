import "./MainBlock.scss";
import { Note } from "../Note/Note";
import React, { useRef } from "react";
import { LoadButton } from "../LoadButton";
import { SaveButton } from "../SaveButton";

interface IMainBlock {
  list: string[];
  addElement: (value: string) => void;
  removeElement: (index: number) => void;
  editElement: (index: number, newValue: string) => void;
  loadJson: (obj: string) => void;
}

export const MainBlock = ({
  list,
  addElement,
  removeElement,
  editElement,
  loadJson,
}: IMainBlock) => {
  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <div className="MainBlock">
      <LoadButton loadJson={loadJson} />
      <SaveButton fileText={JSON.stringify(list)} />
      <div>
        <h1>Add a task</h1>
      </div>
      <input
        className="input"
        ref={inputEl}
        onKeyUp={(event) => {
          if (event.keyCode === 13 && inputEl.current !== null) {
            event.preventDefault();
            addElement(inputEl.current.value);

            inputEl.current.value = "";
          }
        }}
        type="text"
      />

      <button
        onClick={() => {
          if (inputEl.current !== null) {
            addElement(inputEl.current.value);
          }
        }}
      >
        Add
      </button>

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
};
