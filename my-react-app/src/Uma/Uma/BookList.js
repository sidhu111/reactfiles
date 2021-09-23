import React, {Component} from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import { getBooks } from './bookactions';


 
class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

componentDidMount()
{
    this.props.dispatch(getBooks())
}



    render() {
        return (
            <div>
        Book List:
        <ul>
            {this.props.books.map(book => {
                return (
                    <li key={book.id}>
                        <Book {...book} />
                    </li>
                );
            })}
        </ul>
 
    </div>
        );
    }
}


 
const mapStateToProps = (state) => {
    return {
        books: state
    };
}
 
export default connect(mapStateToProps)(BookList);
