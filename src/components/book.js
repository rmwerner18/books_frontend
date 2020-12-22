import React from 'react'

const Book = props => {
    const markAsReadHandler = (e) => {
        console.log(e.target.id)
    }
    
    const markAsReadingHandler = (e) => {
        console.log(e.target.id)
    }

    const deleteHandler = (e) => {
        console.log(e.target.id)
    }

    return (
        <>
            <p>{props.book.title} {props.book.author}</p>
            {props.status === "reading" || props.status === "to_read" ? 
                <button onClick={markAsReadHandler} id={props.book.id}>Mark as Read</button> : null}
            {props.status === "to_read" ? 
                <button onClick={markAsReadingHandler} id={props.book.id}>Mark as Reading</button> : null}
            <button onClick={deleteHandler} id={props.book.id}>Delete</button>
        </>
    )
}

export default Book