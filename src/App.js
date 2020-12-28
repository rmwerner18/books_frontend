import './App.css';
import React, { useEffect } from 'react'
import NewBookForm from './components/new_book_form';
import BooksContainer from './containers/books_container'
import { fetchBooks } from './actions/fetch_books'
import { connect } from 'react-redux'


const App = props => {
  useEffect(() => {
    props.fetchBooks()
  })

  return (
    <div className="App">
      <div className='books-container-container'>       
        <BooksContainer status="read"/>          
        <BooksContainer status="reading"/>      
        <BooksContainer status="to_read"/>
      </div>
      <NewBookForm/>
    </div>
  );
}

export default connect(null, { fetchBooks })(App)
