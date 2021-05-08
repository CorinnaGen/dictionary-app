import './App.css';
import SearchEngine from "./SearchEngine";


function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
      </header>
      <h1>Dictionary</h1>
      <main>
     <SearchEngine defaultKeyword="fahrenheit"/></main>
     <br></br>
     <footer><a href="https://github.com/CorinnaGen/dictionary-app">Look at me!</a>I appreciate advice and suggestions</footer>
    </div></div>
  );
}

export default App;
