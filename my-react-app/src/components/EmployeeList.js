import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';

class EmployeeList extends Component{

    constructor(props){
        super(props);
        this.state={
            employees:[
                {"firstname":"hari","lastname":"narayan","address":" São Paulo"},
                {"firstname":"Cristiano","lastname":"Ronaldo","address":"Madeira"},
                {"firstname":"Lionel","lastname":"Messi","address":"Rosario"},
                {"firstname":"dyabala","lastname":"venton","address":"Madeira"},
                ],
            employee:{},
            updateFlag:false
        }
    }

    handleDelete = (index)=>{
        const current = this.state;
        let newState = current.employees.filter((employee,ind)=>{
            return ind !== index;
        })
        this.setState({employees:newState});
    }

    handleAddEmployee = (employee)=>{
        console.log("Received",employee);
        let newState = [...this.state.employees,employee]
        this.setState({employees:newState})
    }

    handleUpdateEmployee = (employee)=>{
        console.log("Received",employee);
        let newState = [...this.state.employees,employee]
        this.setState({employees:newState,updateFlag:false})
    }

    handleEdit = (index)=>{
        let employee = this.state.employees.slice(index,index+1);
        console.log(employee[0]);
        let newState = this.state.employees.filter((stu,pindex)=>{
            return pindex !== index;
        })
        this.setState({employee:employee[0],employees:newState,updateFlag:true});  

    }

    render(){
        return(
            <div>
                <h1>Crud Operation</h1>
                <h1>Employee Details</h1>
                <table align="center" className="table table-blue">
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Action</th>
                        
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((employee,pindex)=>{
                                return(
                                    <tr key={pindex}>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.address}</td>
                                        <td><button className="btn btn-info" onClick={()=>{this.handleEdit(pindex)}}>Edit</button>
                                        <button className="btn btn-danger" onClick={()=>{this.handleDelete(pindex)}}>Delete</button></td>
                                        
                                    </tr>
                                    
                                )
                            }) 
                        }
                    </tbody>
                </table>
                {
                    this.state.updateFlag?
                    (<UpdateEmployee employee={this.state.employee} UpdateEmployee = {this.handleUpdateEmployee}/>):(<AddEmployee addEmployee={this.handleAddEmployee}/>)
                        
                }
                 
                
            </div>
        );
    }

}

export default EmployeeList;