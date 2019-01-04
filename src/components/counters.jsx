import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.props.onDelete(counter)}
            onIncrement={() => this.props.onIncrement(counter, 1)}
            onDecrement={() => this.props.onDecrement(counter, -1)}
          >
            <h4>Counter #{counter.id}</h4>
            <p>This is for {counter.purpose}</p>
          </Counter>
        ))}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onReset()}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
