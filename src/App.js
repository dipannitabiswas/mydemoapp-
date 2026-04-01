import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         My first React App with Docker and Jenkins. This is a simple React application that serves as a starting point for learning React and integrating it with Docker and Jenkins for continuous integration and deployment.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Dipannita
        </a>
      </header>
    </div>
  );
}

export default App;
