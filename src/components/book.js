import React from 'react'
import { deleteBook } from '../actions/delete_book'
import { editBook } from '../actions/edit_book'
import { connect } from 'react-redux'

const Book = props => {
    const editHandler = (status, e) => {
        return fetch('http://localhost:3000/books/' + e.target.id, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                id: e.target.id,
                status: status
            })
        }).then(resp => resp.json())
        .then(book => {
            props.editBook(book)
        })
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
                <button onClick={(e) => editHandler('read', e)} id={props.book.id}>Mark as Read</button> : null}
            {props.status === "to_read" ? 
                <button onClick={(e) => editHandler('reading', e)} id={props.book.id}>Mark as Reading</button> : null}
            <button onClick={deleteHandler} id={props.book.id}>Delete</button>
        </>
    )
}


export default connect(null, { deleteBook, editBook })(Book)