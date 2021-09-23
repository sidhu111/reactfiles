import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddEmployee extends Component{

    constructor(props){
        super(props);
        this.state={
          firstname:null,
          lastname:null,
          address:null,
            
        };
    }

    handleOnChange = (event)=>{
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleOnSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);     
        this.props.addEmployee(this.state);   
        event.target.reset();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    FirstName :<input type="text" name="firstname" onChange={this.handleOnChange}/>
                    Last Name:<input type="text" name="lastname" onChange={this.handleOnChange}/>
                    Address:<input type="text" name="address" onChange={this.handleOnChange}/>
                    <button className="btn btn-info">Add Employee</button>
                </form>
            </div>
        )
    }
}

export default AddEmployee;