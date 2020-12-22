const booksReducer = (state = {books: []}, action) => {
    switch (action.type) {
        case 'ADD_BOOK': 
            return {books: [...state.books, action.book]}
        case "SET_BOOKS":
            return {books: action.books}
        default:
            return state
    }
}

export default booksReducer