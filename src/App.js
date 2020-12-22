import './App.css';
import NewBookForm from './components/new_book_form';
import BooksContainer from './containers/books_container'
import { fetchBooks } from './actions/fetch_books'
import { connect } from 'react-redux'

const App = (props) => {
  props.fetchBooks()

  return (
    <div className="App">
      <NewBookForm/>
      <BooksContainer/>
    </div>
  );
}

const mapDispatchToProps = {
  fetchBooks
}

export default connect(null, mapDispatchToProps)(App)
