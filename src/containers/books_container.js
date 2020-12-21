import React from 'react'

const BooksContainer = props => {
    let bookList = () => {
        return props.books.forEach(book => {
            return <h1>{book.name}</h1>
        })
    }

    return bookList()
}

export default BooksContainer