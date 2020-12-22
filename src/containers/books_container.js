import React from 'react'
import Book from '../components/book'
import { connect } from 'react-redux'
import { addBook } from '../actions/add_book'


const BooksContainer = props => {


    let bookList = () => {
        return props.books.map(book => <Book title={book.title}/>)
    }

    return (
        <ul>
            {bookList()}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {books: state.books}
}

export default connect(mapStateToProps, { addBook })(BooksContainer)