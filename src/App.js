import './App.css';
import SearchEngine from "./SearchEngine";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <h1>Dictionary</h1>
      <main>
        <div className="search">
     <SearchEngine defaultKeyword="serendipity"/>
     </div>
     </main>
     <footer><a href="https://github.com/CorinnaGen/dictionary-app">Look at me!</a></footer>
    </div></div>
  );
}

export default App;
