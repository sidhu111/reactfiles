//import logo from './logo.svg';
import './App.css';
//import Employee from './components/Employee';
import { Component } from 'react';
// import Button from './components/Button';
// import Categories from './components/Categories';
// import PersonsList from './components/PersonsList';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import CombineReducerDemo from './components/CombineReducerDemo';
 //import EmployeeList from './components/EmployeeList';
//import BookList from '../react-crud/components/BookList';
//import BookOp from './components/Books/BookOp';
//import Employee from './components/Employee'
//import BookList from './components/Books'
//import BookList from './components/Reactredux/BookList';
//import NameForm from './components/NameForm';
//import Clock from './components/samplecode/Clock';
//import Event from './components/samplecode/Event'
//import Book from './Uma/Uma/Book'
//import BookApp from './Uma/Uma/BookApp';
//import Books from './components/Books';
import Order from './components/Order'
//import contact from './component/Contact';

import Contact from './component/Contact';


//import Addcontact from './component/Addcontact';


//function App() {
  class App extends Component{

    // constructor(props)
    // {
    //   super(props);
    //   this.state={
    //     employee:{"id":'123',"name":"siddhu","department":'training'}
    //   }
    // }
    render()
    {
  return (
    // <Router>
    <div className="App">
      {/* { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      } */}
     <h1>HEllo world</h1> 
     <h6>I am </h6>
     {/* <div>
     <h1>Employee List</h1>
     <Employee employee={this.state.employee}/>
     </div> */}
      {/* { <Button/> }  */}
      {/* {<Categories/> } */}
     
     {/* <Link to='/about'>about</Link> */}
     

     {/* <Route path="/about" exact strict render={
       () =>{
         return(<h1>Welcome about </h1>);
       }
     }/>
    
    <Route path="/button" exact strict component={Button}/>
    
         </div>
         </Router> */}
        
         {/* <CombineReducerDemo/> */}
         {/* <EmployeeList/>
         <BookList/>
         <BookOp/> */}
         {/* <BookList/> */}
         {/* <NameForm/> */}
         {/* <Clock/> */}
        {/* <Event/> */}
             {/* <BookApp/> */}
             {/* <Books/> */}
             {/* <Order/> */}
             {/* <PersonsList/>  */}
             {/* <Userform/>
             <BookOp/> */}

             <Contact/>
             {/* <ToDolist/>
             <ToDoform/> */}
            
         </div>
  );
  
  }
  
  
}

export default App;
