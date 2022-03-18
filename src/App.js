import logo from './logo.svg';
import './App.css';
import ElementOfList from './ElementOfList/index.js';
import Block from './UI/GlobalBlock';
import Tags from './UI/TagBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ElementOfList />
        <Block />
      </header>
    </div>
  );
}

export default App;
