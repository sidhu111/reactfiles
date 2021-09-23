import axios from './bookaxios'; 


const _addBook = (book) => ({
    type: 'ADD_BOOK',
    book
});
 
export const addBook = (bookData = {
    title: '',
    author: '',
    description: '',
    published: ''
}) => {
    return (dispatch) => {
        const book = {
            title: bookData.title,
            author: bookData.author,
            description: bookData.description,
            published : bookData.published
        };
 
        return axios.post('books/create', book).then(result => {
            dispatch(_addBook(result.data));
        });
    };
};
 
const _removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});
 
export const removeBook = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`books/${id}`).then(() => {
            dispatch(_removeBook({ id }));
        })
    }
};
 
const _editBook = (id, updates) => ({
    type: 'EDIT_BOOK',
    id,
    updates
});
 
export const editBook = (id, updates) => {
    return (dispatch) => {
        return axios.put(`books/${id}`, updates).then(() => {
            dispatch(_editBook(id, updates));
        });
    }
};
 
const _getBooks = (books) => ({
    type: 'GET_BOOK',
    books
});
 
export const getBooks = () => {
    console.log("calling action")
    return (dispatch) => {
        return axios.get('books').then(result => {
            console.log(result);
            const books = [];
 
            result.data.forEach(item => {
                books.push(item);
               
            });
 
            dispatch(_getBooks(books));
        });
    };
};