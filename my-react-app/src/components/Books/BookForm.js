import React, { Component } from 'react';

class BookForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

            "id": 0,
            "title": " ",
            "author": ""
        };
        
    }

componentWillReceiveProps(nextProps) {
    if(this.state.id!==nextProps.book.id)
    {
    this.setState({
    "id": nextProps.book.id,
    "title": nextProps.book.title,
    "author": nextProps.book.author
   });
    }
}  

componentDidMount()
{
    console.log("This Component Mounted")
}

    handleOnchange(event) {
        console.log(event.target.name+":"+event.target.value)
        console.log("The Value Changed")
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.handleAddBook(this.state);
    }
    render() {
     
        return (
            <div>
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <div>
                       <strong> Id:</strong> <input type="text"  name="id" value={this.state.id} onChange={(event) => this.handleOnchange(event)} />
                    </div>
                    <div>
                    <strong>  Title: </strong><input type="text" name="title" value={this.state.title} onChange={(event) => this.handleOnchange(event)} />
                    </div>
                    <div>
                    <strong>   Author: </strong><input type="text" name="author" value={this.state.author} onChange={(event) => this.handleOnchange(event)} />
                    </div>
                    <input type="submit" className="btn btn-success" value="save"/>
                </form>
            </div>
        );
    }
}

export default BookForm;