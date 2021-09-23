import React from 'react'
const Employee=(props)=>{
    // let name="sudharshan"
    // let department="training"
    // let empid='456'
    
    return(<div>
        <h2>Employee {props.employee.name}</h2>
        <h2>Employee {props.employee.department}</h2>
        <p>{props.employee.id}</p>
    </div>)
}

export default Employee