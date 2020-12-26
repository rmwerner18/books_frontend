import React from 'react'
import { deleteBook } from '../actions/delete_book'
import { editBook } from '../actions/edit_book'
import { connect } from 'react-redux'

const Book = props => {
    const markAsReadHandler = (e) => {
        return fetch('http://localhost:3000/books/' + e.target.id, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                id: e.target.id,
                status: 'read'
            })
        }).then(resp => resp.json())
        .then(book => {
            props.editBook(book)
        })
    }
    
    const markAsReadingHandler = (e) => {
        console.log(e.target.id)
    }

    const deleteHandler = (e) => {
        return fetch('http://localhost:3000/books/' + e.target.id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({id: e.target.id})
        }).then(resp => resp.json())
        .then(id => props.deleteBook(id)) 
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


export default connect(null, { deleteBook, editBook })(Book)