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
        console.log(this.state)
        if (this.state.status.length === 0) {
            alert('please select a status')
            return 
        }
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(resp => resp.json())
        .then(book => {
            this.props.addBook(book)
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
                <label>Title</label>
                <input type='text' name='title' onChange={this.changeHandler} value={this.state.title}/>
                <label>Author</label>
                <input type='text' name='author' onChange={this.changeHandler} value={this.state.author}/>
                <label>Read Status</label>
                <select name='status' id='status' onChange={this.changeHandler} >
                    <option selected> -- select an option -- </option>
                    <option value='read'>Read</option>
                    <option value='reading'>Reading</option>
                    <option value='to_read'>To Read</option>
                </select>                
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