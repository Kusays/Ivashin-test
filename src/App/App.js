import './App.css';
import { MainBlock } from '../MainBlock';
import { Tags } from '../Tags/Tags'; // TODO почему-то ругается на импорт
import React, {useState} from 'react';

function App() {
  const [tags, setTags] = useState([]);

  return (
    <div className="App">
      <Tags tags={tags} />
      <MainBlock addTag={(tag) => {
        setTags([...new Set([...tags, tag])]);
      }} />
    </div>
  );
}

export default App;
