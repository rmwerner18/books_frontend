import React from 'react';
import { connect } from 'react-redux'
import { addBook } from '../actions/add_book'

class NewBookForm extends React.Component {
    state = {
        title: "",
        author: "",
        status: ""
    }

    changeHandler = (e) => {
        this.setState(() => (
            {[e.target.name]: e.target.value}
        ))
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addBook(this.state)
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(resp => resp.json())
        .then(book => {
            console.log("book", book)
            this.setState({
                title: "",
                author: "",
                status: ""
            })
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' name='title' onChange={this.changeHandler} value={this.state.title}/>
                <input type='text' name='author' onChange={this.changeHandler} value={this.state.author}/>
                <input type='text' name='status' onChange={this.changeHandler} value={this.state.status}/>
                <input type='submit'/>
            </form>
        )
    }
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