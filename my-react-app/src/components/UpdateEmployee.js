import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateEmployee extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstname:this.props.employee.firstname,
            lastname:this.props.employee.lastname,
            address:this.props.employee.address
        }
    }

    handleOnChange = (event)=>{
        console.log(event.target);//input
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleOnSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);     
        this.props.UpdateEmployee(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                    First Name:<input type="text" value={this.state.firstname} name="firstname" onChange={this.handleOnChange}/>
                    Last Name:<input type="text" value={this.state.lastname} name="lastname" onChange={this.handleOnChange}/>
                    Address:<input type="text" value={this.state.address} name="address" onChange={this.handleOnChange}/>
                    <button className="btn btn-info">Update Employee</button>
                </form>
        );
    }
}

export default UpdateEmployee;