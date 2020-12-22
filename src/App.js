import './App.css';
import React from 'react'
import NewBookForm from './components/new_book_form';
import BooksContainer from './containers/books_container'
import { fetchBooks } from './actions/fetch_books'
import { connect } from 'react-redux'


class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchBooks()
  }

  render() {
    return (
      <div className="App">
        <NewBookForm/>
        <h3>Read:</h3>
        <BooksContainer status="read"/>
        <h3>Reading:</h3>
        <BooksContainer status="reading"/>
        <h3>To Read:</h3>
        <BooksContainer status="to_read"/>
      </div>
    );
  }
}

export default connect(null, { fetchBooks })(App)
