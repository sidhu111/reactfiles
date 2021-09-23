import React, { Component } from 'react';
import axios from 'axios'
import BookForm from './BookForm';


class BookOp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            message: "",
            book: {
                "id": 0,
                "title":"" ,
                "author": ""
            },
            updateFlag:false

        };
    }

    handleAddBook(book) {
if(this.state.updateFlag)
{
        axios.put('http://localhost:3001/books/' + book.id,book).then((res) => {
            console.log(res.status)
            res.status>=200&&res.status<300?this.setState({ message:'Book Updated Successfully ',updateFlag:false },()=>{this.getData()}):this.setState({ message:'Failed to Update',updateFlag:false })

        }).catch((err) => {
            console.log(err)
        }) 
    }
    else{
        axios.post('http://localhost:3001/books/',book).then((res) => {
            console.log(res.status)
            res.status>=200&&res.status<300?this.setState({ message:'Book Info Saved Successfully '},()=>{this.getData()}):this.setState({ message:'Failed to Save' })

        }).catch((err) => {
            console.log(err)
        }) 

    }
    }

    handleRemove(id) {
        axios.delete('http://localhost:3001/books/' + id).then((res) => {
            this.setState({ message:'deleted succesfully' },()=>this.getData())

        }).catch((err) => {
            console.log(err)
        })
        

    }

    handleEditbook(id) {
        axios.get('http://localhost:3001/books/'+id).then((res) => {
            let book=res.data
            this.setState({book,updateFlag:true})
           
    })


        
    }

    getData()
    {
        axios.get('http://localhost:3001/books/').then((res) => {
            console.log(res.data)
            let books = res.data
            this.setState({ books })
        }).catch((err) => {
            console.log(err)

        })
    }

    componentDidMount()
    {
               this.getData();
            }


    render() {

            
            return(
                <div>
                    <h4 style={{color:'red'}}>{this.state.message}</h4>

                    <table className="table table-striped table-hover">
                        <thead>

                            <th>id</th>
                            <th>title</th>
                            <th>author</th>
                            <th>actions</th>

                        </thead>
                        <tbody>
                            {this.state.books.map((book) => {


                                return (
                                    <tr  key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <button className="btn btn-primary" onClick={() => this.handleEditbook(book.id)} >edit</button>
                                        <button className="btn btn-danger" onClick={() => this.handleRemove(book.id)}>delete</button>
                                    </tr>


                                );

                            })}
                        </tbody>
                    </table>

                   {
                   !this.state.updateFlag ?
                        <div>
                            <h2>Insert Book Info</h2>
                            <BookForm book={this.state.book}  handleAddBook={this.handleAddBook.bind(this)} />
                        </div> :
                        <div>
                            <h2>Update Book Info</h2>
                            <BookForm book={this.state.book} handleAddBook={this.handleAddBook.bind(this)} />
                        </div> 
    }

                       

                </div >
            );
    }
}

export default BookOp;