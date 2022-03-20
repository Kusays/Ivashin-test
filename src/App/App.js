import './App.css';
import { MainBlock } from '../MainBlock';
import { Tags } from '../Tags/Tags'; // TODO почему-то ругается на импорт
import React from 'react';
import { useLocalState } from '../useLocalState';
import { extractTag } from '../extractTag';

const removeDuplicates = (arr) => [...new Set([...arr])];

const useList = () => {
  const [list, setList] = useLocalState('list', []);

  const tags = removeDuplicates(
    list.map(extractTag).filter((tag) => tag !== undefined)
  );

  const addElement = (value) => setList([...list, value]);

  const removeElement = (i) => setList(list.filter((_, itemI) => itemI !== i));

  const editElement = (i, value) =>
    setList(list.map((item, itemI) => (itemI === i ? value : item)));

  console.log(list);

  return [list, tags, addElement, removeElement, editElement];
};

function App() {
  const [list, tags, addElement, removeElement, editElement] = useList();

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
}

export default App;
