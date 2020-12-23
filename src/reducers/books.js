const booksReducer = (state = {books: []}, action) => {
    switch (action.type) {
        case 'ADD_BOOK': 
            return {books: [...state.books, action.book]}
        case "SET_BOOKS":
            return {books: action.books}
        case "DELETE_BOOK":
            let i = state.books.findIndex(book => book.id === action.id)
            return {books: [...state.books.slice(0, i), ...state.books.slice(i+1)]}
        default:
            return state
    }
}

export default booksReducer