import './App.css';
import { BookList } from './BookList';
import { MyBadge } from './MyBadge';
import scifiBooks from './scifi.json';
import { SingleBook } from './SingleBook';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MyBadge text="Testo Badge" color="primary"></MyBadge>
      <SingleBook book={scifiBooks[0]}></SingleBook>
      <BookList books={scifiBooks}></BookList>
    </div>
  );
}

export default App;
