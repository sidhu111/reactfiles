import  {React, Component } from "react";

class Event extends Component{

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    

    render(){
        return(
            <div>
                <form>
                    <button type="submit" onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
                </form>
            </div>
        )
    }
}
export default Event