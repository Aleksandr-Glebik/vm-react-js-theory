import React, {Component} from "react";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Counter {this.state.counter}</h2>
                {/* <Counter2 clicked={this.props.clicked}/> */}
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({
                    counter: this.state.counter -  1
                })}>-</button>
            </div>
        )
    }
}