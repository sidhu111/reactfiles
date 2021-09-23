//EditBook.js
import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { editBook } from '../bookactions';
 
const EditBook = (props) => (
   
    <div className='container__box'>
        <h1>{props.book}</h1>
        <BookForm
            book={props.book}
            onSubmitBook={(book) => {
                props.dispatch(editBook(props.book.id, book));
                props.history.push('/');
            }}
        />
    </div>
);
 
const mapStateToProps = (state, props) => {
    return {
        book: state.find((book) =>
            book.id === props.match.params.id)
    };
};
 
export default connect(mapStateToProps)(EditBook);