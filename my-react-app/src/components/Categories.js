import {React, Component } from "react";

class Categories extends Component{

    constructor(props){
        super(props);
        this.state={
           
           name:[('java')]
           

        }
    }

    addhandler(){

        this.setState({name:[...this.state.name,""]})
    }

    handleChange(e,index){
        this.state.name[index]= e.target.value

        //set the changed state
        this.setState({name:this.state.name})
    }


    handleRemove(index){
        this.state.name.splice(index,1)

        console.log(this.state.name);

        //update 
        this.setState({name:this.state.name})
    }
    removeAll = () => {
        this.setState({
            name: []
        })

    };
   
    handleclick(e){
        console.log(this.state.name)
    }


    render(){
        return(
            <div>
                 {/* <label>enter data</label> */}

                <h1>Java Sample Approach</h1>
                <p>{this.name}</p>
               {
                   this.state.name.map((course,index)=>{
                       return(
                        <div key={index}>
                            <input onChange={(e)=>this.handleChange(e,index)}
                            value={course}/>

                           <button  onClick={(e)=>this.handleRemove(e)}>Remove</button>  
                        </div>
                       )
                   })
               }
               <button onClick={(e)=>this.addhandler(e)}>ADD</button>
               <button onClick={(e)=>this.removeAll(e)}>RemoveAll</button>
              
               <button onClick={(e)=>this.handleclick(e)}>Submit</button>
              
                
            </div>
            
        )
    }

}
export default Categories