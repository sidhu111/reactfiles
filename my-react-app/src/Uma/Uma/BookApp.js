 import React from 'react';
 import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { addBook, editBook } from './bookactions';
import Dashboard from './Dashboard';
import Header from './Header';
import AddBook from './AddBook';

 
 const NotFound = () => {
   return (
     <>
     <h1>Sorry...Page Not found</h1>
     </>
   );
 }
 
 
 
 function BookApp() {
   return (
     <BrowserRouter>
     <div className='container'>
         <Header/>
         <Switch>
             <Route path="/" component={Dashboard} exact={true} />
             <Route path="/add" component={AddBook} />
             <Route path="/book/:id" component={editBook} />
             <Route component={NotFound} />
         </Switch>
     </div>
 </BrowserRouter>
   );
 }
 
 export default BookApp;
 