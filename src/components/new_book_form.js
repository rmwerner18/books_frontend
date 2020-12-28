import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addBook } from '../actions/add_book'

const NewBookForm = props => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [status, setStatus] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({title: title, author: author, status: status})
        if (status.length === 0) {
            alert('please select a status')
            return 
        }
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({title: title, author: author, status: status})
        }).then(resp => resp.json())
        .then(book => {
            props.addBook(book)
            setTitle('')
            setAuthor('')
            setStatus('')
        })
    }

    return (
        <form onSubmit={submitHandler} className='new-book-form'>
            <input type='text' name='title' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title'/><br/>
            <input type='text' name='author' onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='Author'/><br/>
            <select name='status' id='status' onChange={(e) => setStatus(e.target.value)} value={status}>
                <option selected value={''}>-- Select Read Status --</option>
                <option value='read'>Read</option>
                <option value='reading'>Reading</option>
                <option value='to_read'>To Read</option>
            </select><br/>                
            <input type='submit'/>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: book => dispatch(addBook(book))
    }
}

// const mapDispatchToProps = {
//     addbook
// }

export default connect(null, mapDispatchToProps)(NewBookForm)
// export default connect(null, { addBook })(NewBookForm)