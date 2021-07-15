import './App.css';
import Widget from './firstComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
	  <Widget color='blue PROPS!' />
        </p>
      </header>
    </div>
  );
}

export default App;
