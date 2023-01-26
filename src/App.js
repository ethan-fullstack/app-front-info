import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Make private repo docker, using credentials</p>
        <a
          className="App-link"
          href="https://allianzsoft.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.allianzsoft.com
        </a>
      </header>
    </div>
  );
}

export default App;
