import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Mis pendientes </p>
      </header>
      <div className='App-input'>
        Entrada
      </div>
      <div className='App-array'>
        Array
      </div>
    </div>
  );
}

export default App;
