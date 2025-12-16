import React, { Component } from "react";
import Update from "./Higherorder";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        const { count } = this.state;
        return (
            <div>
                <button onMouseEnter={this.increment}>{this.props.name}incremented to {count}</button>
            </div>
        )
    }
}

export default Update(Counter);