const booksReducer = (state = {books: []}, action) => {
    let i = state.books.findIndex(book => book.id === action.id)
    switch (action.type) {
        case 'ADD_BOOK': 
            return {books: [...state.books, action.book]}
        case "SET_BOOKS":
            return {books: action.books}
        case "EDIT_BOOK":
            return {books: [...state.books.slice(0, i), action.book, ...state.books.slice(i+1)]}
        case "DELETE_BOOK":
            return {books: [...state.books.slice(0, i), ...state.books.slice(i+1)]}
        default:
            return state
    }
}

export default booksReducer