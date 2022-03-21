import "./App.css";
import { MainBlock } from "../MainBlock";
import { Tags } from "../Tags/Tags"; // TODO почему-то ругается на импорт
import React from "react";
import { useList } from "../../hooks";

export const App = () => {
  const { list, tags, addElement, removeElement, editElement } = useList();

  return (
    <div className="App">
      <Tags tags={tags} />
      <MainBlock
        list={list}
        removeElement={removeElement}
        addElement={addElement}
        editElement={editElement}
      />
    </div>
  );
};
