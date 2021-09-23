import { Component } from "react";

class Addperson extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:null,
            lastname:null,
            address:null

        }
    }

    handleOnChange=(event)=>{
        console.log(event.target)
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})

    }

    handleOnSubmit=(event)=>{
          event.preventDefault()
          console.log(this.state)
          this.props.Addperson(this.state)

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                firstname:<input type="text" name="firstname" onChange={this.handleOnChange}/>
                lastname:<input type="text" name="lasttname" onChange={this.handleOnChange}/>
                  address:<input type="text" name="address" onChange={this.handleOnChange}/>
                    <button>save</button>
                </form>
            </div>

        )
    }
}
export default Addperson