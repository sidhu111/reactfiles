import  {React, Component } from "react";

class  contact1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: ["Muni", "Babu"]
        }
    }
    render(){
        return(
            <div>
                <ol>
                    {this.state.name.map((subItems, sIndex) => {
                        return <li key={sIndex + 1}> <h3>{subItems}</h3></li>
                    })}
                </ol>

           

            <input type="text" onChange={this.saveInput} />
                <button onClick={this.addNewItem}> Add Item </button>
                <button onClick={this.removeAll} > Remove all </button>
                <button onClick={this.removeItem}>removeItem</button>


               </div>

        )
    }

}
export default contact1;

