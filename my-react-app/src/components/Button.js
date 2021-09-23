import  {React, Component } from "react";

class Button extends Component{

    constructor(props){
        super(props);
        this.state = {
            numbers:0
        }
    }

    handleAdd=()=>{
        this.setState({numbers:++this.state.numbers})
    }

    handleMINUS=()=>{
        this.setState({numbers:--this.state.numbers})
    }

    render(){
        return(
            <div>
{/*                
               {this.state.numbers>-10?
                (<h4>counter:{this.state.numbers}</h4>):(<h4>0</h4>)} */}
                
                <p>counter:{this.state.numbers}</p>

                <button onClick={this.handleAdd}>ADD</button>
                <button onClick={this.handleMINUS}>MINUS</button>
            </div>

        )
    }

}

export default Button;