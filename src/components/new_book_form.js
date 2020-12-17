import React from 'react';

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

export default NewBookForm