import React, { Component } from "react";

export default class Order extends Component {
    state = {
        cart: ["Muni", "Babu"],
    };

    saveInput = (e) => {
        this.setState({ input: e.target.value });
    };

    addNewItem = () => {
        let { cart, input } = this.state;
        cart.push(input);
        this.setState({ cart: cart });

    };
    removeItem = () => {
        let { cart, input } = this.state;
        cart.pop(input);
        this.setState({ cart: cart });

    };
    removeAll = () => {
        this.setState({
            cart: []
        })

    };

    render() {
        return (
            <div className="main2">
                <ol>
                    {this.state.cart.map((subItems, sIndex) => {
                        return <li key={sIndex + 1}> <h3>{subItems}</h3></li>
                    })}
                </ol>

                <input type="text" onChange={this.saveInput} />
                <button onClick={this.addNewItem}> Add Item </button>
                <button onClick={this.removeAll} > Remove all </button>
                <button onClick={this.removeItem}>removeItem</button>
            </div>
        );
    }
}