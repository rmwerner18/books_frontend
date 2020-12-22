const setBooks = (books) => {
    return {
        type: "SET_BOOKS",
        books: books
    }
}

export const fetchBooks = () => dispatch => {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(books => dispatch(setBooks(books)))
}