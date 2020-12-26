export const editBook = (book) => {
    return {
        type: "EDIT_BOOK",
        book: book,
        id: book.id
    }
}