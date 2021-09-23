import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { addBook } from './bookactions';

 
const AddBook = (props) => (
    <div>
        <h3>Add Book information:</h3>
        <BookForm
            onSubmitBook={(book) => {
                props.dispatch(addBook(book));
                props.history.push('/');
            }}
        />
    </div>
);
 
export default connect()(AddBook);