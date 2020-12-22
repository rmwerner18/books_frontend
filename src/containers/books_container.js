import React from 'react'
import Book from '../components/book'
import { connect } from 'react-redux'
import { addBook } from '../actions/add_book'


const BooksContainer = props => {


    let bookList = () => {
        let filteredBooks = props.books.filter(book => book.status === props.status)
        return filteredBooks.map(book => <Book key={book.id} book={book} status={props.status}/>)
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