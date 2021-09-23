import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Addperson from './Addperson';

class PersonsList extends Component{
    constructor(props){
        super(props);
        this.state={
            persons:[{"firstname":"raju","lastname":"gowthu","address":"hyderabad"},
            {"firstname":"ravi","lastname":"gowthu","address":"bangelour"},
            {"firstname":"ravi","lastname":"gowthu","address":"bangelour"},
            {"firstname":"ravi","lastname":"gowthu","address":"bangelour"}]

        }
    }
    handleRemove=(index)=>{
        const current = this.state;
        let newstate = current.persons.filter((person,inde)=>{
            return inde !== index
        })
        //new state updated
        this.setState(state =>({persons: newstate}))

    }
     //method
    addPerson=(Person)=>{
        console.log("recived object",Person)
        let newstate=[...this.state.persons,Person]
        this.setState({persons:newstate})

    }
    handleedit=(index)=>{
        let per = this.state.persons.slice(index,index+1)
        console.log(per)
        this.setState({})
    }
    render(){
        return(
            <div >
                <h1>Person details</h1>
                <button>New Member</button>
                <table className="table">
                    <thead>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            this.state.persons.map((Person,inde)=>{
                                return <tr key={inde}>
                                    <td>{Person.firstname}</td>
                                    <td>{Person.lastname}</td>
                                    <td>{Person.address}</td>
                                    {/* <td>{Person.action}</td> */}
                                    <button onClick={()=>{this.handleedit(inde)}} className="btn btn-info">Edit</button>
                                    <button onClick={()=>{this.handleRemove(inde)}} className="btn btn-info">Remove</button>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

                <h1>Person registeration form</h1>

                <Addperson addPerson={this.addPerson}/>
            </div>

        )
    }
}

export default PersonsList