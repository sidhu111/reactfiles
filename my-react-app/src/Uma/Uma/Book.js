//Book.js
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from './bookactions';

 
const Book = ({ id, title, author, description, published, dispatch }) => (
    <div>
        <Link to={'/book/${id}'}>
        
        </Link>
        <p>Title:{title} </p>
        <p>Author:{author}</p>
        <p>Description: {description}</p>
        <p>Published: {published}</p>
        
        <button onClick={
            () => {
                dispatch(removeBook({id}))
            }
        }>Remove</button>
    </div>
);
 
export default connect()(Book);