const booksReducer = (state = {books: []}, action) => {
    switch (action.type) {
        case 'ADD_BOOK': 
            return {books: [...state.books, action.book]}
        default:
            return state
    }
}

export default booksReducer