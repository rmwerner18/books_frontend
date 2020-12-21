import './App.css';
import NewBookForm from './components/new_book_form';
import BooksContainer from './containers/books_container'
// import { Provider } from 'react-redux'
// import store from './store'

function App() {

  const makeCall = () => {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(console.log)
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(console.log)
  }

  return (
    <div className="App">
      <NewBookForm/>
      <BooksContainer books={[{name: 'book1'}, {name: 'book2'}]}/>
      <button onClick={makeCall}>clik here</button>
    </div>
  );
}

export default App;
