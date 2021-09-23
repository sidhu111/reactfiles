import React,{Component} from 'react';
import {BrowserRouter as Router, Route , Link , NavLink , Redirect , Prompt} from 'react-router-dom';

import'bootstrap/dist/css/bootstrap.min.css';

const Book1 = ({match}) =>{
    return(<div>
                <h1>Edit the book with id ={match.params.id}</h1>
                
    </div>)
}
const Book2 = ({match}) =>{
    return(<div>
                <h1>Edit the book with id ={match.params.id}</h1>
                
    </div>)
}
const Book3 = ({match}) =>{
    return(<div>
                <h1>Edit the book with id ={match.params.id}</h1>
                
    </div>)
}
const Dashboard = ({}) =>{
    return(<div>
                <h1>WelCome To Dashboard</h1>
                
    </div>)
}
const AddBook = () =>{
    return(<div>
                <h1>Please Add Book Here</h1>
                
    </div>)
}
const Help = () =>{
    return(<div>
                <h1>Help center</h1>
                
    </div>)
}
class Books extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            books:[{
                "Name":"Java" , "id":"1"
            },{
                "Name":"Angular" , "id":"2"
            },{
                "Name":"React" , "id":"3"
            }]
        }
    }
    render(){
        return( <Router><div>
        


            <h1>JAVA SAMPLE APPROACH</h1>

            <h2>BOOK MANAGEMENT SYSTEM</h2>
            
            <Link to ="/Dashboard">Dashboard</Link>|
            <Link to ="/AddBook">AddBook</Link>|
            <Link to ="/Help">Help</Link>|

            <Route path="/Dashboard" exact strict component={Dashboard}/>
            <Route path="/AddBook" exact strict component={AddBook}/>
            <Route path="/Help" exact strict component={Help}/>
            
                <table align='center' >
                    <h3>Book List</h3>
                    <tr>
                  <Link to ="/book1/1">. Book1</Link>
                  </tr>
                  <tr>
                  <Link to ="/book2/2">. Book2</Link>
                  </tr>
                  <tr>
                  <Link to ="/book3/3">. Book3</Link>
                  </tr>
                  </table>

            <Route path="/book1/:id" exact strict component={Book1}/>
            <Route path="/book2/:id" exact strict component={Book2}/>
            <Route path="/book3/:id" exact strict component={Book3}/>

            

            
            </div></Router>);
    }
}
export default Books;