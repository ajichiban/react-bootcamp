
import './App.css';
import { Message } from './components/Message';

function App() {

  const variable = 'hola desde variable'

  return (
    <div className="App">
      <h2>{variable}</h2>
      <Message />
    </div>
  );
}

export default App;
