import './App.css';
import { MainBlock } from '../MainBlock';
import { Tags } from '../Tags/Tags'; // TODO почему-то ругается на импорт

function App() {
  return (
    <div className="App">
      <Tags />
      <MainBlock />
    </div>
  );
}

export default App;
